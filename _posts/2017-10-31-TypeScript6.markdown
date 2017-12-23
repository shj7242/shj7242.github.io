---
layout:     post
title:      "[TypeScript] Generics"

date:       2017-10-31 15:55:00
author:     "신희준"
tags: [TypeScript]
header-img: /files/covers/blog.jpg
comments: true
---

<head>
 <meta property="og:type" content="website">
 <meta property="og:title" content="TypeScript 지네릭스(Generics)">
 <meta property="og:description" content="TypeScript 지네릭스(Generics)">
 <meta property="og:url" content="http://shj7242.github.io/2017/10/31/TypeScript6/">

 <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="TypeScript 지네릭스(Generics)">
  <meta name="twitter:description" content="TypeScript 지네릭스(Generics)">
  <meta name="FACEBOOK:domain" content="http://shj7242.github.io/2017/10/31/TypeScript6/">
  <meta name="facebook:card" content="summary">
   <meta name="facebook:title" content="TypeScript 지네릭스(Generics)">
   <meta name="facebook:description" content="TypeScript 지네릭스(Generics)">
   <meta name="facebook:domain" content="http://shj7242.github.io/2017/10/31/TypeScript6/">


 </head>

<br>
<H4 style ="font-weight:bold; color:black;"> 타입스크립트 코리아 이웅재님의 강의 참조</H4>
<br>
<H4 style ="font-weight:bold; color : black">2017 - 10 - 31 (화)</H4>
<li>Generics</li>

<br>

* 제네릭 : Dinamical type 활용가능 + 헬퍼 정상 작동 (많이 쓰인다. )

~~~typescript
function helloString(message: string): string{
    return message;
} // 인자가 string 만올수 있으며 반환타입 또한 string
function helloNumber(message: any): any{
    return message;
}
//인자와 반환타입 모두 어느 것이든지 올 수 있지만 헬퍼가 제대로 작동을 못함
function hello<T>(message: T): T{
    return message;
}//  any -> generic : 헬퍼가 정상 작동할 수 있음.
hello('heejun');
hello<string>(35); // error
hello(35);

~~~

~~~TypeScript
function helloGeneric<T>(message:T ):T{
  return message;
}

function hello<T>(message: T):T{
  return message;
}

console.log(hello<string>('Hello'));
let age = hello(35); // Generic이 T
hello<number>('35'); // T가 Number 로됨 // error 반환타입이 string 이 되던지 인자가 35가 되어야 함 .
// T 는 모든 Generic 의 조상
//Generic 타입을 쓰지 않으면 T 로 추론
//Generic 타입을 쓰면  T 를 확인
~~~

<br>

* Generic Array

<br>

~~~typescript
const a : string[] =[]; // 배열 생성 방법 1
const b : Array<string> = []; // 배열생성방법 2 Array배열에는 string 값만 들어가야 함.


function hello<T>(message : T[]) : T {
  return message[0];
}

~~~

<br>

* Generic function

<br>

~~~typescript
type HelloGeneric = <T>(message: T) => T;

const hello: HelloGeneric = <T>(message: T){
  //retunr T 를 설정하지 않아도 오류를 발생시키지 않는다.
}

console.log(hello<string>('hello').length);
~~~

<br>

* Generic Class

<br>

~~~typescript
class Person<T>{
  private _name : T;

  constructor(name : T){
    this._name = name;
  }
}
const person1 = new Person('shj');
// name 의 타입은 T가됨

const person2 = new Person<number>('shj');// 오류

~~~

<br>

* Generic 상속

<br>

~~~typescript
class Person<T extends string|number>{//유니온 타입
  private _name : T;

  constructor(name : T){
    this._name = name;
  }
}
const person1 = new Person(false);

--------------------------------
// 멀티 지네릭
class Person<T, K> {
  private _name : T;
  private _age : K;

  constructor(name : T, age: K){
    this._name = name;
    this._age = age;
  }
}
const person2 = new Person('shj',26);
~~~


~~~TypeScript
interface Person{
  name : string;
  age : number;
}

//type Test = keyof Person;
// keyof 는 타입에 관한 결과를
// Test 의 타입은 string 타입인데 name , age 의 리터럴  타입이 됨.  -> 제네릭을 사용해야함

function getProperty(obj, key){
  return obj[key]; // obj 와 key 의 관계를 규명못함. undefined 가 나올 것임.
}

~~~

<br>

* type lookup table

<br>


~~~TypeScript
const person : Person = {
  name : 'SHJ'
  age : 26
};
/*
T , K 타입은 가장 상위의 T type 을 상속받으며  getProperty 의 반환형은 T[K] 형식입니다.
인자로는 obj 는 T 타입 key 에는 K 타입이 들어가게 됨으로서  obj 와 key 의 연관성이 생기게 됩니다.
*/
function getProperty<T, K extends keyof T> : T[K](obj : T, key : K){
  return obj[key];
}
/*
위의 getProperty 와 다른 점은 인자에 value 가 추가되는 것입니다. 이 인자는 T[K] 즉 배열의 요소를 표현하는 형태입니다.
*/
function setProperty<T, K extends keyof T> : T[K](obj : T, key : K, value : T[K]){
  obj[key] = value;
}


getProperty(person, 'name1')// error name1 은 없는 속성임
getProperty(person, 'name') // SHJ 반환
setProperty(person, 'name' , 'lhj')  // person 의 name 속성에 lhj 값을 넣는다.

~~~
