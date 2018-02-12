---
layout:     post
title:      "[JavaScript] 캡슐화/상속/클래스"

date:       2017-10-31 13:55:00
author:     "신희준"
header-img: "img/background.jpg"
comments: true
---
<head>
 <meta property="og:type" content="website">
 <meta property="og:title" content="JavaScript 캡슐화 , 상속, 클래스">
 <meta property="og:description" content="JavaScript 캡슐화 , 상속, 클래스">
 <meta property="og:url" content="http://shj7242.github.io/2017/10/31/JavaScript6/">

 <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="JavaScript 캡슐화 , 상속, 클래스">
  <meta name="twitter:description" content="JavaScript 캡슐화 , 상속, 클래스">
  <meta name="FACEBOOK:domain" content="http://shj7242.github.io/2017/10/31/JavaScript6/">
  <meta name="facebook:card" content="summary">
   <meta name="facebook:title" content="JavaScript 캡슐화 , 상속, 클래스">
   <meta name="facebook:description" content="JavaScript 캡슐화 , 상속, 클래스">
   <meta name="facebook:domain" content="http://shj7242.github.io/2017/10/31/JavaScript6/">


 </head>




<meta name="description" content="javascript, javascript 객체, javascript프로토타입, javascript생성자,javascript함수,javascript생성자함수
">
<br>
<H4 style ="font-weight:bold; color:black;"> 모덴웹을 위한 Javascript, JQuery입문 [윤인성 지음] 참고</H4>
<br>
<H4 style ="font-weight:bold; color : black">2017 - 10 - 31 (화)</H4>
<li>캡슐화</li>
<li>상속</li>
<li>클래스</li>
<br>
<br>


>캡슐화

<br>

* 자바스크립틔의 캡슐화(encapsulation) : 캡슐화 과정 사례

~~~javascript
//캡슐화 전

function Rectangle(width, height){
  this.width = width;
  this.height = height;
}

Rectangle.prototype.getArea = function(){
  return this.width * this.height;
}
var rectangle1 = new Rectangle(3,5)  //
var rectangle2 = new Rectangle(-2,3)  // rectangle2에 width 의 길이가 -2 가 들어갔다 논리상 불가하다.

console.log(rectangle1.getArea()) // 15가 출력
console.log(rectangle2.getArea()) // 출력은 -6으로 된다.
~~~

~~~javascript
//캡슐화 후
function Rectangle(w,h){
  var width = w;
  var height = h;

  this.getWidth = function (){ return this.width;}
  this.getHeight = function(){return this.height;}
  this.setWidth = function(w){ this.width = w;}
  this.setHeight = function(h){ this.height =h;}
};
//이처럼 셋팅을 한다. //getter / setter 를 활용한다.
// 하지만 GETTER/SETTER 를 활용하는것이 캡슐화를 의미하는 것은아니다.
// 캡슐화는 만일의 상황을 대비해서 특정 속성 및 메서드를 사용자가 사용할 수 없게 숨겨둔 것이다.
~~~

> 상속

<br>
상속은 기존의 생성자 함수나 객체를 기반으로 새로운 생성자 함수나 객체를 쉽게만드는것 , <br>기존 객체에서 속성과 메서드를 물려받는 것 의 의미이다. <br>(다른 프로그래밍 언어의 상속과 비슷한 것 같아 보인다.)
<br>

* 상속 예제

~~~JavaScript
//정사각형 생성자
/*
function Square(length){
  this.width = length;
  this.height = length;
    this.getWidth = function (){ return this.width;}
  this.getHeight = function(){return this.height;}
  this.setWidth = function(w){ this.width = w;}
  this.setHeight = function(h){ this.height =h;}
}

Square.prototype.getArea = function(){
  return this.getWidth()*this.getHeight();
}

var square1 = new Square(5);

console.log(square1.getArea()) // 25 출력
----------------------------------------------
*/
// 직사각형 생성자
function Rectangle(w,h){
  var width = w;
  var height = h;

  this.getWidth = function (){ return width;}
  this.getHeight = function(){return height;}
  this.setWidth = function(w){ width = w;}
  this.setHeight = function(h){ height =h;}

}

Rectangle.prototype.getArea = function(){
  return this.getWidth() * this.getHeight();
}

var rectangle = new Rectangle(3,4);

console.log(rectangle.getArea())
console.log(rectangle.getWidth()); // 12출력

//위에 생성한 정사각형 생성자를 지우고 상속을 받을 수 있는 생성자 생성

function Square(length){
  this.base = Rectangle; // Rectangle 생성자의 속성을 Square 에 추가하는 작업
  this.base(length,length); //Rectangle 생성자의 속성 width, height 에 각각 length 값 대입

}

Square.prototype = Rectangle.prototype; // Square 의 프로토타입을 Rectangle을 가리키게한다.
Square.prototype.constructor = Square; // Square의 프로토타입 생성자는 Square 이다.

var square = new Square(5);

console.log(square.getArea()) //25 출력
~~~

<br>

* instanceof로 확인

~~~javascript
var square = new Square(5);
alert(square instanceof Rectangle); //true 반환
~~~

<br>

>클래스

<br>

*  ECMAScript6 에서는 객체지향 언어를 두가지로 구분한다. : 클래스 기반 / 프로토타입 기반 객체지향언어

<br>

*  클래스 선언 vs 생성자 함수 선언

<br>

~~~javascript
// 클래스 선언
class User{
  constructor(id,pw){
  this.id = id;
  this.pw = pw;
  }
}
const user = new User('shj','1234');
-----------------------------------
// 생성자 함수선언
function User(id,pw){
  this.id = id;
  this.pw = pw;
}
var user = new User('shj','1234');

//비교했을 때 큰 차이는 없다.
~~~

<br>

* 메서드 선언

<br>

~~~javascript
class User{
  constructor(id,pw,major){
  this.id = id;
  this.pw = pw;
  this.major = major;
  }
  study(){
    return this.major +"를 공부하고 있습니다."
  }
}
const user = new User('shj','1234','Computer Science');
console.log(user.study());
~~~

<br>

* getter/setter

<br>

~~~javascript
class User{
  constructor(id,pw,major){
  this._id = id;       // 인스턴스 변수앞에 '_' 접두어가 붙었다.
  this._pw = pw;        
  // 자바에서 private로 접근제어를 하는 것과 비슷한 의미로 쓰인다. 접근제어를 하는 것은 아니다.
  this._major = major;
  }
  //getter/setter
  get id(){return this._id;}
  set id(id){this._id = id;}
  get pw(){return this._pw;}
  set pw(pw){this._pw = pw;}
  get major(){return this._major;}
  set major(major){this._major = major;}
}
const user = new User('shj','1234','Computer Science');
console.log(user.id); // 'shj' 출력
~~~

<br>

* class 에서의 상속

<br>

~~~javascript
class Unit{
  constructor(hp,power){
    this._hp = hp;
    this._power = power;
  }
  get hp(){return this._hp;}
  set hp(hp){this._hp = hp;}
  get power(){return this._power;}
  set power(power){this._power = power;}

  attack(){ return power+"파워로 공격";}  
}

class Tank extends Unit{
  constructor(){
    super(100,50);
    //console.log(this);
    /* 출력값:
    [object Object] {
     _hp: 100,
     _power: 50
    }    
    */
  }

  sizMod(){
    if(this._power===50){
      this._power +=30;}
    else{
      alert('이미 시즈모드 상태입니다');
    }
          }
  tankStatus(){
    if(this._power==50){
      return "normal mode"
    }else{
      return "size mode"
    }
  }
  sizModRemove(){
    if(this._power===80){
        super._power -=30;
    }else{
      alert('이미 시즈모드가 해제되었습니다.')
    }
    }
}

const tank1 = new Tank();
const tank2 = new Tank();
const tank3 = new Tank();
console.log(tank1.power);
tank1.sizMod(); //시즈모드 실행
console.log(tank1.power); //시즈모드 실행 후 공격력 30 증가
console.log(tank2.power); // 시즈모드 하지 않은 탱크는 공격력 50
tank3.sizModRemove(); // 이미 시즈모드가 해제되어있다는 alert

~~~
