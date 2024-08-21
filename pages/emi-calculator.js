import PageHead from "../components/elements/PageHead"
import Layout from "../components/layout/Layout"
import EmiArticle from "../components/tools/emi-calculator/EmiArticle"
import EmiCalculator from "../components/tools/emi-calculator/EmiCalculator"

const IOSKeyword = () => {
  return (
        <Layout>
          <PageHead
            title="EMI Calculator - Calculate Your Loan EMI Online"
            ogDescription="Use the NextLabs.io EMI Calculator to calculate your monthly installments for loans. Get an accurate estimate of your loan EMI before applying for a loan. Try it now!"
            ogType="article"
            canonical={"https://nextgrowthlabs.com/emi-calculator"}
          />
          <EmiCalculator />
          <EmiArticle />
        </Layout>
  )
}

export default IOSKeyword
