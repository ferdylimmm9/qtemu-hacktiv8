import { styled } from "@stitches/react";
export const CardContainer = styled("div", {
  display: "flex",
  gap: 8,
  flexDirection: "column",
  border: "1px solid black",
  padding: 24,
  width: 300,
  justifyContent: "space-between",
  backgroundColor: "Gray",
});
export const HeaderCard = styled("h2", {
  borderBottom: "1px solid black",
  padding: 4,
});
export const ButtonViewCard = styled("button", {
  padding: 8,
  border: "none",
  color: "White",
  backgroundColor: "LightGray",
  minWidth: 120,
});
export const ContentContainer = styled("div", {
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
  flexDirection: "column",
});
export const WentText = styled("span", { color: "LightGray" });
