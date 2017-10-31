---
layout:     post
title:      "[JavaScript] 클로져"

date:       2017-10-21 11:40:00
author:     "신희준"
header-img: "img/post-bg-02.jpg"
comments: true
---

<meta name="description" content="javascript 타입, javascript연산자, javascript 기본형, javascript참조형, javascript예제,javascript기본
">

<br>
<H4 style ="font-weight:bold; color : black">2017 - 10 - 21 (토)</H4>
<li>클로져</li>
<br>
<H4 style ="font-weight:bold; color:black;">인사이드 자바스크립트(송형주, 고현준 지음 한빛 미디어) 참조</H4>
<br>


> 클로져

<br>

* 클로져 1단계


~~~javascript
var cnt = 0;  // 전역변수라서 변수이름 충돌가능성. 외부에서 접근가능. 값보호 필요

function increseCnt() {
  cnt++;
}

increseCnt();
increseCnt();
increseCnt();

console.log(cnt); // 3 출력
~~~


<br>

* 클로져 2단계

<br>

~~~javascript
function increseCnt() {
  var cnt = 0;  // 지역변수. 범위(스코프)는 좁아졌으나 매번 0으로 초기화됨
  cnt++;
  console.log(cnt);
}
increseCnt(); // 1출력
increseCnt(); // 1출력
increseCnt(); // 1출력
// console.log(cnt);
~~~

<br>

* 클로져 3단계

<br>

~~~JavaScript
//변수를 지역변수로 하고, 함수를 내부함수로 변경 - 내부함수라서 외부에서 호출할 수 없다는 문제발생
function closure() {
  var cnt = 0;

  function increaseCnt() {
    cnt++;
    console.log(cnt);
  }

  increaseCnt();
  increaseCnt();
  increaseCnt();  
}
closure(); // 1 2 3 출력
// increase();  // 에러
~~~

* 클로져 4단계

<br>

~~~javascript
//내부함수를 반환하여, 외부에서 사용할 수 있도록 변경.
function closure() {
  var cnt = 0;

 return function increaseCnt() {
    cnt++;
    console.log(cnt);
  };  
}
var increaseCnt = closure();

increaseCnt(); // 1출력
increaseCnt(); // 2출력
increaseCnt(); // 3출력

~~~
