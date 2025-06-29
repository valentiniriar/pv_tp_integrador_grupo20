import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Función para obtener la sesión del usuario desde localStorage
const getSession = () => {
  const session = localStorage.getItem("sessionUser");
  return session ? JSON.parse(session) : null;
};

// Función para obtener usuarios registrados desde localStorage
const getUsers = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getSession);
  const [users, setUsers] = useState(getUsers);

  // Rehidratar el estado de usuario al cargar la aplicación
  useEffect(() => {
    const sessionUser = getSession();
    if (sessionUser) {
      setUser(sessionUser);
    }
  }, []);

  // Guardar usuarios en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Función para validar email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Función para validar contraseña
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // Función para registrar usuario
  const register = (userData) => {
    const { email, password, confirmPassword, name } = userData;

    // Validaciones
    if (!validateEmail(email)) {
      throw new Error("El formato del email no es válido");
    }

    if (!validatePassword(password)) {
      throw new Error("La contraseña debe tener al menos 6 caracteres");
    }

    if (password !== confirmPassword) {
      throw new Error("Las contraseñas no coinciden");
    }

    // Verificar si el usuario ya existe
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      throw new Error("El usuario ya existe");
    }

    // Crear nuevo usuario
    const newUser = {
      id: Date.now(),
      email,
      password, // En un caso real, esto debería estar hasheado
      name: name || email.split("@")[0], // Usar email como nombre si no se proporciona
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    return newUser;
  };

  // Función para hacer login
  const login = (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error("Credenciales inválidas");
    }

    // Crear sesión del usuario (sin incluir la contraseña)
    const sessionUser = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    // Guardar en localStorage y estado
    localStorage.setItem("sessionUser", JSON.stringify(sessionUser));
    setUser(sessionUser);
    return sessionUser;
  };

  // Función para hacer logout
  const logout = () => {
    localStorage.removeItem("sessionUser");
    setUser(null);
  };

  // Función para verificar si el usuario está autenticado
  const isAuthenticated = () => {
    return user !== null;
  };

  const value = {
    user,
    register,
    login,
    logout,
    isAuthenticated,
    validateEmail,
    validatePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}; 