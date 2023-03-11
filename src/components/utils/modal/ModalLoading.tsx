import styled from "styled-components";
import { devices } from "../../../styles/devices";
import LoadingComponent from "../LoadingComponent";

const ModalLoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 60px);

    @media ${devices.tablet} {
        height: calc(65vh - 60px);
    }
`;

function ModalLoading() {
    return (
        <ModalLoadingContainer>
            <LoadingComponent />
        </ModalLoadingContainer>
    );
}

export default ModalLoading;