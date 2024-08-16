import Link from "next/link"
import { useEffect } from "react"
const WordToHtml = () => {
  useEffect(() => {
    const initEditor = () => {
      var _extends =
        Object.assign ||
        function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i]
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key]
              }
            }
          }
          return target
        }

      var defaultParagraphSeparatorString = "defaultParagraphSeparator"
      var formatBlock = "formatBlock"
      var addEventListener = function addEventListener(parent, type, listener) {
        return parent.addEventListener(type, listener)
      }
      var appendChild = function appendChild(parent, child) {
        return parent.appendChild(child)
      }
      var createElement = function createElement(tag) {
        return document.createElement(tag)
      }
      var queryCommandState = function queryCommandState(command) {
        return document.queryCommandState(command)
      }
      var queryCommandValue = function queryCommandValue(command) {
        return document.queryCommandValue(command)
      }

      var exec = function exec(command) {
        var value =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : null
        return document.execCommand(command, false, value)
      }

      var defaultActions = {
        bold: {
          icon: "<b>B</b>",
          title: "Bold",
          state: function state() {
            return queryCommandState("bold")
          },
          result: function result() {
            return exec("bold")
          },
        },
        italic: {
          icon: "<i>I</i>",
          title: "Italic",
          state: function state() {
            return queryCommandState("italic")
          },
          result: function result() {
            return exec("italic")
          },
        },
        underline: {
          icon: "<u>U</u>",
          title: "Underline",
          state: function state() {
            return queryCommandState("underline")
          },
          result: function result() {
            return exec("underline")
          },
        },
        strikethrough: {
          icon: "<strike>S</strike>",
          title: "Strike-through",
          state: function state() {
            return queryCommandState("strikeThrough")
          },
          result: function result() {
            return exec("strikeThrough")
          },
        },
        heading1: {
          icon: "<b>H<sub>1</sub></b>",
          title: "Heading 1",
          result: function result() {
            return exec(formatBlock, "<h1>")
          },
        },
        heading2: {
          icon: "<b>H<sub>2</sub></b>",
          title: "Heading 2",
          result: function result() {
            return exec(formatBlock, "<h2>")
          },
        },
        paragraph: {
          icon: "¶",
          title: "Paragraph",
          result: function result() {
            return exec(formatBlock, "<p>")
          },
        },
        quote: {
          icon: '" "',
          title: "Quote",
          result: function result() {
            return exec(formatBlock, "<blockquote>")
          },
        },
        olist: {
          icon: "1",
          title: "Ordered List",
          result: function result() {
            return exec("insertOrderedList")
          },
        },
        ulist: {
          icon: "•",
          title: "Unordered List",
          result: function result() {
            return exec("insertUnorderedList")
          },
        },
        code: {
          icon: "&lt;/&gt;",
          title: "Code",
          result: function result() {
            return exec(formatBlock, "<pre>")
          },
        },
        line: {
          icon: "―",
          title: "Horizontal Line",
          result: function result() {
            return exec("insertHorizontalRule")
          },
        },
        link: {
          icon: "🔗",
          title: "Link",
          result: function result() {
            var url = window.prompt("Enter the link URL")
            if (url) exec("createLink", url)
          },
        },
        image: {
          icon: "📷",
          title: "Image",
          result: function result() {
            var url = window.prompt("Enter the image URL")
            if (url) exec("insertImage", url)
          },
        },
      }

      var defaultClasses = {
        actionbar: "ngl_site-actionbar",
        button: "ngl_site-button",
        content: "ngl_site-content",
        selected: "ngl_site-button-selected",
      }

      var init = function init(settings) {
        var actions = settings.actions
          ? settings.actions.map(function (action) {
              if (typeof action === "string") return defaultActions[action]
              else if (defaultActions[action.name])
                return _extends({}, defaultActions[action.name], action)
              return action
            })
          : Object.keys(defaultActions).map(function (action) {
              return defaultActions[action]
            })

        var classes = _extends({}, defaultClasses, settings.classes)

        var defaultParagraphSeparator =
          settings[defaultParagraphSeparatorString] || "div"

        var actionbar = createElement("div")
        actionbar.className = classes.actionbar
        appendChild(settings.element, actionbar)

        var content = (settings.element.content = createElement("div"))
        content.contentEditable = true
        content.className = classes.content
        content.oninput = function (_ref) {
          var firstChild = _ref.target.firstChild

          if (firstChild && firstChild.nodeType === 3)
            exec(formatBlock, "<" + defaultParagraphSeparator + ">")
          else if (content.innerHTML === "<br>") content.innerHTML = ""
          settings.onChange(content.innerHTML)
        }
        content.onkeydown = function (event) {
          if (
            event.key === "Enter" &&
            queryCommandValue(formatBlock) === "blockquote"
          ) {
            setTimeout(function () {
              return exec(formatBlock, "<" + defaultParagraphSeparator + ">")
            }, 0)
          }
        }
        appendChild(settings.element, content)

        actions.forEach(function (action) {
          var button = createElement("button")
          button.className = classes.button
          button.innerHTML = action.icon
          button.title = action.title
          button.setAttribute("type", "button")
          button.onclick = function () {
            return action.result() && content.focus()
          }

          if (action.state) {
            var handler = function handler() {
              return button.classList[action.state() ? "add" : "remove"](
                classes.selected,
              )
            }
            addEventListener(content, "keyup", handler)
            addEventListener(content, "mouseup", handler)
            addEventListener(button, "click", handler)
          }

          appendChild(actionbar, button)
        })

        if (settings.styleWithCSS) exec("styleWithCSS")
        exec(defaultParagraphSeparatorString, defaultParagraphSeparator)

        return settings.element
      }

      var ngl_site = { exec: exec, init: init }

      var editor = ngl_site.init({
        element: document.getElementById("editor"),
        defaultParagraphSeparator: "p",
        onChange: function (html) {
          document.getElementById("html-output").textContent = html
        },
      })
    }

    initEditor()
  }, [])

  return (
    <>
      <div
        className="container"
        style={{ position: "relative", top: "3rem"}}
      >
        <div className="main-head">
          <h1 className="font-2xl-bold color-brand-1 text-center">Word To HTML Converter</h1>
        </div>
        <div
          id="editor"
          className="ngl_site"
        ></div>
        <div
          className="output-box"
        >
          <h5 style={{ fontSize: "1rem" }}>HTML output:</h5>
          <pre id="html-output" className="font-md color-grey-400"></pre>
        </div>
        <div className="canvas-footer-website">
          <h6>
            Powered by{" "}
            <Link
              href="https://nextgrowthlabs.com/?utm_source=html_converter_web"
              target="_blank"
              rel="noopener noreferrer"
              className="utm-link"
            >
              NextGrowth Labs
            </Link>
          </h6>
        </div>
      </div>
    </>
  )
}

export default WordToHtml
