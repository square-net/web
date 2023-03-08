import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useMeQuery } from "../generated/graphql";
import { devices } from "../styles/devices";
import { PageBlock, PageText } from "../styles/global";
import Home from "./icons/Home";
import Logo from "./icons/Logo";
import More from "./icons/More";
import Profile from "./icons/Profile";
import profilePicture from "../images/profile-picture.svg";

const NavContainer = styled.div`
    display: block;
    position: relative;
    top: unset;
    height: auto;
    
    @media ${devices.mobileL} and (min-height: 480px) {
        display: flex;
        position: sticky;
        top: 0;
        height: 100vh;
        justify-content: center;
        background-color: transparent;
    }

    @media ${devices.tablet} and (min-height: 480px) {
        display: flex;
        position: sticky;
        top: 0;
        height: 100vh;
        justify-content: flex-end;
        background-color: transparent;
    }

    @media ${devices.laptopL} {
        display: flex;
        position: sticky;
        top: 0;
        height: 100vh;
        justify-content: flex-end;
        background-color: transparent;
    }
`;

const NavInnerContainer = styled.div`
    display: block;
    padding: 0;
    overflow: hidden;

    @media ${devices.mobileL} and (min-height: 480px) {
        display: flex;
        max-width: 100%;
        flex-direction: column;
        gap: 12px;
        align-items: unset;
        justify-content: space-between;
        background-color: transparent;
        padding-left: 12px;
        padding-right: 12px;
        overflow: auto;
    }

    @media ${devices.laptopL} {
        display: flex;
        max-width: 100%;
        flex-direction: column;
        gap: 12px;
        align-items: unset;
        justify-content: space-between;
        background-color: transparent;
        padding-left: 12px;
        padding-right: 12px;
        overflow: auto;
    }
`;

const NavContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;
`;

const BrandLink = styled.div`
    display: none;
    margin: 0;

    @media ${devices.mobileL} and (min-height: 480px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 12px;

        a {
            padding: 12px;
            border-radius: 9999px;
            background-color: transparent;
            text-decoration: none;
            transition: background-color ease 0.2s;
        }

        a:hover, a:active {
            text-decoration: none;
            background-color: rgba(56, 53, 53, 0.6);
        }

        a div, svg {
            width: 32px;
            height: 32px;
        }
    }

    @media ${devices.laptopL} {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 12px;

        a {
            padding: 12px;
            border-radius: 9999px;
            background-color: transparent;
            text-decoration: none;
            transition: background-color ease 0.2s;
        }

        a:hover, a:active {
            text-decoration: none;
            background-color: rgba(56, 53, 53, 0.6);
        }

        a div, svg {
            width: 36px;
            height: 36px;
        }
    }
`;

const NavItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const NavPrimaryItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 0px;
    position: fixed;
    background-color: #151414;
    height: 60px;
    z-index: 100;
    top: unset;
    left: 0;
    right: 0;
    bottom: 0;

    @media ${devices.mobileL} and (min-height: 480px) {
        position: relative;
        flex-direction: column;
        align-items: unset;
        gap: 12px;
        background-color: transparent;
        height: auto;
        z-index: unset;
        left: unset;
        right: unset;
        bottom: unset;
        justify-content: unset;
    }

    @media ${devices.laptopL} {
        position: relative;
        flex-direction: column;
        align-items: unset;
        gap: 12px;
        background-color: transparent;
        height: auto;
        z-index: unset;
        left: unset;
        right: unset;
        bottom: unset;
        justify-content: unset;
    }
`;

const NavSecondaryItemsContainer = styled.div`
    display: none;

    @media ${devices.mobileL} and (min-height: 480px) {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    @media ${devices.laptopL} {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
`;

const NavEntry = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #ffffff;
        font-weight: 500;
        padding: 8px;
        border-radius: 9999px;
        background-color: transparent;
        text-decoration: none;
        transition: background-color ease 0.2s;
    }
    
    a:hover, a:active {
        text-decoration: none;
        background-color: rgba(56, 53, 53, 0.6);
    }

    a.active {
        font-weight: 700;
        color: #039BE5;
        text-decoration: none;
    }

    @media ${devices.mobileL} and (min-height: 480px) {
        a {
            padding: 12px;
        }
    }

    @media ${devices.laptopL} {
        justify-content: flex-start;

        a {
            justify-content: flex-start;
            padding: 12px;
        }
    }
`;

const NavEntryIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 26px;
        height: 26px;
    }

    @media ${devices.mobileL} and (min-height: 480px) {
        svg {
            width: 32px;
            height: 32px;
        }
    }

    @media ${devices.laptopL} {
        svg {
            width: 32px;
            height: 32px;
        }
    }
`;

const NavEntryText = styled.div`
    display: none;
    font-weight: inherit;
    color: inherit;

    @media ${devices.laptopL} {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 16px;
        margin-right: 16px;
    }
`;

const ProfileContainer = styled.div`
    display: none;

    @media ${devices.mobileL} and (min-height: 480px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0px;
        cursor: pointer;
        padding: 12px;
        border-radius: 9999px;
        background-color: transparent;
        margin-bottom: 12px;
        transition: background-color ease 0.2s;

        &:hover, &:active {
            background-color: rgba(56, 53, 53, 0.6);
        }
    }

    @media ${devices.laptopL} {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        cursor: pointer;
        padding: 12px;
        border-radius: 9999px;
        background-color: transparent;
        margin-bottom: 12px;
        transition: background-color ease 0.2s;

        &:hover, &:active {
            background-color: rgba(56, 53, 53, 0.6);
        }
    }
`;

const ProfileInnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    gap: 0px;

    @media ${devices.laptopL} {
        justify-content: flex-start;
        gap: 16px;
    }
`;

const ProfileImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 16px;

    @media ${devices.laptopL} {
        width: 48px;
        height: 48px;
        border-radius: 24px;
    }

    img {
        width: inherit;
        height: inherit;
        border-radius: inherit;
        object-fit: cover;
        object-position: center;
    }
`;

const ProfileInfo = styled.div`
    display: none;

    @media ${devices.laptopL} {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
        overflow: hidden;
    }
`;

const ProfileInfoFullName = styled(PageText)`
    font-weight: 700;
    font-size: 16px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const ProfileInfoUsername = styled(PageText)`
    font-size: 14px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #B5ADAD;
`;

const ProfileMoreButton = styled.div`
    display: none;

    @media ${devices.laptopL} {
        display: block;
    }
`;

function Nav() {
    const { data, error } = useMeQuery({ fetchPolicy: "cache-and-network" });

    return (
        <NavContainer>
            <NavInnerContainer>
                <NavContentContainer>
                    <BrandLink>
                        <Link to="/" title="Square" aria-label="Square">
                            <Logo type="inline" />
                        </Link>
                    </BrandLink>
                    <NavItemsContainer>
                        <NavPrimaryItemsContainer>
                            <NavEntry>
                                <NavLink
                                    className={(navData: any) =>
                                        navData.isActive ? "active" : ""
                                    }
                                    to="/home"
                                    title="Home"
                                    aria-label="Home"
                                >
                                    {({ isActive }) => (
                                        <>
                                            <NavEntryIcon>
                                                <Home isActive={isActive ? true : false} />
                                            </NavEntryIcon>
                                            <NavEntryText>Home</NavEntryText>
                                        </>
                                    )}
                                </NavLink>
                            </NavEntry>
                        </NavPrimaryItemsContainer>
                        <NavSecondaryItemsContainer>
                            {data && data.me && !error ? (
                                <NavEntry>
                                    <NavLink
                                        className={(navData: any) =>
                                            navData.isActive ? "active" : ""
                                        }
                                        to={`/${data.me.username}`}
                                        title={`${data.me.firstName} ${data.me.lastName}`}
                                        aria-label={`${data.me.firstName} ${data.me.lastName}`}
                                    >
                                        {({ isActive }) => (
                                            <>
                                                <NavEntryIcon>
                                                    <Profile isActive={isActive ? true : false} />
                                                </NavEntryIcon>
                                                <NavEntryText>Profile</NavEntryText>
                                            </>
                                        )}
                                    </NavLink>
                                </NavEntry>
                            ) : null}
                        </NavSecondaryItemsContainer>
                    </NavItemsContainer>
                </NavContentContainer>
                {data && data.me && !error ? (
                    <PageBlock>
                        <ProfileContainer
                            role="button"
                            aria-label="Open options"
                            title="Open options"
                            onClick={() => {
                                console.log("Options");
                            }}
                        >
                            <ProfileInnerContainer>
                                <ProfileImageContainer>
                                    <img
                                        src={
                                            data?.me?.profile
                                                ?.profilePicture !== "" &&
                                            data?.me?.profile
                                                ?.profilePicture !== null
                                                ? data?.me?.profile
                                                    ?.profilePicture!
                                                : profilePicture
                                        }
                                        title={`${data?.me?.firstName}'s profile picture`}
                                        alt={`${data?.me?.firstName} ${data?.me?.lastName}`}
                                    />
                                </ProfileImageContainer>
                                <ProfileInfo>
                                    <ProfileInfoFullName>
                                        {data?.me?.firstName}{" "}
                                        {data?.me?.lastName}
                                    </ProfileInfoFullName>
                                    <ProfileInfoUsername>
                                        @{data?.me?.username}
                                    </ProfileInfoUsername>
                                </ProfileInfo>
                            </ProfileInnerContainer>
                            <ProfileMoreButton>
                                <More />
                            </ProfileMoreButton>
                        </ProfileContainer>
                    </PageBlock>
                ) : null}
            </NavInnerContainer>
        </NavContainer>
    );
}

export default Nav;
