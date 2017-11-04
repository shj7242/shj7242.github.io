---
layout:     post
title:      "[JavaScript] 기본내장객체"

date:       2017-10-31 13:55:00
author:     "신희준"
header-img: "img/post-bg-02.jpg"
comments: true
---

<meta name="description" content="javascript, javascript 객체, javascript프로토타입, javascript생성자,javascript함수,javascript생성자함수
">
<br>
<H4 style ="font-weight:bold; color:black;"> 모덴웹을 위한 Javascript, JQuery입문 [윤인성 지음] 참고</H4>
<br>
<H4 style ="font-weight:bold; color : black">2017 - 10 - 31 (화)</H4>
<li>기본자료형 vs 객체</li>
<li>내장 함수</li>

<br>
<br>


> 기본자료형과 객체의 차이

<br>
자바스크립트에는 기본 자료형과 객체가 존재한다. 자바스크립트가 특히 특이한 점은 기본자료형에도 객체처럼 동일한 메서드를 사용할 수 있다는 점이다. <br><br>

기본자료형의 경우 메서드를 추가할 수 없다는 차이를 가지고 있다.

<br>

* 기본형의 메서드 추가 : X

~~~javascript
var primitiveNumber = 24;
var objectNumber = new Number(24);


console.log(typeof primitiveNumber) // number 형태
console.log(typeof objectNumber) // object 형태

primitiveNumber.method = function(){
  return 'primitive number'
}
var output = primitiveNumber()

alert(output) //에러발생
// 기본형에는 다음과 같은 방식으로 메서드를 추가할 수 없다.
~~~

<br>

* 프로토타입을 통한 기본형의 메서드 추가 : O

~~~javascript
var primitiveNumber = 24;
var objectNumber = new Number(24);


console.log(typeof primitiveNumber)

console.log(typeof objectNumber)

Number.prototype.method = function(){ // 넘버객체의 프로토타입에 상기 메서드를 추가한다.
  return 'number prototype method'
}

var output = primitiveNumber.method()

alert(output) // 메서드가 반환된다.
console.log(objectNumber.method()) // objectNumber 도 Number형의 object이므로 상기 메서드를 사용가능
~~~

<br>

* object 객체에 있는 메서드

<br>

| 메서드 이름 |  설명  |
|:--------|:--------|
| constructor() | 객체의 생성자 함수를 나타낸다. |
| hasOwnProperty(name) | 객체가 name 속성이 있는지 확인한다. |
| isPrototypeof(object) | 객체가 object의 프로토타입인지 검사한다. |
| toLocaleString() | 객체를 호스트 환경에 맞는 언어의 문자열로 바꾼다.  |
| toString() | 객체를 문자열로 바꾼다. |
| valueOf() | 객체의 값을 나타낸다. |

<br>

* 모든 객체에 메서드 추가하기

<br>

~~~javascript
// Object 는 모든 객체의 조상이다.

Object.prototype.commonMethod = function(){
  console.log('this is common method')
} //Object 객체의 프로토타입에 공통메서드를 선언한다.

var test1 = 246;
var test2 = new String('test');
test1.commonMethod() // 'this is common method' 출력
test2.commonMethod() //'this is common method' 출력
~~~

<br>

* 생성자 함수에 속성 추가하기

<br>

~~~javascript

function Constructor(){}

Constructor.property = 123; //Constructor 의 property 에  123 추가

Constructor.method = function(){ // Constructor 에 method 추가
  return 'abc';
}

alert(Constructor.property) // 123
alert(Constructor.method()) // abc
~~~

<br>

* HTML 관련 메서드

<br>

<br>

| 메서드 이름 |  설명  |
|:--------|:--------|
| anchor() | a태그로 문자열을 감싸 리턴 |
| big() | big 태그로 문자열을 감싸 리턴 |
| blink() | blink 태그로 문자열을 감싸 리턴 |
| bold() | b태그로 문자열을 감싸 리턴  |
| fixed() | tt태그로 문자열을 감싸 리턴 |
| fontcolor(colorString) | FONT 태그로 문자열을 감싸고 COLOR 속성을 주어 리턴 |
| italics() | 태그로 문자열을 감싸 리턴한다. |
| link(linkRel) | a 태그에 href 속성을 지정해 리턴한다. |
| small() | SMALL 태그로 문자열을 감싸 리턴한다. |
| strike() | strike 태그로 문자열을 감싼다. |
| sub() | sub태그로 문자열을 감싼다. |
| sup() | sup태그로 문자열을 감싼다. |

<br>

~~~javascript
var string = 'javascript '

var output = '';

output += string.anchor() +'<br/>';
output += string.big() +'<br/>';
output += string.blink() +'<br/>';
output += string.bold() +'<br/>';
output += string.fixed() +'<br/>';
output += string.fontcolor('red') +'<br/>';
output += string.fontsize(15) +'<br/>';
output += string.link('https://www.naver.com') +'<br/>';
output += string.strike() +'<br/>';
output += string.sup() +'<br/>';

document.write(output)
~~~

<br>

* Array 객체

<br>


| 메서드 이름 |  설명  |
|:--------|:--------|
| concat() | 매개변수로 입력한 배열의 요소를 모두 합쳐 배열을 만들어 리턴 |
| join() | 배열안의 모든 요소를 문자열로 만들어 리턴한다. |
| pop()* | 배열의 마지막 요소를 제거하고 리턴 |
| push()* | 배열의 마지막 부분에 새로운 요소 추가  |
| reverse()* | 배열의 마지막 부분에 새로운 요소 추가  |
| slice() | 요소의 지정한 부분을 리턴  |
| sort()* | 배열의 요소를 정렬합니다.  |
| splice()* | 요소의 지정한 부분을 삭제하고 삭제한 요소를 리턴  |

<br>

~~~javascript
var array = new Array()
array.push(3)
array.push(50)
array.push(30)
array.push(20)
console.log(array) //[3, 50, 30, 20]
array.sort() // 숫자의 오름차순 정렬이 아닌 문자의 오름차순 정렬임을 명시
console.log(array) //[20, 3, 30, 50]  // 제대로된 정렬이 안된다.
console.log(array.slice(0,1)) //[20]

Array.prototype.remove = function(index){
  this.splice(index, 1)  //상기 array에서 index 위치에 있는 요소 한개 재거
} //요소 제거할 수 있는 함수 생성

array.remove(2) // 3번째 값인 30을 삭제한다.
console.log(array) // [20, 3, 50]
~~~

<br>

* Date 객체

<br>

~~~JavaScript
var time = new Date()
// alert(time)
var date = new Date(1991, 11, 9, 2, 24, 23, 1) // 연 , 월-1 , 일, 시, 분, 초 , 밀리 초 순서로 들어감
alert(date);
//date.setDate(date.getDate()+7); // date 객체에 들어있는 날짜에서 7 더함
~~~
