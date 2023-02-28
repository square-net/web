import styled from "styled-components";
import { SvgIcon } from "../../styles/global";

const BackArrow = styled(SvgIcon)`
    width: 24px;
    height: 24px;
    fill: #ffffff;
    stroke: none;
`;

function Back() {
    return (
        <BackArrow>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.29289 11.2929C2.90237 11.6834 2.90237 12.3166 3.29289 12.7071L9.65685 19.0711C10.0474 19.4616 10.6805 19.4616 11.0711 19.0711C11.4616 18.6805 11.4616 18.0474 11.0711 17.6569L5.41421 12L11.0711 6.34315C11.4616 5.95262 11.4616 5.31946 11.0711 4.92893C10.6805 4.53841 10.0474 4.53841 9.65685 4.92893L3.29289 11.2929ZM20 13C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11V13ZM4 13H20V11H4V13Z" />
            </svg>
        </BackArrow>
    );
}

export default Back;
