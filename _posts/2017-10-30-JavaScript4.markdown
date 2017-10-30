---
layout:     post
title:      "[JavaScript] 객체"

date:       2017-10-30 12:55:00
author:     "신희준"
header-img: "img/post-bg-02.jpg"
comments: true
---

<meta name="description" content="Spring스프링 애너테이션 Annotation정리 @Autowired,@Qualifier,@Resource,@Component,@PostConstruct,@Aspect
,@AOP,@POINTCUT,@AROUND,@ADVICE,@RequestMapping,@REPOSITORY,@SERVICE,@COMPONENT
">
<br>
<H4 style ="font-weight:bold; color:orange;"> 모덴웹을 위한 Javascript, JQuery입문 [윤인성 지음] 참고</H4>
<br>
<H4 style ="font-weight:bold; color : orange">2017 - 10 - 30 (월)</H4>
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
