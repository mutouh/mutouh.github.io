---
title: 写代码的小细节
date: 2019-09-19
tags: [Java]
categories: [杂项]
---
# 写代码的小细节

原文地址:
[*阿里大佬教你，如何写好 Java 代码！*](https://mp.weixin.qq.com/s/Ur_kPnD4QmBsfivcAVrbzw)

阅读文章后记录自身值得注意的地方。

* 应该使用Collection.isEmpty()检测空

使用 Collection.size() 来检测空逻辑上没有问题，但是使用 Collection.isEmpty()使得代码更易读，并且可以获得更好的性能。任何 Collection.isEmpty() 实现的时间复杂度都是 O(1) ，但是某些 Collection.size() 实现的时间复杂度可能是 O(n) 。

<!-- more -->

反例：

``` Java
if (collection.size() == 0) {
    ...
}
```

正例：

``` Java
if (collection.isEmpty()) {
    ...
}
```

如果需要还需要检测 null ，可采用CollectionUtils.isEmpty(collection)和CollectionUtils.isNotEmpty(collection)。

***

* 字符串拼接使用 StringBuilder 

一般的字符串拼接在编译期 java 会进行优化，但是在循环中字符串拼接， java 编译期无法做到优化，所以需要使用 StringBuilder 进行替换。

反例：

``` Java
String s = "";
for (int i = 0; i < 10; i++) {
    s += i;
}
```

正例：

``` Java
String a = "a";
String b = "b";
String c = "c";
String s = a + b + c; // 没问题，java编译器会进行优化
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 10; i++) {
    sb.append(i);  // 循环中，java编译器无法进行优化，所以要手动使用StringBuilder
}
```

***

* 频繁调用 Collection.contains 方法请使用 Set

在 java 集合类库中，List 的 contains 方法普遍时间复杂度是 O(n) ，如果在代码中需要频繁调用 contains 方法查找数据，可以先将 list 转换成 HashSet 实现，将 O(n) 的时间复杂度降为 O(1) 。

反例：

``` Java
ArrayList<Integer> list = otherService.getList();
for (int i = 0; i <= Integer.MAX_VALUE; i++) {
    // 时间复杂度O(n)
    list.contains(i);
}
```

正例：

``` Java
ArrayList<Integer> list = otherService.getList();
Set<Integer> set = new HashSet(list);
for (int i = 0; i <= Integer.MAX_VALUE; i++) {
    // 时间复杂度O(1)
    set.contains(i);
}
```

***

* 不要使用集合实现来赋值静态成员变量

对于集合类型的静态成员变量，不要使用集合实现来赋值，应该使用静态代码块赋值。

反例：

``` Java
private static Map<String, Integer> map = new HashMap<String, Integer>() {
    {
        put("a", 1);
        put("b", 2);
    }
};

private static List<String> list = new ArrayList<String>() {
    {
        add("a");
        add("b");
    }
};
```

正例：

``` Java
private static Map<String, Integer> map = new HashMap<>();
static {
    map.put("a", 1);
    map.put("b", 2);
};

private static List<String> list = new ArrayList<>();
static {
    list.add("a");
    list.add("b");
};
```

***

 * 工具类应该屏蔽构造函数


工具类是一堆静态字段和函数的集合，不应该被实例化。但是，Java 为每个没有明确定义构造函数的类添加了一个隐式公有构造函数。所以，为了避免 java "小白"使用有误，应该显式定义私有构造函数来屏蔽这个隐式公有构造函数。

反例：

``` Java
public class MathUtils {
    public static final double PI = 3.1415926D;
    public static int sum(int a, int b) {
        return a + b;
    }
}
```

正例：

``` Java
public class MathUtils {
    public static final double PI = 3.1415926D;
    private MathUtils() {}
    public static int sum(int a, int b) {
        return a + b;
    }
}
```

***

* 禁止使用构造方法 BigDecimal(double)

BigDecimal(double) 存在精度损失风险，在精确计算或值比较的场景中可能会导致业务逻辑异常。

反例：

``` Java
BigDecimal value = new BigDecimal(0.1D); // 0.100000000000000005551115...
```


正例：

``` Java
BigDecimal value = BigDecimal.valueOf(0.1D);; // 0.1
```

***

* 返回空数组和空集合而不是 null


返回 null ，需要调用方强制检测 null ，否则就会抛出空指针异常。返回空数组或空集合，有效地避免了调用方因为未检测 null 而抛出空指针异常，还可以删除调用方检测 null 的语句使代码更简洁。

反例：

``` Java
public static Result[] getResults() {
    return null;
}

public static List<Result> getResultList() {
    return null;
}

public static Map<String, Result> getResultMap() {
    return null;
}

public static void main(String[] args) {
    Result[] results = getResults();
    if (results != null) {
        for (Result result : results) {
            ...
        }
    }

    List<Result> resultList = getResultList();
    if (resultList != null) {
        for (Result result : resultList) {
            ...
        }
    }

    Map<String, Result> resultMap = getResultMap();
    if (resultMap != null) {
        for (Map.Entry<String, Result> resultEntry : resultMap) {
            ...
        }
    }
}
```

正例：

``` Java
public static Result[] getResults() {
    return new Result[0];
}

public static List<Result> getResultList() {
    return Collections.emptyList();
}

public static Map<String, Result> getResultMap() {
    return Collections.emptyMap();
}

public static void main(String[] args) {
    Result[] results = getResults();
    for (Result result : results) {
        ...
    }

    List<Result> resultList = getResultList();
    for (Result result : resultList) {
        ...
    }

    Map<String, Result> resultMap = getResultMap();
    for (Map.Entry<String, Result> resultEntry : resultMap) {
        ...
    }
}
```