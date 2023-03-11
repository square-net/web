import { FunctionComponent } from "react";
import styled from "styled-components";
import SearchBar from "../../utils/search/SearchBar";
import { devices } from "../../../styles/devices";

interface SideColumnComponentProps {
    isSearchPage?: boolean;
    sideColumnContent: JSX.Element;
}

const SideColumnComponentContainer = styled.div.attrs(
    (props: { isSearchPage?: boolean }) => props
)`
    display: none;

    @media ${devices.tablet} and (max-height: 480px) {
        display: grid;
        position: sticky;
        top: 0;
        width: 100%;
        max-height: calc(100vh - 60px);
        grid-template-columns: 100%;
        grid-template-rows: ${props => props.isSearchPage ? "auto" : "60px auto"};
        padding-right: 12px;
    }

    @media ${devices.laptopS} and (min-height: 480px) {
        display: grid;
        position: sticky;
        top: 0;
        width: 100%;
        max-height: 100vh;
        grid-template-columns: 100%;
        grid-template-rows: ${props => props.isSearchPage ? "auto" : "60px auto"};
        padding-right: 12px;
    }

    @media ${devices.laptopL} {
        display: grid;
        position: sticky;
        top: 0;
        width: 100%;
        max-height: 100vh;
        grid-template-columns: 100%;
        grid-template-rows: ${props => props.isSearchPage ? "auto" : "60px auto"};
        padding-right: 12px;
    }
`;

const SideColumnHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: sticky;
    top: 0;
    background-color: #151414;
    z-index: 100;
`;

const SideColumnContent = styled.div`
    display: grid;
    gap: 12px;
    padding-top: 12px;
    width: 100%;
    padding-bottom: 12px;
`;

export const SideColumnComponent: FunctionComponent<SideColumnComponentProps> = ({ isSearchPage, sideColumnContent }) => {
    return (
        <SideColumnComponentContainer isSearchPage={isSearchPage}>
            {!isSearchPage && (
                <SideColumnHeader>
                    <SearchBar />
                </SideColumnHeader>
            )}
            <SideColumnContent>
                {sideColumnContent}
            </SideColumnContent>
        </SideColumnComponentContainer>
    );
}