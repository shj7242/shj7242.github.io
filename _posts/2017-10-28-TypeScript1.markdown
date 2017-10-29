---
layout:     post
title:      "[TypeScript] 개발환경 구축"

date:       2017-10-28 11:40:00
author:     "신희준"
header-img: "img/post-bg-02.jpg"
comments: true
---

<meta name="description" content="Spring스프링 애너테이션 Annotation정리 @Autowired,@Qualifier,@Resource,@Component,@PostConstruct,@Aspect
,@AOP,@POINTCUT,@AROUND,@ADVICE,@RequestMapping,@REPOSITORY,@SERVICE,@COMPONENT
">

<br>
<H4 style ="font-weight:bold; color : orange">2017 - 10 - 28 (토)</H4>
<li>TypeScript</li>
<li>개발환경 구축</li>
<li>컴파일러 사용</li>
<li>tslint 플러그인</li>
<br>

>TypeScript란?

<p style="font-size:14px">
타입 스크립트 - 하나의 프로그래밍 언어이다. 자바스크립트와 호환된다
<br><br>
전통적인 컴파일 언어와 조금 다르다. 트랜스파일 언어라고도한다.
<br><br>
컴파일러가 필요하다.
<br><br>
정적타입 언어 ?
<br>
-미리 타입을 지정해놈
<br><br>
동적 타입 언어 ?
<br>
-미리 정해놓은 타입이 없다.
<br><br>
전통적인 컴파일언어
<br>
- c , c++ , java c# 이 대표적
<br><br>
타입스크립트가 컴파일러에의해 자바스크립트 코드로 바뀐다.
</p>
<br>

>필요한 설치 파일

<p style="font-size:14px">
노드 js 다운로드 (자바스크립트를 해석하고  OS레벨에서의 API를 제공하는 서버측면의 자바스크립트 런타임 환경)
<br>
<a href="https://nodejs.org">https://nodejs.org</a>
<br>
nvm 다운로드 ( nvm 은 node.js 버전을 관리해준다. )
<br>
<a href="https://github.com/coreybutler/nvm-windows">https://github.com/coreybutler/nvm-windows</a>
사용할 editor : visul studio code
<br>
<br>
터미널을 위해 기존에 사용하던 git bash사용
<br><br>
설치가 완료되었으면 기본적인 작업이 마무리 되었다.
<br><br>
</p>

>개발환경 구축

<p style="font-size:14px">
1 . 프로젝트 폴더를 하나 만든다.    
<br><br>
2 . 프로젝트 폴더에서 init : $ npm init -y
<br><br>
3 . typescript 설치 : $ npm i typescript     
<br><br>
4 . 컴파일 테스트
<br><br>
</p>

~~~typescript
class Test {
   public static getTest(): string {
       return "test";
   }
}
Test.getTest();
~~~

<p style="font-size:14px">
위처럼 간단하게 test.ts 라는 명칭의 파일을 하나 생성한다.
<br><br>
아래의 package.json 파일에서 transpile 을 tsc로 두고
<br><br>
git bash에서 $ ./node_modules/.bin/tsc test.ts  을 입력하면 컴파일이되어 test.js 가 생성된다.
</p>

~~~xml
{
"name": "tsproject",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {

"transpile" : "tsc",
"test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [],
"author": "",
"license": "ISC"
}
~~~

<p style="font-size:14px">
5 . node 버전을 6.10.3으로 맞추고자한다. : $ nvm install 6.10.3
<br><br>
6 . 해당 버전을 사용하기 : $ nvm use 6.10.3
<br><br>
7 . node 버전 확인 : $ node -v
<br><br>
8 . typescript 설치 : $ npm i typescript
<br><br>
</p>

> 컴파일러 예제

<p style="font-size:14px">
<b style="font-color:red">컴파일 방법 1</b>
<br><br>
npm 스크립트로 하는 경우 - package.json 안에 scripts의  transpile 값을 tsc로 설정
<br>
터미널 : $ ./node_modules/.bin/tsc ts파일명
<br>
<br>
<b style="font-color:red">컴파일 방법 2</b>
<br><br>
package.json 안에 scripts 의 transpile 값을 tsc ts파일 명 으로 설정
<br>
터미널 : $ npm run transpile
<br><br>
watch mode로 컴파일하기
package.json 에 devwatch 라는 속성을 추가한후 값을  tsc -w로 준다.
<br>
터미널 : npm run devwatch  ( watch 모드가 실행된다.)
<br>
터미널 : node test.ts  
</p>

>tslint 플러그인

<p style ="font-size:14px">
visual studio 에서 에러를 잡기위해서 플러그인을 설치한다.
<br><br>
- marketplace 에서 ext install tslint를 검색하여 IDE에 적용한다(Visual studio code)
<br><br>
</p>

>컴파일러 옵션

<p style = "font-size:14px">
<a href="https://json.schemastore.org/tsconfig">json.schemastore.org/tsconfig</a> 에서 옵션을 읽어보고 tsconfig.json에 추가하면된다.
<br><br>
</p>

compileOnsave -
true/false (default가 false)

compileOptions

셋다 설정이 없으면 ts파일을 전부다 컴파일한다.
files -
include - 와일드카드 (\*) 사용시 .ts / .tsx / .d ts 만 include
exclude - glob 패턴이다. (gitignore 처럼)  설정을 안할 경우 (node_modules, bower_components, jspm_packages,<outDir>) 을 default로 제외한다. outdir은 항상 제외한다.


최상위 프로퍼티

compileOptions : type

types 와 typeRoots

@types 이란?
typeScript 2.0 부터 사용가능해진 내장 type definition 시스템
아무설정을 안할 경우 node_modules/@types 라는 모든 경로를 찾아서 사용한다.
typeRoots 를 사용할 경우에는 배열 안에 들어있는 경로들 아래서만 가져온다.
types 를 사용하면 배열안의 모듈 혹은 ./node_modules/@types/ 안에있는 모듈 이름에서 찾아온다.
[]빈 배열을 넣는다는 건 이 시스템을 이용하지 않겠다는 뜻이다.
typeRoots 와 types 를 같이사용하지 않는다.


typing 관련 깃허브
https://github.com/typings/typings

target 과 lib

target
-빌드의 결과물을 어떤 버전으로 관리할지
- 지정을 안할경우 디폴트 es3

lib
- 기본type definition 라이브러리를 어떤 것을 사용할 것인지.
- lib를 지정하지 않을 때
target이 'es3' 이고 디폴트로 lib.d ts 를 사용한다.
target이  'es5' 이면 디폴트로 dom, es5, scripthost를 사용한다
target이 ex6 이면 디폴트로  dom, es6, dom.iterable, scripthost를 사용한다.
lib를 지정하면 그 lib배열로만 라이브러리를 사용한다.

빈 [] => no definition found 발생

outdir과 outfiledir


module
- 컴파일 된 모듈의 결과물을 어떤 모듈 시스템으로 할지를 결정한다.
- target 이 es6이면 es6이 디폴트이다.
- target이 es6이 아니면  common.js 가 디폴트이다.
- amd 나 system 와 사용하려면 outFile 이 지정되어야한다.
- es6 이나 es2015 를 사용하기 위해 , target 이 es5이하여야한다.

moduleResolution
-ts 소스에서 모듈을 사용하는 방식을 지정해야 한다.
-classic 아니면 node 이다.
- commonJS 일 때만 NODE라고 생각하면 된다.

paths 와 basUrl
- 상대 경로 방식이 아닌 baseUrl 로 꼭지점과 paths 안의 키/벨류 모듈을 가져가는 방식
baseUrl - 가져올때 쓴다.

rootDirs
- 배열 안에서 상대 경로를 찾는 방식
