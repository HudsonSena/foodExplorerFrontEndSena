import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token, admin } = response.data;

      localStorage.setItem("@foodexplorersena:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorersena:token", token);
      localStorage.setItem("@foodexplorersena:admin", admin);

      api.defaults.headers.common["authorization"] = `Bearer ${token}`;

      setData({ user, token, admin });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  async function signOut() {
    const confirm = window.confirm("Deseja realmente sair?");

    if (confirm) {

      localStorage.removeItem("@foodexplorersena:token");
      localStorage.removeItem("@foodexplorersena:user");
      localStorage.removeItem("@foodexplorersena:admin");

      setData({});
    }

  }

  async function updateFood({ food, foodImageFile }) {
    try {
      if (foodImageFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("foodimage", foodImageFile);

        const response = await api.patch("foods/foodimage", fileUploadForm);
        food.foodimage = response.data.foodimage;
      }

      await api.put("/foods", food);

      alert("Prato Atualizado");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o prato");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorersena:token");
    const user = localStorage.getItem("@foodexplorersena:user");
    const admin = localStorage.getItem("@foodexplorersena:admin");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        token,
        admin,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateFood,
        user: data.user,
        admin: data.admin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
