import { styled } from "@stitches/react";
export const ImagePreview = styled("img", {
  width: 200,
  height: 200,
  objectFit: "cover",
});
export const CardContainer = styled("div", {
  display: "flex",
  gap: 16,
  flexDirection: "row",
  alignItems: "center",
  padding: 16,
  border: "1px solid black",
});
export const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 4,
});
export const ButtonJoinCard = styled("button", {
    backgroundColor: "Gray",
    color: "White",
    border: "none",
    padding: 8,
    minWidth: 120,
});
