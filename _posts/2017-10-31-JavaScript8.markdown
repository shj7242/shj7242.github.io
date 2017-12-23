---
layout:     post
title:      "[JavaScript] ES5 Array/String/underscore"

date:       2017-10-31 14:55:00
author:     "신희준"
tags: [JavaScript]
header-img: /files/covers/blog.jpg
comments: true
---

<head>
 <meta property="og:type" content="website">
 <meta property="og:title" content="JavaScript ES5 (Array, String, underscore)">
 <meta property="og:description" content="JavaScript ES5 (Array, String, underscore)">
 <meta property="og:url" content="http://shj7242.github.io/2017/10/31/JavaScript8/">

 <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="JavaScript ES5 (Array, String, underscore)">
  <meta name="twitter:description" content="JavaScript ES5 (Array, String, underscore)">
  <meta name="FACEBOOK:domain" content="http://shj7242.github.io/2017/10/31/JavaScript8/">
  <meta name="facebook:card" content="summary">
   <meta name="facebook:title" content="JavaScript ES5 (Array, String, underscore)">
   <meta name="facebook:description" content="JavaScript ES5 (Array, String, underscore)">
   <meta name="facebook:domain" content="http://shj7242.github.io/2017/10/31/JavaScript8/">


 </head>

<br>
<H4 style ="font-weight:bold; color:black;"> 모덴웹을 위한 Javascript, JQuery입문 [윤인성 지음] 참고</H4>
<br>
<H4 style ="font-weight:bold; color : black">2017 - 10 - 31 (화)</H4>
<li>ES5 Array</li>
<li>EX5 String</li>
<li>underscore.js</li>
<br>
<br>


> ECMAScript5 의 Array 객체

<br>

* ECMAScript 5 Array 객체
  - isArray() : 해당 객체의 자료형이 Array인지 확인한다.
  - indexOf() : 특정 요소를 앞쪽부터 검색한다.
  - lastIndexOf() : 특정요소를 뒤쪽부터 검색한다.
  - forEach() : 배열의 각각 요소를 반환
  - map() : 배열에 특정 규칙을 적용해 새로운 배열 생성

<br>

~~~JavaScript
//Array.isArray() 메서드

alert(Array.isArray([1,2,3])) //true
alert(Array.isArray({})) // false
alert(Array.isArray((1))) //false


//indexOf() / lastIndexOf() 메서드
var testArray = [1,2,3,4,5,6,7,8,5,2,1,2]

var output1 = testArray.indexOf(4);  // 3
var output2 = testArray.indexOf(8);  // 7
var output3 = testArray.lastIndexOf(4) // 3
var output3 = testArray.lastIndexOf(4)  // 3

//forEach() 메서드

var array = [1,2,3,4,5,6,7,8,9,10]

var sum = 0;
var output = '';
array.forEach(function (element, index, array){
//element 는 배열의 요소 index 는 배열의  index 를 뜻한다.
  sum += element;
  output += index + ' : ' + element + ' -> ' + sum + ' \n';

});
alert(output)
/*
"0 : 1 -> 1
1 : 2 -> 3
2 : 3 -> 6
3 : 4 -> 10
4 : 5 -> 15
5 : 6 -> 21
6 : 7 -> 28
7 : 8 -> 36
8 : 9 -> 45
9 : 10 -> 55
" 출력
*/

//map() 메서드

var array = [1,2,3,4,5,6,7,8,9]
var output = array.map(function(element){
  return element * element; // 각 배열의 요소를 제곱한다.
})
console.log(output) // [1, 4, 9, 16, 25, 36, 49, 64, 81] 출력

~~~

<br>

* 조건 메서드
  - filter() : 특정 조건을 만족하는 요소를 추출해 새로운 배열을 만듬.
  - every() : 배열의 요소가 특정 조건을 모두 만족하는지 확인.
  - some() : 배열의 요소가 특정 조건을 적어도 하나 만족하는지 확인.
<br>

~~~javascript
// filter() 메서드
var array = [1,2,3,4,5,6,7,8,9]
array = array.filter(function(element, index, array){
  return element<=5; // element 중에 5보다 작은 것만
});

console.log(array)  // [1, 2, 3, 4, 5] 출력
~~~

~~~javascript
// every() 메서드 / some() 메서드

var array = [1,2,3,4,5,6,7,8,9]

function lessThanFive(element, index, array){
  return element< 5;
}
function lessThanTwenty(element, index, array){
  return element< 20;
}

var output1 = array.every(lessThanFive); // 5보다 모두 작지는 않음
var output2 = array.every(lessThanTwenty); // 20보다 모두작음
var output3 = array.some(lessThanFive); // 5보다 작은개 1개이상
var output4 = array.some(lessThanTwenty); // 20보다 작은개 1개이상

var output = '';

output += output1 + ' : ' + output2 + '\n';
output += output3 + ' : ' + output4 + '\n';
console.log(output) // false : true  // true : true 출력
~~~

<br>

* 연산 메서드
 - reduce() : 배열의 요소가 하나가 될 때까지의 요소를 왼쪽부터 두개씩 묶는 함수 실행
 - reduceRight() : 배열의 요소가 하나가 될 떄까지 요소를 오른쪽부터 두 개 씩 묶는 함수 실행

<br>

~~~javascript
//reduce() 메서드
var array = [1,2,3,4,5,6]
var output = ''
array.reduce(function(previousValue, currentValue, index, array){
  output +=previousValue + ' : ' + currentValue + ' : ' + index + '\n'
})
console.log(output);
/*
"1 : 2 : 1
undefined : 3 : 2
undefined : 4 : 3
undefined : 5 : 4
undefined : 6 : 5
" 출력
*/
~~~

~~~javascript
//reduce() 메서드 활용

var array = [1,2,3,4,5,6];
var result = array.reduce(function(previousValue, currentValue){
  return prviousValue + currentValue;  
});
alert(result) // 배열의 요소를 모두 합한값 출력 : 21
~~~

<br>

> ECMAScript 5 String 객체

<br>

* trim() 메서드

<br>

~~~javascript
var text = '   text ';
var output = ''
output += '++' + text + '++\n';
output += '++' + text.trim() + '++'; // text 의 양옆 공백을 제거
alert(output);
~~~

<br>

* JSON 객체
  - JSON.stringfy() : 자바스크립트 객체를 JSON 문자열로 변환한다.
  - JSON.parse() : JSON 문자열을 자바스크립트 객체로 변환한다.

<br>


~~~javascript
// JSON.stringfy()

var object = {
  name : '신희준',
  region: '서울특별시'
};

console.log(JSON.stringify(object))
// 출력결과 :  "{\"name\":\"신희준\",\"region\":\"서울특별시\"}" 처럼 json 형태로 나타난다.
~~~

~~~javascript
// JSON.parse
var object = {
  name : '신희준',
  region: '서울특별시'
};

var copy = JSON.parse(JSON.stringify(object)) // JSON 형태로 바뀐 OBJECT 를 다시 객체형태로
console.log(copy)
/*
[object Object] {
  name: "신희준",
  region: "서울특별시" 출력
}
*/
console.log(copy.name + ' : ' + copy.region)
//"신희준 : 서울특별시" 출력
~~~

> userscore.js

<br>

* uderscore 라이브러리 : 배열, 정렬 과 같은 기본적인 유틸리티 기능을 모아놓은 라이브러리

<br><br>
1 . <a href = "https://uderscorejs.org">https://uderscorejs.org</a> 에서 라이브러리 다운로드( Development Version (1.8.3))

<br><br>

2 . 같은 위치에 html 파일을 만들고 uderscore.js 를 연결

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="uderscore.js"></script>
</head>
<body>
</body>
</html>
~~~
