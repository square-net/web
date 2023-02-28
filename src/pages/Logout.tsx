import { Link, useNavigate, useNavigationType } from "react-router-dom";
import styled from "styled-components";
import Head from "../components/Head";
import Back from "../components/icons/Back";
import Logo from "../components/icons/Logo";
import Preloader from "../components/utils/Preloader";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";
import { devices } from "../styles/devices";
import { Button, PageText } from "../styles/global";
import { setAccessToken } from "../utils/token";

const LogoutPage = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

const LogoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #383535;
    border-radius: 16px;
    max-width: 90vw;

    @media ${devices.mobileS} {
        max-width: 75vw;
    }

    @media ${devices.mobileM} {
        max-width: 65vw;
    }

    @media ${devices.mobileL} {
        max-width: 57.5vw;
    }

    @media ${devices.tablet} {
        max-width: 40vw;
    }

    @media ${devices.laptopS} {
        max-width: 32vw;
    }

    @media ${devices.laptopM} {
        max-width: 28vw;
    }

    @media ${devices.laptopL} {
        max-width: 26vw;
    }

    @media ${devices.desktop} {
        max-width: 25vw;
    }
`;

const LogoutPageHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    padding-top: 24px;
    padding-left: 18px;
    padding-right: 18px;
    padding-bottom: 24px;
`;

const ExitLogoutPage = styled.div`
    display: block;
    cursor: pointer;
    padding: 6px;
    border-radius: 9999px;
    background-color: transparent;
    transition: background-color ease 0.2s;

    &:hover, &:focus {
        background-color: rgba(21, 20, 20, 0.6);
    }
`;

const LogoText = styled.div`
    display: block;
    font-weight: 800;
    font-size: 20px;
    color: #ffffff;
`;

const LogoutPageContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
`;

const LogoutButton = styled(Button)`
    background-color: #ffffff;
    color: #383535;
`;

function Logout() {
    const navigate = useNavigate();
    const navigationType = useNavigationType();

    const { data, loading } = useMeQuery({ fetchPolicy: "network-only" });
    const [logout, { client }] = useLogoutMutation();

    if (loading || !data?.me) {
        return <Preloader />;
    }

    return (
        <>
            <Head
                title="Log out | Square"
                description="Log out from Square."
            />
            <LogoutPage>
                <LogoutContainer>
                    <LogoutPageHeader>
                        <ExitLogoutPage
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
                        </ExitLogoutPage>
                        <Link to="/" title="Square" aria-label="Square">
                            <Logo type="inline" />
                        </Link>
                        <LogoText>Log out</LogoText>
                    </LogoutPageHeader>
                    <LogoutPageContent>
                        <PageText>
                            Do you really want to disconnect from{" "}
                            <b>@{data?.me?.username}</b>?
                        </PageText>
                        <LogoutButton
                            type="button"
                            title="Log out"
                            role="button"
                            aria-label="Log out"
                            onClick={async () => {
                                await logout();
                                setAccessToken("");
                                await client!.resetStore();
                                navigate(0);
                            }}
                        >
                            Log out
                        </LogoutButton>
                    </LogoutPageContent>
                </LogoutContainer>
            </LogoutPage>
        </>
    );
}

export default Logout;
