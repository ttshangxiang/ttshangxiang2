import * as React from "react";
import 'codemirror/lib/codemirror.css';
import './index.less';
import * as CodeMirror from 'codemirror';

interface EditorProps {
}

interface EditorState {
}

export class Editor extends React.Component<EditorProps, EditorState> {
    constructor (props:any) {
        super(props);
    }
    editor: any;
    componentDidMount () {
        let myTextarea = document.getElementById('textarea');
        let options = {
            lineNumbers: true,
            indentUnit: 4,
            indentWithTabs: false
        };
        this.editor = CodeMirror.fromTextArea(myTextarea as HTMLTextAreaElement, options);
    }

    render() {
        return (
            <div className="j-editor">
                <div className="file">
                    <div className="file-header">
                        <nav className="tabnav-tabs">
                            <button type="button" className="btn-link code selected tabnav-tab js-blob-edit-code" id="editor-btn">
                                <svg aria-hidden="true" className="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14">
                                    <path fillRule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path>
                                </svg>
                                Edit file
                            </button>
                            <button type="button" className="btn-link preview tabnav-tab js-blob-edit-preview" id="preview-btn">
                                <svg aria-hidden="true" className="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                                    <path fillRule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>
                                </svg>
                                Preview changes
                            </button>
                        </nav>
                    </div>
                    <div className="tabpanel" id="tabpanel1">
                        <textarea name="heh" rows={35} id="textarea" className="j-textarea"></textarea>
                    </div>
                    <div className="tabpanel" id="tabpanel2">
                        <div id="preview"></div>
                    </div>
                </div>
            </div>
        );
    }
}