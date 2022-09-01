import { styled } from "@stitches/react";
export const CardContainer = styled("div", {
  display: "flex",
  backgroundColor: "Gray",
  gap: 24,
  padding: 24,
  alignItems: "center",
});
export const DetailContainer = styled("div", {
  display: "flex",
  gap: 24,
});
export const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 24,
});
export const ImagePreview = styled("img", {
  objectFit: "cover",
  width: 100,
  height: 100,
  borderRadius: 9999,
});
