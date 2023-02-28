import styled from "styled-components";
import { FunctionComponent } from "react";
import { useNavigate, useNavigationType } from "react-router-dom";
import { devices } from "../../../styles/devices";
import Back from "../../icons/Back";

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

const ModalContainer = styled.div`
    display: grid;
    grid-template-rows: 60px auto;
    grid-template-columns: auto;
    position: relative;
    z-index: 10000;
    overflow: auto;
    background-color: #151414;
    min-width: 100vw;
    width: 100%;
    max-width: auto;
    height: 100vh;
    border-radius: 0px;
    padding: 0;

    @media ${devices.mobileL} {
        width: 100%;
        padding-left: 7vw;
        padding-right: 7vw;
    }

    @media ${devices.tablet} and (max-height: 420px) {
        width: 100%;
        padding-left: 8vw;
        padding-right: 8vw;
    }

    @media ${devices.tablet} and (min-height: 420px) {
        padding: 0;
        border-radius: 16px;
        min-width: 45vw;
        width: auto;
        max-width: 55vw;
        height: auto;
    }

    @media ${devices.laptopS} {
        padding: 0;
        min-width: 40vw;
        max-width: 50vw;
        border-radius: 16px;
        width: auto;
        height: auto;
    }

    @media ${devices.laptopL} {
        padding: 0;
        border-radius: 16px;
        width: auto;
        height: auto;
        min-width: 35vw;
        max-width: 45vw;
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
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const CloseModal = styled.div`
    display: block;
    cursor: pointer;
    padding: 6px;
    border-radius: 9999px;
    background-color: transparent;
    transition: background-color ease 0.2s;

    &:hover, &:focus {
        background-color: rgba(56, 53, 53, 0.6);
    }
`;

const ModalContent = styled.div`
    display: block;
    width: 100%;
    max-height: calc(100vh - 60px);

    @media ${devices.tablet} and (min-height: 420px) {
        max-height: 65vh;
    }
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
            <ModalContainer>
                <ModalHeader>
                    <CloseModal
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
                    </CloseModal>
                    <ModalTitle>{headerText}</ModalTitle>
                </ModalHeader>
                <ModalContent>{modalContent}</ModalContent>
            </ModalContainer>
        </ModalWrapper>
    );
};

export default Modal;
