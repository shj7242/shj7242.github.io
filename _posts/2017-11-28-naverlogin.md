---
layout: post
title: '네이버 로그인 구현'
author: chanhee.kim
date: 2017-11-28 17:37
tags: [project]
image: /files/covers/blog.jpg
---

### 네이버로그인 구현

<img src="{{ site.baseurl }}/assets/images/developer.PNG" alt="naverlogin">

1. 네이버 Developers에서 서비스 URL, Callback URL 설정

```
<dependency>
	<groupId>com.github.scribejava</groupId>
	<artifactId>scribejava-core</artifactId>
	<version>3.3.0</version>
</dependency>

<dependency>
	<groupId>commons-lang</groupId>
	<artifactId>commons-lang</artifactId>
	<version>2.3</version>
</dependency>

<dependency>
	<groupId>com.googlecode.json-simple</groupId>
	<artifactId>json-simple</artifactId>
	<version>1.1.1</version>
</dependency>
```

2. pom.xml 추가


``` java
@RequestMapping(value = "/naverLogin", method = RequestMethod.GET)
	public ModelAndView naverLogin(HttpSession session) {
		/* 네아로 인증 URL을 생성하기 위하여 getAuthorizationUrl을 호출 */
		String naverAuthUrl = naverLoginBO.getAuthorizationUrl(session);

		return new ModelAndView("login/naverLogin", "url", naverAuthUrl);
	}

	@RequestMapping(value = "/callback", method = RequestMethod.GET)
	public String callback(@RequestParam String code, @RequestParam String state, HttpSession session, Model model, UserVO vo) throws Exception {
		/* 네아로 인증이 성공적으로 완료되면 code 파라미터가 전달되며 이를 통해 access token을 발급 */
		logger.info("naver login............");
		JsonParser json = new JsonParser();

		OAuth2AccessToken oauthToken = naverLoginBO.getAccessToken(session, code, state);
		String apiResult = naverLoginBO.getUserProfile(oauthToken);
		vo = json.changeJson(apiResult); // vo에 userEmail, userGender, userNaver 저장

		if (service.selectNaver(vo) > 0) { // 세션만들기
			session.setAttribute("login", vo);
		} else {
			service.insertNaver(vo);
			session.setAttribute("login", vo);
		}

		return "/login/callback";
	}

```

3. LoginController.java 설정


``` java
NaverLoginApi.java
---------------
import com.github.scribejava.core.builder.api.DefaultApi20;

public class NaverLoginApi extends DefaultApi20 {
	protected NaverLoginApi() {
	}

	private static class InstanceHolder {
		private static final NaverLoginApi INSTANCE = new NaverLoginApi();
	}

	public static NaverLoginApi instance() {
		return InstanceHolder.INSTANCE;
	}

	@Override
	public String getAccessTokenEndpoint() {
		return "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code";
	}

	@Override
	protected String getAuthorizationBaseUrl() {
		return "https://nid.naver.com/oauth2.0/authorize";
	}
}

naverLoginBO.java
-------------
import java.io.IOException;
import java.util.UUID;

import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;

import com.github.scribejava.core.builder.ServiceBuilder;
import com.github.scribejava.core.model.OAuth2AccessToken;
import com.github.scribejava.core.model.OAuthRequest;
import com.github.scribejava.core.model.Response;
import com.github.scribejava.core.model.Verb;
import com.github.scribejava.core.oauth.OAuth20Service;

public class NaverLoginBO {
	private final static String CLIENT_ID = "네이버 디벨로퍼에서 확인";
	private final static String CLIENT_SECRET = "네이버 디벨로퍼에서 확인";
	private final static String REDIRECT_URI = "http://localhost/login/callback";
	private final static String SESSION_STATE = "oauth_state";
	/* 프로필 조회 API URL */
	private final static String PROFILE_API_URL = "https://openapi.naver.com/v1/nid/me";

	/* 네아로 인증 URL 생성 Method */
	public String getAuthorizationUrl(HttpSession session) {

		/* 세션 유효성 검증을 위하여 난수를 생성 */
		String state = generateRandomString();
		/* 생성한 난수 값을 session에 저장 */
		setSession(session, state);

		/* Scribe에서 제공하는 인증 URL 생성 기능을 이용하여 네아로 인증 URL 생성 */
		OAuth20Service oauthService = new ServiceBuilder().apiKey(CLIENT_ID).apiSecret(CLIENT_SECRET).callback(REDIRECT_URI).state(state).build(NaverLoginApi.instance());

		return oauthService.getAuthorizationUrl();
	}

	/* 네아로 Callback 처리 및 AccessToken 획득 Method */
	public OAuth2AccessToken getAccessToken(HttpSession session, String code, String state) throws IOException {

		/* Callback으로 전달받은 세선검증용 난수값과 세션에 저장되어있는 값이 일치하는지 확인 */
		String sessionState = getSession(session);
		if (StringUtils.equals(sessionState, state)) {

			OAuth20Service oauthService = new ServiceBuilder().apiKey(CLIENT_ID).apiSecret(CLIENT_SECRET).callback(REDIRECT_URI).state(state).build(NaverLoginApi.instance());

			/* Scribe에서 제공하는 AccessToken 획득 기능으로 네아로 Access Token을 획득 */
			OAuth2AccessToken accessToken = oauthService.getAccessToken(code);
			return accessToken;
		}
		return null;
	}

	/* 세션 유효성 검증을 위한 난수 생성기 */
	private String generateRandomString() {
		return UUID.randomUUID().toString();
	}

	/* http session에 데이터 저장 */
	private void setSession(HttpSession session, String state) {
		session.setAttribute(SESSION_STATE, state);
	}

	/* http session에서 데이터 가져오기 */
	private String getSession(HttpSession session) {
		return (String) session.getAttribute(SESSION_STATE);
	}

	/* Access Token을 이용하여 네이버 사용자 프로필 API를 호출 */
	public String getUserProfile(OAuth2AccessToken oauthToken) throws IOException {

		OAuth20Service oauthService = new ServiceBuilder().apiKey(CLIENT_ID).apiSecret(CLIENT_SECRET).callback(REDIRECT_URI).build(NaverLoginApi.instance());

		OAuthRequest request = new OAuthRequest(Verb.GET, PROFILE_API_URL, oauthService);
		oauthService.signRequest(oauthToken, request);
		Response response = request.send();
		return response.getBody();
	}
}
```

4. 네이버로그인 관련 설정 파일 만들기

```java
public class JsonParser {
	JSONParser jsonParser = new JSONParser();

	public UserVO changeJson(String string) throws Exception {

		HashMap<String, Object> map = new HashMap<>();
		JSONParser jsonParser = new JSONParser();
		UserVO vo = new UserVO();

		JSONObject jsonObject = (JSONObject) jsonParser.parse(string);

		jsonObject = (JSONObject) jsonObject.get("response");

		map.put("userGender", jsonObject.get("gender"));
		map.put("userId", jsonObject.get("id"));
		map.put("userName", jsonObject.get("name"));

		vo.setUserName(map.get("userName").toString());
		vo.setUserEmail(map.get("userId").toString()); // id -> vo.email 넣기
		vo.setUserGender(map.get("userGender").toString()); // gender -> vo.gender 넣기
		vo.setUserNaver(map.get("userId").toString());// id -> vo.naver 넣기

		return vo;
	}
}
```

5. JsonParser.java 만들기 (넘어온 Json파일 USER객체에 담기)

```java
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>NaverLogin</title>

</head>
<body>
	<script>
		self.location = '${url}'; //
	</script>
</body>

</html>
```

6. naverLogin.jsp 만들기 (간단히 https://nid.naver.com/oauth2.0/authorize 로 이동하게 함 )

```java
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
<title>NaverLoginTest</title>
</head>
<body>
	<script>
		alert("네이버 로그인을 완료 했습니다.");
		self.location = "/";
	</script>
</body>

</html>
```
7. callback.jsp 만들기 (콜백 후 메인으로 가기)

---

참고사이트 :
<a href="https://github.com/Blackseed/NaverLoginTutorial/wiki/Spring-MVC-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%84%A4%EC%9D%B4%EB%B2%84%EC%95%84%EC%9D%B4%EB%94%94%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0" target = "_blenk" >사이트 이동</a>
