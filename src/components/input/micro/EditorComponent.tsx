import {
    FunctionComponent,
    useRef,
    useState,
} from "react";
import { convertToRaw, Editor, EditorState } from "draft-js";
import styled from "styled-components";
import "./editor.css";

export interface EditorComponentProps {
    field: any;
    form: any;
    placeholder: string;
}

const EditorContainer = styled.div`
    display: block;
    min-height: 54px;
    max-height: 120px;
    overflow: auto;
    font-size: 22px;
`;

const EditorComponent: FunctionComponent<EditorComponentProps> = ({
    field,
    form,
    placeholder,
}) => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const postEditorRef = useRef<any>();

    return (
        <EditorContainer>
            <Editor
                placeholder={placeholder}
                editorState={editorState}
                onChange={(editorState) => {
                    setEditorState(editorState);

                    form.setFieldValue(
                        field.name,
                        JSON.stringify(convertToRaw(editorState.getCurrentContent()))
                    );
                }}
                ref={postEditorRef}
                readOnly={false}
            />
        </EditorContainer>
    );
};

export default EditorComponent;
