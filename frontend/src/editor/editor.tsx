
import {
  BubbleMenu, EditorContent, useEditor,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Heading from '@tiptap/extension-heading'

export default ({content,setContent ,handlePublish} : {content: any , setContent: any ,handlePublish: any}) => {


  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock : {
          HTMLAttributes : {
            class : ' bg-slate-900 text-sm text-slate-100 p-2 rounded-lg'
          }
        },
        bulletList : {
          HTMLAttributes: {
            class: 'bg-slate-200 text-lg',
          },
          itemTypeName: 'listItem',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Heading.configure({
        HTMLAttributes : {
          class : ' text-slate-800 text-[3rem] font-bold'
        },
        levels : [1,2,3]
      })
      
    ],
    autofocus :'start',
    editable :true,
    content : 'Type here ...',
    editorProps: {
      attributes: {
        class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none w-[80rem] h-[35rem] bg-slate-50 border border-slate-200 rounded-lg font-normal px-4  py-2 no-underline overflow-auto',
      },
    },
  })

  return (
    <div className=' flex flex-col'>
      < div className=' flex gap-9 justify-center w-full '> 
        {editor &&
          
          <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }} className=' flex gap-2 bg-slate-100 border-2 border-slate-400  p-1 rounded-lg justify-center '>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`${editor.isActive('bold') ? 'is-active bg-slate-200' : ''}`}
            >
            <i className="ri-bold text-lg text-slate-600"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active  bg-slate-200' : ''}
            >
            < i className="ri-italic text-lg text-slate-600"></i>
          </button>
          <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              className={editor.isActive('headings', { level: 1 }) ? ' is-active bg-slate-200' : ''}
              >
              <i className="ri-h-1 text-lg text-slate-600"></i>
            </button>
            
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active bg-slate-200' : ''}
            >
            <i className="ri-strikethrough text-lg text-slate-600"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active bg-slate-200' : ''}
            >
            <i className="ri-list-unordered text-lg text-slate-600"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().setCodeBlock().run()}
            disabled={editor.isActive('codeBlock')}
            >
            <i className="ri-code-box-fill text-lg text-slate-600"></i>
          </button>

          <button
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={editor.isActive({ textAlign: 'left' }) ? 'is-active bg-slate-200' : ''}
            >
          <i className="ri-text-direction-r text-lg text-slate-600"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={editor.isActive({ textAlign: 'center' }) ? 'is-active bg-slate-200' : ''}
          >
          <i className="ri-align-center text-lg text-slate-600"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'is-active bg-slate-200'  : ''}
          >
          <i className="ri-text-direction-l text-lg text-slate-600"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={editor.isActive({ textAlign: 'justify' }) ? 'is-active bg-slate-200' : ''}
          >
          <i className="ri-align-justify text-lg text-slate-600"></i>
        </button>
        </BubbleMenu>
        }
        <EditorContent editor={editor} />
        
      </div>
      <button
              onClick={()=>handlePublish(editor)}
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              Publish
            </button>
    </div>
  )
}