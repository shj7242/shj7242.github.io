---
layout:     post
title:      "[JSP/SERVLET] 인터넷과 네트워크이해+TOMCAT에러+Servlet연습"
comments: true
date:       2017-09-18 21:00:00
author:     "신희준"
header-img: "img/background.jpg"
---

<head>
 <meta property="og:type" content="website">
 <meta property="og:title" content="인터넷과 네트워크의 이해, TOMCAT 에러, SERVLET 실습 ">
 <meta property="og:description" content=" 인터넷과 네트워크의 이해, TOMCAT 에러, SERVLET 실습 ">
 <meta property="og:url" content="http://shj7242.github.io/2017/09/18/TOMCAT-NETWORK/">

 <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="인터넷과 네트워크의 이해, TOMCAT 에러, SERVLET 실습 ">
  <meta name="twitter:description" content=" 인터넷과 네트워크의 이해, TOMCAT 에러, SERVLET 실습 ">
  <meta name="FACEBOOK:domain" content="http://shj7242.github.io/2017/09/18/TOMCAT-NETWORK/">
  <meta name="facebook:card" content="summary">
   <meta name="facebook:title" content="인터넷과 네트워크의 이해, TOMCAT 에러, SERVLET 실습 ">
   <meta name="facebook:description" content=" 인터넷과 네트워크의 이해, TOMCAT 에러, SERVLET 실습 ">
   <meta name="facebook:domain" content="http://shj7242.github.io/2017/09/18/TOMCAT-NETWORK/">


 </head>



<H4 style ="font-weight:bold; color : black">2017 - 09 - 18 (월)</H4>
<li>인터넷과 네트워크의 이해</li>
<li>TOMCAT 에러 </li>
<li>Servlet연습</li>

<H4 style ="font-weight:bold; color:black;">기본사항 정리</H4>



<h5 style = "font-size: 17px; font-weight : bold;">1 . 인터넷과 네트워크의 이해</h5>


<p>
 인터넷은 수많은 라우터들이 연결되어있는 통신망, 거미줄 같은것이다. 이 인터넷을 활용한 가장 대표적인 사례는 <b style="color:red;">WWW(World Wide Web)</b>이다. 보통 우리는 WEB으로 줄여서 말하며 현재 받고있는 교육에서는 이 인터넷을 활용한 WEB플랫폼을 통해 Application을 구축하고자 한다. 보통 우리는 Explorer, Chrome 등의 브라우저에 들어가 주소창에 WWW.NAVER.COM, WWW.GOOGLE.COM 처럼 Domain Name을 입력하여 해당 서버에 요청(Request)를 보낸다. 이 때 DNS서버는 일치하는 IP를 찾아준다. Request 받은 서버는 Client 에게 요청한 HTML문서를 전해주고 이 HTML문서가 브라우저상에 랜더링 되는 것이다.  
<BR>
 이 인터넷을 이해하기 위해 몇몇 계층 및 프로토콜을 알 필요가 있다.
 <BR><br>
 <b style = "color :red">첫번째,</b> ISO5계층의 가장 상위에 속하는 <b>Application Layer</b> 의 프로토콜이다. HTTP(웹문서 request,response), SMTP(전자메일에 사용), FTP(파일전송에 사용) 같은 프로토콜이 있고 우리가 가장 중점적으로 보아야할 것은 HTTP라 생각이 된다.<BR><BR>
 <B STYLE="COLOR:RED">두번째,</B> Application의 하위 계층으로서 Transport Layer 가 있다. 이 계층에서는 대표적으로 목적지 PORT number를 지정해주며 현재 TCP와 UDP 프로토콜을 사용한다. UDP는 비 신뢰적 전송(Unreliable Transport)을 제공하며 대표적으로 게임이나 Streaming 서비스 처럼 어느정도 패킷의 유실을 허용하는 분야에 쓰인다. TCP 는 신뢰적 전송(Reliable Transport) 을 제공하여 SMTP,HTTP 처럼 데이터 유실을 허용하지 않는 서비스에 사용되어진다. (TCP가 패킷에 UDP보다 더 많은 정보가 들어간다. UDP가 속도가 빠르다.)
<BR><BR>
 <b style="color:red">세번째, </b>Transport layer의 하위계층으로 Network Layer가 있다. 이 계층의 프로토콜은 IP(Internet Protocol)이 대표적이다. IP는 기존 IPv4를 사용했으나 인터넷보급의 대중화 및 사용량이 증대되면서 IPv6를 사용하게 되었다.

 이외에도 Link layer , Physical layer에 대해서도 알아둘 필요가 있을것 같다.      
</p><BR>


<h5 style = "font-size: 17px; font-weight : bold;">2 .Tomcat 에러</h5>


<p><b style="color:red;">Several ports (8005, 8080, 8009) required by Tomcat v7.0 Server at localhost are already in use. [출처] Several ports (8005, 8080, 8009) required by Tomcat v7.0 Server at localhost are already in use.</b> 에러가 발생했다..
<br>해당 포트의 서버가 이미 실행되있다고 나온다. <br>
해결과정 : <b>C:\apache-tomcat-8.5.16\conf</b> 에서 server.xml 문서에서 ctrl + f 로 8080으로되어있는 포트를 찾는다. ( 8080 은 아파치 서버 포트이다. ) 이 포트번호를 80으로 변경한 후 저장한다. 이후 기존 실행한 서버를 종료하기 위해 <b>C:\apache-tomcat-8.5.16\bin</b> 에서 shutdown.bat을 실행한다. 이 후 다시 실행하니 정상 작동이 되었다. <br>
에러 발생 이유 : 이전에 서버를 키고 종료를 하지 않았었다. 이 점을 유의할 필요가 있을 것</p>


<h5 style = "font-size: 17px; font-weight : bold;">3 . Servlet 연습</h5>
<p>Servlet예제1 : 현재시간 출력하기</p>


~~~java
@WebServlet("/now")   
public class DateServlet extends HttpServlet {
	@Override                     
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html");    //어떤 형식의 데이터로 보낼지 타입을 정해준다.
		Date now = new Date();                 
		PrintWriter out = resp.getWriter();   //화면 출력을 위해 out객체 생성
		out.println(now);   
	}

~~~


<p>Servlet 예제2 : 주사위 화면에 랜덤으로 출력하기</p>


~~~java
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html");    
		PrintWriter out = resp.getWriter();  
		int rnd = (int)((Math.random()*6));
		int rnd1 = (int)((Math.random()*6));
		ArrayList <String>abc= new<String> ArrayList();
		String a1 = "./image/dice1.jpg";  //String 형태의 객체들에 경로 지정
		String a2 = "./image/dice2.jpg";
		String a3 = "./image/dice3.jpg";
		String a4 = "./image/dice4.jpg";
		String a5 = "./image/dice5.jpg";
		String a6 = "./image/dice6.jpg";
		abc.add(a1); //abc ArrayList객체에 이미지 경로 삽입.
		abc.add(a2);
		abc.add(a3);
		abc.add(a4);
		abc.add(a5);
		abc.add(a6);
		out.println("<DOCTYPE html>");
		out.println("<html>");
		out.println("<head>");
		out.println("</head>");
		out.println("<body>");
		out.println(rnd);   
		out.println(rnd1);
		out.println("<img src="+abc.get(rnd).toString()+">");
		out.println("<img src="+abc.get(rnd1).toString()+">");
		out.println("<br>");
		out.println("</body>");
		out.println("</html>"); // 확실히 Servlet은 View측면에서 비효율적이라는 생각이 들었다...
	}
~~~
