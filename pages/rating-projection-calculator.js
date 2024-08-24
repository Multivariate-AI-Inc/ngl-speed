import PageHead from "../components/elements/PageHead"
import Layout from "../components/layout/Layout"
import RatingProjectionCalculator from "../components/tools/rating-projection-calculator/RatingProjectionCalculator"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient()
const RatingProjection = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <PageHead
          title="Rating Projection Calculator for Google Play Store - Next Labs"
          ogDescription="Calculate the daily ratings needed to reach your target rating on Google Play Store. Enter current and desired ratings for the projection."
          ogType="article"
          canonical={"https://nextgrowthlabs.com/rating-projection-calculator"}
        />
        <RatingProjectionCalculator />
      </Layout>
    </QueryClientProvider>
  )
}

export default RatingProjection
