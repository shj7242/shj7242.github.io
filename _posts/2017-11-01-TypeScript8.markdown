---
layout:     post
title:      "[TypeScript] Decorator"

date:       2017-11-01 16:55:00
author:     "신희준"
header-img: "img/background.jpg"
comments: true
---

<head>
 <meta property="og:type" content="website">
 <meta property="og:title" content="타입스크립트 디코레이터(Decorator)">
 <meta property="og:description" content="타입스크립트 디코레이터(Decorator)">
 <meta property="og:url" content="http://shj7242.github.io/2017/11/01/TypeScript8/">

 <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="타입스크립트 디코레이터(Decorator)">
  <meta name="twitter:description" content="타입스크립트 디코레이터(Decorator)">
  <meta name="FACEBOOK:domain" content="http://shj7242.github.io/2017/11/01/TypeScript8/">
  <meta name="facebook:card" content="summary">
   <meta name="facebook:title" content="타입스크립트 디코레이터(Decorator)">
   <meta name="facebook:description" content="타입스크립트 디코레이터(Decorator)">
   <meta name="facebook:domain" content="http://shj7242.github.io/2017/11/01/TypeScript8/">


 </head>

<br>
<H4 style ="font-weight:bold; color:black;"> 타입스크립트 코리아 이웅재님의 강의 참조</H4>
<br>
<H4 style ="font-weight:bold; color : black">2017 - 11 - 01 (수)</H4>
<li>Class Decorator</li>
<li>Method Decorator</li>
<li>Property Decorator</li>
<li>Parameter Decorator</li>
<br>

> Decorator 초기 셋팅

* 프로젝트 생성
  - $ mkdir ts-decorator
  - $ cd ts-decorator
  - $ yarn init -y
* typescript 설치
  - $ yarn add typescript -d
* tsconfig 설정
  - $ node_modules/.bin/tsc --init  (tsconfig 파일 생성)
  -  tsconfig 에서 experimentalDecorators 주석 해제
  -  tsconfig 에서 outdir을 주석 해제 후 dist로 준다.
* test.ts 파일 하나 생성

* vscode 컴파일 설정
  - ctrl + shift + b 로 compile 설정 변경
  - {workspaceRoot}/node_modules/.bin/tsc
  - ctrl + shift + b 로 compile

<br>

>Class Decorator ( 모든 데코레이터는 function 임 )

<br>

~~~typescript
function hello(constructorFn: Function){
    console.log(constructorFn)
}

function helloFactory(show: boolean){
    if(show){
    return hello;
    }else{
        return null;
    }

}

@helloFactory(true)
class Person{

}

//ctrl + shift +b (컴파일)
//node dist/test.js 실행시 결과 : [Function: Person]
~~~

~~~typescript
function hello(constructFn: Function){
    constructFn.prototype.hello = function(){
        console.log('hello');
    }
}


@hello
class Person{

}

const p = new Person();
(<any>p).hello();
//hello 출력
~~~

<br>

> Method 데코레이터

<br>

~~~typescript
function hello(constructFn: Function){
    constructFn.prototype.hello = function(){
        console.log('hello');
    }
}

function editable(canBeEditable : boolean){
    return function(target: any, propName: string, description : PropertyDescriptor){
        console.log(target)// 출력 : Person {}
        console.log(propName) // 출력 : hello
        console.log(description)
        /* description 출력결과
        { value: [Function: hello],
          writable: true,
          enumerable: false,
          configurable: true }

        */
        description.writable = canBeEditable;
    }
}

class Person{
    constructor(){
        console.log('hello')
    }

    @editable(false)
    hello(){
        console.log('hello')
    }
}


const p = new Person();
p.hello()
p.hello = function(){
    console.log('world');
}

p.hello();
~~~

<br>

> property Decorator

<br>

~~~typescript
function writable(canBewritable: boolean){
    //target은 있으나 description이 없음
    return function(target : any, propName : string):any {
        console.log(target); // Person{} 출력
        console.log(propName); // Person 의 속성명이 나옴


        return{
            writable: canBewritable
        };
    }
}


class Person{
   @writable(true) // false 가 되면 에러가 남
    name : string = 'shj';
        constructor(){
            console.log('new Person()')
        }

}


const p = new Person();
console.log(p.name)
~~~

<br>

> parameter Decorator

<br>

~~~typescript
function print(target: any, methodName : string, paramIndex: number){
    console.log(target) // person{}
    console.log(methodName) // hello
    console.log(paramIndex) // 0

}


class Person{
    private _name : string;
    private _age: number;
//age 필드에 @print 데코레이터 추가
    constructor(name: string, @print age: number){
        this._name = name;
        this._age = age;
    }
//@message 에  @print 데코레이터 추가
    hello(@print message: string){
        console.log(message);
    }

}

~~~

<br><br>

* class decorator , method decorator , property decorator, parameter decorator 모두 데코레이터를 구현하는 메서드의 시그니쳐(매개 변수 비슷한 듯)가 다르다. 그러므로 잘 알아둘 필요가 있다고 한다.
