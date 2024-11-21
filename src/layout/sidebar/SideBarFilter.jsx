import { styled } from "@mui/material";

const SideBarFilter = ({ text, Icon }) => {
  return (
    <StyleDiv>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <StyleSpan>{text}</StyleSpan>
    </StyleDiv>
  );
};

export default SideBarFilter;

const StyleDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "14px",
  height: "60px",
  padding: "0px 0px 0px 30px",
  cursor: "pointer",

  "&:hover": {
    color: "green",
    background: "#b0c4b4",

    "& svg path": {
      fill: "green",
    },
  },
});

const IconWrapper = styled("div")({
  color: "inherit",
});

const StyleSpan = styled("span")({
  color: " #7E8494 ",
  fontSize: "16px",
  fontWeight: 600,
});
