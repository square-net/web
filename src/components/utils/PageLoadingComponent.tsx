import styled from "styled-components";
import { devices } from "../../styles/devices";
import LoadingComponent from "./LoadingComponent";

const PageLoadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 120px);

    @media ${devices.mobileL} and (min-height: 480px) {
        height: calc(100vh - 60px);
    }

    @media ${devices.laptopL} {
        height: calc(100vh - 60px);
    }
`;

const PageLoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function PageLoadingComponent() {
    return (
        <PageLoadingWrapper>
            <PageLoadingContainer>
                <LoadingComponent />
            </PageLoadingContainer>
        </PageLoadingWrapper>
    );
}

export default PageLoadingComponent;
