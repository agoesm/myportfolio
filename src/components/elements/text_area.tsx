import React from "react";
import { COLORS } from "@/styles/colors";
import { TextField } from "@mui/material";

type TextAreaDefaultProps = {
  lable: string;
  name?: string;
  rows?: number;
};

const TextAreaDefault = ({ lable, name, rows = 1 }: TextAreaDefaultProps) => {
  return (
    <TextField
      label={lable}
      name={name}
      rows={rows}
      multiline
      variant="standard"
      sx={{
        "& .MuiInputBase-root": {
          fontFamily: "IBM Plex Mono",
          // focus border
          "&:after": { borderColor: COLORS.primary },
        },
        // lable
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

export default TextAreaDefault;
