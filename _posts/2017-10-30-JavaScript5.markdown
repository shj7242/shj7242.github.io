---
layout:     post
title:      "[JavaScript] 생성자 함수/프로토 타입"

date:       2017-10-31 23:55:00
author:     "신희준"
header-img: "img/post-bg-02.jpg"
comments: true
---

<meta name="description" content="javascript, javascript 객체, javascript프로토타입, javascript생성자,javascript함수,javascript생성자함수
">
<br>
<H4 style ="font-weight:bold; color:orange;"> 모덴웹을 위한 Javascript, JQuery입문 [윤인성 지음] 참고</H4>
<br>
<H4 style ="font-weight:bold; color : orange">2017 - 10 - 31 (화)</H4>
<li>생성자함수</li>
<li>프로토타입</li>
<br>

>생성자함수 개요

* 생성자 함수 만들기

~~~javascript
function 함수명(){
  this.속성이름
  this.속성이름
}
~~~

* 객체 생성하기

~~~javascript
function Student(){

}
var student = new Student();
~~~

* 속성을 가진 생성자 함수. + 객체생성

~~~javascript
function User(userId, userpw, userName){
  this.userId = userId;
  this.userPw = userPw;
  this.userName = userName;
}

var user = new User('shj7242','1234','shj');
//해당 생성자는 매개변수를 가지고 있기 때문에 객체 생성시 적절한 매개변수를 대입해줘야함.
~~~

* 메서드 추가

~~~javascript
function User(userId, userPw, userName){
  this.userId = userId;
  this.userPw = userPw;
  this.userName = userName;

  this.toString = function(){
    return this.userId +"님의 비밀번호는 : " +userPw +"이며 성함은 : "+userName +" 입니다.";
  }
}

var user1 = new User('shj7242','1234','shj'); //
var user2 = new User('chj1234', '7777' , 'chj');

console.log(user1.toString());
//결과 : "shj7242님의 비밀번호는 : 1234이며 성함은 : shj 입니다."
console.log(user2.toString());
//결과 : "chj1234님의 비밀번호는 : 7777이며 성함은 : chj 입니다."

~~~

* 생성자 함수를 사용한 객체배열 생성

~~~JavaScript
function User(userId, userPw, userName){
  this.userId = userId;
  this.userPw = userPw;
  this.userName = userName;

  this.toString = function(){
    return this.userId +"님의 비밀번호는 : " +userPw +"이며 성함은 : "+userName +" 입니다.";
  }
}
var users = [];
users.push(new User('shj7242','1234','shj'));
users.push(new User('chj1234', '7777' , 'chj'));
users.push(new User('lhj1234', '4444', 'lhj'));

for(var i =0; i<users.length; i ++){
  console.log(users[i].toString())
}
/*
"shj7242님의 비밀번호는 : 1234이며 성함은 : shj 입니다."
"chj1234님의 비밀번호는 : 7777이며 성함은 : chj 입니다."
"lhj1234님의 비밀번호는 : 4444이며 성함은 : lhj 입니다."
*/

~~~

* instanceof 키워드

~~~javascript
function Student(name, korean, math, english, science){
  this.이름 = name;
  this.국어 = korean;
  this.수학 = math;
  this.영어 = english;
  this.과학 = science;

}

var student = new Student('신희준',100,100,100,100);

alert(student instanceof Student); // true 출력
alert(student instanceof Number); // false  
alert(student instanceof String); // false
alert(student instanceof Boolean); // false
// 해당 객체가 어떤 생성자 함수로 호출되었는지 확인하고자 할때 사용한다.
~~~

> 프로토타입

<br>
<br>
속성은 모두 객체가 다른 값을 갖지만 메서드는 모두 같은 값을 가진다.
<br>
<br>
만약 다루는 자료의 수가 증가하여 수천개의 객체를 만들 경우 같은 함수를 1000번 생성해야한다.
<br><br>
이러한 경우 메모리의 크나큰 손해를 발생시킨다. (매우 비효율적)
<br><br>
이러한 손해를 해결하기 위해 <b style="color:red">프로토타입</b> 을 사용한다.
<br><br>
'프로토타입' 이란 생성자 함수로 생성된 객체가 공통으로 가지는 공간이다.
<br>

* 프로토타입으로 메서드 생성

~~~JavaScript
function Student(name, korean, math, english, science){
  this.이름 = name;
  this.국어 = korean;
  this.수학 = math;
  this.영어 = english;
  this.과학 = science;
}

Student.prototype.getSum = function(){ console.log('getSum 메서드')};
Student.prototype.getAverage = function(){ console.log('getAverage 메서드')};
Student.prototype.toString = function(){ console.log('toString메서드')};
//Student 객체 자체의 프로토타입에 위 세개의 메서드를 생성한다.
//Student 객체는 프로토타입에 정의된 메소드를 사용할 수 있다.

let student1 = new Student('shj',100,100,100,100);
let student2 = new Student('chj', 80,80,80,80);
console.log(student1.getSum()) // 위 프로토타입에서 정의한 메서드를 사용할 수 있다.
console.log(student1.getAverage())
console.log(student1.toString())
console.log(student2.getSum()) //
console.log(student2.getAverage())
console.log(student2.toString())
~~~

<br>

* new 키워드

  - new 키워드를 사용한 경우 vs new 키워드를 사용하지 않은 경우

~~~javascript
// new 키워드를 활용한경우
function Testconstructor(value){
  this.value = value
}

var test1 = new Testconstructor(3);

console.log(test1.value);
// 평소에 하던데로 일반적으로 선언한다.
--------------------------------------------
function Testconstructor(value){
  this.value = value
}
var test1 = Testconstructor(3);  //new 키워드 제거
console.log(value); // test1. 이 빠진다.

/*this 키워드는 윈도우 객체를 나타낸다. 따라서 일반적으로 함수를 호출하듯이
new 키워드를 사용하지 않을경우 함수를 실행하는 동안 window 객체에 속성을 추가한 것이 된다.
*/
~~~



~~~javascript

~~~
