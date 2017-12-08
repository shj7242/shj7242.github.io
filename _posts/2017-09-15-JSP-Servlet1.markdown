---
layout:     post
title:      "[JSP/SERVLET] JSP-TOMCAT-SERVLET START"
comments: true
date:       2017-09-15 21:00:00
author:     "신희준"
header-img: "img/post-bg-02.jpg"
---

<head>
 <meta property="og:type" content="website">
 <meta property="og:title" content="ECLIPSE J2EE-TOMCAT 설치 , SERVLET , JSP 개념 ">
 <meta property="og:description" content=" ECLIPSE J2EE-TOMCAT 설치 , SERVLET , JSP 개념 ">
 <meta property="og:url" content="http://shj7242.github.io/2017/09/15/JSP-Servlet1/">

 <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="ECLIPSE J2EE-TOMCAT 설치 , SERVLET , JSP 개념 ">
  <meta name="twitter:description" content=" ECLIPSE J2EE-TOMCAT 설치 , SERVLET , JSP 개념 ">
  <meta name="FACEBOOK:domain" content="http://shj7242.github.io/2017/09/15/JSP-Servlet1/">
  <meta name="facebook:card" content="summary">
   <meta name="facebook:title" content="ECLIPSE J2EE-TOMCAT 설치 , SERVLET , JSP 개념 ">
   <meta name="facebook:description" content=" ECLIPSE J2EE-TOMCAT 설치 , SERVLET , JSP 개념 ">
   <meta name="facebook:domain" content="http://shj7242.github.io/2017/09/15/JSP-Servlet1/">


 </head>




<H4 style ="font-weight:bold; color : black">2017 - 09 - 15 (금)</H4>
<li>ECLIPSE J2EE-TOMCAT 설치 </li>
<li>SERVLET , JSP </li>
<li>PRACTICE </li>

<H4 style ="font-weight:bold; color:black;">기본사항 정리</H4>



<h5 style = "font-size: 17px; font-weight : bold;">1 . Eclipse j2ee-tomcat install</h5>


<p style="font-size:13px;">1 . Eclipse j2ee version 설치를 한다.(설치시 기존 Eclipse와 겹칠 수 있으므로 C드라이브에 폴더하나를 생성해서 설치해준다.)<br><br>2 . Tomcat을 설치한다.(본 교육에서는 8.5ver설치)<br><br> 3 . Eclipse를 실행하여 Dynamic web Project를 생성한다.(생성시 runtime에서 설치한 tomcat폴더 경로를 지정해준다.)<br><br>4 . 이 후 프로젝트의 기본 인코딩을 UTF-8로 변경해준다.<br><br>5 . webContent폴더에서 새로운 html파일을 한개 생성한다.<br><br>6 . webContent의 properties에 들어가 context root를 '/'로 지정해준다.<br><br>7. server.xml파일을 더블클릭하여 Connector의 port번호를 8080에서 다른 포트로 변경해준다.(인터넷은 80번)<br><br>8. 서버를 실행시켜 확인한다.</p>


<h5 style = "font-size: 17px; font-weight : bold;">2 .Servlet</h5>


~~~Servlet
<servlet>
<servlet-name>Hello</servlet-name>
<servlet-class>abc.HelloServlet</servlet-class>
</servlet>
<servlet-mapping>
<servlet-name>Hello</servlet-name>
<url-pattern>/HelloServlet</url-pattern>
</servlet-mapping>
~~~


<p><b style="color:red;">Mapping</b> 방법 예제 : Helloservlet이라는 하나의 servlet생성한다. package이름은 간단히 abc로 지정.</p>
<p>주소창에 http://localhost/HelloServlet 을 쳤을 떄 HelloServlet의 이름을 가진 서블릿을 찾아감 Servlet매핑시 확장자가 일치해야한다. name은 내부적인 이름이다. web.xml을 이용한 sevlet맵핑 방식 또는 annotation 방식 둘중에 하나만 사용해야한다. 둘다 사용할 시에 오류가 난다. </p>

<p>기존에 사용하던 CGI에서 보다 Servlet을 사용하는 가장 큰 이유는 Servlet이 멀티스레드를 지원하기 떄문이라고 한다.</p>

<h5 style = "font-size: 17px; font-weight : bold;">3 .practice</h5>

<p>Servlet에 값을 넘기는 연습을 해보았다. 우선 webContent(root)에 이전날 만들어논 로그인폼 및 회원가입 폼들을 추가하여 이를활용하여 실습해보았다.</p>

<p>우선 LoginAction Servlet을 만든다. doGet()메소드로 html form태그를 통해 보낸 id, pw값을 저장하기위한 String타입 참조변수 id와 pw를 생성하고 저장한다.</p>



~~~HTML
<form action="/LoginAction" method="GET">
  <input type="text" name="id" value="">
  <input type="password" name="pw" value="">
  <input type="submit" value="로그인">
</form>
~~~


~~~java
@WebServlet("/LoginAction")
public class loginAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public loginAction() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    int count = 0;//Servlet은 멀티스레드로 돌아가기에 refresh될 때마다 값이 1씩증가함.
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
		String id = request.getParameter("id");
		String pw = request.getParameter("pw");
    //getParameter로 값을 받아온다.
    PrintWriter out = response.getWriter();
		out.println("<DOCTYPE html>");
		out.println("<html>");
		out.println("<head>");
		out.println("</head>");
		out.println("<body>");
		out.println("<h1>hello, "+id+".</h1>");
		out.println("<h1>hello,"+pw+".</h1>");
		out.println("</body>");
		out.println("</html>");
	}
}
~~~


<img src="{{ site.baseurl }}/img/servlettest1.JPG" alt="Post Sample Image">



<p> 위에 실습 이미지는 GET을 통해 값을 보낸 형태이다. GET방식은 URL에 쿼리스트링이 모두 표시된다. POST방식을 활용하면 이 쿼리스트링을 감춘다.</p>


~~~JSP
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
String id = request.getParameter("id");
String pw = request.getParameter("pw");
%>
<h1>Hello <%=id %>.</h1>
<h2>Your password, <%=pw %></h2>
</body>
</html>
~~~


<p>위의 스크립트는 JSP로 간단히 값을 받아오도록 하였다. JSP와 Servlet은 매우 비슷해 보인다. <b style="color:red">MVC(Modeling, view, controller) Model1</b>은 jsp에서 모두 처리하였지만 Model2방식은 Servlet이 controller를 전담하고 jsp가 view를 처리한다. </p>

<img src="{{ site.baseurl }}/img/mvc1.JPG" alt="Post Sample Image">
