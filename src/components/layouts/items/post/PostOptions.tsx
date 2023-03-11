import { FunctionComponent } from "react";
import More from "../../../icons/More";
import styled from "styled-components";
import { devices } from "../../../../styles/devices";
import { SmallButton } from "../../../../styles/global";

interface PostOptionsProps {
    title: string;
    children: JSX.Element;
    isOpen: boolean;
    toggleOptions: () => void;
}

const PostOptionsContainer = styled.div`
    display: block;
`;

const OptionsContainerBackground = styled.div`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: rgba(56, 53, 53, 0.6);
`;

const PostOptionsButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 36px;
    height: 36px;
    border-radius: 9999px;
    background-color: transparent;
    transition: background-color ease 0.2s;

    &:hover, &:focus {
        background-color: rgba(21, 20, 20, 0.6);
    }
`;

const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: flex-start;
    position: fixed;
    top: unset;
    left: 0;
    right: 0;
    bottom: 0;
    height: auto;
    background-color: #151414;
    border-radius: 24px 24px 0px 0px;
    z-index: 100;
    max-height: 50vh;
    overflow: auto;
    max-width: 100%;

    @media ${devices.mobileL} {
        position: absolute;
        border-radius: 12px;
        background-color: #151414;
        top: unset;
        left: unset;
        right: unset;
        bottom: unset;
        max-height: auto;
        overflow: hidden;
        max-width: 384px;
        min-width: 140px;
        transform: translateY(-36px) translateX(calc(36px - 100%));
    }
`;

const OptionsTitle = styled.div`
    display: block;
    font-size: 22px;
    font-weight: 700;
    padding-top: 30px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 24px;
    width: 100%;

    @media ${devices.mobileL} {
        display: none;
    }
`;

const OptionsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    z-index: 1000;
    
    @media ${devices.mobileL} {
        width: auto;
        min-width: 140px;
        max-width: 384px;
    }
`;

const CloseOptionsContainer = styled.div`
    display: block;
    font-weight: 700;
    padding-top: 24px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 30px;
    width: 100%;

    @media ${devices.mobileL} {
        display: none;
    }
`;

const CloseOptionsButton = styled(SmallButton)`
    color: #ffffff;
    border: 2px solid #ffffff;
    width: 100%;
`;

export const PostOptions: FunctionComponent<PostOptionsProps> = ({ title, children, isOpen, toggleOptions }) => {
    return (
        <PostOptionsContainer onClick={(e) => e.stopPropagation()}>
            <PostOptionsButton
                role="button"
                title={title}
                aria-label={title}
                onClick={(e) => {
                    e.stopPropagation();
                    toggleOptions();
                }}
            >
                <More />
            </PostOptionsButton>
            {isOpen && (
                <>
                    <OptionsContainerBackground
                        onClick={() => {
                            toggleOptions();
                        }}
                    />
                    <OptionsContainer onClick={(e) => e.stopPropagation()} role="menu">
                        <OptionsTitle>{title}</OptionsTitle> 
                        <OptionsContent>
                            {children}
                        </OptionsContent>
                        <CloseOptionsContainer>
                            <CloseOptionsButton
                                role="button"
                                title="Close"
                                aria-label="Close"
                                onClick={() => {
                                    toggleOptions();
                                }}
                            >
                                Close
                            </CloseOptionsButton>
                        </CloseOptionsContainer>
                    </OptionsContainer>
                </>
            )}
        </PostOptionsContainer>
    );
};