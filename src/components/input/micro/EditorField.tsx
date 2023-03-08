import { Field } from "formik";
import { FunctionComponent } from "react";
import EditorComponent from "./EditorComponent";
import styled from "styled-components";

interface EditorFieldProps {
    field: string;
    placeholder: string;
    errors: any;
}

const EditorFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
`;

const EditorFieldError = styled.div`
    display: block;
    font-size: 14px;
`;

const EditorField: FunctionComponent<EditorFieldProps> = ({
    field,
    placeholder,
    errors,
}) => {
    return (
        <EditorFieldContainer>
            {errors[field] ? (
                <EditorFieldError>{errors[field]}</EditorFieldError>
            ) : null}
            <Field
                name={field}
                component={EditorComponent}
                placeholder={placeholder}
            />
        </EditorFieldContainer>
    );
};

export default EditorField;
