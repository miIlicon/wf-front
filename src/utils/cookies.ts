import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name: string, value: string, options?: any) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name);
};

export const isExpirationToken = (name: string) => {
  const currentTimeStamp = Math.floor(Date.now() / 1000);
  const currentExp = cookies.get(name).EXPIRE;

  if (currentExp) {
    // console.log(currentTimeStamp >= currentExp);
    return currentTimeStamp >= currentExp;
  } else {
    console.log(`쿠키에 만료 시간이 들어있지 않아요`);
  }
};
