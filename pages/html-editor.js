import PageHead from "../components/elements/PageHead"
import Layout from "../components/layout/Layout"
import CodeCanvas from "../components/tools/html-editor/CodeCanvas"
import ToolDetails from "../components/tools/html-editor/ToolDetails"

const HtmlEditor = () => {
  return (
    <>
      <Layout>
        <PageHead
          title={"HTML Editor - Next Labs"}
          ogDescription="The NextGrowth Labs HTML Editor is a versatile two-way HTML editor that offers a wide range of use cases. With its user-friendly interface, this tool allows for efficient editing of HTML code and supports multiple functionalities. Whether you are a web developer or a website owner, this HTML editor is a valuable resource for optimising your web content."
          ogType="article"
        />
        <CodeCanvas />
        <ToolDetails />
      </Layout>
    </>
  )
}

export default HtmlEditor
