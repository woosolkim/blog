import React from "react";
import { Chip, Stack } from "@mui/material";

interface Props {
  title: string[];
}

const Chips = ({ title }: Props) => {
  return (
    <Stack direction="row" spacing={1}>
      {title.map((t) => {
        return (
          <Chip
            sx={{
              height: "24px",
              borderRadius: "4px",
            }}
            label={t}
          />
        );
      })}
    </Stack>
  );
};

export default Chips;
