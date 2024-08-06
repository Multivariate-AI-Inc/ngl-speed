import { toast } from 'react-toastify';
import {useRef, useEffect } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
const JoditEditor = dynamic(
  () => import("jodit-react").then(mod => mod.default),
  {
    ssr: false,
  },
)

const CodeCanvas = () => {
  const editorRef = useRef(null)
  const editHtmlRef = useRef(null)
  const textEditor = useRef(null)
  const handleEditorChange = value => {
    let text = value
    text = text.replace(
      /<span id="jodit-selection_marker_\d+_\d+" data-jodit-temp="true" data-jodit-selection_marker="start" style="line-height: 0; display: none;">﻿<\/span>/g,
      "",
    )
    text = text.replace(/<\/p>/g, "</p>\n")
    editHtmlRef.current.innerText = text
  }

  const handleEditHtmlChange = value => {
    let text = value.target.innerText;
    text = text.replace(/\n/g, "")
    textEditor.current = document.querySelector(".jodit-wysiwyg");
    textEditor.current.innerHTML = text
  }

  const handleCopyToClipboard = () => {
    const copyText = editHtmlRef.current.innerText.replace(/\n/g, "")
    if (copyText === "") {
      toast.error(`Please write something`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return
    }
    navigator.clipboard.writeText(copyText)
    toast.success(`Copied`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="container" style={{position:"relative", top:"3rem"}}>
      <div className="main-head">
        <h1 className="font-4xl-bold color-brand-1 text-center">HTML Editor</h1>
      </div>
      <div
        id="editor"
        ref={editorRef}
      >
        <JoditEditor
          ref={textEditor}
          config={{
            useSearch: false,
            toolbarSticky: false,
            showCharsCounter: false,
            showWordsCounter: false,
            showXPathInStatusbar: false,
            minHeight: 500,
            minWidth: 200,
            buttons:
              "bold,italic,underline,strikethrough,ul,ol,paragraph,left,center,right,superscript,subscript,brush,cut,copy,paste,copyformat,hr,table,link,image,video,preview",
          }}
          onChange={handleEditorChange}
        />
      </div>
      <div className="output">
        <div className="heading-output">
          <h5>HTML output</h5>
          <button
            className="copytoclipboard"
            id="copy-button"
            onClick={() => { handleCopyToClipboard()}}
          >
            Copy to clipboard
          </button>
        </div>
        <div
          className="editHtml"
          contentEditable={true}
          ref={editHtmlRef}
          onInput={handleEditHtmlChange}
        ></div>
      </div>
      <div className="canvas-footer-website">
        <h6>
          Powered by{" "}
          <Link
            href="https://nextgrowthlabs.com/?utm_source=html_editor_web#form"
            target="_blank"
            rel="noopener noreferrer"
            className="utm-link"
          >
            NextGrowth Labs
          </Link>
        </h6>
      </div>
    </div>
  )
}

export default CodeCanvas
