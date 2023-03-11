import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { devices } from "../../../styles/devices";
import profilePicture from "../../../images/profile-picture.svg";
import Back from "../../icons/Back";
import { useNavigate, useNavigationType } from "react-router-dom";
import { PageText } from "../../../styles/global";
import { useFindUserQuery, useMeQuery } from "../../../generated/graphql";
import Menu from "../../Menu";
import SearchBar from "../../utils/search/SearchBar";
import { SideColumnComponent } from "./SideColumnComponent";

export interface PageContentLayoutProps {
    title?: string;
    type: string;
    username?: string;
    searchBar?: boolean;
    content: JSX.Element;
    sideColumn: JSX.Element;
}

const PageContentContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: none;
    grid-template-rows: auto;
    column-gap: 0px;

    @media ${devices.mobileL} and (max-height: 480px) {
        width: 380px;
    }

    @media (min-width: 600px) and (max-height: 480px) {
        width: 500px;
    }

    @media ${devices.tablet} and (max-height: 480px) {
        grid-template-columns: calc(60% - 24px) 40%;
        column-gap: 24px;
        width: 620px;
    }

    @media ${devices.laptopS} {
        grid-template-columns: calc(60% - 24px) 40%;
        column-gap: 24px;
    }

    @media ${devices.laptopS} and (max-height: 480px) {
        width: 760px;
    }

    @media ${devices.laptopS} and (min-height: 480px) {
        width: 100%;
    }

    @media ${devices.laptopL} {
        grid-template-columns: calc(60% - 24px) 40%;
        column-gap: 24px;
        width: 100%;
    }
`;

const MainContainer = styled.main`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 60px auto;
`;

const MainHeader = styled.div`
    display: grid;
    align-items: center;
    height: 60px;
    position: sticky;
    top: 0;
    width: 100%;
    overflow: hidden;
    background-color: #151414;
    z-index: 100;
`;

const MainHeaderProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media ${devices.mobileL} and (min-height: 480px) {
        display: none;
    }

    @media ${devices.laptopL} {
        display: none;
    }
`;

const MainHeaderProfileImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 16px;

    img {
        width: inherit;
        height: inherit;
        border-radius: inherit;
        object-fit: cover;
        object-position: center;
    }
`;

const MainHeaderTitle = styled.div`
    display: block;
    font-weight: 700;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
`;

const MainContentContainer = styled.div`
    display: block;
    width: 100%;
    overflow: hidden;
    min-height: calc(100% + 60px);
    
    @media ${devices.mobileL} and (min-height: 480px) {
        min-height: calc(100vh - 60px);
    }

    @media ${devices.laptopL} {
        min-height: calc(100vh - 60px);
    }
`;

const MainHeaderBaseContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 16px;
    overflow: hidden;
`;

const MainHeaderContainer = styled(MainHeaderBaseContainer)`
    padding-left: 16px;
    padding-right: 16px;
`;

const MainHeaderControlContainer = styled(MainHeaderBaseContainer)`
    padding-left: 10px;
    padding-right: 10px;
`;

const MainHeaderGoBack = styled.div`
    display: block;
    cursor: pointer;
    padding: 6px;
    border-radius: 9999px;
    background-color: transparent;
    transition: background-color ease 0.2s;

    &:hover, &:focus {
        background-color: rgba(56, 53, 53, 0.6);
    }
`;

const MainHeaderProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
`;

const MainHeaderUserFullName = styled(PageText)`
    font-weight: 700;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const MainHeaderUsername = styled(PageText)`
    font-size: 14px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #B5ADAD;
`;

const PageContentLayout: FunctionComponent<PageContentLayoutProps> = ({
    title,
    type,
    username,
    searchBar,
    content,
    sideColumn,
}) => {
    const navigate = useNavigate();
    const navigationType = useNavigationType();
    const [isOpen, setIsOpen] = useState(false);

    const [userFound, setUserFound] = useState(false);

    const { data, loading } = useFindUserQuery({
        variables: { username: username! },
        fetchPolicy: "cache-and-network",
    });

    const { data: meData, loading: meLoading } = useMeQuery({
        fetchPolicy: "cache-first",
    });

    useEffect(() => {
        if (data && data.findUser && !loading) {
            setUserFound(true);
        }
    }, [data, loading]);

    return (
        <PageContentContainer>
            <MainContainer>
                <MainHeader>
                    {type === "main" ? (
                        <MainHeaderContainer>
                            {meData && meData.me ? (
                                <>
                                    <MainHeaderProfileContainer
                                        role="button"
                                        title="Open menu"
                                        aria-label="Open menu"
                                        onClick={() => {
                                            setIsOpen(true);
                                        }}
                                    >
                                        <MainHeaderProfileImageContainer>
                                            <img
                                                src={
                                                    meLoading
                                                        ? profilePicture
                                                        : meData?.me?.profile
                                                                ?.profilePicture !==
                                                                "" &&
                                                            meData?.me?.profile
                                                                ?.profilePicture !==
                                                                null
                                                        ? meData?.me?.profile
                                                                ?.profilePicture!
                                                        : profilePicture
                                                }
                                                title="Profile picture"
                                                alt="Profile"
                                            />
                                        </MainHeaderProfileImageContainer>
                                    </MainHeaderProfileContainer>
                                    {isOpen ? (
                                        <Menu setState={isOpen => setIsOpen(isOpen)} />
                                    ) : null}
                                </>
                            ) : null}
                            {searchBar ? (
                                <SearchBar />
                            ) : (
                                <MainHeaderTitle
                                    role="link"
                                    title="Go to the top"
                                    aria-label="Go to the top"
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    {title}
                                </MainHeaderTitle>
                            )}
                        </MainHeaderContainer>
                    ) : (
                        <MainHeaderControlContainer>
                            <MainHeaderGoBack
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
                            </MainHeaderGoBack>
                            {type === "profile" ? (
                                <MainHeaderProfileInfo
                                    role="link"
                                    title="Go to the top"
                                    aria-label="Go to the top"
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    <MainHeaderUserFullName>
                                        {loading
                                            ? "Loading..."
                                            : userFound
                                            ? `${data?.findUser?.firstName} ${data?.findUser?.lastName}`
                                            : "User not found"}
                                    </MainHeaderUserFullName>
                                    <MainHeaderUsername>
                                        {loading
                                            ? "Loading..."
                                            : userFound
                                            ? `@${data?.findUser?.username}`
                                            : `@${username}`}
                                    </MainHeaderUsername>
                                </MainHeaderProfileInfo>
                            ) : (
                                <MainHeaderTitle
                                    role="link"
                                    title="Go to the top"
                                    aria-label="Go to the top"
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    {title}
                                </MainHeaderTitle>
                            )}
                        </MainHeaderControlContainer>
                    )}
                </MainHeader>
                <MainContentContainer>{content}</MainContentContainer>
            </MainContainer>
            <SideColumnComponent
                isSearchPage={searchBar}
                sideColumnContent={sideColumn}
            />
        </PageContentContainer>
    );
};

export default PageContentLayout;
