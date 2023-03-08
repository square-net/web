import { Form, Formik } from "formik";
import styled from "styled-components";
import {
    PostFeedDocument,
    PostFeedQuery,
    useCreatePostMutation,
    usePostFeedQuery,
} from "../../../generated/graphql";
import { Button, PageBlock } from "../../../styles/global";
import { toErrorMap } from "../../../utils/toErrorMap";
import EditorField from "./EditorField";

const MicroInputContainer = styled.div`
    display: block;
    padding-top: 12px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 12px;
`;

const MicroInputFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const PublishButton = styled(Button)`
    background-color: #039BE5;
    color: #ffffff;
`;

function MicroInput() {
    const [createPost] = useCreatePostMutation();
    const { data: postFeedData } = usePostFeedQuery({
        fetchPolicy: "network-only",
    });

    return (
        <MicroInputContainer>
            <Formik
                initialValues={{ type: "post", content: "" }}
                onSubmit={async (values, { setErrors }) => {
                    const response = await createPost({
                        variables: values,
                        update: (store, { data }) => {
                            if (
                                data &&
                                data.createPost &&
                                data.createPost.post
                            ) {
                                store.writeQuery<PostFeedQuery>({
                                    query: PostFeedDocument,
                                    data: {
                                        postFeed: [
                                            data.createPost.post,
                                            ...postFeedData?.postFeed!,
                                        ],
                                    },
                                });
                            }
                        },
                    });

                    if (
                        response.data?.createPost.errors &&
                        response.data.createPost.errors.length !== 0
                    ) {
                        setErrors(toErrorMap(response.data.createPost.errors));
                    }
                }}
            >
                {({ errors }) => (
                    <Form>
                        <MicroInputFormContainer>
                            <EditorField
                                field="content"
                                placeholder="What's happening right now?"
                                errors={errors}
                            />
                            <PageBlock>
                                <PublishButton
                                    type="submit"
                                    role="button"
                                    title="Publish post"
                                    aria-label="Publish post"
                                >
                                    Publish
                                </PublishButton>
                            </PageBlock>
                        </MicroInputFormContainer>
                    </Form>
                )}
            </Formik>
        </MicroInputContainer>
    );
}

export default MicroInput;
