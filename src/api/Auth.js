export const saveUserToDb = (user) => {
  const currentUser = {
    email: user?.email,
    name: user?.name || user?.displayName,
    isApplied: false,
  };
  fetch(`${import.meta.env.VITE_API_LINK}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then(() => {});
};
