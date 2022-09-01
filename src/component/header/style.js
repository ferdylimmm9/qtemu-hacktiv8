import { styled } from "@stitches/react";
import { Link } from "react-router-dom";
export const HeaderContainer = styled("header", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 16,
  margin: 0,
  background: "Gray",
  color: "White",
  padding: 24,
});
export const NavContainer = styled("nav", {
  display: "flex",
  flex: 1,
});
export const LeftMenu = styled("div", { display: "flex", flex: 1, gap: 16 });
export const RightMenu = styled("div", {
  display: "flex",
  flex: 1,
  justifyContent: "flex-end",
});
export const LinkCustom = styled(Link, {
  color: "White",
  "&:hover": { fontWeight: "bold" },
});
