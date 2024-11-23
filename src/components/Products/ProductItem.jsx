import { styled } from "@mui/material";
import React from "react";
import { Icons } from "../../assets";

const ProductItem = ({
  title,
  price,
  image,
  sizes,
  colors,
  dateOfCreation,
}) => {
  return (
    <StyleContainer>
      <StyleH1Div>
        <StyleH1>{title}</StyleH1>
        <StyleIcons>
          <Icons.Copy />
          <Icons.Edit />
          <Icons.Vector />
        </StyleIcons>
      </StyleH1Div>
      <StyleDiv>
        <StyledDiv>
          <div>
            <StyledImg src={image} alt={title} />
          </div>
          <Container>
            <StyleBox>
              <ColorText>
                <p>Цвета в наличии</p>
                <div>
                  {colors.map((color, index) => (
                    <ColorBox
                      key={index}
                      style={{ backgroundColor: `#${color}` }}
                    />
                  ))}
                </div>
              </ColorText>
              <SizeText>
                <p>Размеры в наличии</p>
                <StyledCotegory>
                  {sizes.map((size, index) => (
                    <SizeBox key={index}>{size},</SizeBox>
                  ))}
                </StyledCotegory>
              </SizeText>
            </StyleBox>
            <div>
              <StyledPrice>
                <StylePrice>{price} сом</StylePrice>
                <span>{dateOfCreation}</span>
              </StyledPrice>
            </div>
          </Container>
        </StyledDiv>
      </StyleDiv>
    </StyleContainer>
  );
};

export default ProductItem;

const StyleH1 = styled("h1")({
  fontSize: "20px",
  fontWeight: 700,
  color: "#030229",
});

const StyledImg = styled("img")({
  width: "108px",
  height: " 136px",
  borderRadius: "10px",
});

const StylePrice = styled("p")({
  color: "242833",
  fontSize: "16px",
  fontWeight: 700,
});

const SizeBox = styled("span")({
  padding: "3px 2px",
  borderRadius: "4px",
  fontSize: "12px",
  fontWeight: 500,
});

const StyledCotegory = styled("p")({
  fontSize: "12px",
  fontWeight: 300,
  display: "flex",
});

const ColorBox = styled("div")({
  display: "inline-block",
  width: "20px",
  height: "20px",
  margin: "0 5px",
  border: "1px solid #ccc",
});

const StyleDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "1162px",
  height: "189px",
  webkitBoxShadow: "-3px 3px 10px 1px rgba(39, 63, 82, 0.2)",
  mozBoxShadow: "-3px 3px 10px 1px rgba(39, 63, 82, 0.2)",
  boxShadow: "-3px 3px 10px 1px rgba(39, 63, 82, 0.2)",
  borderRadius: "10px",
  padding: "25px",
});

const StyledDiv = styled("div")({
  display: "flex",
});

const StyleBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingLeft: "24px",
  gap: "24px",
});

const StyleH1Div = styled("div")({
  webkitBoxShadow: "-3px 3px 10px 1px rgba(39, 63, 82, 0.2)",
  mozBoxShadow: "-3px 3px 10px 1px rgba(39, 63, 82, 0.2)",
  boxShadow: "-3px 3px 10px 1px rgba(39, 63, 82, 0.2)",
  height: "54px",
  width: "1162px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "25px",
  borderRadius: "10px",
});

const ColorText = styled("div")({
  display: "flex",
  gap: "40px",
});

const SizeText = styled("div")({
  display: "flex",
  gap: "31px",
});

const StyledPrice = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "28px",
});

const Container = styled("div")({
  display: "flex",
  width: "100%",
  paddingRight: "40px",
  justifyContent: "space-between",
});

const StyleIcons = styled("div")({
  display: "flex",
  gap: "16px",
});

const StyleContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "3px",
});
