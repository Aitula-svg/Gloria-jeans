import { styled } from "@mui/material";
import { Icons } from "../assets/index";
export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledIcons>
          <Icons.Brandname />
        </StyledIcons>
        <StyledBox>
          <StyledNav>
            <StyledLinks href="">О нас</StyledLinks>
            <StyledLink href="">Контакты</StyledLink>
          </StyledNav>
          <StyledNav>
            <StyledLinks href="">Способы оплаты</StyledLinks>
            <StyledLink href="">Условия доставки</StyledLink>
          </StyledNav>
          <StyledNav>
            <StyledLinks href="">Пользовательское соглашение</StyledLinks>
            <StyledLink href="">Политика конфиденциальности</StyledLink>
          </StyledNav>
        </StyledBox>
      </StyledContainer>

      <StyledDiv>
        <Styledp>brandname.com</Styledp>
        <Icons.Copyright />
        <Styledp>2023</Styledp>
        <Styledp>Все правы защищены</Styledp>
      </StyledDiv>
      <StyledBlock>
        <StyledDivs>
          <StyledP>ONLINESHOPE</StyledP>
          <StyledP>ONLINESHOPE</StyledP>
        </StyledDivs>
        <StyledDivp>
          <StyledP>ONLINESHOPE</StyledP>
          <StyledP>ONLINESHOPE</StyledP>
          <StyledP>ONLINESHOPE</StyledP>
        </StyledDivp>
      </StyledBlock>
    </StyledFooter>
  );
};
const Styledp = styled("p")({
  fontSize: "14px",
  fontFamily: "Arial",
});
const StyledP = styled("p")({
  fontSize: "18px",
  fontWeight: "700",
  fontFamily: " Arial",
  color: "#2E2E2E",
});
const StyledBlock = styled("div")({
  display: "flex",
  marginTop: "31px",
});
const StyledDivp = styled("div")({
  width: "720px",
  height: "82px",
  backgroundColor: "#30723F",
  border: "2px solid #2E2E2E",
  display: "flex",
  paddingTop: "30px",
  justifyContent: "space-around",
});
const StyledDivs = styled("div")({
  width: "720px",
  height: "82px",
  backgroundColor: "#F2ED72",
  border: "2px solid #2E2E2E",
  paddingTop: "30px",
  display: "flex",
  paddingLeft: "40px",
  gap: "154px",
});
const StyledDiv = styled("div")({
  display: "flex",
  gap: "24px",
  marginTop: "82px",
  marginLeft: "528px",
});

const StyledFooter = styled("footer")({
  width: "100%",
});

const StyledIcons = styled("div")({
  marginTop: "96.5px",
  marginLeft: "120px",
});

const StyledContainer = styled("div")({
  display: "flex",
});

const StyledBox = styled("div")({
  display: "flex",
  justifyContent: "columns",
  gap: "146px",
  marginLeft: "105px",
  marginTop: "80px",
});

const StyledNav = styled("nav")({
  display: "flex",
  flexDirection: "column",
});

const StyledLink = styled("a")({
  marginTop: "16px",
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "Arial",
  textDecoration: "none",
  color: " #121314",
});

const StyledLinks = styled("a")({
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "Arial",
  textDecoration: "none",
  color: " #121314",
});
