import Header from "../../components/Header";
import GridList from "../../components/GridList";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../utils/api_products";
import { getCategories } from "../../utils/api_categories";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const { data: cards } = useQuery({
    queryKey: ["products", category],
    queryFn: () => {
      return getProducts(category, sort);
    },
  });
  return (
    <>
      <Header />
      <GridList
        cards={cards}
        category={category}
        // categories={}
        setCategory={setCategory}
      />
    </>
  );
}
