import { FunctionComponent, useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import PageLayout from "../../components/layouts/PageLayout";
import PageContentLayout from "../../components/layouts/sublayouts/PageContentLayout";
import { useFindUserQuery, useMeQuery } from "../../generated/graphql";
import profilePicture from "../../images/profile-picture.svg";
import profileBanner from "../../images/profile-banner.svg";
import { PageBlock, PageText, SmallButton } from "../../styles/global";
import Linkify from "linkify-react";
import Chain from "../../components/icons/Chain";
import PageLoadingComponent from "../../components/utils/PageLoadingComponent";
import ItemNotFound from "../../components/utils/ItemNotFound";

interface ProfileComponentProps {
    content: JSX.Element;
}

const ProfilePageContainer = styled.div`
    display: block;
`;

const ProfileBannerContainer = styled.div`
    display: block;
    background-color: #383535;
    height: 240px;
    cursor: pointer;
    
    img {
        width: 100%;
        height: 240px;
        object-fit: cover;
        object-position: center;
    }
`;

const ProfilePageInnerContainer = styled.div`
    display: block;
    padding-top: 12px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 12px;
`;

const ProfilePageInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const ProfilePageButtonsContainer = styled.div`
    display: flex;
    gap: 12px;
    justify-content: space-between;
`;

const ProfileImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #151414;
    width: 128px;
    height: 128px;
    border-radius: 9999px;
    margin-top: -76px;

    img {
        width: 120px;
        height: 120px;
        border-radius: 9999px;
        object-fit: cover;
        object-position: center;
    }
`;

const EditProfileButton = styled(SmallButton)`
    color: #ffffff;
    border: 2px solid #ffffff;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    overflow: hidden;
`;

const UserFullName = styled(PageText)`
    font-size: 20px;
    font-weight: 700;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Username = styled(PageText)`
    font-size: 16px;
    color: #B5ADAD;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const ProfileInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const InlineProfileInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
`;

const ProfileElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;
    width: 100%;
    overflow: hidden;
`;

const ProfileElementIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProfileElementText = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    overflow: hidden;

    a {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const ProfilePageNav = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 54px;
    align-items: center;
    width: 100%;
    overflow-x: auto;
`;

const ProfilePageNavEntry = styled.div`
    display: block;
    width: 100%;
    height: 54px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 54px;
        padding-left: 24px;
        padding-right: 24px;
        text-decoration: none;
        color: #ffffff;
        font-weight: 700;
        background-color: transparent;
        transition: background-color ease 0.2s;
        border-bottom: 4px solid transparent;
    }

    a:hover, a:active {
        background-color: rgba(56, 53, 53, 0.6);
    }

    a.active {
        color: #039BE5;
        border-bottom: 4px solid #039BE5;
    }
`;

const ProfilePageContentContainer = styled.div`
    display: block;
    padding-top: 24px;
`;

const linkifyOptions = {
    target: "_blank",
};

const ProfileComponent: FunctionComponent<ProfileComponentProps> = ({ content }) => {
    const params = useParams();
    const [userFound, setUserFound] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const { data, loading, error } = useFindUserQuery({
        variables: { username: params.username! },
        fetchPolicy: "network-only",
    });

    const { data: meData } = useMeQuery({ fetchPolicy: "cache-and-network" });

    useEffect(() => {
        if (data && data.findUser && !loading) {
            setUserFound(true);
        }
    }, [data, loading]);
    
    return (
        <PageLayout
            children={
                <PageContentLayout 
                    type="profile"
                    username={params.username}
                    content={
                        <>
                            {(loading && !data) || error ? (
                                <PageLoadingComponent />
                            ) : (
                                <ProfilePageContainer>
                                    <ProfileBannerContainer
                                        role="link"
                                        onClick={() => {
                                            navigate(`/${data?.findUser?.username}/banner`, {
                                                state: {
                                                    backgroundLocation:
                                                        location,
                                                },
                                            });
                                        }}
                                    >
                                        <img
                                            src={
                                                data?.findUser?.profile &&
                                                data?.findUser?.profile
                                                    ?.profileBanner !==
                                                    "" &&
                                                data?.findUser?.profile
                                                    ?.profileBanner !== null
                                                    ? data?.findUser
                                                            ?.profile
                                                            ?.profileBanner!
                                                    : profileBanner
                                            }
                                            title={
                                                userFound
                                                    ? `${data?.findUser?.firstName} ${data?.findUser?.lastName}'s profile banner.`
                                                    : `@${params.username}`
                                            }
                                            alt={
                                                userFound
                                                    ? `${data?.findUser?.firstName} ${data?.findUser?.lastName}`
                                                    : `@${params.username}`
                                            }
                                        />
                                    </ProfileBannerContainer>
                                    <ProfilePageInnerContainer>
                                        <ProfilePageInfoContainer>
                                            <ProfilePageButtonsContainer>
                                                <ProfileImageContainer
                                                    role="link"
                                                    onClick={() => {
                                                        navigate(`/${data?.findUser?.username}/photo`, {
                                                            state: {
                                                                backgroundLocation:
                                                                    location,
                                                            },
                                                        });
                                                    }}
                                                >
                                                    <img
                                                        src={
                                                            data?.findUser?.profile &&
                                                            data?.findUser
                                                                ?.profile
                                                                ?.profilePicture !==
                                                                "" &&
                                                            data?.findUser
                                                                ?.profile
                                                                ?.profilePicture !==
                                                                null
                                                                ? data
                                                                        ?.findUser
                                                                        ?.profile
                                                                        ?.profilePicture!
                                                                : profilePicture
                                                        }
                                                        title={
                                                            userFound
                                                                ? `${data?.findUser?.firstName} ${data?.findUser?.lastName}'s profile picture.`
                                                                : `@${params.username}`
                                                        }
                                                        alt={
                                                            userFound
                                                                ? `${data?.findUser?.firstName} ${data?.findUser?.lastName}`
                                                                : `@${params.username}`
                                                        }
                                                    />
                                                </ProfileImageContainer>
                                                {meData?.me?.username ===
                                                params.username ? (
                                                    <>
                                                        <PageBlock>
                                                            <EditProfileButton
                                                                role="link"
                                                                title="Edit your profile"
                                                                aria-label="Edit your profile"
                                                                onClick={() => {
                                                                    navigate(
                                                                        "/settings/profile",
                                                                        {
                                                                            state: {
                                                                                backgroundLocation:
                                                                                    location,
                                                                            },
                                                                        }
                                                                    );
                                                                }}
                                                            >
                                                                Edit profile
                                                            </EditProfileButton>
                                                        </PageBlock>
                                                        <Outlet />
                                                    </>
                                                ) : null}
                                            </ProfilePageButtonsContainer>
                                            <UserInfo>
                                                {userFound ? (
                                                    <>
                                                        <UserFullName>
                                                            {
                                                                data
                                                                    ?.findUser
                                                                    ?.firstName
                                                            }{" "}
                                                            {
                                                                data
                                                                    ?.findUser
                                                                    ?.lastName
                                                            }
                                                        </UserFullName>
                                                        <Username>
                                                            @
                                                            {
                                                                data
                                                                    ?.findUser
                                                                    ?.username
                                                            }
                                                        </Username>
                                                    </>
                                                ) : (
                                                    <>
                                                        <UserFullName>
                                                            @
                                                            {
                                                                params.username
                                                            }
                                                        </UserFullName>
                                                    </>
                                                )}
                                            </UserInfo>
                                            {userFound ? (
                                                <ProfileInfoContainer>
                                                    {data?.findUser?.profile
                                                        ?.bio ? (
                                                        <PageText>
                                                            <Linkify
                                                                options={
                                                                    linkifyOptions
                                                                }
                                                            >
                                                                {
                                                                    data
                                                                        .findUser
                                                                        .profile
                                                                        .bio
                                                                }
                                                            </Linkify>
                                                        </PageText>
                                                    ) : null}
                                                    {data?.findUser?.profile
                                                        ?.website ? (
                                                        <InlineProfileInfo>
                                                            {data.findUser
                                                                .profile
                                                                ?.website ? (
                                                                <ProfileElement>
                                                                    <ProfileElementIcon>
                                                                        <Chain />
                                                                    </ProfileElementIcon>
                                                                    <ProfileElementText>
                                                                        <Linkify
                                                                            options={
                                                                                linkifyOptions
                                                                            }
                                                                        >
                                                                            {
                                                                                data
                                                                                    .findUser
                                                                                    .profile
                                                                                    .website
                                                                            }
                                                                        </Linkify>
                                                                    </ProfileElementText>
                                                                </ProfileElement>
                                                            ) : null}
                                                        </InlineProfileInfo>
                                                    ) : null}
                                                </ProfileInfoContainer>
                                            ) : null}
                                        </ProfilePageInfoContainer>
                                    </ProfilePageInnerContainer>
                                    {userFound ? (
                                        <>
                                            <ProfilePageNav role="tablist">
                                                <ProfilePageNavEntry role="presentation">
                                                    <NavLink
                                                        className={(navData: any) =>
                                                            navData.isActive ? "active" : ""
                                                        }
                                                        role="tab"
                                                        to={`/${data?.findUser?.username}`}
                                                    >
                                                        All
                                                    </NavLink>
                                                </ProfilePageNavEntry>
                                                <ProfilePageNavEntry role="presentation">
                                                    <NavLink
                                                        className={(navData: any) =>
                                                            navData.isActive ? "active" : ""
                                                        }
                                                        role="tab"
                                                        to={`/${data?.findUser?.username}/comments`}
                                                    >
                                                        Comments
                                                    </NavLink>
                                                </ProfilePageNavEntry>
                                                <ProfilePageNavEntry role="presentation">
                                                    <NavLink
                                                        className={(navData: any) =>
                                                            navData.isActive ? "active" : ""
                                                        }
                                                        role="tab"
                                                        to={`/${data?.findUser?.username}/likes`}
                                                    >
                                                        Likes
                                                    </NavLink>
                                                </ProfilePageNavEntry>
                                            </ProfilePageNav>
                                            <ProfilePageContentContainer>
                                                {content}
                                            </ProfilePageContentContainer>
                                        </>
                                    ) : (
                                        <ItemNotFound
                                            title="User not found"
                                            content="This user doesn't exist."
                                        />
                                    )}
                                </ProfilePageContainer>
                            )}
                        </>
                    }
                />
            }
        />
    );
}

export default ProfileComponent;
