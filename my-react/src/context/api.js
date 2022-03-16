const url = "http://localhost:3001/user";

export const signInAPI = async (email, password) => {
  console.log(email, password);
  const result = await fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const data = await result.json();
  console.log(data);
  return data;
};
