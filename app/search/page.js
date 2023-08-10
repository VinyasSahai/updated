import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "@/keys";
import Response from "@/Response";
import SearchResults from "../components/SearchResults";

export default function Search({ results }) {
  // console.log(presults);

  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context}&start=${startIndex}`
      ).then((response) => response.json());
  console.log(data);

  //After the server has rendered pass results to the client
  return {
    props: {
      results: data,
    },
  };
}
