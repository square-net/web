import { Form, Formik } from "formik";
import jwtDecode, { JwtHeader, JwtPayload } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Head from "../components/Head";
import AuthLayout from "../components/layouts/AuthLayout";
import { useVerifyEmailAddressMutation } from "../generated/graphql";
import {
    AuthButton,
    AuthForm,
    AuthFormContent,
    AuthFormTitle,
    PageBlock,
    PageTextMB24,
    Status,
} from "../styles/global";

function VerifyAccount() {
    const navigate = useNavigate();
    const params = useParams();

    const [verifyEmailAddress] = useVerifyEmailAddressMutation();

    useEffect(() => {
        try {
            const header = jwtDecode<JwtHeader>(params.token!);
            const payload = jwtDecode<JwtPayload>(params.token!);
            if (header && payload) {
                console.log("Valid JWT token");
            }
        } catch (error) {
            navigate("/");
        }
    }, [navigate, params.token]);

    return (
        <>
            <Head
                title="Verify your email address | Square"
                description="Verify you email address in order to log in to Square."
            />
            <AuthLayout
                content={
                    <AuthForm>
                        <AuthFormTitle>Verify your email address</AuthFormTitle>
                        <PageTextMB24>
                            Click the following button to verify the email
                            address linked to your account.
                        </PageTextMB24>
                        <Formik
                            initialValues={{ token: params.token! }}
                            onSubmit={async (values, { setStatus }) => {
                                const response = await verifyEmailAddress({
                                    variables: values,
                                });

                                const { exp } = jwtDecode<JwtPayload>(
                                    params.token!
                                );

                                if (Date.now() >= exp! * 1000) {
                                    setStatus(
                                        "Your token is expired. Please repeat the email address verification."
                                    );
                                } else {
                                    setStatus(
                                        response.data?.verifyEmailAddress.status
                                    );
                                }
                            }}
                        >
                            {({ status }) => (
                                <Form>
                                    {status ? <Status>{status}</Status> : null}
                                    <AuthFormContent>
                                        <PageBlock>
                                            <AuthButton
                                                type="submit"
                                                title="Verify your account"
                                                role="button"
                                                aria-label="Verify your account"
                                            >
                                                Verify your account
                                            </AuthButton>
                                        </PageBlock>
                                    </AuthFormContent>
                                </Form>
                            )}
                        </Formik>
                    </AuthForm>
                }
            />
        </>
    );
}

export default VerifyAccount;
