import { getServerData } from "@utils/api/server"

import SEO from "@components/SEO"

export default function MarketsPageWrapper({ markets }) {
  return (
    <>
      <SEO title="Markets" />
      {"All markets"}
    </>
  )
}

export async function getStaticProps() {
  const markets = await getServerData("/public/data/results-2021.json")
  return { props: { markets } }
}
