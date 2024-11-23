import React from "react";
import { FEMALE } from "../../utils/constants/products";
import ProductItem from "./ProductItem";
import { styled } from "@mui/material";

const ProductList = () => {
  return (
    <StyleDiv>
      {FEMALE.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </StyleDiv>
  );
};

export default ProductList;

const StyleDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  marginLeft: "248px",
//   paddingBottom: "178px",
//   paddingTop: "142px",
});
