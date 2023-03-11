import Close from "../../icons/Close";
import styled from "styled-components";
import Magnifier from "../../icons/Magnifier";
import { useState } from "react";

const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
`;

const SearchBoxHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: 40px;
    background-color: #383535;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 12px;
`;

const SearchInputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const CloseButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-radius: 9999px;
    background-color: #039BE5;
    cursor: pointer;
`;

function SearchBar() {
    const [value, setValue] = useState("");

    return (
        <SearchBox>
            <SearchBoxHeader>
                <Magnifier type="small" isActive={false} />
                <SearchInputContainer>
                    <input
                        type="text"
                        autoCapitalize="none"
                        spellCheck="false"
                        autoComplete="off"
                        autoCorrect="off"
                        autoFocus
                        aria-required
                        id="search-input"
                        name="search-input"
                        placeholder="Search on Square"
                        aria-label="Search on Square"
                        value={value}
                        onChange={(e: any) => {
                            setValue(e.target.value);
                        }}
                    />
                </SearchInputContainer>
                {value ? (
                    <CloseButtonContainer
                        role="button"
                        tabIndex={0}
                        title="Clear search input"
                        aria-label="Clear search input"
                        onMouseDown={() => {
                            setValue("");
                        }}
                    >
                        <Close type="small" />
                    </CloseButtonContainer>
                ) : null}
            </SearchBoxHeader>
        </SearchBox>
    );
}

export default SearchBar;
