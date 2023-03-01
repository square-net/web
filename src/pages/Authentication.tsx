import { Link } from "react-router-dom";
import Head from "../components/Head";
import Logo from "../components/icons/Logo";
import styled from "styled-components";
import { devices } from "../styles/devices";
import { LinkButton, PageBlock, PageText } from "../styles/global";

const PageWrapper = styled.div`
    display: grid;
    justify-items: center;
    width: 100%;
`;

const PageContainer = styled.div`
    display: grid;
    justify-items: center;

    @media ${devices.mobileS} {
        grid-template-rows: auto;
        grid-template-columns: none;
    }

    @media ${devices.laptopS} {
        grid-template-rows: none;
        grid-template-columns: auto;
    }
`;

const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding-top: 48px;
    padding-bottom: 48px;
    min-height: calc(100vh - 80px);
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;

    @media ${devices.mobileS} {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media ${devices.mobileL} {
        padding-left: 0;
        padding-right: 0;
        width: 360px;
    }

    @media ${devices.tablet} {
        width: 472px;
    }

    @media ${devices.laptopM} {
        width: 580px;
    }
`;

const SiteTitle = styled.div`
    display: block;
    font-size: 42px;
    font-weight: 800;

    @media ${devices.mobileS} {
        font-size: 52px;
    }

    @media ${devices.mobileL} {
        font-size: 58px;
    }

    @media ${devices.tablet} {
        font-size: 62px;
    }

    @media ${devices.laptopS} {
        font-size: 52px;
    }

    @media ${devices.laptopM} {
        font-size: 58px;
    }

    @media ${devices.laptopL} {
        font-size: 60px;
    }

    @media ${devices.desktop} {
        font-size: 64px;
    }
`;

const PageFlex = styled(PageBlock)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 24px;
`;

const AuthLinkButton = styled(LinkButton)`
    :first-child {
        background-color: #039BE5;
        color: #ffffff;
    }

    :last-child {
        background-color: #ffffff;
        color: #151414;
    }
`;

const PageFooter = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    height: 80px;
    font-size: 14px;
    column-gap: 12px;
    row-gap: 4px;
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;

    @media ${devices.mobileS} {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media ${devices.mobileL} {
        padding-left: 0;
        padding-right: 0;
        width: 360px;
    }

    @media ${devices.tablet} {
        width: 472px;
    }

    @media ${devices.laptopM} {
        width: 580px;
    }
`;

const FooterItem = styled(PageText)`
    display: block;
    text-rendering: optimizeLegibility;
`;

function Authentication() {
    return (
        <>
            <Head
                title="Square"
                description="The everything app."
            />
            <PageWrapper>
                <PageContainer>
                    <PageContent>
                        <PageBlock>
                            <Link to="/" title="Square" aria-label="Square">
                                <Logo type="index-logo" />
                            </Link>
                        </PageBlock>
                        <SiteTitle>The everything app.</SiteTitle>
                        <PageText>
                            This is a platform where users can share opinions, photos and money.
                        </PageText>
                        <PageFlex>
                            <AuthLinkButton
                                to="/login"
                                title="Log in"
                                aria-label="Log in"
                            >
                                Log in
                            </AuthLinkButton>
                            <AuthLinkButton
                                to="/signup"
                                title="Sign up"
                                aria-label="Sign up"
                            >
                                Sign up
                            </AuthLinkButton>
                        </PageFlex>
                    </PageContent>
                </PageContainer>
                <PageFooter>
                    <FooterItem>
                        &copy; {new Date().getFullYear()} Square Network
                    </FooterItem>
                    <FooterItem>
                        <a
                            href="https://blog.projectsquare.online"
                            target="_blank"
                            title="Square Blog"
                            rel="noreferrer"
                            aria-label="Square Blog"
                        >
                            Blog
                        </a>
                    </FooterItem>
                    <FooterItem>
                        <a
                            href="https://twitter.com/SquareNetworkEU"
                            target="_blank"
                            title="Square official Twitter account"
                            rel="noreferrer"
                            aria-label="Square official Twitter account"
                        >
                            Twitter
                        </a>
                    </FooterItem>
                </PageFooter>
            </PageWrapper>
        </>
    );
}

export default Authentication;
