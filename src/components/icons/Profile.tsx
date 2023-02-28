import styled from "styled-components";
import { FunctionComponent } from "react";
import { SvgIcon } from "../../styles/global";
import { IconProps } from "./common";

const ProfileIcon = styled(SvgIcon).attrs(
    (props: { isActive: boolean }) => props
)`
    width: 32px;
    height: 32px;
    fill: ${(props) => (props.isActive ? "#039BE5" : "#ffffff")};
    stroke: none;
`;

const Profile: FunctionComponent<IconProps> = ({ isActive }) => {
    return (
        <ProfileIcon isActive={isActive}>
            {isActive ? (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.00001 8C7.00001 10.7614 9.23858 13 12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7.00001 5.23858 7.00001 8Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M18 21C19.1046 21 20.0285 20.0824 19.6783 19.0348C19.3047 17.9173 18.6148 16.8884 17.6569 16.0503C16.1566 14.7375 14.1217 14 12 14C9.87828 14 7.84344 14.7375 6.34315 16.0503C5.38525 16.8884 4.69535 17.9173 4.32172 19.0348C3.97149 20.0824 4.89544 21 6.00001 21H18Z" />
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.00001 8C7.00001 10.7614 9.23858 13 12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7.00001 5.23858 7.00001 8ZM9.00001 8C9.00001 9.65685 10.3432 11 12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3432 5 9.00001 6.34315 9.00001 8Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M18 21C19.1046 21 20.0285 20.0824 19.6783 19.0348C19.3047 17.9173 18.6148 16.8884 17.6569 16.0503C16.1566 14.7375 14.1217 14 12 14C9.87828 14 7.84344 14.7375 6.34315 16.0503C5.38525 16.8884 4.69535 17.9173 4.32172 19.0348C3.97149 20.0824 4.89544 21 6.00001 21H18ZM16.3399 17.5554C16.8359 17.9894 17.2211 18.481 17.4948 19H6.50519C6.77889 18.481 7.16415 17.9894 7.66016 17.5554C8.77117 16.5833 10.3289 16 12 16C13.6712 16 15.2288 16.5833 16.3399 17.5554Z" />
                </svg>
            )}
        </ProfileIcon>
    );
}

export default Profile;
