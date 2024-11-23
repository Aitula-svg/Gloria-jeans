import { styled } from "@mui/material";
import React from "react";
import { Button } from "../components/UI/Button";

const HeaderAdmin = () => {
  return (
    <StyleHeader>
      <StyleP>Женская</StyleP>
      <Stylebutton>+ Добавить</Stylebutton>
    </StyleHeader>
  );
};

export default HeaderAdmin;

const StyleHeader = styled("header")({
  width: "100%",
  height: "72px",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-between",
  padding: "25px",
  alignItems: "center",
  webkitBoxShadow: "-3px 3px 10px 1px rgba(39, 63, 82, 0.2)",
  mozBoxShadow: "-3px 3px 10px 1px rgba(39, 63, 82, 0.2)",
  boxShadow: "-3px 3px 10px 1px rgba(39, 63, 82, 0.2)",
});

const Stylebutton = styled(Button)({
  width: "120px",
  height: "40px",
  background: " #121314",
  color: " #FFFFFF",
  borderRadius: "10px",
  fontSize: "14px",
  fontWeight: 400,
});

const StyleP = styled("p")({
  fontSize: "24px",
  color: "#343635",
  fontWeight: 700,
});
