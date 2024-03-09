const baseURL = "http://localhost:3006/api";

export async function registerUser(credentials) {
  const data = await fetch(`${baseURL}/user/registerUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const _data = await data.json();
  return _data;
}
export async function registerVerifyOtp(credentials) {
  const data = await fetch(`${baseURL}/user/verifyOtp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const _data = await data.json();
  return _data;
}
export async function loginUser(credentials) {
  const data = await fetch(`${baseURL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const _data = await data.json();
  return _data;
}
