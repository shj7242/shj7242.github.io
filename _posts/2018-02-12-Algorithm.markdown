---
layout:     post
title:      "[알고리즘] 백준 알고리즘 for 문"

date:       2018-02-12 18:55:00
author:     "신희준"
header-img: "img/background.jpg"
comments: true
---

<head>
 <meta property="og:type" content="백준알고리즘 for문">
 <meta property="og:title" content="백준알고리즘 for문">
 <meta property="og:description" content="백준알고리즘 for문">
 <meta property="og:url" content="http://shj7242.github.io/2018/02/12/Algorithm/">

 <meta name="twitter:card" content="백준알고리즘 for문">
  <meta name="twitter:title" content="백준알고리즘 for문">
  <meta name="twitter:description" content="백준알고리즘 for문">
  <meta name="FACEBOOK:domain" content="http://shj7242.github.io/2018/02/12/Algorithm/">
  <meta name="facebook:card" content="백준알고리즘 for문">
   <meta name="facebook:title" content="백준알고리즘 for문">
   <meta name="facebook:description" content="백준알고리즘 for문">
   <meta name="facebook:domain" content="http://shj7242.github.io/2018/02/12/Algorithm/">


 </head>

<br>
<H4 style ="font-weight:bold; color:black;"> </H4>

<H4 style ="font-weight:bold; color : black">2018 - 02 - 12 (목)</H4>
<br>


> 백준알고리즘 for문

<br>

지난주에 국비지원 과정을 마치고 구직전까지 체계적으로 공부하고자 몇가지 목표를 세웠다.

<br>

1 . 하루에 자료구조 , 컴퓨터 구조 등 전공관련 기본서를 2시간씩 투자해서 읽어보기.

2 . 백준 알고리즘 단계별로 하루에 한챕터씩 풀어보기.

오늘은 계획을 시작하는날로

https://www.acmicpc.net/step 에서 3번인 for 문 부터 풀기 시작했다. ( 이전 1 , 2 단계는 생각보다 금방 풀렸다. )

<br>


문제번호 : 2438 [https://www.acmicpc.net/problem/2438]

* 해당 문제는 스캐너 객체로 특정 정수(행 수)를 입력받아 별찍는 문제로 한행이 증가할 때마다 별이 하나씩 붙는 코드를 짜는 것이다.

~~~java
// 별찍기
Scanner sc = new Scanner(System.in);
int num = sc.nextInt();
String temp = "*";
String sum = "";
for(int i =0; i<num; i ++ ) {

  sum = sum+temp;
  System.out.println(sum);

}
~~~

문제번호 : 2439 [https://www.acmicpc.net/problem/2439]

* 해당 문제는 위에문제가 좌측 정렬 별찍기였다면 이번엔 우측으로 정렬한 별찍기 문제이다.

~~~java
Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		String temp = "*";
		String sum = "";


		for(int i =num; i > 0; i --) {

			for(int j = 0; j < i-1; j ++) {
				System.out.print(" ");
			}
			sum = sum+temp;
			System.out.println(sum);
		}		
~~~

문제번호 : 2441 [https://www.acmicpc.net/problem/2441]

* 두번째 푼 for 문 문제와 달리 해당 문제는 위부터 내림차순으로 별이 찍히며 마찬가지로 우측으로 정렬된다.

~~~java
Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		String sum = "";

		for(int j = 0; j <=num; j++) {
			System.out.print(sum);
			sum = sum+ " ";
			for(int i =num; i > j; i --) {
				System.out.print("*");
			}
			System.out.println();
		}
~~~

문제번호 : 1924 [https://www.acmicpc.net/problem/1924]

* 본 문제는 요일을 구하는 문제로 년도는 2007년이라고 고정시킨 후 스캐너 객체로 입력된 두개의 값을 순서대로 월 , 일로 판단하여 요일을 계산하는 문제이다.
( 참고로 2007년에는 1, 3, 5, 7, 8, 10, 12월은 31일까지, 4, 6, 9, 11월은 30일까지, 2월은 28일까지 있다. )

~~~JAVA
Scanner sc = new Scanner(System.in);

		int num1 = sc.nextInt();
		int num2 = sc.nextInt();
		String temp [] = {"SUN", "MON", "TUE" , "WED" , "THU" , "FRI" , "SAT"};
		int max = 0;
		String day = "";

		for(int i =1; i <= num1; i ++) {

			if(num1!=1) {

				if((i==1||i==3||i==5||i==7||i==8||i==10||i==12)&&i!=num1) {
					max = max + 31;
				}else if(i ==2&&i!=num1){
					max = max + 28;
				}else if(i!=num1&&(i==4||i==6||i==9||i==11)){
					max = max + 30;
				}

			}

		}
		max = max+ num2;
		int mod = max%7;

		day = temp[mod];
		System.out.println(day);
~~~

문제번호 : 8393 [https://www.acmicpc.net/problem/8393]

* 본 문제는 1~ 입력된 값 N 까지의 합을 구하는 문제이다. 사실 이문제는 가우스 수를 생각하면서 풀었다.. 하지만 for 문으로 한번에 돌리는게 성능은 더 좋은거 같았다.

~~~JAVA
Scanner sc = new Scanner(System.in);

int num1 = sc.nextInt();
int temp = num1/2;
if(num1%2==0) {
  System.out.println(temp*(1+num1));
}else {
  System.out.println(temp*(1+num1)+(temp+1));
}

~~~

문제번호 : 11720 [https://www.acmicpc.net/problem/11720]

* 본 문제는 스캐너객체로 다음에 입력하고자 하는 숫자의 자릿수를 입력받는다. 그 후 앞서 입력한 자릿수에 맞는 크기의 정수를 입력하면 각 수의 합을 더하는 문제이다. 두번째 수를 String 으로 받아 한문자씩 쪼갠 뒤 형변환 후 연산을 했다.

~~~java
Scanner sc = new Scanner(System.in);

		int size = sc.nextInt();

		String tmpNum = sc.next();

		int sum = 0;
		for(int i =0; i <tmpNum.length(); i ++) {
			sum = sum+ Integer.parseInt(tmpNum.substring(i, i+1));

		}

		System.out.println(sum);
~~~

문제번호 : 11721 [https://www.acmicpc.net/problem/11721]

* 본 문제는 입력받은 문자를 10 글자씩 끊어서 줄바꿈 해주어 출력하는 알고리즘이다.

~~~java
Scanner sc = new Scanner(System.in);
		String msg = sc.next();
		int one = msg.length()%10;
		int count = msg.length()/10;
		if(one ==0) {
			for(int i =0; i < msg.length(); i+=10) {

				System.out.println(msg.substring(i, i+10));

			}

		}else {
			for(int i =0; i < count*10 ; i+=10) {

				System.out.println(msg.substring(i, i+10));

			}
			System.out.println(msg.substring(count*10));
		}
		
~~~
