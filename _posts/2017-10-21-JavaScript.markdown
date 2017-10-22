---
layout:     post
title:      "[JavaScript] 타입과 연산자"

date:       2017-10-21 11:30:00
author:     "신희준"
header-img: "img/post-bg-02.jpg"
---

<meta name="description" content="javascript 타입, javascript연산자, javascript 기본형, javascript참조형, javascript예제,javascript기본
">

<br>
<H4 style ="font-weight:bold; color : orange">2017 - 10 - 21 (토)</H4>
<li>타입</li>
<li>연산자</li>
<br>
<H4 style ="font-weight:bold; color:orange;">인사이드 자바스크립트(송형주, 고현준 지음 한빛 미디어) 참조</H4>
<br>

<h5 style = "font-size: 17px; font-weight : bold;">1 .. 타입</h5>


<p style = "font-size:14px;">
자바스크립트도 자바처럼 타입이 존재한다. 하지만 내가 생각하기에는 그 타입의 구분이 자바처럼 딱딱 맞춰진게 아니라 어느정도 모호한 점이 있다고 생각한다. <br>
그리하여 " 느슨한 타입 체크 " 라는 특성을 가진다.
</p>

~~~javascript

var intNum = 10;
var floatNum = 0;
var singleStr = 'single quote';
var double = 'double quote';
var boolVAR =true;
var empty;

document.write(typeof intNum, typeof floatNum, typeof singleStr, typeof double, typeof boolVAR, typeof empty)
//결과 Number, Number, String, String, boolean, undefined
//null값은 타입이 undefined로 정의


//숫자형 테스트

var num = 5/2;
console.log(num); // 2.5가 출려된다.


//문자형 테스트

var str = 'test';
console.log(str,str[1],str[2],str[3]);
//결과는 t e s t


//null 과 undefined

var nullVar = null;
console.log(typeof nullVar ===null); // 결과 : false  ( typeof 는 해당 변수의 타입을 반환 )
console.log(nullVar ===null); // 결과 : true
// javaScript 는 일치 연산자로 (===)을 사용한다.
~~~

<br>
<p style = "font-size:14px">
자바스크립트도 객체 개념을 가진다. 기존의 객체지향언어와는 약간 개념이 다르다.<br>
자바스크립트에서는 클래스가 없고 생성자, 함수 등을 활용한다.
</p>
<br>

~~~JavaScript
// Object() 생성자 함수.

var student = new Object();
student.name ='shj';
student.age = 30;
student.gender = 'male';

console.log(typeof student); // 결과는 Object
console.log(student); //출력값은 {name : 'shj' , age : 30, gender : 'male'}
// key : value 쌍으로 된 객체모델을 생성한다.

//객체 리터럴 방식으로 student 객체 생성

var student = {
  name : 'shj', age : 30, gender : 'male'
} ;

console.log(typeof student); // 결과 : Object
console.log(student);  // 출력값은 {name : 'shj' , age : 30, gender : 'male'}

~~~

<br>
<p style = "font-size:14px">
객체에 접근하기
</p>
<br>


~~~javascript
var student = { name : 'shj' , age : 30}; //객체를 생성함

//객체에 접근하여 프로퍼티 값 읽어오기
console.log(student.name); //java와 비슷한 형태로 객체에 접근한다. 해당 객체.프로퍼티명 으로 값을 불러온다.
console.log(student['name']);

//객체에 접근하여 프로퍼티의 값 갱신하기
student.name = 'hjs'; // name 프로퍼티의 값이 hjs 로 갱신된다.

//프로퍼티 생성
student.gender = 'male'; // student 객체에 gender라는 이름과 male 이라는 값을 가진 프로퍼티 추가

//for - in 문으로 객체 프로퍼티 출력

var prop;

for(prop in student){
  console.log(prop, student[prop]);
}
//출력결과
//name hjs
//age 30
//gender male


//프로퍼티 삭제
delete student.name; // name 이란 프로퍼티 삭제.
delete student; //student 객체 삭제
~~~

<br>
<p style="font-size :14px;">
참조타입 // 자바스크립트에서는 기본형(number, string, boolean, null, undefined) 5가지를 제외한 모든 값은 객체이다.
<br>배열이나 함수도 객체로 취급한다. 자바스크립트에서 이 객체를 참조 타입이라고 한다.
</p>
<br>

~~~JavaScript
var objA ={
  val :40
};
var objB = objA;
console.log(objA.val);
console.log(objB.val); // 동일한 값출력

objB.val = 50;
console.log(objA.val);
console.log(objB.val); // 동일한 값출력

//objB = objA 로 메모리상에 같은 주소를 가리키게 하였다. 그러므로 이 두 객체의 값은 같은 val 프로퍼티를 참조하게 된다.

~~~

<br>
<p style = "font-size:14px">
객체 비교 // 객체를 비교할떄는 == 연산자를 사용한다.
</p>
<br>

~~~javascript
var a = 100;
var b = 100;

var objA ={value : 100};
var objB ={value : 100};

var objC = objB;

console.log(a==b); // true 값이 출력된다.
console.log(objA == objB); // FALSE가 출력된다. 이 둘은 값을 비교하는 것이아니다. 참조하고 있는 주소를 비교하는 것이다.
console.log(objB == objC);  //true 가 출력된다. 이 두값은 같은 참조변수를 가리키고 있다.
~~~

<br>
<p style = "font-size:14px">
call by value / call by references ( 값에의한 호출과 참조에의한 호출) : 사실상 이러한 개념 뿐만아니라 참조형의 비교 는 자바 개념과 매우 비슷하다. 살짝 쓰는 방식만 다를 뿐..

</p>
<br>

~~~javascript
var a = 100;
var objA = {value : 100};

function changeArg(num, obj){
  num = 200; // call by value
  obj.value = 200; // call by references

  console.log(num);
  console.log(obj);
}

changeArg(a, objA); //함수 실행시 objA 참조형의 value 프로퍼티 인자의 값이 변경된다.
console.log(a);
console.log(objA);
//결과
//200
//{value : 200} //참조에 의한 호출
//100
//{value : 200} //

~~~

<br>
<p style = "font-size:14px">
프로토 타입 : 자바스크립의 모든 객체는 조상 객체와 연결이 되어있다. 상속개념처럼 조상의 프로퍼티 (자바의경우 인스턴스라 칭함)을 자신의 것처럼 쓸 수 있는것 처럼 말이다. 자바스크립트에서는 이러한 조상의 객체를 <b>프로토타입</b>이라고 한다.
</p>
<br>

~~~javascript
var student = {
  name = 'shj'
}
console.log(student.toString());
// 출력결과가 [object Object] 형태로 나온다. (자바에서)모든 객체의 조상은 Object인것처럼 자바스크립트도 마찬가지이다.
// 최고 조상인 Object 에는 toString() 함수가 정의되어있다.
~~~

<br>
<p style = "font-size:14px">
배열 생성및 배열크기 조절 / 배열의 값 변경
</p>
<br>

~~~javascript
var nameArr = ['shj','chj','lhj'];
console.log(nameArr[0]); // 출력값 shj  // 다른 언어와 다를게 없는 배열문법이다.
console.log(numArr.length); //출력값 3 // .length 로 배열의 길이를 반환

nameArr.length = 5;
console.log(nameArr); // ['shj','chj','lhj', undefined*2]
//javascript 배열은 기본적으로 동적인 배열인것 같다.

nameArr.push('plh'); //자바에서 collections 에서 .add 또는 .put으로 배열에 값을 추가하는 것처럼 push 로 추가한다.
nameArr[4]='abc'; // nameArr 의 5번째 값을 abc로 변경한다.

~~~


<br>
<p style = "font-size:14px">
배열의 열거 / 배열 삭제
</p>
<br>

~~~javascript

//배열의 열거

for (var prop in nameArr){
  console.log(prop,nameArr[prop]);
}
for (var i =0; i <nameArr.length; i ++){
  console.log(nameArr[i]);
}

//배열요소 삭제

delete nameArr[2]; // 3번째 배열의 값 삭제

//splice 함수 사용
nameArr.splice(0, 2); // 0 번째 부터 2개의 원소 삭제

~~~


<br>
<p style = "font-size:14px">
Array() 생성자 함수
</p>
<br>

~~~javascript
var studentList = new Array(3);
console.log(studentList); //출력값  [undefined, undefined, undefined]
console.log(studentList.length) //출력값 3
~~~

<br>
<p style = "font-size:14px">
연산자 ( + )
</p>
<br>

~~~javascript
var ex1 = 1+2;
var ex2 = 'my' +'string';
var ex3 = 1 + 'string';
var ex4 = 'string' +2;
console.log(ex1); // 출력값 : 3
console.log(ex2); // 출력값 : my string
console.log(ex3); // 출력값 : 1string  // 자바와 달리 문자열과 숫자의 결합이 가능 1 이 문자열로 변하는듯
console.log(ex4); // 출력값 : string2   
~~~


<br>
<p style = "font-size:14px">
연산자 ( ==, === )
</p>
<br>

~~~JavaScript
console.log(1 == '1'); // 출력값 true (타입이 다르더라도 값이 같다고 판단한다)
console.log(1 === '1'); // 출력값 false (==보다 좀더 상세히 비교 타입까지 같아야한다.)
~~~
