---
title: Maven plugins
date: 2023-06-21
tags: [模板]
---
# Maven plugins
## maven-antrun-plugin
```xml pom.xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-antrun-plugin</artifactId>
    <executions>
        <execution>
            <id>unpack-flink-distribution</id>
            <phase>package</phase>
            <goals>
                <goal>run</goal>
            </goals>
            <configuration>
                <target>
                    <ant antfile="src/antrun/build.xml"/>
                </target>
            </configuration>
        </execution>
    </executions>
</plugin>
```

```xml build.xml
<?xml version="1.0" encoding="UTF-8"?>

<project default="unpackFlinkDistribution">

    <!--
    CentOS上的tar是GNU-tar，而mac上的tar是BSD-tar，所以是有区别的。
    为来统一使用GNU-tar，这里给mac安装GNU-tar来解决这个问题，通过homebrew：brew install gnu-tar
    -->
    <condition property="TAR_COMMAND" value="gtar" else="tar">
        <!-- 判断是mac则使用gtar，否则都使用tar -->
        <os family="mac"/>
    </condition>

    <target name="unpackFlinkDistribution" description="解压flink官方发行包">
        <!-- 检查命令 -->
        <exec executable="${TAR_COMMAND}" failonerror="true">
            <arg value="--version"/>
        </exec>

        <!-- 
            目前untar、unzip等任务在解压后无法保留文件原始权限，见https://ant.apache.org/manual/Tasks/unzip.html中说明。
            所以只能寻找替代方案，比如https://stackoverflow.com/questions/2365603/preserve-file-permissions-when-unzipping-and-the-zipping-files-using-ant
        -->
        <!-- Use command line tar to keep file permissions -->
        <exec executable="${TAR_COMMAND}" failonerror="true">
            <arg value="-xzf"/>
            <arg value="src/main/resources/flink-${flink.version}-bin-scala_${scala.binary.version}.tgz"/>
            <arg value="-C"/>
            <arg value="${project.build.directory}/flink-etl-${project.version}-bin/flink-etl-${project.version}"/>
            <arg value="--skip-old-files"/>
        </exec>
    </target>

</project>
```
