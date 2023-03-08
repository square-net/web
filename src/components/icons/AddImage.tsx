import styled from "styled-components";
import { SvgIcon } from "../../styles/global";

const AddImageContainer = styled(SvgIcon)`
    width: 24px;
    height: 24px;
    fill: #ffffff;
    stroke: none;
`;

function AddImage() {
    return (
        <AddImageContainer>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 20C14.7614 20 17 17.7614 17 15C17 12.2386 14.7614 10 12 10C9.23858 10 7 12.2386 7 15C7 17.7614 9.23858 20 12 20ZM12 11.5C12.5523 11.5 13 11.9477 13 12.5V14H14.5C15.0523 14 15.5 14.4477 15.5 15C15.5 15.5523 15.0523 16 14.5 16H13V17.5C13 18.0523 12.5523 18.5 12 18.5C11.4477 18.5 11 18.0523 11 17.5V16H9.5C8.94771 16 8.5 15.5523 8.5 15C8.5 14.4477 8.94771 14 9.5 14H11V12.5C11 11.9477 11.4477 11.5 12 11.5Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M5.88197 7L7.55279 3.65836C8.06096 2.64201 9.09975 2 10.2361 2H13.7639C14.9002 2 15.939 2.64201 16.4472 3.65836L18.118 7H20C21.6569 7 23 8.34315 23 10V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V10C1 8.34315 2.34315 7 4 7H5.88197ZM9.34164 4.55279C9.51103 4.214 9.8573 4 10.2361 4H13.7639C14.1427 4 14.489 4.214 14.6584 4.55279L16.882 9H20C20.5523 9 21 9.44771 21 10V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V10C3 9.44772 3.44772 9 4 9H7.11803L9.34164 4.55279Z" />
            </svg>
        </AddImageContainer>
    );
}

export default AddImage;