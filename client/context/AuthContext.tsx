import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from "@/config/index";
import cookie from 'cookie';
import Cookies from 'js-cookie';
let a: any;
const AuthContext = createContext(a);

interface IProps {
  children: JSX.Element;
}

export const AuthProvider = ({ children }: IProps) => {
  let a:any;
  const [user, setUser] = useState(a);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    checkUserLoggedIn();
  },[]);


  // Login user
  const login = async ({ email, password }: any) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      console.log(data);
      setUser(data.token);
      router.push("/examples");
    } else {
      throw data
    }
  };

  // Logout user
  const logout = async () => {
      Cookies.remove('token');
      setUser(null);
      router.push("/");
    
  };

  // Check if user is logged in
  const checkUserLoggedIn = async () => {
    const token = Cookies.get('token')
    setUser(token);
  };

  return (
    <AuthContext.Provider value={{ user, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
