import PageHead from "../components/elements/PageHead";
import Layout from "../components/layout/Layout";
import JsonToHtmlTableEditor from "../components/tools/json-editor/JsonToHtmlTableEditor";

const JsonEditor = () => {
  return (
    <>
      <Layout>
        <PageHead
          title={"JSON to HTML Table Editor - Next Labs"}
          ogDescription="JSON to HTML Table Two-way Editor is a versatile tool that enables easy conversion between JSON data and HTML tables. Users can effortlessly transform JSON data into a structured HTML table and edit table content interactively."
          ogType="article"
          canonical={"https://nextgrowthlabs.com/json-editor"}
        />
        <JsonToHtmlTableEditor />
      </Layout>
    </>
  );
};

export default JsonEditor;
