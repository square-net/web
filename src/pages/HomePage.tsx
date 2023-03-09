import Head from "../components/Head";
import PageLayout from "../components/layouts/PageLayout";
import PageContentLayout from "../components/layouts/sublayouts/PageContentLayout";
import styled from "styled-components";
import { devices } from "../styles/devices";
import { FeedLoading, NoPostsAlert } from "../styles/global";
import LoadingComponent from "../components/utils/LoadingComponent";
import PostComponent from "../components/layouts/items/post/PostComponent";
import { usePostFeedQuery } from "../generated/graphql";
import MicroInput from "../components/input/micro/MicroInput";

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 36px;
`;

const PostFeedContainer = styled.div`
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

function HomePage() {
    const { data, loading, error } = usePostFeedQuery({ fetchPolicy: "network-only" });

    return (
        <>
            <Head
                title="Home | Square"
                description="Do everything on this app."
            />
            <PageLayout 
                children={
                    <PageContentLayout type="main" title="Home" content={
                        <HomePageContainer>
                            <MicroInput />
                            <PostFeedContainer>
                                {(loading && !data) || error ? (
                                    <FeedLoading>
                                        <LoadingComponent />
                                    </FeedLoading>
                                ) : (
                                    <>
                                        {data?.postFeed?.length === 0 ? (
                                            <NoPostsAlert>
                                                No one has published a post
                                                yet.
                                            </NoPostsAlert>
                                        ) : (
                                            <>
                                                {data?.postFeed?.map(
                                                    (post) => (
                                                        <PostComponent
                                                            key={
                                                                post.postId
                                                            }
                                                            isPostFeed={
                                                                true
                                                            }
                                                            post={post}
                                                        />
                                                    )
                                                )}
                                            </>
                                        )}
                                    </>
                                )}
                            </PostFeedContainer>
                        </HomePageContainer>
                    } />
                }
            />
        </>
    );
}

export default HomePage;
