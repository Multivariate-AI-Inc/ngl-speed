import PageHead from "../components/elements/PageHead";
import Layout from "../components/layout/Layout";
import CloudDataCostCalculator from "../components/tools/cloud-data-warehouse-setup-cost-calculator/CloudDataCostCalculator";
import CloudDataToolArticle from "../components/tools/cloud-data-warehouse-setup-cost-calculator/CloudDataToolArticle";

const CloudDataWarehouseSetupCostCalculator = () => {
  return (
    <>
      <PageHead
        title="Cloud Data Warehouse Setup Cost Calculator - Next Labs"
        ogDescription="Estimate the costs of setting up a cloud data warehouse with our comprehensive calculator. Factor in infrastructure, migration, software, and professional services to make informed budget decisions."
        canonical="https://nextgrowthlabs.com/cloud-data-warehouse-setup-cost-calculator"
        ogType="article"
      />
      <Layout>
        <CloudDataCostCalculator />
        <CloudDataToolArticle />
      </Layout>
    </>
  );
};

export default CloudDataWarehouseSetupCostCalculator;
