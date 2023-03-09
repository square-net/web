import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Head from "../../components/Head";
import { useFindUserQuery } from "../../generated/graphql";
import ProfileComponent from "./ProfileComponent";
import styled from "styled-components";
import { devices } from "../../styles/devices";
import { FeedLoading, NoPostsAlert } from "../../styles/global";
import LoadingComponent from "../../components/utils/LoadingComponent";
import PostComponent from "../../components/layouts/items/post/PostComponent";

const ProfileFeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
    padding-bottom: 0px;

    @media ${devices.mobileL} and (max-height: 420px) {
        gap: 24px;
    }

    @media ${devices.mobileL} and (min-height: 420px) {
        gap: 24px;
        padding-bottom: 24px;
    }

    @media ${devices.laptopL} {
        gap: 24px;
        padding-bottom: 24px;
    }
`;

function ProfileIndex() {
    const params = useParams();
    const [userFound, setUserFound] = useState(false);

    const { data, loading, error } = useFindUserQuery({
        variables: { username: params.username! },
        fetchPolicy: "cache-and-network",
    });
    
    useEffect(() => {
        if ((data && data.findUser)) {
            setUserFound(true);
        }
    }, [data]);

    return (
        <>
            <Head
                title={
                    loading
                        ? "Loading... | Square"
                        : userFound
                        ? `${data?.findUser?.firstName} ${data?.findUser?.lastName} (@${data?.findUser?.username}) | Square`
                        : `@${params.username} | Square`
                }
                description={
                    loading
                        ? "Content not ready. Loading..."
                        : userFound
                        ? `${data?.findUser?.firstName} ${data?.findUser?.lastName}'s profile on Square.`
                        : "User not found"
                }
                image={userFound ? data?.findUser?.profile?.profilePicture! : ""}
            />
            <ProfileComponent content={
                <ProfileFeedContainer>
                    {(loading && !data) || error ? (
                        <FeedLoading>
                            <LoadingComponent />
                        </FeedLoading>
                    ) : (
                        <>
                            {data?.findUser?.posts
                                ?.length !== 0 ? (
                                <>
                                    {data?.findUser?.posts?.map(
                                        (post) => (
                                            <PostComponent
                                                key={
                                                    post.postId
                                                }
                                                isPostFeed={
                                                    false
                                                }
                                                post={
                                                    post
                                                }
                                                user={
                                                    data.findUser
                                                }
                                            />
                                        )
                                    )}
                                </>
                            ) : (
                                <NoPostsAlert>
                                    <b>@
                                    {
                                        data
                                            .findUser
                                            .username
                                    }</b>{" "}
                                    hasn't published
                                    a post yet.
                                </NoPostsAlert>
                            )}
                        </>
                    )}
                </ProfileFeedContainer>
            } />
        </>
    );
}

export default ProfileIndex;