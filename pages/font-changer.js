import PageHead from "../components/elements/PageHead";
import Layout from "../components/layout/Layout";
import FontChanger from "../components/tools/font-changer/FontChanger";
import ToolArticle from "../components/tools/font-changer/ToolArticle";

const HtmlEditor = () => {
  return (
    <>
      <Layout>
        <PageHead
          title={
            "Play with Fonts: Unleash Your Creativity with the Font Changer Tool - Next Labs"
          }
          ogDescription="Generate Unicode letters effortlessly with this online tool. Create stylish and unique text styles for your projects. Instantly convert text to Unicode."
          ogType="article"
          canonical={"https://nextgrowthlabs.com/font-changer/"}
        />
        <FontChanger />
        <ToolArticle />
      </Layout>
    </>
  );
};

export default HtmlEditor;
