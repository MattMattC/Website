import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ReactDOMServer from 'react-dom/server';

export const Code = ({ children, ...rest }) => {
    console.log('rest', rest);

    return (
        <SyntaxHighlighter language="javascript" style={docco}>
            <div dangerouslySetInnerHTML={{ __html: children }}></div>
        </SyntaxHighlighter>
    );
};
