---
layout:     post
title:      "[TypeScript] 기본 타입"

date:       2017-10-29 11:40:00
author:     "신희준"
header-img: "img/background.jpg"
comments: true
---

<head>
 <meta property="og:type" content="website">
 <meta property="og:title" content="TypeScript 기본 타입">
 <meta property="og:description" content="TypeScript 기본 타입">
 <meta property="og:url" content="http://shj7242.github.io/2017/10/29/TypeScript2/">

 <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="TypeScript 기본 타입">
  <meta name="twitter:description" content="TypeScript 기본 타입">
  <meta name="FACEBOOK:domain" content="http://shj7242.github.io/2017/10/29/TypeScript2/">
  <meta name="facebook:card" content="summary">
   <meta name="facebook:title" content="TypeScript 기본 타입">
   <meta name="facebook:description" content="TypeScript 기본 타입">
   <meta name="facebook:domain" content="http://shj7242.github.io/2017/10/29/TypeScript2/">


 </head>

<br>
<H4 style ="font-weight:bold; color:black;"> 타입스크립트 코리아 이웅재님의 강의 참조</H4>
<br>
<H4 style ="font-weight:bold; color : black">2017 - 10 - 29 (일)</H4>
<li>기본타입</li>

<br>

>기본타입

<p style="font-size:14px;">
타입스크립트 기본 타입
<br><br>
-사용자가 만든 타입은 결국 기본자료형들로 쪼개진다.
<br>
ECMAScript 표준 기본 자료형
<br><br>
- boolean
<br>
- Number
<br>
- String
<br>
- Null
<br>
- Undefined
<br>
- Symbol(ECMAScript 6에 추가)
<br>
- Array :object 형
<br><br>
프로그래밍을 도울 몇가지 타입이 더 제공된다
<br>
- any
<br>
- void
<br>
- never
<br>
- enum
<br>
- tuple : object형
<br><br>
primitive type
<br><br>
- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형이다.
<br>
- 프리미티브 형의 내장함수를 사용 가능한것은 자바스크립트 처리 방식이기 때문
<br><br>
literal
<br><br>
값 자체가 변하지 않는 값을 의미한다.
<br>
상수라는 개념이 조금 다르다.
<br><br>
boolean/Boolean
<br><br>
- 소문자 boolean 은 프리미티브 형
<br>
- 대문자 Boolean 은 래퍼형
<br>
- primitive 타입의 boolean 을 쓰는 것을 권장한다.
<br><br>
Number/number
<br><br>
-primitive 타입의 number를 쓰는 것을 권장한다.
<br>
자바스크립트의 number와 같다
<br><br>
Undefined / null
<br><br>
undefined 와 null은 각각 고유 타입을 가진다./
<br>
void 와 마찬가지로 null 은 그자체로가 값이다.
<br>
null 과 undefined 를 number에 할당할 수 있다.
<br>
null과 undefined 는 void 나 자기 자신들에게만 할당할 수 있다.
<br>
undefined - 무언가 준비가 안된상태
<br>
null - 무언가 준비가 덜된상태
<br><br>
VOID
<br><br>
타입이 없는 상태
<br>
any와 반대의미를 가진다.
<br>
void 는 소문자로 쓴다
<br><br>
Any
<br><br>
- 어떤 타입이어도 상관없는 타입이다.
<br>
- 이걸 최대한 쓰지 않는게 타입스크립트의 핵심이다.
<br><br>
Array
<br><br>
원래 자바스크립트에서 사용하는 객체이다
<br>
사용법
<br>
- Array<타입>
<br>
-   타입[]
<br><br>
 Tuple
<br><br>
배열인데 타입이 한가지가 아닌경우.
<br>
마찬가지로 객체이다.
<br>
꺼내 사용할 때 주의가 필요하다.
<br>
(tuple 배열에 String 값과 Number값을 같이 넣을 수가 있다.)
<br><br>
Symbol
<br><br>
ex6의 Symbol과 완전히 동일하다
<br>
primitive 타입의 값을 담아서 사용한다.
<br>
고유하고 수정불가능한 값으로 만들어준다.
<br>
주로 접근을 제어하는데 쓰는 경우가 많다.
</p>
