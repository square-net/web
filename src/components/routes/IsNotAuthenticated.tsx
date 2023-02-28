import { FunctionComponent } from "react";
import { Navigate } from "react-router-dom";

export interface IsNotAuthenticatedProps {
    children: JSX.Element;
    isAuth: boolean;
}

const IsNotAuthenticated: FunctionComponent<IsNotAuthenticatedProps> = ({
    children,
    isAuth,
}) => {
    return isAuth ? <Navigate replace to="/home" /> : children;
};

export default IsNotAuthenticated;
