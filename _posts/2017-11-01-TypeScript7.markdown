---
layout:     post
title:      "[TypeScript] Iterator"

date:       2017-11-01 15:55:00
author:     "신희준"
header-img: "img/post-bg-02.jpg"
comments: true
---

<meta name="description" content="Spring스프링 애너테이션 Annotation정리 @Autowired,@Qualifier,@Resource,@Component,@PostConstruct,@Aspect
,@AOP,@POINTCUT,@AROUND,@ADVICE,@RequestMapping,@REPOSITORY,@SERVICE,@COMPONENT
">
<br>
<H4 style ="font-weight:bold; color:black;"> 타입스크립트 코리아 이웅재님의 강의 참조</H4>
<br>
<H4 style ="font-weight:bold; color : black">2017 - 11 - 01 (수)</H4>
<li>Iterator</li>

<br>

> ES6 까지의  for .. of / for .. in

for .. of

<br>

* ES3
  - for(var i =0; i <array.length; i++)
* EX5
  - array.forEach : return 으로 순회를 탈출할 수 없다라는 단점
* ex6
  - for(const item of array) : 배열에서만 사용 가능

<br>

for .. in : 문제가 많아 일반적인 경우 외엔 사용 X

<br>

* 배열을 순회할 때는 사용하지 말자 / 객체를 순회할 때 사용
  - index 가 number가 아니라 string으로 나온다.
  - for ..of 가 나은 것 같음.

* 객체를 순회할 때 사용
  - for ( const prop of Object.key(obj)) 사용 가능


> Iterator 란 ?

보통 Custom 객체는 Iterable 하지 않다.
Iterable 이 가능한 것을 다루기위한 것
<br>
<br>
Array, Map, Set, String, Int32Array, Uint32Array 등등 (자바의 Collections 에 Iterable 인터페이스 처럼 내장 구현체가 있다.)

<br>
<br>
Iterable 한 객체의 Symbol.iterator 할 수 있다.

<br>

* Symbol.iterator ( symbol 자체도 ES6에서 나온 것임 )

<br>
CUSTOM 객체에도 Symbol.iterator 함수를 쓰기위해서는
target 을 ES6 로 해야만 함.
<br>
Iterator 를 implements 하고 이것을 구현해줘야 하긴 한다.


* Custom iterable 만들기

~~~typescript
class CustomIterable implements Iterable<string>{
    private _array: Array<string> = ['first', 'sencond'];

    [Symbol.iterator](){
        var nextIndex = 0;


        return{
            next:() =>{

                return{
                    value : this._array[nextIndex++],
                    done : nextIndex > this._array.length
                }
            }
        }
    }
}

const cIterable = new CustomIterable();

for(const item of cIterable){
    console.log(item);
}
~~~
