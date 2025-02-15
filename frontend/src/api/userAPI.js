const apiURL = "http://localhost:2005/users";

export const fetchUsers = async () => {
  const response = await fetch(apiURL, {
    credentials: "include",
  });
  if (!response.ok) throw new Error("Gagal mengambil data users");
  return response.json();
};

export const userRegister = async (name, email, password) => {
  const response = await fetch(`${apiURL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
    credentials: "include",
  });
  if (!response.ok) throw new Error("Users already registered");
  return response.json();
};

export const userLogin = async (email, password) => {
  try {
    const response = await fetch(`${apiURL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      return alert("Incorrect email or password");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const userLogout = async () => {
  try {
    const response = await fetch(`${apiURL}/logout`, {
      method: "POST",
      credentials: "include",
    });
    return response.json;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await fetch(`${apiURL}/auth/me`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) throw new Error("inavlid get data user");
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
};
