import { Link } from "react-router-dom";
import Head from "../components/Head";
import Logo from "../components/icons/Logo";
import styled from "styled-components";
import { devices } from "../styles/devices";
import { LinkButton, PageBlock, PageText } from "../styles/global";

const PageContainer = styled.div`
    display: grid;
    align-items: center;

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
    padding-left: 24px;
    padding-right: 24px;
    min-height: calc(100vh - 80px);

    @media ${devices.mobileS} {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media ${devices.mobileL} {
        padding-left: 14%;
        padding-right: 14%;
    }

    @media ${devices.tablet} {
        padding-left: 16%;
        padding-right: 16%;
    }

    @media ${devices.laptopS} {
        padding-left: 24%;
        padding-right: 24%;
    }

    @media ${devices.laptopM} {
        padding-left: 30%;
        padding-right: 30%;
    }

    @media ${devices.desktop} {
        padding-left: 32%;
        padding-right: 32%;
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

    @media ${devices.mobileS} {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media ${devices.mobileL} {
        padding-left: 14%;
        padding-right: 14%;
    }

    @media ${devices.tablet} {
        padding-left: 16%;
        padding-right: 16%;
    }

    @media ${devices.laptopS} {
        padding-left: 24%;
        padding-right: 24%;
    }

    @media ${devices.laptopM} {
        padding-left: 30%;
        padding-right: 30%;
    }

    @media ${devices.desktop} {
        padding-left: 32%;
        padding-right: 32%;
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
        </>
    );
}

export default Authentication;
