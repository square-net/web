import { FunctionComponent } from "react";
import styled from "styled-components";
import { devices } from "../../styles/devices";
import { PageBlock } from "../../styles/global";
import Nav from "../Nav";

export interface PageLayoutProps {
    children: JSX.Element;
}

const PageLayoutWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const PageLayoutContainer = styled.div`
    display: grid;
    grid-template-columns: none;
    grid-template-rows: auto;
    width: 100%;

    @media ${devices.mobileL} and (min-height: 480px) {
        grid-template-columns: 96px auto;
        grid-template-rows: none;
        width: auto;
    }

    @media (min-width: 600px) and (min-height: 480px) {
        grid-template-columns: 96px 460px;
        grid-template-rows: none;
        width: auto;
    }

    @media ${devices.tablet} and (min-height: 480px) {
        grid-template-columns: 108px 620px;
        grid-template-rows: none;
        width: auto;
    }

    @media ${devices.laptopS} and (min-height: 480px) {
        grid-template-columns: 108px 760px;
        width: auto;
    }

    @media ${devices.laptopM} and (min-height: 480px) {
        grid-template-columns: 108px 900px;
        width: auto;
    }

    @media ${devices.laptopL} {
        grid-template-columns: 320px 900px;
        grid-template-rows: none;
        width: auto;
    }
`;

const PageContentLayoutContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const PageLayout: FunctionComponent<PageLayoutProps> = ({ children }) => {
    return (
        <PageLayoutWrapper>
            <PageLayoutContainer>
                <Nav />
                <PageBlock>
                    <PageContentLayoutContainer>
                        {children}
                    </PageContentLayoutContainer>
                </PageBlock>
            </PageLayoutContainer>
        </PageLayoutWrapper>
    );
}

export default PageLayout;
