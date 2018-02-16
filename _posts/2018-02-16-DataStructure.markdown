---
layout:     post
title:      "[자료구조] 자료구조 입문"

date:       2018-02-16 12:55:00
author:     "신희준"
header-img: "img/background.jpg"
comments: true
---

<head>
 <meta property="og:type" content="자료구조 입문">
 <meta property="og:title" content="자료구조 입문">
 <meta property="og:description" content="자료구조 입문">
 <meta property="og:url" content="http://shj7242.github.io/2018/02/16/DataStructure/">

 <meta name="twitter:card" content="자료구조 입문">
  <meta name="twitter:title" content="자료구조 입문">
  <meta name="twitter:description" content="자료구조 입문">
  <meta name="FACEBOOK:domain" content="http://shj7242.github.io/2018/02/16/DataStructure/">
  <meta name="facebook:card" content="자료구조 입문">
   <meta name="facebook:title" content="자료구조 입문">
   <meta name="facebook:description" content="자료구조 입문">
   <meta name="facebook:domain" content="http://shj7242.github.io/2018/02/16/DataStructure/">


 </head>

<br>
<H4 style ="font-weight:bold; color:black;"> </H4>

<H4 style ="font-weight:bold; color : black">2018 - 02 - 16 (금)</H4>
<br>
참고자료 : 다양한 예제로 학습하는 데이터 구조와 알고리즘 for Java [나라심하 카루만치 지음 | 전계도*전형일 옮김]
<br>

> 자료구조 입문

<br>

오늘 자료구조책 한권을 구입하였다. 보통 자료구조는 C언어로 된 책이 많았지만 나는 자바로 학습할 수 있는 자료구조 책을 구매했다.

<img src="{{ site.baseurl }}/img/dsJava.jpg" alt="Post Sample Image">

오늘부터 이 책을 참고해서 자료구조를 공부할 예정이다. 뭔가 책을 처음펼칠 때 느낌이 아주 좋았다. 무사히 책을 완독하여 탄탄한 기본기를 만들고자 한다.

* 1-1 변수

* 1-2 데이터형
  * 시스템 정의 데이터형 : int, float, char, double, boolean 등이 있으며 각각의 원시 데이터형에 할당된 비트 수는 프로그래밍 언어, 컴파일러, 운영체제에 따라 다르다.
  * 사용자 정의 데이터형 : java의 클래스가 대표적인 예이다. (컴퓨터 메모리를 보다 유연하고 편하게 사용할 수 있다.)
* 1-3 데이터 구조 : 항목을 정리하는 방법에 따라 데이터구조는 두가지로 나누어짐.
  * 선형 데이터 구조 : 항목들이 순차적으로 엑세스 되어지지만 순서대로 저장해야하는 것은 아님 [linkedList , stack , queue]
  * 비선형 데이터 구조 : 항목들이 비선형의 차례로 저장되고 엑세스 되어짐 [tree, graph]
* 1-4 추상 데이터형 : ADT(Abstract Data Type) 이라고도 하며 링크드리스트, 스택, 큐,
