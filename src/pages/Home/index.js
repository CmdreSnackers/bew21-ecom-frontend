import Header from "../../components/Header";
import GridList from "../../components/GridList";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../utils/api_products";
import { getCategories } from "../../utils/api_categories";
import { useState } from "react";
import { Box, Button } from "@mui/material";

export default function Home() {
  const [category, setCategory] = useState("all");
  // const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const { data: cards = [] } = useQuery({
    queryKey: ["products", category, perPage, page],
    queryFn: () => {
      return getProducts(category, perPage, page);
    },
  });
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });
  return (
    <>
      <Header />
      <GridList
        cards={cards}
        category={category}
        categories={categories}
        // categories={}
        setCategory={setCategory}
        // sort={sort}
        // setSort={setSort}
        page={page}
        setPage={setPage}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "10px",
          padding: "20px 0",
        }}
      >
        <Button
          disabled={page === 1 ? true : false}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>
        <span>Page: {page}</span>
        <Button
          // disabled={cards.length < perPage ? true : false}
          disabled={cards.length < perPage ? true : false}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </Box>
    </>
  );
}
