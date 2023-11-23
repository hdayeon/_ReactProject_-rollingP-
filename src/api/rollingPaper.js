import axios from "axios";
import api from "./api"; // interceptors 헤더추가 요청 instance

// 마이페이지 목록 조회 -> 잘 됨
const getPapers = async () => {
  const res = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/users`);
  // console.log("getPapers axios(마이페이지 조회)",res.data);
  return res.data;
}

// 자기소개 입력 -> 오류 그리고 토큰 이용필요
const putBio = async (newBio) => {
  await api.put("/users/bio", newBio)
  .then(function (response) {
    console.log("axios putBio",response);
  }).catch(function (error) {
    alert(error);
  });
}

// 코멘트 추가 -> newCmt 수정 중 그리고 토큰 이용필요
const addCmt = async (newCmt) => {
  await api.post("/users/comments", newCmt);
}

// 코멘트 목록 조회 -> 잘 됨
const getCmt = async (userId) => {
  const res = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/users/${userId}/comments`);
  // console.log("getCmt (코멘트 조회)",res.data);
  return res.data;
}

// 코멘트 삭제 -> 시도 대기 (코드 작성 하는 중 id값 아리송) 그리고 토큰 이용필요
const deleteCmt = async (commentId) => {
  await api.delete(`/users/comments/${commentId}`);
}

export { getPapers,putBio,addCmt,getCmt,deleteCmt }