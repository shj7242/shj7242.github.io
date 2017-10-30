---
layout:     post
title:      "[JavaScript] 생성자 함수"

date:       2017-10-31 12:55:00
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

* 프로토타입

<br>
<p style ="font-size:15px">

</p>
