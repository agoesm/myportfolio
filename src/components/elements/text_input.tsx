import { COLORS } from "@/styles/colors";
import { TextField } from "@mui/material";
import React from "react";

type TextInputDefaultProps = {
  lable: string;
  name?: string;
};

const TextInputDefault = ({ lable, name }: TextInputDefaultProps) => {
  return (
    <TextField
      label={lable}
      name={name}
      variant="standard"
      sx={{
        "& .MuiInputBase-root": {
          fontFamily: "IBM Plex Mono",
          "&:after": { borderColor: COLORS.primary },
        },
        "& .MuiInputBase-input::placeholder": {
          fontFamily: "IBM Plex Mono",
        },
        "& .MuiInputLabel-standard": {
          color: COLORS.lightGray,
          fontFamily: "IBM Plex Mono",
          "&.Mui-focused": {
            color: COLORS.primary,
          },
        },
      }}
    />
  );
};

export default TextInputDefault;
