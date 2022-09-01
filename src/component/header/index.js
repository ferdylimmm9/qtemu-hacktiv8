import * as React from "react";
import { HeaderContainer, LeftMenu, LinkCustom, NavContainer, RightMenu } from "./style";
export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <h1>QTemu</h1>
        <NavContainer>
          <LeftMenu>
            <LinkCustom to="/create">Create Meetup</LinkCustom>
            <LinkCustom to="/explore">Explore</LinkCustom>
          </LeftMenu>
          <RightMenu>
            <LinkCustom to="/login">Login</LinkCustom>
          </RightMenu>
        </NavContainer>
      </HeaderContainer>
    );
  }
}
