
import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { EditorState } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

import { useEffect } from 'react';

const theme = {
    // Theme styling goes here
}

function onError(error : Error){
    console.error(error);
}

function MyOnChangePlugIn({onChange}   : {onChange : (editorState : EditorState ) => void}) : null{
    const [editor] = useLexicalComposerContext();
    useEffect(()=>{
        return editor.registerUpdateListener(({editorState})=>{
            onChange(editorState)
        })
    },[editor,onChange])
    return null
}

export default function Editor() {
    const initialConfig = {
      namespace: 'MyEditor',
      theme,
      onError,
    };
  
    return (
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable className=' h-[30rem]  min-w-full p-2 '  />}
          placeholder={<div className=' absolute top-0 left-0 p-4'>Enter Title...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <MyOnChangePlugIn onChange={(editorState)=> console.log(editorState)} />
      </LexicalComposer>
    );
  }