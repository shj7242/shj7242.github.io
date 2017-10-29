---
layout:     post
title:      "[TypeScript] 인터페이스"

date:       2017-10-30 11:50:00
author:     "신희준"
header-img: "img/post-bg-02.jpg"
comments: true
---

<meta name="description" content="Spring스프링 애너테이션 Annotation정리 @Autowired,@Qualifier,@Resource,@Component,@PostConstruct,@Aspect
,@AOP,@POINTCUT,@AROUND,@ADVICE,@RequestMapping,@REPOSITORY,@SERVICE,@COMPONENT
">
<br>
<H4 style ="font-weight:bold; color:orange;"> 타입스크립트 코리아 이웅재님의 강의 참조</H4>
<br>
<H4 style ="font-weight:bold; color : orange">2017 - 10 - 30 (월)</H4>
<li>인터페이스</li>

<br>

>인터페이스

<p style="font-size:14px;">
인터페이스
<br><br>
자바의 인터페이스와 아주 비슷하다
</p>

~~~TypeScript
interface Person{
    name: string;
    age : number;
    //인터페이스 정의시 다음과 같이하면 인터페이스를 구현할 경우 다음 속성을 빼도 된다.
    //age? : number;

}
const person:Person = {
    name: 'mark',
    age: 23 // 인터페이스에서 정의해준 속성은 모두 구현해야함.
};
function hello(p: Person): void{
    console.log("안녕하세요 ${p.name} 입니다.");
}
~~~

~~~javascript
//컴파일 된 js
var person = {
    name: 'mark',
    age: 23
};
function hello(p) {
    console.log("안녕하세요 ${p.name} 입니다.");
} // 보다시피 인터페이스는 컴파일된 javascript 코드에 보이지 않는다.
~~~



<p style="font-size:14px;">
옵셔널 타입
</p>

~~~typescript
interface Person{
   name: string;
[index: string]: string;
//person의 프로퍼티티 명에에 따라서서
//property.어떤명칭칭 이이 오더라도도 String 으로
}
const person:Person = {
    name: 'mark',

};
person.anybody = "Anna";
person.anybody2 = "Anna";
~~~


<p style ="font-size:14px;">
인터페이스에서 함수 정의
</p>

~~~typescript
interface Person{
   name: string;
   hello(): void; //void 형의 hello() 함수를 인터페이스에 정의
}
const person:Person = {
    name: 'mark',
    hello: function(){} //인터페이스 구현
};


//반환타입이 있는 function
interface Person{
   name: string;
   hello(): string;
}
const person:Person = {
    name: 'mark',
    hello: function () {
        return 'hello';
    }
};

class implements interface// (클래스가 인터페이스를 상속) - 자바와 매우 비슷하다.

interface IPerson{
   name: string;
   hello(): void;
}
class Person implements IPerson{ // 인터페이스 구현클래스
    name: string = 'shj';
    hello(): void {
       console.log("안녕하세요")
   }
}
~~~

~~~typescript

interface IPerson{
   name: string;
   hello(): void;
}

class Person implements IPerson{
    name: string = 'shj';
    constructor(name: string) {
        this.name = name;
    }

    hello(): void {
       console.log("안녕하세요 ${this.name} 입니다.")
    }
    public hi(): void{
       console.log("안녕 ${this.name} 임.")
   }
}
const person: IPerson = new Person('mark');
person.hello
//person.hi  person: Person 으로 할경우 가능

interface HelloPerson{
    (name: string, age?: number): void;
}
// function명 : 타입
let helloPerson: HelloPerson = function (name: string) {
    console.log(name);

}
helloPerson('mark');

interface StringArray{
    [index: number]: string;
}
interface StringDictionary{
    [index: string]: string;
    //name: number; 에러가 난다. name:string;으로 써주자
}
//StringDictionary 인터페이스는는
//string이어야함함.

const sd: StringDictionary = {};
sd.hundred = "백";


interface Korean extends Person{
    city: string;
}
~~~
