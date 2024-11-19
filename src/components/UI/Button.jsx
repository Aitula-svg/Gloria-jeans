import { styled, Button as MuiButton } from "@mui/material";

export const Button = ({ children, onClick, disabled, type, ...rest }) => {
  return (
    <StyleButton onClick={onClick} disabled={disabled} type={type} {...rest}>
      {children}
    </StyleButton>
  );
};

const StyleButton = styled(MuiButton)({
  background: " #121314",
  color: " #FAFAFA",
  width: "344px",
  height: "60px",
  fontSize: "20px",
  fontWeight: "400",
  borderRadius: "0",
});