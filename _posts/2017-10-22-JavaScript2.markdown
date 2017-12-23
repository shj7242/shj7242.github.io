---
layout:     post
title:      "[JavaScript] 함수"

date:       2017-10-22 11:30:00
author:     "신희준"
header-img: "img/post-bg-02.jpg"
comments: true
---

<head>
 <meta property="og:type" content="website">
 <meta property="og:title" content="자바스크립트(JavaScript) 함수">
 <meta property="og:description" content="자바스크립트(JavaScript) 함수">
 <meta property="og:url" content="http://shj7242.github.io/2017/10/22/JavaScript2/">

 <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="자바스크립트(JavaScript) 함수">
  <meta name="twitter:description" content="자바스크립트(JavaScript) 함수">
  <meta name="FACEBOOK:domain" content="http://shj7242.github.io/2017/10/22/JavaScript2/">
  <meta name="facebook:card" content="summary">
   <meta name="facebook:title" content="자바스크립트(JavaScript) 함수">
   <meta name="facebook:description" content="자바스크립트(JavaScript) 함수">
   <meta name="facebook:domain" content="http://shj7242.github.io/2017/10/22/JavaScript2/">


 </head>

<br>
<H4 style ="font-weight:bold; color : black">2017 - 10 - 22 (일)</H4>
<li>함수</li>

<br>
<H4 style ="font-weight:bold; color:black;">인사이드 자바스크립트(송형주, 고현준 지음 한빛 미디어) 참조</H4>
<br>

<h5 style = "font-size: 17px; font-weight : bold;">1 .. 함수</h5>

<br>
<p style = "font-size:14px;">
<b>함수 리터럴 :</b> 자바스크립트에서 함수도 일반 객체처럼 값으로 취급된다. 함수 리터럴을 이용해 함수를 생성할 수 있다.
</p>
<br>


~~~javascript
function add(x,y){
  return x+y;
}
~~~

<br>
<p style = "font-size:14px;">
<b>함수 표현식 :</b> 기본적인 함수 선언식과 비슷하다. 자바와 비교하자면 함수 표현식보다는 선언식이 좀더 친근 할 수 있다.
</p>
<br>

~~~javascript
var add = function(x, y){
  return x+y;
}
~~~

<br>
<p style = "font-size:14px;">
<b>가명 함수 표현식 :</b> 익명 함수를 이용한 함수 표현식이다.
</p>
<br>

~~~javascript
var add = function sum(x,y){return x + y;}
console.log(add(2,3));  // 출력값 : 5
console.log(sum(2,3));  // 출력값 : 에러발생
// 함수표현식 선언에 사용된 함수선언은 접근이 불가능하다.
~~~

<br>
<p style = "font-size:14px;">
<b>재귀호출 :</b> 함수안에서 자신을(함수) 다시 호출하는 방법
</p>
<br>

~~~JavaScript
//예제로 factorial 메소드를 만들면 다음과 같다. 하지만 재귀호출은 표현상 깔끔할 수 있지만 성능은 떨어진다고 한다.
var factorialVar = function factorial(n) {
  if(n <= 1){
    return 1;
  }
  return n *factorial(n-1);
};

console.log(factorialVar(3)); // 출력값 : 6
console.log(factorial(3));  // 출력값 : 에러반환
~~~

<br>
<p style = "font-size:14px;">
<b>Function()생성자 함수를 활용한 함수 생성 :</b> 자바스크립트 함수도 Function()이라는 기본 내장 생성자 함수로부터 생성된 객체라고 볼 수 있다. 이 방법은 자주 사용되지 않는 방법이다.
</p>
<br>


~~~JavaScript
var add = new Function('x','y','return x+y');
console.log(add(1,2));
~~~

<br>
<p style = "font-size:14px;">
<b>함수 호이스팅 :</b> 자바스크립트에서 함수를 생성하는 방식마다 코드의 유효범위가 다름
</p>
<br>


~~~javascript
add(2,3); // 5가 출력
function add(x,y){
  return x+y;
}
// 함수 선언문 형태로 선언될 경우 유효범위가 코드 첫번쨰부더 시작한다.

add1(2,3);//에러반환
var add1 = function (x,y){ return x+y;}
add1(2,3);// 5가 출력
// 함수 표현식의 경우 함수 생성전에 호출한 함수의 값은 실행되지 않는다.
~~~


<br>
<p style = "font-size:14px;">
<b>함수도 객체 :</b> 함수 자체가 일반 객체처럼 프로퍼티를 가질 수 있다.
</p>
<br>

~~~javascript
function add(x,y){
  return x+y;
}

add.result = add(3,2);
add.status = 'OK';

console.log(add.result); //5출력
console.log(add.status); //OK 출력
~~~


<br>
<p style = "font-size:14px;">
<b>함수는 값 : </b>함수가 일반 객체처럼 취급될수 있다했는데 자바스크립트에서 함수는 다른말로 일급 객체라고도 부른다.<br>
함수는 숫자나 문자열처럼 변수나 프로퍼티의 값으로 할당할 수 있다.
</p>
<br>

~~~JavaScript
var bar = function(){return 100;}
console.log(bar()) // 100출력

var obj = {};
obj.baz = function(){return 200;}
console.log(obj.baz()); //200출력

var ex = function(func){
  func();
}

ex(function()){
  console.log("Function can be used as the argument");
}
~~~


<br>
<p style = "font-size:14px;">
함수를 리턴값으로 활용가능.
</p>
<br>

~~~javascript
var func1 = function(){return 100;}
var func2 = function(){return func1();}
console.log(func2); //100출력

var func3 = function(){
  return function(){
    console.log('this function is the return value');
  }
}

var abc = func3();
abc(); // this function is the return value 출력
~~~

<br>
<p style = "font-size:14px;">
<b>자바스크립트 함수의 length 프로퍼티 :</b> 매개변수의 개수를 세어준다.
</p>
<br>

~~~javascript
function func0(){
}
function func1(){
    return x;
}
function func1(x){
    return x;}
function func2(x,y){ return x+y;}
function func3(x,y,z){return x+y+z;}
console.log('func0.length -' + func0.length); // function0.length -  0
console.log('func1.length -' + func1.length); // function!.length -  1
console.log('func2.length -' + func2.length); // function2.length -  2
console.log('func3.length -' + func3.length); // function3.length -  3
~~~

<br>
<p style = "font-size:14px;">
<b>prototype 프로퍼티 :</b> 모든 함수는 객체로서 prototype 프로퍼티를 가진다. 자바스크립트에서 함수는
생성 시 자신과 연결된 프로토타입 객체를 동시에 생성한다.
</p>
<br>

~~~javascript
MyFunction(){
  return true;
}
console.dir(MyFunction.prototype);

//결과 출력
Object
constructor

ƒ MyFunction()
__proto__


console.dir(MyFunction.prototype.constructor);

//결과 출력
ƒ Myfunction(){
    return true}
~~~


<br>
<p style = "font-size:14px;">
<b>콜백함수 :</b> 자바스크립트 함수 표현식에서 함수이름은 꼭 붙이지 않아도된다.<br> 즉, 함수의 이름을 지정하지 않아도 함수가 정의되며 이러한 함수가 익명함수이며 익명함수는 대표적인 콜백함수이다.<br> 어떤 이벤트가 발생했거나 특정시점에 도달했을때 시스템에서 호출하여 사용한다.
</p>
<br>

~~~html
<!--콜백함수의 예-->
<!DOCTYPE html>
<html><body>
  <script>
    window.onload =function(){
      alert('this is the callback function');
    };
  </script>
</body></html>
~~~


<br>
<p style = "font-size:14px;">
<b>즉시 실행 함수 :</b> 함수를 정의함과 동시에 바로 실행하는 함수
</p>
<br>

~~~javascript
(function (name){
  console.log('this is immediate function' +name);
})('abc');
// 즉시 함수를 만드는 방법

//1 . 함수 리터럴인 function(x){} 을 () 로 둘러 싼다.
//2 . 안에 내용을 바로실행시키며 () 가 닫히는 지점에 매개변수를 넣어준다.
~~~


<br>
<p style = "font-size:14px;">
<b>내부함수</b> : 함수 내부에 정의된 함수를 내부함수라고 한다.
</p>
<br>

~~~javascript
function parent(){
  var a = 100;
  var b = 200;

  function child(){
    var b = 300;
    console.log(a);
    console.log(b);
  }
  child();
}
parent(); // 100, 200이 출력된다.
child(); // 에러가 출력된다. // 함수 내부에 정의된 함수는 호출이 불가능하다.
~~~

<br>
<p style = "font-size:14px;">
<b>함수 스코프 외부에서 내부함수 호출하기</b>
</p>
<br>

~~~javascript
function parent(){
  var a = 100;
  var child = function(){
    console.log(a);
  }
  return child()
}

var inner = parent(); // parent 의 반환형은 child() 이다. child() 를 inner 변수에 대입하면 inner 변수는 child() 함수와 동일한 형태를 띄게 된다.

inner();
~~~

<br>
<p style = "font-size:14px;">
<b>함수를 리턴하는 함수.</b>
</p>
<br>

~~~JavaScript
var self = function(){
  console.log('a');
  return function(){
    console.log('b');
  }
}
self = self(); // self() 에서 a가 출력되고 function(){console.log('b')} 를 리턴한다.
self(); //위에서 리턴한 함수가 self() 가 되어 b가 출력된다.
~~~

<br>
<p style = "font-size:14px;">
<b>arguments 객체 :</b> 이 객체를 활용하여 런타임시 호출된 매개변수의 갯수를 확인할 수 있다.
</p>
<br>

~~~javascript
function abc(x,y){
  console.dir(arguments);
  x+y;
}
abc(3);
abc(4,3);
abc(4,2,1);

//arguments 객체 활용하기

function sum(){
  var result = 0;

  for(var i =0; i <=arguments.length; i ++){
    result= result +i;
  }
  return result;
}
console.log(sum(1,2,3)); // 6출력
console.log(sum(1,2,3,4)); // 10출력
~~~
