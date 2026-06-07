---
title: String 字符串
date: 2023-02-15
tags: [Java]
---
# String 字符串
## string长度限制
- 编译限制
从Java源码可以找到
```java
private void checkStringConstant(DiagnosticPosition var1, Object var2) { if (this.nerrs == 0 && var2 != null && var2 instanceof String && ((String)var2).length() >= 65535) { this.log.error(var1, "limit.string", new Object[0]); ++this.nerrs; } }
```
- 运行限制
主要体现在构造函数上
```java
public String(char value[], int offset, int count) {
    ...
}
```
count就是长度限制，而int的最大值是2^31-1，所以理论上string的长度也是2^31-1。
```
(2^31-1)*16/8/1024/1024/1024 ≈ 4GB
```
但由于一个最大字符串约会占用4GB空间所以同时还受jvm内存限制。
## 一个字符的String.lenght()一定是1吗
不一定是。也可能是2。lenght()源码
```java
/**  
 * Returns the length of this string.
 * The length is equal to the number of <a href="Character.html#unicode">Unicode  
 * code units</a> in the string.  
 *
 * @return  the length of the sequence of characters represented by this  
 *          object.
 */
 public int length() {
    return value.length;
}
```

根据length等于Unicode编码单元的数量。

明确以下概念：
- 内码外码：Java中字符编码简单分内码和外码，char和string在内存中使用的编码方式称内码，除了内码都是外码。 Java中内码是UTF-16编码
- 编码单元：编码转换中的最小单位，对于UTF-16来说16位一个编码单元，即两个字节。

Java字符串使用UTF-16编码，所以一个字符可以是一个编码单元或两个编码单元，对应的就是两个字节或4个字节。两个字节16位可以存储U+0000-U+FFFF范围内字符，所以超过U+FFFF后使用四个字节存储。

验证代码
```java
// 特殊字符  
String B = "😊";  
for (char c: B.toCharArray()) {  
    System.out.printf("0x%04x\n", (int) c);  
}  
System.out.println("编码单元数：" + B.length());  
System.out.println("字符长度：" + B.codePointCount(0, B.length()));
```
