import { FunctionComponent } from "react";
import styled from "styled-components";
import { PageText } from "../../styles/global";

interface ItemNotFoundProps {
    title: string;
    content: string;
}

const ItemNotFoundContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #151414;
`;

const ItemNotFoundInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 48px;
    padding-bottom: 48px;
`;

const ItemNotFoundTitle = styled.div`
    display: block;
    font-weight: 700;
    font-size: 32px;
`;

const ItemNotFound: FunctionComponent<ItemNotFoundProps> = ({
    title,
    content,
}) => {
    return (
        <ItemNotFoundContainer>
            <ItemNotFoundInnerContainer>
                <ItemNotFoundTitle>{title}</ItemNotFoundTitle>
                <PageText>{content}</PageText>
            </ItemNotFoundInnerContainer>
        </ItemNotFoundContainer>
    );
};

export default ItemNotFound;