// ─────────────────────────────────────────────────────────────
// Firebase 설정 — Firebase 콘솔에서 받은 값으로 아래를 채우세요.
// (콘솔 → 프로젝트 설정 → 내 앱 → SDK 설정 및 구성 → firebaseConfig 복사)
//
// ⚠️ apiKey가 공개돼도 괜찮습니다. 보안은 이 키가 아니라
//    Firestore 보안 규칙(firestore.rules)으로 지킵니다.
// ─────────────────────────────────────────────────────────────
export const firebaseConfig = {
  apiKey: "여기에_apiKey",
  authDomain: "여기에_프로젝트.firebaseapp.com",
  projectId: "여기에_프로젝트ID",
  storageBucket: "여기에_프로젝트.appspot.com",
  messagingSenderId: "여기에_숫자",
  appId: "여기에_appId",
};

// 이 채팅에 들어올 수 있는 사람(구글 계정 이메일) — 딱 두 명만.
// 여기 + firestore.rules 양쪽에 같은 이메일을 넣어야 합니다.
export const ALLOWED_EMAILS = [
  "synik3918@gmail.com",   // 서영님
  "friend@gmail.com",      // ← 지인 이메일로 교체
];

// 대화방 ID (두 사람이 같은 방을 쓰면 됨. 아무 문자열이나 OK)
export const ROOM_ID = "seoyoung-friend";
