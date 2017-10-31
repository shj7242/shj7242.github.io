---
layout:     post
title:      "[Front-end] CSS / Form 태그"
comments: true
date:       2017-09-13 19:00:00
author:     "신희준"
header-img: "img/post-bg-02.jpg"
---

<p>익일 활용할 HTML form태그를 사용하여 화면을 구성해 봄.</p>

<H4 style ="font-weight:bold; color : black">2017 - 09 - 13 (수)</H4>
<li>CSS 속성</li>
<li>form태그를 포함한 간단한 화면</li>
<li>Bootstrap</li>

<H4 style ="font-weight:bold; color:black;">기본사항 정리</H4>


<h5 style = "font-size: 17px; font-weight : bold;">1 . CSS 속성</h5>

<img src="{{ site.baseurl }}/img/boxmodel.JPG" alt="Post Sample Image">

<p style="float:left;">옆에 있는 사진은 CSS의 <b style="color:red; font-weight:bold;">박스모델</b>을 나타낸다(브라우저의 개발자 도구에서 확인할 수 있음) 보다시피 어떠한 박스의 테두리부터 다른 박스까지의 거리를 Margin, 박스안에 있는 박스까지의 거리를 Padding이라고 할 수 있다. 즉, 패딩까지를 하나의 박스의 너비라고 할 수 있다. </p>

~~~css
div{margin-top: 10px;}
div1{margin: 10px 20px 10px 20px;}
div2{margin: 0 auto;}
~~~
<p>margin속성을 사용하는 경우는 다음과 같으며 top, right, bottom, left 순으로 할당한다. 마지막 div2에 적용한 margin 속성은 해당 박스를 가운데에 위치시키기 위함이다.</p>

<p>유용한 CSS속성</p>


~~~CSS
div{opacity:0.5;}/*투명도를 조절해주는 속성 */

img {border: 1px solid #ddd; border-radius: 4px; padding: 5px; width: 150px;}
/*이미지를 썸네일로 가져오기*/

div1{position: absoulte; /*가장 가까운 위치의 고정된 조상으로부터 상대위치에 배치*/}
div2{position: static;}/*고정위치, 위치관련 속성의 영향을 안받음*/
div3{position: relative;}/*상대위치, 위치관련 속성으로 원래 위치에서 이동가능*/
div4{visibility: hidden;}/*요소의 영역을 보이지 않게함.(자리를 차지하지 않는다.)*/
div5{display: none;}/*요소의 영역을 보이지 않게함.(자리는 차지한다.)*/
div6{float:left;}/*요소의 위치를 해당 인라인의 가장 왼쪽에 위치한다 right를 하면 가장 오른쪽*/
div7{clear:both;}/*해당요소와 같은 라인의 다른 요소들을 모두 다음라인으로 내린다.*/
~~~


<p>이외에도 수많은 속성들이 존재한다. 몇몇 속성은 특정 브라우저에서 지원하기는 하지만 현재 CSS는 상당한 기능을 제공한다. <a href="http://www.w3schools.com">w3school</a>에서 필요한 속성들을 찾아서 사용하자.</p>


<h5 style = "font-size: 17px; font-weight : bold;">2 . 익일 활용할 Form태그 실습</h5>
<iframe src="/htmlpractice/index.html" style ="width : 100%; height : 300px;">
</iframe>

<p>본 화면을 활용하여 추 후 JSP와 DB를 활용하여 데이터를 주고받는 실습 예정</p>

<h5 style = "font-size: 17px; font-weight : bold;">3. Bootstrap</h5>
<p>프론트 엔드에는 좀더 생산성을 높혀줄 수 있는 프레임워크가 있다. 대표적으로 Bootstrap을 오늘 사용해보았다. Responsive web design이나 기본적인 구조, 테마등을 제공한다.  </p>

<img src="{{ site.baseurl }}/img/bootStrap.JPG" alt="Post Sample Image">

<p>위 화면처럼 다양한 용도의 폼을 제작해 두었으며 이를 용도에 맞게 가져다 사용할 수 있다. 커스터마이징 만 한다면 곧 바로 사용할 수 있으며 그만큼 생산성은 올라갈 것으로 판단된다. <a href="http://bootstrapk.com/">bootstrap</a> 링크를 활용하자. </p>
