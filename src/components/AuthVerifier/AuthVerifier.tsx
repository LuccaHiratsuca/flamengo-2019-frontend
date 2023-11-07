import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { verifyToken } from "../../store/actions/actionAuthentication";
import { AppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import { AuthState } from "../../types/interfaceAuthState";

const AuthVerifier = () => {

    const token: string | undefined = useSelector((state: { auth: AuthState }) => state.auth.userInfo?.token);
    const userInformation = useSelector((state: { auth: AuthState }) => state.auth.userInfo);
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
    
      const handleVerifyToken = async () => {
        if (token) {
          try {
            const action = await dispatch(verifyToken(token));
            if (action.type === verifyToken.fulfilled.type) {
              setIsLoading(false);
            } else {
              navigate("/user/login");
            }
          } catch (error) {
            console.error("Token verification failed", error);
          }
        }
      };
      
      handleVerifyToken();
    }, [token, dispatch, navigate]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return null;
};

export default AuthVerifier;
