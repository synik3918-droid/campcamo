# 캠프카모 챗

GitHub Pages + Firebase로 만든 **지인 1:1 실시간 웹채팅**. 서버 없음, 브라우저 코드만.

- 화면 호스팅: GitHub Pages (`index.html`)
- 로그인: Firebase Auth (구글)
- 메시지: Firestore 실시간 구독(`onSnapshot`)
- 접근 통제: 이메일 화이트리스트 + Firestore 보안 규칙

## 설정 순서 (브라우저만으로)

### 1) Firebase 프로젝트 만들기
1. https://console.firebase.google.com → **프로젝트 추가**
2. 이름 `campcamo-chat` 등으로 생성 (Analytics는 꺼도 됨)

### 2) 웹 앱 등록 → 설정값 받기
1. 프로젝트 개요 → **웹(</>)** 아이콘으로 앱 추가
2. 나오는 `firebaseConfig` 값을 복사 → `firebase-config.js`에 붙여넣기
3. 같은 파일의 `ALLOWED_EMAILS`에 **두 사람 구글 이메일** 입력

### 3) 구글 로그인 켜기
- 콘솔 → **Authentication** → 시작하기 → **Sign-in method** → **Google** 사용 설정

### 4) 승인된 도메인 추가
- Authentication → Settings → **승인된 도메인**에 `<사용자>.github.io` 추가
  (안 하면 GitHub Pages에서 로그인 안 됨)

### 5) Firestore 만들기 + 보안 규칙
1. 콘솔 → **Firestore Database** → 데이터베이스 만들기 (프로덕션 모드)
2. **규칙(Rules)** 탭 → `firestore.rules` 내용 붙여넣기(이메일 두 개 교체) → **게시**

### 6) GitHub Pages 켜기
- 이 repo → Settings → **Pages** → Source: `main` / `/ (root)` → 저장
- 몇 분 뒤 `https://<사용자>.github.io/campcamo/` 로 접속

## 로컬에서 미리 보기 (선택)
```bash
python3 -m http.server 8000    # http://localhost:8000
```
> `file://`로 열면 모듈/로그인이 막히니 위처럼 간단 서버로 여세요.

## 보안 메모
- `apiKey`가 코드에 공개돼도 정상. 보안은 **보안 규칙**이 담당.
- 규칙의 이메일과 `firebase-config.js`의 이메일은 **항상 일치**시킬 것.
- 종단간 암호화(E2E)는 아님 — Firebase가 데이터에 접근 가능(지인 잡담용으로 적합).
