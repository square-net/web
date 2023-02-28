import styled from "styled-components";

const LoadingComponentWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const LoadingComponentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }

    transform-origin: center;
    animation: rotation 1s infinite linear;

    svg {
        width: 32px;
        height: 32px;
    } 
`;

function LoadingComponent() {
    return (
        <LoadingComponentWrapper>
            <LoadingComponentContainer>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#039BE5" strokeOpacity="0.3" strokeWidth="2" />
                    <path d="M18.3976 5.6699C18.3864 5.65859 18.3752 5.6473 18.364 5.63604C18.3527 5.62478 18.3414 5.61355 18.3301 5.60235C16.7042 3.99348 14.4681 3 12 3V1C12.6725 1 13.3419 1.06166 14 1.18335C14.7556 1.32305 15.4962 1.54187 16.2095 1.83732C17.5441 2.39013 18.7567 3.20038 19.7782 4.22183C20.7996 5.24327 21.6099 6.4559 22.1627 7.79048C22.4581 8.50377 22.677 9.24444 22.8167 10C22.9383 10.6581 23 11.3275 23 12H21C21 9.5319 20.0065 7.29584 18.3976 5.6699Z" fill="#039BE5" />
                </svg>
            </LoadingComponentContainer>
        </LoadingComponentWrapper>
    );
}

export default LoadingComponent;