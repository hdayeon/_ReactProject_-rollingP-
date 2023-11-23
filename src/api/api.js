import axios from "axios";

const instance = axios.create({
	baseURL: import.meta.env.VITE_APP_SERVER_URL,
});

// Axios 인터셉터 설정. 요청 전 수행
instance.interceptors.request.use(
  (config) => {
    console.log("인터셉트 요청 성공!");
    const token = sessionStorage.getItem('authToken');
    console.log("요청 인터셉트 token",token);
    console.log("요청 인터셉트 config",config);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Bearer 토큰 형식
    }
    return config;
  },
  (error) => {
    console.log("인터셉트 요청 오류ㅠ");
    return Promise.reject(error);
  }
);


export default instance;