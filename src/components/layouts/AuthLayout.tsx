import { FunctionComponent } from "react";
import Back from "../icons/Back";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import Logo from "../icons/Logo";
import styled from "styled-components";
import { devices } from "../../styles/devices";
import { ControlContainer, PageBlock, PageTextMT48 } from "../../styles/global";

export interface AuthLayoutProps {
    content: JSX.Element;
}

const AuthPage = styled.div`
    display: grid;
    justify-items: center;
`;

const AuthPageHeader = styled.div`
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    height: 60px;
    z-index: 100;
    background-color: #151414;
    padding-left: 12px;
    padding-right: 12px;
    width: 100%;

    @media ${devices.mobileL} {
        width: 360px;
    }

    @media ${devices.tablet} {
        width: 472px;
    }

    @media ${devices.laptopM} {
        width: 580px;
    }
`;

const AuthPageLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 36px);
    padding-right: 36px;
`;

const AuthPageContentContainer = styled.div`
    display: block;
    margin-top: 48px;
    padding-bottom: 84px;
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;

    @media ${devices.mobileS} {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media ${devices.mobileL} {
        width: 360px;
    }

    @media ${devices.tablet} {
        width: 472px;
    }

    @media ${devices.laptopM} {
        width: 580px;
    }
`;

const AuthPageContent = styled.div`
    display: block;
`;

const AuthLayout: FunctionComponent<AuthLayoutProps> = ({ content }) => {
    const navigate = useNavigate();
    const navigationType = useNavigationType();

    let showLoginOption = true;

    if (window.location.pathname === "/login") {
        showLoginOption = false;
    }

    return (
        <AuthPage>
            <AuthPageHeader>
                <ControlContainer
                    title="Go back"
                    role="button"
                    aria-label="Go back"
                    onClick={() => {
                        if (navigationType === "POP") {
                            navigate("/");
                        } else {
                            navigate(-1);
                        }
                    }}
                >
                    <Back />
                </ControlContainer>
                <AuthPageLogo>
                    <Link
                        to="/"
                        title="Square"
                        aria-label="Square"
                    >
                        <Logo type="inline" />
                    </Link>
                </AuthPageLogo>
            </AuthPageHeader>
            <AuthPageContentContainer>
                <AuthPageContent>{content}</AuthPageContent>
                <PageTextMT48>
                    {showLoginOption ? (
                        <PageBlock>
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                title="Log in"
                                aria-label="Log in to Square"
                            >
                                Log in
                            </Link>
                        </PageBlock>
                    ) : (
                        <PageBlock>
                            Forgot your password?{" "}
                            <Link
                                to="/recover-password"
                                title="Recover your password"
                                aria-label="Recover your password"
                            >
                                Recover it here
                            </Link>
                        </PageBlock>
                    )}
                </PageTextMT48>
            </AuthPageContentContainer>
        </AuthPage>
    );
};

export default AuthLayout;
