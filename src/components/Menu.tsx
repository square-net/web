import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMeQuery } from "../generated/graphql";
import { devices } from "../styles/devices";
import Close from "./icons/Close";
import profilePicture from "../images/profile-picture.svg";
import { PageText } from "../styles/global";
import Profile from "./icons/Profile";

interface MenuProps {
    setState: (state: boolean) => void;
}

const MenuWrapper = styled.div`
    position: fixed;
    display: grid;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    background-color: transparent;
    justify-content: left;
    z-index: 1000;

    @media ${devices.mobileL} and (min-height: 480px) {
        display: none;
    }

    @media ${devices.laptopL} {
        display: none;
    }
`;

const MenuOverlay = styled.div.attrs(
    (props: { visible: boolean }) => props
)`
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: rgba(56, 53, 53, 0.6);
    opacity: ${(props) => (props.visible ? "1" : "0")};
    transition: opacity ease 0.2s;
`;

const MenuContainer = styled.div.attrs(
    (props: { visible: boolean }) => props
)`
    display: grid;
    grid-template-rows: 60px auto;
    grid-template-columns: auto;
    position: relative;
    z-index: 10000;
    overflow: hidden;
    background-color: #151414;
    min-width: auto;
    width: 80vw;
    max-width: auto;
    height: 100vh;
    animation: ${(props) => (props.visible ? `slideIn` : `slideOut`)} 0.2s;

    @media ${devices.mobileM} {
        width: 70vw;
    }

    @media ${devices.mobileL} and (max-width: 600px) and (max-height: 480px) {
        width: 55vw;
    }

    @media (min-width: 600px) and (max-width: 768px) and (max-height: 480px) {
        width: 45vw;
    }

    @media ${devices.tablet} and (max-height: 480px) {
        width: 35vw;
    }

    @media ${devices.laptopS} and (max-height: 480px) {
        width: 30vw;
    }

    @media ${devices.laptopM} and (max-height: 480px) {
        width: 25vw;
    }

    @keyframes slideIn {
        from {
            transform: translateX(-100%);
        }

        to {
            transform: translateX(0%);
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0%);
        }

        to {
            transform: translateX(-100%);
        }
    }
`;

const MenuHeader = styled.div`
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    min-height: 60px;
    gap: 16px;
    width: 100%;
    overflow: hidden;
`;

const MenuTitle = styled.div`
    display: block;
    font-weight: 700;
    color: #ffffff;
    font-size: inherit;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const CloseMenu = styled.div`
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

const MenuContent = styled.div`
    display: block;
    width: 100%;
    max-height: calc(100vh + 60px);
    overflow-y: auto;
`;

const ProfileMenuContainer = styled.div`
    display: block;
    width: 100%;
    overflow: hidden;
    padding-top: 12px;
    padding-bottom: 12px;

    a {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
        overflow: hidden;
        text-decoration: none;
    }

    a:hover, a:active {
        text-decoration: none;
    }
`;

const ProfileMenuImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 21px;

    img {
        width: inherit;
        height: inherit;
        border-radius: inherit;
        object-fit: cover;
        object-position: center;
    }
`;

const ProfileMenuInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    overflow: hidden;
`;

const ProfileMenuInfoFullName = styled(PageText)`
    font-weight: 700;
    font-size: 20px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: none;
    color: #ffffff;

    &:hover, &:active {
        text-decoration: underline;
        text-decoration-color: #ffffff;
    }
`;

const ProfileMenuInfoUsername = styled(PageText)`
    font-size: 16px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #B5ADAD;
`;

const MenuNav = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
`;

const MenuNavEntry = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 60px;
    
    a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        color: #ffffff;
        font-weight: 500;
        gap: 16px;
        padding-left: 16px;
        padding-right: 16px;
        background-color: transparent;
        text-decoration: none;
        transition: background-color ease 0.2s;
        width: 100%;
        height: 60px;
        overflow: hidden;
    }
    
    a:hover, a:active {
        text-decoration: none;
        background-color: rgba(56, 53, 53, 0.6);
    }
`;

const MenuNavEntryIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 26px;
        height: 26px;
    }
`;

const MenuNavEntryText = styled(PageText)`
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Menu: FunctionComponent<MenuProps> = ({ setState }) => {
    const { data } = useMeQuery({ fetchPolicy: "cache-and-network" });
    const [visible, setVisible] = useState(true);

    return (
        <MenuWrapper>
            <MenuOverlay
                role="link"
                visible={visible}
                aria-label="Close menu"
                onClick={() => {
                    setVisible(false);
                    setTimeout(() => {
                        setState(false);
                    }, 200);
                }}
            ></MenuOverlay>
            <MenuContainer visible={visible}>
                <MenuHeader>
                    <MenuTitle>
                        Account info
                    </MenuTitle>
                    <CloseMenu
                        title="Close menu"
                        role="button"
                        aria-label="Close menu"
                        onClick={() => {
                            setVisible(false);
                            setTimeout(() => {
                                setState(false);
                            }, 200);
                        }}
                    >
                        <Close type="normal" />
                    </CloseMenu>
                </MenuHeader>
                <MenuContent>
                    <ProfileMenuContainer>
                        <Link
                            to={`/${data?.me?.username}`}
                            title={`${data?.me?.firstName} ${data?.me?.lastName}`}
                            aria-label={`${data?.me?.firstName} ${data?.me?.lastName}`}
                        >
                            <ProfileMenuImageContainer>
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
                            </ProfileMenuImageContainer>
                            <ProfileMenuInfo>
                                <ProfileMenuInfoFullName>
                                    {data?.me?.firstName}{" "}
                                    {data?.me?.lastName}
                                </ProfileMenuInfoFullName>
                                <ProfileMenuInfoUsername>
                                    @{data?.me?.username}
                                </ProfileMenuInfoUsername>
                            </ProfileMenuInfo>
                        </Link>
                    </ProfileMenuContainer>
                    <MenuNav>
                        <MenuNavEntry>
                            <Link
                                to={`/${data?.me?.username}`}
                                title={`${data?.me?.firstName} ${data?.me?.lastName}`}
                                aria-label={`${data?.me?.firstName} ${data?.me?.lastName}`}
                            >
                                <MenuNavEntryIcon>
                                    <Profile isActive={false} />
                                </MenuNavEntryIcon>
                                <MenuNavEntryText>Profile</MenuNavEntryText>
                            </Link>
                        </MenuNavEntry>
                        <MenuNavEntry>
                            <Link
                                to="/logout"
                                title={`Log out from @${data?.me?.username}`}
                                aria-label={`Log out from @${data?.me?.username}`}
                            >
                                <MenuNavEntryText>Log out @{data?.me?.username}</MenuNavEntryText>
                            </Link>
                        </MenuNavEntry>
                    </MenuNav>
                </MenuContent>
            </MenuContainer>
        </MenuWrapper>
    );
}

export default Menu;
