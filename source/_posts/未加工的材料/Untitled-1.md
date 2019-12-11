# jpa基于接口的投影（interface projection）



## jpa1

1 投影方法个数 <= 结果集个数
2 按顺序进行投影，在个数的前提下每个接口方法都能取到值不会空，只有当类型不符时报错
3 顺序投影的前提下，原生SQL可以不起别名

## jpa2

1 没有限制
2 按列名，结果集中找不到就是null
3 因为是按名称投影需要起别名

public interface PersonProjection()