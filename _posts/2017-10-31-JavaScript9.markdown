---
layout:     post
title:      "[JavaScript] BOM"

date:       2017-10-31 15:55:00
author:     "신희준"
header-img: "img/background.jpg"
comments: true
---

<head>
 <meta property="og:type" content="website">
 <meta property="og:title" content="JavaScript BOM (Browser Object Model)">
 <meta property="og:description" content="JavaScript BOM (Browser Object Model)">
 <meta property="og:url" content="http://shj7242.github.io/2017/10/31/JavaScript9/">

 <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="JavaScript BOM (Browser Object Model)">
  <meta name="twitter:description" content="JavaScript BOM (Browser Object Model)">
  <meta name="FACEBOOK:domain" content="http://shj7242.github.io/2017/10/31/JavaScript9/">
  <meta name="facebook:card" content="summary">
   <meta name="facebook:title" content="JavaScript BOM (Browser Object Model)">
   <meta name="facebook:description" content="JavaScript BOM (Browser Object Model)">
   <meta name="facebook:domain" content="http://shj7242.github.io/2017/10/31/JavaScript9/">


 </head>

<br>
<H4 style ="font-weight:bold; color:black;"> 모덴웹을 위한 Javascript, JQuery입문 [윤인성 지음] 참고</H4>
<br>
<H4 style ="font-weight:bold; color : black">2017 - 10 - 31 (화)</H4>
<li>Window 객체</li>
<br>
<br>


> Window 객체

<br>

* 윈도우의 객체의 속성들

<br>

~~~javascript
var output = '';

for (var key in window){
  output += '●' + key + ': ' + window[key] + '\n';
}
console.log(output)
// 윈도우 객체의 무수히 많은속성들이 console에 찍힌다.
~~~

<br>,br>

* window 객체의 생성

<br>

~~~javascript
//window.open(URL , name, feature, replace);
window.open('https://www.naver.com', 'naver', 'width=600, height=300', true)
~~~

* window 객체의 onload

<br>

~~~javascript
//해당 스크립트를 가진 html 문서가 브라우저에 랜더링 할 때  해당 함수를 실행함
window.onload = function(){
  alert('로드')
}
~~~

<br>

* 현재 기기가 무엇인지 확인

<br>

~~~javascript
var userAgent = navigator.userAgent;
    alert(userAgent);

~~~

<br>


* 스마트폰 구분하기

<br>

~~~javascript
  var smartPhones = ['iphone', 'ipod', 'android'];
    for(var i in smartPhones){
        if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))){
        alert('스마튼폰 페이지로 이동')
        location = 'http://m.naver.com';
    }
}
~~~

<br>

* 모바일 장치의 방향

<br>

~~~javascript
if(window.orientation == 0 || window.orientation == 180){
    alert('세로 방향입니다.');
}else if(window.orientation == 90 || window.orientation == -90){
    alert('가로 방향입니다.');
}
~~~
