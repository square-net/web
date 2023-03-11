import styled from "styled-components";
import { FunctionComponent } from "react";
import { useNavigate, useNavigationType } from "react-router-dom";
import { devices } from "../../../styles/devices";
import Back from "../../icons/Back";
import { ControlContainer } from "../../../styles/global";

interface ModalProps {
    modalContent: JSX.Element;
    headerText: string;
}

const ModalWrapper = styled.div`
    position: fixed;
    display: grid;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    background-color: transparent;
    justify-content: center;
    z-index: 1000;
`;

const ModalOverlay = styled.div`
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: rgba(56, 53, 53, 0.6);
`;

const ModalOuterContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    z-index: 10000;
    overflow: auto;
    background-color: #151414;
    width: 100vw;
    height: 100vh;
    border-radius: 0px;

    @media ${devices.tablet} and (min-height: 480px) {
        border-radius: 16px;
        width: 480px;
        height: 65vh;
    }

    @media ${devices.laptopL} {
        border-radius: 16px;
        width: 540px;
    }
`;

const ModalContainer = styled.div`
    display: grid;
    grid-template-rows: 60px auto;
    grid-template-columns: auto;
    position: relative;
    z-index: 10000;
    background-color: #151414;
    width: 100%;
    height: 100%;

    @media ${devices.mobileL} {
        width: 380px;
    }

    @media (min-width: 600px) and (max-height: 480px) {
        width: 500px;
    }

    @media ${devices.tablet} and (max-height: 480px) {
        width: 620px;
    }

    @media ${devices.tablet} and (min-height: 480px) {
        width: 100%;
    }

    @media ${devices.laptopL} {
        width: 100%;
    }
`;

const ModalHeader = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
    justify-content: flex-start;
    height: 60px;
    min-height: 60px;
    gap: 16px;
    width: 100%;
    z-index: 10000;
    overflow: hidden;
    background-color: #151414;
`;

const ModalTitle = styled.div`
    display: block;
    font-weight: 700;
    color: #ffffff;
    font-size: inherit;
    width: calc(100% - 52px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const ModalContent = styled.div`
    display: block;
    width: 100%;
    height: calc(100% - 60px);
`;

const Modal: FunctionComponent<ModalProps> = ({ modalContent, headerText }) => {
    const navigate = useNavigate();
    const navigationType = useNavigationType();

    document.body.classList.add("not-scrolling");

    return (
        <ModalWrapper>
            <ModalOverlay
                role="link"
                aria-label="Exit"
                onClick={() => {
                    if (navigationType === "POP") {
                        navigate("/home");
                    } else {
                        navigate(-1);
                    }
                }}
            ></ModalOverlay>
            <ModalOuterContainer>
                <ModalContainer>
                    <ModalHeader>
                        <ControlContainer
                            role="button"
                            title="Close modal"
                            aria-label="Close modal"
                            onClick={() => {
                                if (navigationType === "POP") {
                                    navigate("/home");
                                } else {
                                    navigate(-1);
                                }
                            }}
                        >
                            <Back />
                        </ControlContainer>
                        <ModalTitle>{headerText}</ModalTitle>
                    </ModalHeader>
                    <ModalContent>{modalContent}</ModalContent>
                </ModalContainer>
            </ModalOuterContainer>
        </ModalWrapper>
    );
};

export default Modal;
