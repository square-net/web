import styled from "styled-components";

const PreloaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #151414;
`;

const PreloaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogoContainer = styled.div`
    width: 72px;
    height: 72px;
    fill: #039BE5;
    stroke: none;
`;

function Preloader() {
    return (
        <PreloaderWrapper>
            <PreloaderContainer>
                <LogoContainer>
                    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 10C10.8954 10 10 10.8954 10 12V18C10 19.1046 10.8954 20 12 20H18C19.1046 20 20 19.1046 20 18V12C20 10.8954 19.1046 10 18 10H12Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 6C0 2.68629 2.68629 0 6 0H24C27.3137 0 30 2.68629 30 6V24C30 27.3137 27.3137 30 24 30H6C2.68629 30 0 27.3137 0 24V6ZM5 9C5 6.79086 6.79086 5 9 5H21C23.2091 5 25 6.79086 25 9V21C25 23.2091 23.2091 25 21 25H9C6.79086 25 5 23.2091 5 21V9Z" />
                    </svg>
                </LogoContainer>
            </PreloaderContainer>
        </PreloaderWrapper>
    );
}

export default Preloader;
