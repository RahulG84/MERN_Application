export const fetch2 = async (api, body) => {
  const res = await fetch(api, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    },
    body: JSON.stringify(body)
  });
  return await res.json();
};
