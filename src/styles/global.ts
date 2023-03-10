import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "./devices";

export const Button = styled.button`
    display: block;
    border: none;
    background-color: inherit;
    color: inherit;
    padding: 12px 24px;
    font-weight: 700;
    border-radius: 9999px;
    cursor: pointer;
`;

export const SmallButton = styled(Button)`
    padding: 6px 18px;
    border: inherit;
    background-color: transparent;
    transition: background-color ease 0.2s;

    &:hover, &:focus {
        background-color: rgba(56, 53, 53, 0.6);
    }
`;

export const PageBlock = styled.div`
    display: block;
`;

export const PageText = styled.div`
    display: block;
    text-align: left;
`;

export const PageTextMT24 = styled(PageText)`
    margin-top: 24px;
`;

export const PageTextMB24 = styled(PageText)`
    margin-bottom: 24px;
`;

export const PageTextMT48 = styled(PageText)`
    margin-top: 48px;
`;

export const PageTextMB48 = styled(PageText)`
    margin-bottom: 48px;
`;

export const SvgIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    fill: inherit;
    stroke: inherit;

    svg {
        width: inherit;
        height: inherit;
        fill: inherit;
        stroke: inherit;
    }
`;

export const AuthForm = styled.div`
    display: block;
`;

export const AuthFormTitle = styled.div`
    display: block;
    font-weight: 800;
    margin-bottom: 48px;
    font-size: 32px;

    @media ${devices.mobileS} {
        font-size: 44px;
    }

    @media ${devices.mobileL} {
        font-size: 50px;
    }

    @media ${devices.tablet} {
        font-size: 60px;
    }
`;

export const AuthFormContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const Status = styled.div`
    display: block;
    padding: 6px;
    border-radius: 6px;
    font-size: 14px;
    background-color: #039BE5;
    color: #ffffff;
    margin-bottom: 24px;
`;

export const AuthHalfInput = styled.div`
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: unset;

    @media ${devices.mobileS} {
        flex-direction: column;
        align-items: unset;
    }

    @media ${devices.mobileL} {
        flex-direction: row;
        align-items: flex-end;
    }
`;

export const AuthButton = styled(Button)`
    background-color: #039BE5;
    color: #ffffff;
`;

export const CustomFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
`;

export const CustomFieldError = styled.div`
    display: block;
    font-size: 14px;
`;

export const CustomFieldContainer = styled.div`
    display: block;
    background-color: #383535;
    height: 60px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 6px;
`;

export const CustomInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 22px;
    margin-top: 4px;
    margin-bottom: 4px;
`;

export const CustomInfo = styled.div`
    display: block;
    font-size: 14px;
`;

export const CustomInnerFieldContainer = styled.div`
    display: flex;
    align-items: center;
    height: 26px;
    width: 100%;
    margin-bottom: 4px;
`;

export const ImageButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    transition: background-color ease 0.2s;

    &:hover, &:focus {
        background-color: rgba(0, 0, 0, 0.8);
    }
`;

export const LinkButton = styled(Link)`
    display: inline-block;
    padding: 12px 24px;
    border-radius: 9999px;
    text-decoration: none;
    background-color: inherit;
    color: inherit;
    font-weight: 700;

    &:hover, &:active {
        text-decoration: none;
    }
`;

export const FeedLoading = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 42px;
`;

export const ControlContainer = styled.div.attrs(
    (props: { size?: number }) => props
)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: ${(props) => (props.size ? `${props.size}px` : `36px`)};
    height: ${(props) => (props.size ? `${props.size}px` : `36px`)};
    border-radius: 9999px;
    background-color: transparent;
    transition: background-color ease 0.2s;

    &:hover,
    &:focus {
        background-color: rgba(56, 53, 53, 0.6);
    }
`;

export const NoPostsAlert = styled(PageText)`
    padding-left: 16px;
    padding-right: 16px;
`;

export const OptionItem = styled.div`
    display: block;
    background-color: transparent;
    color: #ffffff;
    padding: 12px 16px;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    background-color: transparent;
    transition: background-color ease 0.2s;

    &:hover, &:focus {
        background-color: rgba(56, 53, 53, 0.6);
    }
`;