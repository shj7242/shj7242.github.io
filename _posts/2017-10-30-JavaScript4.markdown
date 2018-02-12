---
layout:     post
title:      "[JavaScript] 객체"

date:       2017-10-30 12:55:00
author:     "신희준"
header-img: "img/background.jpg"
comments: true
---

<head>
 <meta property="og:type" content="website">
 <meta property="og:title" content="JavaScript 객체">
 <meta property="og:description" content="JavaScript 객체">
 <meta property="og:url" content="http://shj7242.github.io/2017/10/30/JavaScript4/">

 <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="JavaScript 객체">
  <meta name="twitter:description" content="JavaScript 객체">
  <meta name="FACEBOOK:domain" content="http://shj7242.github.io/2017/10/30/JavaScript4/">
  <meta name="facebook:card" content="summary">
   <meta name="facebook:title" content="JavaScript 객체">
   <meta name="facebook:description" content="JavaScript 객체">
   <meta name="facebook:domain" content="http://shj7242.github.io/2017/10/30/JavaScript4/">


 </head>

<br>
<H4 style ="font-weight:bold; color:black;"> 모덴웹을 위한 Javascript, JQuery입문 [윤인성 지음] 참고</H4>
<br>
<H4 style ="font-weight:bold; color : black">2017 - 10 - 30 (월)</H4>
<li>객체</li>
<br>

>객체 개요

* 배열도 객체이다.

~~~html
<script>
var array = ['shj','chj','lhj','ssc'];
console.log(typeof array); // object 출력
</script>
~~~

* 자바스크립트에서 객체 생성하기

~~~javascript
var student = {
  name : 'shj',             //name, age ,e-mail 속성을 가진 student 객체 생성
  age : 26,
  e-mail : 'shj7242@gmail.com'
}
console.log(typeof student) // object출력
console.log(student.name) // shj 출력
~~~

* 자바스크립트 객체에서는 함수를 속성의 값으로 가질 수 있다.

~~~javascript
var student = {
  name : 'shj',             //name, age ,e-mail 속성을 가진 student 객체 생성
  age : 26,
  email : 'shj7242@gmail.com'
  study : function (subject){ console.log(this.name + "은" + subject +"를 공부한다.") }
}
//this 가 바인딩 되는 위치는 student 객체 안의 name 을 가리킨다.
student.study(); // shj은 math를 공부한다. 출력
~~~

* 자바스크립트에서는 객체를 반복문으로 돌릴 수 있다.

~~~javascript
var student = {
  name : 'shj',             //name, age ,e-mail 속성을 가진 student 객체 생성
  age : 26,
  email : 'shj7242@gmail.com'
}
var output = '';
for(var key in product){
  output += key ': ' + product[key] + '\n';
}
console.log(output)
/* name : 'shj'
   age : 26
   email : 'shj7242@gmail.com' 출력된다. */
~~~

* 자바스크립트 객체에서 해당 속성을 포함하는지 확인할때 쓰는 in 키워드

~~~JavaScript
var student = {
  name : 'shj'
}
console.log('name' in student) //true 출력 ( name 이라는 속성이 student 객체에 있는지 확인한다 .)
~~~

* 객체에 속성추가하기

~~~JavaScript
var student = {
  name : 'shj'
}

student.age = 26;    // student 객체에 age라는 속성을 추가하고 26값을 대입한다.
student.hobby = 'computer game';
~~~

* 객체에 속성 제거하기

~~~javascript
var student = {
  name : 'shj',             //name, age ,e-mail 속성을 가진 student 객체 생성
  age : 26,
  email : 'shj7242@gmail.com',
  study : function (subject){ console.log(this.name + "은" + subject +"를 공부한다.")
}
console.log(student)  // {name: 'shj',  age: 26, email: "shj7242@gmail.com"} 출력
delete( student.name); // student 객체의 name 속성 제거
console.log(student) // {age: 26, email: "shj7242@gmail.com"} 출력
delete ( student.study); // 함수 삭제
~~~

* 객체 vs 배열 ( 데이터관리 측면 )

~~~javascript
//user 객체 5개 만들기

var user1 = {name : 'shj' , age : 26, address : 'seoul'}
var user2 = {name : 'ssc' , age : 26, address : 'seoul'}
var user3 = {name : 'lhj' , age : 26, address : 'seoul'}
var user4 = {name : 'chj' , age : 26, address : 'seoul'}
var user5 = {name : 'plh' , age : 26, address : 'seoul'}

//배열로 관리하기

var users = [];
users.push({name : 'shj' , age : 26, address : 'seoul'})
users.push({name : 'ssc' , age : 26, address : 'seoul'})
users.push({name : 'lhj' , age : 26, address : 'seoul'})
users.push({name : 'chj' , age : 26, address : 'seoul'})
users.push({name : 'plh' , age : 26, address : 'seoul'})
~~~

* 함수로 객체 생성하기

~~~javascript
function makeStudent(name, korean, math, english){
  var willReturn = {
    이름 : name,
    국어 : korean,
    수학 : math,
    영어 : english,
    getSum : function(){
      return this.국어+this.수학+this.영어;
    },
    getAverage : function(){
      return this.getSum()/3;
    },
    toString: function(){
      return this.이름 +'\t'+this.국어+'\t'+this.수학+'\t'+this.영어;
    }


  }
  return willReturn;

}

console.log(makeStudent('shj',80,70,60).toString()); // 속성의 값들 나열
console.log(makeStudent('shj',80,70,60).getAverage()); // 평균계산
console.log(makerStudent('chj',70,60,30).getSum()); // 합계 계산
~~~

* 배열로 위에서 함수로 만든 객체 관리하기

~~~javascript
var students = [];

students.push(makeStudent('chj',30,40,80));
// students 배열에 makeStudent() 함수로 객체를 생성하여 집어넣어준다.
students.push(makeStudent('plh',20,40,40));
students.push(makeStudent('ssc',70,60,50));
students.push(makeStudent('lhj',90,80,20));

for(let i =0; i < students.length; i ++){
console.log(students[i].toString())
}
//for 문으로 students 배열에 들어간 객체 값들의 toString 값 출력
/*
"chj  30  40  80"
"plh  20  40  40"
"ssc  70  60  50"
"lhj  90  80  20"
*/
~~~


* 객체의 복사

~~~javascript
// 객체를 복사하는 함수 생성
function clone(obj){
  var output = {};
  for(var i in obj){
    output[i] = obj[i];
  }
  return output;
}

//original 객체 하나 생성
var original = {a :10, b: 20};
//referenced 에 original 얕은 복사
var refereneced = original;
// cloned 에 깊은복사
var cloned = clone(original);

//original
original.a = 20;

alert(JSON.stringfy(referenced, null, 2))
alert(JSON.stringfy(cloned, null, 2))
~~~

* 배열 복제


~~~javascript
var array1 = [1,2,3,4,5]

var array2 = []

for(var i =0; i<array1.length; i++){
  array2[i]=array1[i]; //array2 에 array1 의 값을 넣는다.
}
console.log(array2) // [1,2,3,4,5] 출력
~~~

* 배열 병합

~~~javascript
const arrayA = [1,2,3,4,5]
const arrayB = [6,7,8,9,10]

const newArray = [...arrayA, ...arrayB]
console.log(newArray); //[1,2,3,4,5,6,7,8,9,10] 출력
~~~
