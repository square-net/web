import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import profilePicture from "../../../../images/profile-picture.svg";
import { OptionItem, PageText } from "../../../../styles/global";
import { Link, useNavigate } from "react-router-dom";
import { devices } from "../../../../styles/devices";
import { processDate } from "../../../../utils/processDate";
import { PostOptions } from "./PostOptions";
import { PostFeedDocument, PostFeedQuery, useDeletePostMutation, useMeQuery, usePostFeedQuery } from "../../../../generated/graphql";
import { ContentState, convertFromRaw } from "draft-js";

interface PostComponentProps {
    isPostFeed: boolean;
    post: any;
    user?: any;
}

const PostContainer = styled.div`
    display: block;
    border-radius: 0px;
    background-color: #383535;
    cursor: pointer;
    transition: background-color ease 0.2s;

    @media ${devices.mobileL} and (max-height: 480px) {
        border-radius: 6px;
    }

    @media ${devices.mobileL} and (min-height: 480px) {
        border-radius: 6px 0px 0px 6px;
    }

    @media (min-width: 600px) and (min-height: 480px) {
        border-radius: 6px;
    }

    @media ${devices.tablet} {
        border-radius: 6px;
    }

    &:hover, &:focus {
        background-color: rgba(56, 53, 53, 0.6);
    }
`;

const PostInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const PostHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    overflow: hidden;
`;

const PostAuthorContainer = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;

    &:hover, &:active {
        text-decoration: none;
    }
`;

const AuthorImageContainer = styled.div`
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

const AuthorInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    overflow: hidden;
`;

const AuthorFullName = styled(PageText)`
    font-weight: 700;
    font-size: 16px;
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

const AuthorUsername = styled(PageText)`
    font-size: 14px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #B5ADAD;
`;

const PostDate = styled(PageText)`
    font-size: 14px;
    color: #B5ADAD;
    white-space: nowrap;
`;

const PostContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 16px;
`;

const PostTextContainer = styled.div`
    display: block;
    padding-left: 16px;
    padding-right: 16px;
`;

const PostRightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
`;

const PostComponent: FunctionComponent<PostComponentProps> = ({
    isPostFeed,
    post,
    user,
}) => {
    const navigate = useNavigate();
    let date = processDate(post.updatedAt);
    const [activeOptionsMenu, setActiveOptionsMenu] = useState<number | null>(null);

    const handleOptionsMenuClick = (index: number) => {
        setActiveOptionsMenu(activeOptionsMenu === index ? null : index);
    };

    const { data } = useMeQuery({ fetchPolicy: "network-only" });

    const [deletePost] = useDeletePostMutation();

    const { data: postFeedData } = usePostFeedQuery({ fetchPolicy: "network-only" });
    const draftContent: ContentState = convertFromRaw(JSON.parse(post.content));
    const content = draftContent.getPlainText();
    
    return (
        <PostContainer
            role="link"
            onClick={() => {
                navigate(`/${isPostFeed ? post.author.username : user.username}/post/${post.postId}`);
            }}
        >
            <PostInnerContainer>
                <PostHeader>
                    <PostAuthorContainer
                        role="link"
                        aria-label={`${
                            isPostFeed ? post.author.firstName : user.firstName
                        } ${
                            isPostFeed ? post.author.lastName : user.lastName
                        }'s profile`}
                        title={`${
                            isPostFeed ? post.author.firstName : user.firstName
                        } ${
                            isPostFeed ? post.author.lastName : user.lastName
                        }'s profile`}
                        to={isPostFeed ? `/${post.author.username}` : `/${user.username}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <AuthorImageContainer>
                            <img
                                src={
                                    isPostFeed
                                        ? post.author.profile.profilePicture !==
                                              "" &&
                                          post.author.profile.profilePicture !==
                                              null
                                            ? post.author.profile.profilePicture
                                            : profilePicture
                                        : user.profile.profilePicture !== "" &&
                                          user.profile.profilePicture !== null
                                        ? user.profile.profilePicture
                                        : profilePicture
                                }
                                title={`${
                                    isPostFeed
                                        ? post.author.firstName
                                        : user.firstName
                                }'s profile picture`}
                                alt={`${
                                    isPostFeed
                                        ? post.author.firstName
                                        : user.firstName
                                } ${
                                    isPostFeed
                                        ? post.author.lastName
                                        : user.lastName
                                }`}
                            />
                        </AuthorImageContainer>
                        <AuthorInfo>
                            <AuthorFullName>
                                {isPostFeed
                                    ? post.author.firstName
                                    : user.firstName}{" "}
                                {isPostFeed
                                    ? post.author.lastName
                                    : user.lastName}
                            </AuthorFullName>
                            <AuthorUsername>
                                @
                                {isPostFeed
                                    ? post.author.username
                                    : user.username}
                            </AuthorUsername>
                        </AuthorInfo>
                    </PostAuthorContainer>
                    <PostRightContainer>
                        <PostDate>
                            {date}
                        </PostDate>
                        <PostOptions
                            key={post.id}
                            title="Post options"
                            isOpen={activeOptionsMenu === post.id}
                            toggleOptions={() => handleOptionsMenuClick(post.id)}
                            children={
                                <>
                                    {post.authorId === data?.me?.id && (
                                        <>
                                            <OptionItem
                                                role="menuitem"
                                                title="Update post"
                                                aria-label="Update post"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.alert("Update post");
                                                }}
                                            >
                                                Update post
                                            </OptionItem>
                                            <OptionItem
                                                role="menuitem"
                                                title="Delete post"
                                                aria-label="Delete post"
                                                onClick={async (e) => {
                                                    e.stopPropagation();

                                                    await deletePost({
                                                        variables: {
                                                            postId: post.postId,
                                                        },
                                                        update: (store, { data }) => {
                                                            if (
                                                                data &&
                                                                data.deletePost
                                                            ) {
                                                                const postsData = postFeedData?.postFeed || [];
                                                                const selectedPost = postsData.find((item) => item.id === post.id);
                                                                const index = postsData.indexOf(selectedPost!);
                                                                postsData.splice(index!, 1);
                                                                
                                                                store.writeQuery<PostFeedQuery>({
                                                                    query: PostFeedDocument,
                                                                    data: {
                                                                        postFeed: postsData,
                                                                    },
                                                                });
                                                            }
                                                        },
                                                    });
                                                }}
                                            >
                                                Delete post
                                            </OptionItem>
                                        </>
                                    )}
                                </>
                            }
                        />
                    </PostRightContainer>
                </PostHeader>
                <PostContentContainer>
                    <PostTextContainer>
                        {content}
                    </PostTextContainer>
                </PostContentContainer>
            </PostInnerContainer>
        </PostContainer>
    );
};

export default PostComponent;
