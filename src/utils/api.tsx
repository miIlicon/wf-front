import axios from "axios";

const API = axios.create({
  // 로컬 방식에서 사용을 할 때는 아래 API를 이용해주세요
  baseURL: "https://server.withfestival.site/",

  // 프로덕션 환경에서는 아래 API를 사용해주세요
  // baseURL: "https://server.withfestival.site/",
});

export default API;
