// ─────────────────────────────────────────────────────────────
// Firebase 설정 (Firebase 콘솔에서 받은 실제 값)
// ⚠️ apiKey가 공개돼도 괜찮습니다. 보안은 Firestore 규칙(firestore.rules)이 담당.
// ─────────────────────────────────────────────────────────────
export const firebaseConfig = {
  apiKey: "AIzaSyB6BK5lnLjD4mn2-b-7wrTWZZnQDM_iflQ",
  authDomain: "camp-camo-chat.firebaseapp.com",
  projectId: "camp-camo-chat",
  storageBucket: "camp-camo-chat.firebasestorage.app",
  messagingSenderId: "674520943680",
  appId: "1:674520943680:web:8a806775df7fccb412a3a5",
};

// 이 채팅에 들어올 수 있는 사람(구글 계정 이메일) — 딱 두 명만.
// 여기 + firestore.rules 양쪽에 같은 이메일을 넣어야 합니다.
export const ALLOWED_EMAILS = [
  "synik3918@gmail.com",       // 서영님
  "shinkoo.yoon@gmail.com",    // 지인
];

// 대화방 ID (두 사람이 같은 방을 쓰면 됨. 아무 문자열이나 OK)
export const ROOM_ID = "seoyoung-friend";
