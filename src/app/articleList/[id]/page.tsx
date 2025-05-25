import ArticleRead from "./articleRead";
import { supabase } from "../../../lib/supabaseClient";

export async function generateMetadata({ params }) {
  const { id } = params;
  const { data } = await supabase
    .from("Nannuru_articles_table")
    .select("*")
    .eq("id", id)
    .single();

  return {
    title: data?.Heading,
    description: data?.subHeading,
    openGraph: {
      title: data?.Heading,
      description: data?.subHeading,
      images: [data?.imgUrl],
      url: `https://www.nannuru.com/articleList/${id}`,
      type: "article",
    },
  };
}

export default function Page() {
  return <ArticleRead />;
}
