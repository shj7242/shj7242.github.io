---
layout:     post
title:      "자바 IO/NIO"

date:       2023-01-30 19:41:00
author:     "신희준"
header-img: "img/background.jpg"
comments: true
---

<head>
 <meta property="og:type" content="자바IO/NIO">
 <meta property="og:title" content="자바IO/NIO">
 <meta property="og:description" content="자바IO/NIO">
 <meta property="og:url" content="http://shj7242.github.io/2023/01/30/javaIoNio/">

 <meta name="twitter:card" content="자바IO/NIO">
  <meta name="twitter:title" content="자바IO/NIO">
  <meta name="twitter:description" content="자바IO/NIO">
  <meta name="FACEBOOK:domain" content="http://shj7242.github.io/2023/01/30/javaIoNio/">
  <meta name="facebook:card" content="자바IO/NIO">
   <meta name="facebook:title" content="자바IO/NIO">
   <meta name="facebook:description" content="자바IO/NIO">
   <meta name="facebook:domain" content="http://shj7242.github.io/2023/01/30/javaIoNio/">


 </head>

<br>
<H4 style ="font-weight:bold; color:black;"> </H4>

<H4 style ="font-weight:bold; color : black">2023 - 01 - 30 (월)</H4>
<br>

# 자바 IO, NIO


|---------|---------|
|IO|NIO|
|입출력 - 스트림|입출력 - 채널|     
|Non - Buffer|Buffer|
|Blocking IO|Non-Blocking IO 가능(Blocking IO 지원)|
|동기|비동기 가능(동기도 지원)|



# 스트림 기반 / 채널 기반

* 스트림은 데이터가 들어온 순서대로 이동하는 단방향의 '통로' 이다.

  * IO는 스트림 베이스

    + 스트림은 입력(InputStream) 출력(OutputStream) 스트림이 구분되며 단방향으로 흐른다.
  
    + 스트림을 통해 데이터는 byte 또는 byte[] 형태로 이동한다.

* 채널은 데이터가 이동하는 양방향 '통로'라고 보면 된다.

  * NIO는 채널 베이스

    + 채널은 데이터의 양방향 통로이다. 입력과 출력이 구분되지 않으며 (입출력을 위해 InputStream, OutputStream을 만들필요 없음)

    + 채널은 버퍼를 통해서만 읽고(read) 쓰기(write)를 할 수 있다.

# Non Buffer / Buffer

* 버퍼는 임시로 데이터를 담아둘 수 있는 큐. 스트림의 경우 데이터의 입력단위로 전송한다. 버퍼는 중간에서 입력을 모아 한번에 출력한다.

  * IO는 Non-Buffer
  
    + IO는 스트림에 담긴 데이터를 즉시 처리한다.(입력단위로 처리하며 버퍼에 저장하지 않는다.)
  
  * NIO는 Buffer

    + nio는 버퍼에 데이터를 저장하여 버퍼의 공간이 가득 차거나 설정한 조건을 만족한 경우 처리한다.

# Blocking IO / Non - Blocking IO



<p style = "color: #006dd7">예를 들어 폐쇄된 주방의 직원은 손님의 주문에 대한 요리가 완료 되고 다음 요청에 의한 요리를 진행합니다.</p>

<br>

<p style = "color: #006dd7"> 반대로 오픈 주방의 경우 손님의 주문에 대한 요리하면서 완료하기 전에 바에 앉아 있는 사람의 요청을 받아 중간에 처리할 수 있습니다.</p>

<br>

* Blocking IO

  * Blocking IO 는 읽기 또는 쓰기를 수행하는 쓰레드가 작업이 종료되기 전까지 해당 쓰레드에서 I/O를 블로킹합니다.
  
* Non Blocking IO

  * Non Blocking IO 는 읽기 또는 쓰기를 수행하는 쓰레드가 작업이 종료되기 전에도 해당 쓰레드에 I/O를 블로킹 하지 않습니다. 
  
  * 단일 쓰레드에서 여러 입출력 채널을 관리합니다.

# 동기 / 비동기

* IO의 경우 비동기 요청을 지원하지 않는다.

* NIO의 경우 비동기 요청을 지원한다.


  ~~~java
  
  //IO
  InputStream input = ...; 
  BufferedReader reader = new BufferedReader(new InputStreamReader(input));
  String 재료구매 = reader.readLine();
  String 재료손질 = reader.readLine();
  String 요리 = reader.readLine();
  
  //NIO
  ByteBuffer buffer = ByteBuffer.allocate(48);
  
  int bytesRead = inChannel.read(buffer);
  
  while(!bufferFull(bytesRead)) {
    bytesRead = inChannel.read(buffer);
  }
  ~~~


***

> 정리

* IO와 NIO의 선택

NIO는 불특정 다수의 클라이언트 연결 또는 멀티 파일들을 넌블로킹이나 비동기로 처리할 수 있다.

- 과도한 스레드 생성(비용의 무분별한 증가)을 피하고 스레드를 효과적으로 사용한다는 점이 큰 장점이다.

- 운영체제의 버퍼(다이렉트 버퍼)를 이용한 입출력이 가능하기 때문에 입출력 성능 향상

- NIO는 연결 클라이언트 수가 많고, 하나의 입출력 처리 작업이 오래 걸리지 않는 경우에 사용하는것이 좋다.

- 스레드에서 입출력 처리가 오래 걸린다면 대기하는 작업의 수가 늘어나기 때문에 제한된 스레드로 처리하는 것이 불편할 수 있다.


대용량의 데이터 처리의 경우 IO가 좋다.

- 연결 클라이언트 수가 적고 전송되는 데이터가 대용량이면서 순차적으로 처리될 필요성이 있는 경우 IO로 서버를 구현하는 것이 좋다.

- NIO는 버퍼 할당 크기도 문제되고, 모든 입출력 작업에 버퍼를 무조건 사용해야 하므로 받은 즉시 처리하는 IO보다 복잡하다.

***
