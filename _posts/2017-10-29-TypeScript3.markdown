---
layout:     post
title:      "[TypeScript] var/const/let"

date:       2017-10-29 11:50:00
author:     "신희준"
header-img: "img/background.jpg"
comments: true
---

<head>
 <meta property="og:type" content="website">
 <meta property="og:title" content="TypeScript 변수선언 ( var , const , let )">
 <meta property="og:description" content="TypeScript 변수선언 ( var , const , let )">
 <meta property="og:url" content="http://shj7242.github.io/2017/10/30/TypeScript3/">

 <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="TypeScript 변수선언 ( var , const , let )">
  <meta name="twitter:description" content="TypeScript 변수선언 ( var , const , let )">
  <meta name="FACEBOOK:domain" content="http://shj7242.github.io/2017/10/30/TypeScript3/">
  <meta name="facebook:card" content="summary">
   <meta name="facebook:title" content="TypeScript 변수선언 ( var , const , let )">
   <meta name="facebook:description" content="TypeScript 변수선언 ( var , const , let )">
   <meta name="facebook:domain" content="http://shj7242.github.io/2017/10/30/TypeScript3/">


 </head>

<br>
<H4 style ="font-weight:bold; color:black;"> 타입스크립트 코리아 이웅재님의 강의 참조</H4>
<br>
<H4 style ="font-weight:bold; color : black">2017 - 10 - 29 (일)</H4>
<li>var/const/let</li>

<br>

>var/const/let

<p style="font-size:14px;">
<b style="font-color:red">var</b>
<br><br>
ES5
<br>
변수의 유효범위 : 함수 스코프
<br>
호이스팅 ( 변수를 후에 선언할 수 있음.)
<br>
console.log(hoisted_var);
<br>
var hoisted_var = ' 변수를를 아래에에 선언'
<br>
재선언 가능
<br><br><br>
<b style="font-color:red">let, const</b>
EX6
<br>
변수의 유효범위 : 블록 스코프(친숙)
<br>
호이스팅 x
<br>
재선언 불가
<br><br>
(var보다 코드읽기가 편하다 . 기존에 쓰던 다른 언어의 변수선언 방식과 유사)
</p>


~~~typescript
let a: string = '에이';
//명시적으로 지정된 타입인 String
let b = "비이";
// 타입추론에 의한 타입이 string
const a: string = '에이';
// 명시적으로 string 타입으로 지정
const b = "비이";
// 타입추론에 의한 리터럴 타입 "비이"
let / const 타입추론
~~~

<p style="font-size:14px">
<a href="https://www.typescriptlang.org/play/index.html">typescript/playground</a>
를 활용하여 typescript 코드가 js 코드로 컴파일되는걸 곧장 보여준다.
<br><br>
Type assertions
<br><br>
형변환과는 조금 다르다 (형변환은 실제 데이터 구조를 바꿔준다.)
<br>
타입이 이것이다 라고 컴파일러에게 알려주는 것을 의미한다. - 컴파일러를 속이는 느낌이다./
<br>
문법적으로는 두가지 방법이 있다.
<br><br>
</p>

~~~typescript
1 . 변수 as 강제할 타입이름
2 . <강제할 타입이름>변수
~~~

<p style="font-size:14px;">
<br><br>
Type Alias (타입 별칭)
<br><br>
유니온 타입
<br><br>
---아래는 타입별칭의 예제이다.---
</p>



~~~typescript
let a: any;
let b: string | number;
b = '1';
b = 2;

type StringOrNumber = string | number;
let b : StringOrNumber
b = '1';
b = 2;
function test(arg: StringOrNumber): StringOrNumber{
    return arg;
}

type Alias = { num: number }
interface Interface{
    num: number;
}
//인터페이스처럼 사용할 수는 있지만 인터페이스가 아니다.
~~~
