---
layout:     post
title:      "[TypeScript] 클래스"

date:       2017-10-30 11:55:00
author:     "신희준"
header-img: "img/post-bg-02.jpg"
comments: true
---

<head>
 <meta property="og:type" content="website">
 <meta property="og:title" content="TypeScript 클래스">
 <meta property="og:description" content="TypeScript 클래스">
 <meta property="og:url" content="http://shj7242.github.io/2017/10/31/TypeScript5/">

 <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="TypeScript 클래스">
  <meta name="twitter:description" content="TypeScript 클래스">
  <meta name="FACEBOOK:domain" content="http://shj7242.github.io/2017/10/31/TypeScript5/">
  <meta name="facebook:card" content="summary">
   <meta name="facebook:title" content="TypeScript 클래스">
   <meta name="facebook:description" content="TypeScript 클래스">
   <meta name="facebook:domain" content="http://shj7242.github.io/2017/10/31/TypeScript5/">


 </head>
 


<br>
<H4 style ="font-weight:bold; color:black;"> 타입스크립트 코리아 이웅재님의 강의 참조</H4>
<br>
<H4 style ="font-weight:bold; color : black">2017 - 10 - 30 (월)</H4>
<li>클래스</li>

<br>

>클래스

<p style="font-size:14px;">
클래스
<br><br>
자바의 클래스와 아주 비슷한 개념이다.
<br>
typescript 에서는 거의 class로 작업한다.
</p>

~~~typescript
class Person{
    protected _name: string =null;
    private _age: number =null;
    //name: string = 'shj'; 처럼 값을 할 당할 수 있다.
    /*
    private 접근제어자를 쓸경우 변수 네이밍 시 _를 붙인다.(기존에 쓰던 규칙?같은것)
클래스는 DEFAULT 가 public 이다.
클래스에 멤버변수가 정의되어있지만 값을 대입하지 않을 경우 undefined이다.
*/
    constructor(name: string) {
       //생성자
        this.name = name;
    }

    //getter/setter

    hello(): void{
        console.log(this._name);
    }
}

const person = new Person("shj");

console.log(person);
//console.log(person.name);


//ex5 -> ex6 로 넘어오면서 class 를 많이 활용한다.
// 기존에는 symbol처리를 했어야되는데 접근제어자가 생김

class Child extends Person{
  /*  constructor(){
        super();

        this._name;
    }
    */
    _name: string = "shj1";
}

const person: Child = new Child();
person.hello
console.log(person);
~~~

<p style="font-size:14px;">
자바와 매우 비슷한 형태라고 생각든다.<br>
<br><br>
인스턴스 변수 생성 방법
</p>

~~~typescript
class Student{
  접근제어자 인스턴스변수명 : 타입
  접근제어자 인스턴스변수명 : 타입 = 값
}
~~~


<p style="font-size:14px;">
생성자
</p>

~~~typescript
class Student{
  접근제어자 인스턴스변수명 : 타입
  접근제어자 인스턴스변수명 : 타입 = 값
  constructor(name: string) {
     //생성자
      this.인스턴스변수명 = 매개변수;
  }
}
~~~

<p style="font-size:14px;">
메서드
</p>

~~~typescript
class Student{
  접근제어자 인스턴스변수명 : 타입
  접근제어자 인스턴스변수명 : 타입 = 값
  메서드명(): 반환타입{
      console.log("반갑습니다.");
  }
}
~~~

<p style="font-size:14px;">
객체 생성
</p>

~~~typescript
class Student{
  접근제어자 인스턴스변수명 : 타입
  접근제어자 인스턴스변수명 : 타입 = 값
  constructor(name: string) {
     //생성자
      this.인스턴스변수명 = 매개변수;
  }
}

const 사용할객체이름 = new Student("shj");
console.log(사용한객체이름.name) // shj 가 콘솔에 찍힘
~~~

<p style="font-size:14px;">
상속
</p>

~~~TypeScript
class Child extends 부모클래스명{
  /*  constructor(){
        super();

        this._name;
    }
    */
    _name: string = "shj1";
}
~~~

<p style="font-size:14px;">
getter/setter : 접근제어자를 private 로 할경우 외부에서 접근 불가하므로 get / set 메서드 활용
</p>

~~~TypeScript
class Student {
    private _name: string;
    private _age: number;
    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
     }
    get name() {
        return this._name;
    }
    set name(name: string) {
        this._name = `${name}`;
    }
}
const student1: Student = new Student('shj', 26);
const student2: Student = new Student('lhj', 26);
const student3: Student = new Student('chj', 26);

console.log(student1);
console.log(student2);
console.log(student3);
~~~

<p style="font-size:14px;">
추상클래스 : 자바처럼 완성되지 않은 클래스이다. abstract를 붙여준다/.
</p>

~~~typeScript
abstract class AStudent {
    protected _name: string = 'Mark';
    abstract setName(name: string): void;
}

class Student extends AStudent {
    setName(name: string): void {
        this._name = name;
    }
}
// const student1 = new AStudent(); 추상클래스의 객체 생성은 불가
const student1 = new Student();
~~~
