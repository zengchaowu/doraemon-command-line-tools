---
title: 基础
---

## 语言特点

> 1. 只有对象能够保存在变量中（字符串、数字、函数、null）。
> 2. 所有对象都有一个对应的类，继承自Object。
> 3. 强类型语言，并且有类型自动推断。
> 4. 动态类型使用dynamic。
> 5. 支持泛型。
> 6. 支持局部函数/嵌套函数。
> 7. 没有权限修饰符，_代表私有。

## 变量

### var

使用var定义变量，并且拥有类型自动推断。

```dart
var name = 'Alex'; // 类型自动推断为String类，存储对象引用。
int year = 1977; // 也可以指明类型，此时引用一个int对象。
daynamic any = name; any = year; // 使用动态类型
var antennaDiameter = 3.7;
var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
var image = {
  'tags': ['saturn'],
  'url': '//path/to/saturn.jpg'
};
```

### const

```shell
npx @docusaurus/init@latest init my-website classic
```

## 数字类型

### 整数

```c
bool _bool = true;
char _char = 'c';
wchar_t
char16_t
char32_t
short
int
long
long long
float
double
long double
```

## 字符串

Congratulations! You've successfully run and modified your Docusaurus project.
