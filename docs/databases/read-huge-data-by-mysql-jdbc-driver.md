---
title: mysql读数据内存溢出
date: 2022-06-27
tags: [mysql]
---
# mysql读数据内存溢出
## 问题

最近需要用原生JDBC方式连接mysql数据库读取表里的所有数据，但是遇到了部分大表，数据量在百万级，经常造成内存溢出。

``` java
ResultSet resultSet = stat.executeQuery("select * from test");
```

这一行一直报错`java.sql.SQLException:Java heap space`。

## 解决

- mysql官方文档

官方文档对 [ResultSet](https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-implementation-notes.html) 的解释说明，介绍了对 ResultSet 的流式处理方式，即一行一行读取。另外值得注意的是，还介绍了通过在jdbcurl设置`useCursorFetch=true`，可以指定每次读取数据的行数。

- mysql 驱动[源码](https://github.com/mysql/mysql-connector-j)

源码里也可以找到相关的内容。

``` java
package com.mysql.cj.jdbc;

public class StatementImpl implements JdbcStatement {
    ...

    /**
     * We only stream result sets when they are forward-only, read-only, and the
     * fetch size has been set to Integer.MIN_VALUE
     * 
     * @return true if this result set should be streamed row at-a-time, rather
     *         than read all at once.
     */
    protected boolean createStreamingResultSet() {
        return ((this.query.getResultType() == Type.FORWARD_ONLY) && (this.resultSetConcurrency == java.sql.ResultSet.CONCUR_READ_ONLY)
                && (this.query.getResultFetchSize() == Integer.MIN_VALUE));
    }

    ...
}
```

``` java
package com.mysql.cj.protocol.a.result;

/**
 * Provides streaming of Resultset rows. Each next row is consumed from the
 * input stream only on {@link #next()} call. Consumed rows are not cached thus
 * we only stream result sets when they are forward-only, read-only, and the
 * fetch size has been set to Integer.MIN_VALUE (rows are read one by one).
 * 
 * @param <T>
 *            ProtocolEntity type
 */
public class ResultsetRowsStreaming<T extends ProtocolEntity> extends AbstractResultsetRows implements ResultsetRows {
    ...
}
```

``` java
package com.mysql.cj.protocol.a.result;

public class ResultsetRowsCursor extends AbstractResultsetRows implements ResultsetRows {
    ...

    private void fetchMoreRows() {
        if (this.lastRowFetched) {
            this.fetchedRows = new ArrayList<>(0);
            return;
        }

        synchronized (this.owner.getSyncMutex()) {
            try {
                boolean oldFirstFetchCompleted = this.firstFetchCompleted;

                if (!this.firstFetchCompleted) {
                    this.firstFetchCompleted = true;
                }

                int numRowsToFetch = this.owner.getOwnerFetchSize();

                if (numRowsToFetch == 0) {
                    numRowsToFetch = this.owner.getOwningStatementFetchSize();
                }

                if (numRowsToFetch == Integer.MIN_VALUE) {
                    // Handle the case where the user used 'old' streaming result sets

                    numRowsToFetch = 1;
                }

                if (this.fetchedRows == null) {
                    this.fetchedRows = new ArrayList<>(numRowsToFetch);
                } else {
                    this.fetchedRows.clear();
                }

                // TODO this is not the right place for this code, should be in protocol
                this.protocol.sendCommand(
                        this.commandBuilder.buildComStmtFetch(this.protocol.getSharedSendPacket(), this.owner.getOwningStatementServerId(), numRowsToFetch),
                        true, 0);

                Row row = null;

                while ((row = this.protocol.read(ResultsetRow.class, this.rowFactory)) != null) {
                    this.fetchedRows.add(row);
                }

                this.currentPositionInFetchedRows = BEFORE_START_OF_ROWS;

                if (this.protocol.getServerSession().isLastRowSent()) {
                    this.lastRowFetched = true;

                    if (!oldFirstFetchCompleted && this.fetchedRows.size() == 0) {
                        this.wasEmpty = true;
                    }
                }
            } catch (Exception ex) {
                throw ExceptionFactory.createException(ex.getMessage(), ex);
            }
        }
    }

    ...
}
```
