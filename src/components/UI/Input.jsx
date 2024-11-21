import { TextField } from "@mui/material";

export const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
  ...props
}) => {
  return (
    <div>
      <TextField
        type={type}
        onChange={onchange}
        value={value}
        placeholder={placeholder}
        {...props}
        sx={{
          width: "400px",
          padding: "20px",
          margin: "100px  500px",
        }}
      />
    </div>
  );
};
