---
layout:     post
title:      "자바문자열 String, StringBuilder, StringBuffer"

date:       2023-01-09 19:55:00
author:     "신희준"
header-img: "img/background.jpg"
comments: true
---

<head>
 <meta property="og:type" content="자바문자열">
 <meta property="og:title" content="자바문자열">
 <meta property="og:description" content="자바문자열">
 <meta property="og:url" content="http://shj7242.github.io/2023/01/09/javaString/">

 <meta name="twitter:card" content="자바문자열">
  <meta name="twitter:title" content="자바문자열">
  <meta name="twitter:description" content="자바문자열">
  <meta name="FACEBOOK:domain" content="http://shj7242.github.io/2023/01/09/javaString/">
  <meta name="facebook:card" content="자바문자열">
   <meta name="facebook:title" content="자바문자열">
   <meta name="facebook:description" content="자바문자열">
   <meta name="facebook:domain" content="http://shj7242.github.io/2023/01/09/javaString/">


 </head>

<br>
<H4 style ="font-weight:bold; color:black;"> </H4>

<H4 style ="font-weight:bold; color : black">2023 - 01 - 09 (월)</H4>
<br>

>> 자바 문자열 종류 (String, StringBuilder, StringBuffer)


* String

> 먼저 String 이라는 객체는 immutable(생성 후 변경 불가능) 이라는 속성을 지닌다.
> immutable은 set 메소드가 없고 변수의 값을 변경할 수 없다.  
> String a = "hello world" 에서 a가 참조 하는 heap 영역의 값을 바꿀 수 없다.
> a = "hello world!" 로 변수에 값을 재 할당 하는 것은 a 가 참조 하는 heap 영역의 객체를 바꾸는 것이며 값을 바꾸는 것은 아님.

~~~
String a = "Hello world"
a += "!"

위와 같은 경우 처음 a 변수가 참조하는 heap 영역을 생성하고 a 에 += "!" 을 추가했을 때 a가 참조하는 새로운 heap 영역을 만든다.
기존의 "Hello world"의 값을 저장한 a가 참조하는 heap 영역은 가비지콜렉터 대상이된다.

문자열을 자주 변경하는 경우 계속 가비지가 생성되고 힙메모리 부족으로 성능에 문제가 생길 가능성이 있다. 
~~~

* String Builder , String Buffer

>StringBuilder, StringBuffer
>위 두개의 클래스는 기본적으로 가변성(mutable)을 갖는 클래스이다.
>즉 변수에 선언된 값이 변경이 될 경우 기존 선언된 변수가 참조 하는 heap 영역의 값을 바꾸어 사용한다.
>값의 변경이 자주 일어 나는 경우 해당 두개의 문자열을 사용하는것이 효율적이다.


~~~
StringBuilder a = new StringBuilder("Hello World");
a.append("!");
StringBuffer b = new String Buffer("Hello World");
b.append("!");

위 두개의 차이점은 동기화의 유무로써 StringBuffer의 경우 멀티스레딩환경에서 Thread-safe하다.
반면 StringBuilder는 동기화를 고려하지않는다. 멀티스레딩환경이 아니라면 StringBuilder의 성능이 더 좋다.

~~~

정리

String : 문자열 연산이 적고 멀티스레드 환경일 경우
StringBuffer : 문자열 연산이 많고 멀티스레드 환경일 경우
StringBuilder : 문자열 연산이 많고 단일쓰레드이거나 동기화를 고려하지 않아도 되는 경우
위의 사항을 고려하여 적절하게 사용하면 좋다.
