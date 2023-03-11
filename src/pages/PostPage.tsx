import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PostFeedDocument, PostFeedQuery, useDeletePostMutation, useFindPostQuery, useMeQuery, usePostFeedQuery } from "../generated/graphql";
import Head from "../components/Head";
import PageContentLayout from "../components/layouts/sublayouts/PageContentLayout";
import PageLayout from "../components/layouts/PageLayout";
import PageLoadingComponent from "../components/utils/PageLoadingComponent";
import styled from "styled-components";
import { OptionItem, PageText } from "../styles/global";
import profilePicture from "../images/profile-picture.svg";
import { ContentState, convertFromRaw } from "draft-js";
import { processDate } from "../utils/processDate";
import { PostOptions } from "../components/layouts/items/post/PostOptions";

const PostPageContainer = styled.div`
    display: block;
`;

const PostPageInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const PostPageHeader = styled.div`
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

const PostPageContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 16px;
`;

const PostPageTextContainer = styled.div`
    display: block;
    padding-left: 16px;
    padding-right: 16px;
`;

const PostPageRightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
`;

function PostPage() {
    const params = useParams();
    const [postFound, setPostFound] = useState(false);
    const [content, setContent] = useState("");

    const { data: postData, loading, error } = useFindPostQuery({
        variables: { postId: params.postId! },
        fetchPolicy: "cache-and-network",
    });
    
    useEffect(() => {
        if ((postData && postData.findPost)) {
            setPostFound(true);
        }
    }, [postData]);

    const [activeOptionsMenu, setActiveOptionsMenu] = useState<number | null>(null);

    const handleOptionsMenuClick = (index: number) => {
        setActiveOptionsMenu(activeOptionsMenu === index ? null : index);
    };

    useEffect(() => {
        if (postData && postData.findPost) {
            const draftContent: ContentState = convertFromRaw(JSON.parse(postData?.findPost?.content!));
            setContent(draftContent.getPlainText());
        }
    }, [postData?.findPost?.content!]);

    let date = processDate(postData?.findPost?.updatedAt!);

    const { data: meData } = useMeQuery({ fetchPolicy: "network-only" });

    const [deletePost] = useDeletePostMutation();

    const { data: postFeedData } = usePostFeedQuery({ fetchPolicy: "network-only" });

    const navigate = useNavigate();

    return (
        <>
            <Head
                title={
                    loading
                        ? "Loading... | Square"
                        : postFound
                        ? `@${postData?.findPost?.author.username}'s post on Square`
                        : `Post not found | Square`
                }
                description={
                    loading
                        ? "Content not ready. Loading..."
                        : postFound
                        ? `${postData?.findPost?.author.firstName} ${postData?.findPost?.author.lastName}'s post on Square.`
                        : "Post not found"
                }
                image={postFound ? postData?.findPost?.author.profile?.profilePicture! : ""}
            />
            <PageLayout
                children={
                    <PageContentLayout 
                        type="post-page"
                        title="Post"
                        content={
                            <>
                                {(loading && !postData) || error ? (
                                    <PageLoadingComponent />
                                ) : (
                                    <PostPageContainer>
                                        <PostPageInnerContainer>
                                            <PostPageHeader>
                                                <PostAuthorContainer
                                                    role="link"
                                                    aria-label={`${
                                                        postData?.findPost?.author.firstName
                                                    } ${
                                                        postData?.findPost?.author.lastName
                                                    }'s profile`}
                                                    title={`${
                                                        postData?.findPost?.author.firstName
                                                    } ${
                                                        postData?.findPost?.author.lastName
                                                    }'s profile`}
                                                    to={`/${postData?.findPost?.author.username}`}
                                                >
                                                    <AuthorImageContainer>
                                                        <img
                                                            src={
                                                                postData?.findPost?.author.profile?.profilePicture !==
                                                                    "" &&
                                                                postData?.findPost?.author.profile?.profilePicture !==
                                                                    null
                                                                    ? postData?.findPost?.author.profile?.profilePicture
                                                                    : profilePicture
                                                            }
                                                            title={`${
                                                                postData?.findPost?.author.firstName
                                                            }'s profile picture`}
                                                            alt={`${
                                                                postData?.findPost?.author.firstName
                                                            } ${
                                                                postData?.findPost?.author.lastName
                                                            }`}
                                                        />
                                                    </AuthorImageContainer>
                                                    <AuthorInfo>
                                                        <AuthorFullName>
                                                            {postData?.findPost?.author.firstName}{" "}
                                                            {postData?.findPost?.author.lastName}
                                                        </AuthorFullName>
                                                        <AuthorUsername>
                                                            @
                                                            {postData?.findPost?.author.username}
                                                        </AuthorUsername>
                                                    </AuthorInfo>
                                                </PostAuthorContainer>
                                                <PostPageRightContainer>
                                                    <PostDate>
                                                        {date}
                                                    </PostDate>
                                                    <PostOptions
                                                        key={postData?.findPost?.id}
                                                        title="Post options"
                                                        isOpen={activeOptionsMenu === postData?.findPost?.id}
                                                        toggleOptions={() => handleOptionsMenuClick(postData?.findPost?.id!)}
                                                        children={
                                                            <>
                                                                {postData?.findPost?.authorId === meData?.me?.id && (
                                                                    <>
                                                                        <OptionItem
                                                                            role="menuitem"
                                                                            title="Update post"
                                                                            aria-label="Update post"
                                                                            onClick={() => {
                                                                                window.alert("Update post");
                                                                            }}
                                                                        >
                                                                            Update post
                                                                        </OptionItem>
                                                                        <OptionItem
                                                                            role="menuitem"
                                                                            title="Delete post"
                                                                            aria-label="Delete post"
                                                                            onClick={async () => {
                                                                                await deletePost({
                                                                                    variables: {
                                                                                        postId: postData?.findPost?.postId!,
                                                                                    },
                                                                                    update: (store, { data }) => {
                                                                                        if (
                                                                                            data &&
                                                                                            data.deletePost
                                                                                        ) {
                                                                                            const postsData = postFeedData?.postFeed || [];
                                                                                            const selectedPost = postsData.find((item) => item.id === postData?.findPost?.id);
                                                                                            const index = postsData.indexOf(selectedPost!);
                                                                                            postsData.splice(index!, 1);
                                                                                            
                                                                                            store.writeQuery<PostFeedQuery>({
                                                                                                query: PostFeedDocument,
                                                                                                data: {
                                                                                                    postFeed: postsData,
                                                                                                },
                                                                                            });

                                                                                            navigate("/home");
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
                                                </PostPageRightContainer>
                                            </PostPageHeader>
                                            <PostPageContentContainer>
                                                <PostPageTextContainer>
                                                    {content}
                                                </PostPageTextContainer>
                                            </PostPageContentContainer>
                                        </PostPageInnerContainer>
                                    </PostPageContainer>
                                )}
                            </>
                        }
                        sideColumn={
                            <>Classic column.</>
                        }
                    />
                }
            />
        </>
    );
}

export default PostPage;