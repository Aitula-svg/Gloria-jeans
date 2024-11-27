import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Icons } from "../assets/index";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Grid container ml={14} mt={6}>
          <Section item xs={12} md={3.5}>
            {/* <Icons.Brandname /> */}
            <Typography item marginTop={2}>
              <Icons.Brandname />
            </Typography>
          </Section>
          <Section item md={2}>
            <Typography>О нас</Typography>
            <Typography>Контакты</Typography>
          </Section>
          <Section item md={2}>
            <Typography>Способы оплаты</Typography>
            <Typography>Условия доставки</Typography>
          </Section>
          <Section item md={2}>
            <Typography>Пользовательское соглашение</Typography>
            <Typography>Политика конфиденциальности</Typography>
          </Section>
        </Grid>
        <Typography
          style={{
            marginLeft: "528px",
            marginTop: "82px",
            fontSize: "0.875rem",
            opacity: 0.7,
          }}
        >
          brandname.com © 2023 Все права защищены
        </Typography>
      </FooterContainer>

      <BottomContainer>
        <BottomItem>
          <Typography>ONLINESHOP</Typography>
          <Typography>ONLINESHOP</Typography>
        </BottomItem>

        <BottomItem
          backgroundColor="green"
          height="82px"
          display="flex"
          textAlign="center"
          justifyContent="space-between"
        >
          <Typography> ONLINESHOP</Typography>
          <Typography> ONLINESHOP</Typography>
          <Typography> ONLINESHOP</Typography>
        </BottomItem>
      </BottomContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled(Box)({
  backgroundColor: "white",
  color: "black",
  padding: "40px 0",
  border: "1px solid black",
  height: "250px",
});

const Section = styled(Grid)({
  display: "flex",
  flexDirection: "column",
});

const BottomContainer = styled(Grid)({
  display: "flex",
  textAlign: "center",
  backgroundColor: "#F2ED72",
});

const BottomItem = styled(Box)(({ color }) => ({
  flex: 1,
  fontWeight: "bold",
  fontFamily: "Arial",
  backgroundColor: color,
  border: "1px solid black",
  padding: "px 0",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  paddingRight: "20px",
}));
