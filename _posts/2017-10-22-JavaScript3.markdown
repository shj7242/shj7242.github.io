---
layout:     post
title:      "[JavaScript] this/생성자"

date:       2017-10-22 11:30:00
author:     "신희준"
header-img: "img/post-bg-02.jpg"
comments: true
---

<meta name="description" content="Spring스프링 애너테이션 Annotation정리 @Autowired,@Qualifier,@Resource,@Component,@PostConstruct,@Aspect
,@AOP,@POINTCUT,@AROUND,@ADVICE,@RequestMapping,@REPOSITORY,@SERVICE,@COMPONENT
">

<br>
<H4 style ="font-weight:bold; color : orange">2017 - 10 - 22 (일)</H4>
<li>this</li>
<li>생성자</li>
<br>
<H4 style ="font-weight:bold; color:orange;">인사이드 자바스크립트(송형주, 고현준 지음 한빛 미디어) 참조</H4>
<br>

<h5 style = "font-size: 17px; font-weight : bold;">1 .. this</h5>

<br>
<p style="font-size:14px;">
<b>this 바인딩</b> : 자바스크립트에서 함수를 호출할 경우 해당 함수 내부의 this는 전역 객체에 바인딩 된다.
<br> 자바스크립트 실행시 전역객체는 window 객체이다.
</p>
<br>

~~~javascript
var abc = 3;
console.log(abc); //3
console.log(window.abc); //3

var test = 'this is test';
console.log(window.test); //this is test

var test1 = function(){
  console.log(this.test); //this.test는 'this is test' 문구이다. 즉 this 는 test를 가리킨다.
}

test1(); //this is test
~~~


~~~javascript
var value = 100;

var myObject = {

  value  : 1,
  func1 : function(){this.value +=1; console.log(this.value);
                      func2= function(){
                        this.value +=1;
                        console.log(this.value);
                        func3 = function(){
                          this.value +=1;
                          console.log(this.value);
                        }
                        func3();
                      }
                      func2();
  }
};

myObject.func1();

//출력값

//2               // 메서드로 호출된 형태에서 this는 자신을 호출한 객체를 가리키기에 value =1을 불러옴.
//101             // 내부함수의 경우 window.value 의 형태로 불러오게되어 value  = 100 에 1 씩 더하게 된다.
//102
~~~

<br>
<p style="font-size:14px">
위에서 내부함수가 this를 통해 접근할 수 없는 한계를 극복하기위해 아래처럼 코드를 짠다.
</p>
<br>

~~~JavaScript
var value =100;

var myObject = {

  value  : 1,
  func1 : function(){
    var that = this;
    this.value +=1;
    console.log(that.value);

    func2= function(){
      that.value +=1;
      console.log(that.value);

      func3 = function(){
        that.value +=1;
        console.log(that.value);
      }
      func3();
    }
    func2();
  }
};

myObject.func1();

//출력값

//2  //that 변수에 this 의 값을 넣는다 ( 2 )
//3  // this를 참조하는 that의 값에 1씩 더해주어 원하던 결과를 찾는다 ( 3 )
//4
~~~

<br>

<h5 style = "font-size: 17px; font-weight : bold;">2 .. 생성자</h5>



<br>
<p style="font-size:14px">
생성자 함수를 호출할 때 this 바인딩.
</p>
<br>

~~~javascript
var Person = function (name) {
  this.name = name;
};

var foo = new Person('foo');
console.log(foo.name); // 출력값 : foo
~~~

<br>
<p style="font-size:14px">
<b>객체 생성의 두가지 방법 :</b> 객체 리터럴방식 / 생성자 함수
<br>
리터럴 방식으로 객체를 생성할 경우 prototype 의 프로퍼티가 Object이다. (Object.prototype)
<br>
생성자 방식으로 객체를 생성할 경우 prototype 의 프로퍼티가 Person(해당 함수명)이다. (Person.prototype)

</p>
<br>


~~~javascript
//리터럴방식
var foo = {
  name : 'foo',
  age : 35,
  gender : 'man'
};
console.dir(foo);

//생성자 함수
function Person(name, age, gender, position){
  this.name = name;
  this.age = age;
  this.gender = gender;
}

//Person 생성자 함수를 이용해 bar 객체 baz 객체 생성

var bar = new Person('bar', 33, 'woman');
var baz = new Person('baz', 32, 'man');

console.dir(bar);
console.dir(baz);
~~~

<br>
<p style="font-size:14px">
new를 붙이지 않고 생성자 함수 호출
</p>
<br>

~~~javascript
var qux = Person('qux', 20, 'man');
console.log(qux);  // 출력값 : undefined (new 생성자가 없다.)

console.log(window.name);    // 출력값 : qux
console.log(window.age);     // 출력값 : 20
console.log(window.gender);  // 출력값 : man

//window 객체에 동적으로 name, age, gender 프로퍼티가 생성된다.
~~~

<br>
<p style="font-size:14px">
강제로 인스턴스 생성하기
</p>
<br>

~~~JavaScript
funtion A(arg){
  if(!(this.instanceof A))
    return new A(arg);
  this.value = arg? arg : 0;
}

var a = new A(100);
var b = A(10);

console.log(a.value);        // 출력값 : 100
console.log(b.value);        // 출력값 : 10
console.log(global.value);   // 출력값 : undefined
~~~

<br>
<p style="font-size:14px">
apply() 메서드를 이용한 명시적 this 바인딩
</p>
<br>

~~~javascript
function Person(name, age, gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var foo = {};

Person.apply(foo, ['foo',30,'man'])  //Person.apply 를 Person.call로 바꾸어 사용할 수 있다.
console.log(foo);
//출력값 :  {name : 'foo', age : 30, gender : 'man'}
~~~

<br>
<p style="font-size:14px">
<b>apply() 메서드를 활용하여 slice() 사용하기</b>
</p>
<br>

~~~JavaScript
function myFunction(){
  console.dir(arguments);

  var args = Arrray.prototype.slice.apply(arguments);
  console.dir(args);
}

myFunction(1,2,3);
~~~

<br>
<p style="font-size:14px">
<b>함수 리턴</b>
</p>
<br>

~~~javascript
//리턴이 없는 함수
var noReturnFunc = function(){
  console.log('this function has no return statement.');
};

var result = noReturnFunc();
console.log(result); //undefined 값이 리턴된다.
~~~


<br>
<p style="font-size:14px">
<b>생성자 함수에서 리턴값을 명시적으로 다른객체를 반환</b>
</p>
<br>

~~~javascript
// 생성자 함수의 반환형이 명시적인 다른 객체를 반환할 경우. new 연산자로 객체를 생성하여도 반환한 객체타입에서 변형되지 않는다.
function Person(name, age, gender){
  this.name = name;
  this.age = age;
  this.gender = gender;

  return {name : 'bar', age : 20, gender : 'woman'};
}

var foo = new Person('foo', 30, 'man');
console.log(foo); // 출력값 : {name : 'bar', age : 20, gender : 'woman'}
~~~



<br>
<p style="font-size:14px">
<b>생성자 함수에서 명시적으로 기본타입 리턴할 경우</b>
</p>
<br>

~~~javascript

// 생성자 함수의 반환형이 기본형일 경우 new연산자로 객체 생성시 return값과 관련없이 객체의 값이 생성시 지정한 값으로 바뀐다.
function Person(name, age, gender){
  this.name = name;
  this.age =age;
  this.gender = gender;

  return 100;
}
var foo = new Person('foo', 30, 'man');
console.log(foo); //출력값  {name: "foo", age: 30, gender: "man"}
~~~
