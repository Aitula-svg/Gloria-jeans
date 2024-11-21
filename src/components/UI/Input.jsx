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
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        {...props}
        sx={{
          width: "400px",
          padding: "20px",
        }}
      />
    </div>
  );
};
