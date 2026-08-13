// ─────────────────────────────────────────────────────────────
// Firebase 설정 (콘솔에서 받은 실제 값)
// ⚠️ apiKey가 공개돼도 괜찮습니다. 보안은 Firestore 규칙이 담당.
// ─────────────────────────────────────────────────────────────
export const firebaseConfig = {
  apiKey: "AIzaSyB6BK5lnLjD4mn2-b-7wrTWZZnQDM_iflQ",
  authDomain: "camp-camo-chat.firebaseapp.com",
  projectId: "camp-camo-chat",
  storageBucket: "camp-camo-chat.firebasestorage.app",
  messagingSenderId: "674520943680",
  appId: "1:674520943680:web:8a806775df7fccb412a3a5",
};

// 방 생성·멤버 관리 권한을 가진 관리자(방장) 이메일.
// 이 사람만 방을 만들고 참여자를 추가/삭제할 수 있어요.
// (참여 멤버 목록은 이제 코드가 아니라 Firestore의 각 방 문서에서 관리됩니다.)
export const ADMIN_EMAIL = "synik3918@gmail.com";
