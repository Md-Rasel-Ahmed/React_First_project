import React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

export default function Button() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
