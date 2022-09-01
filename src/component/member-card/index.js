import * as React from "react";
import PropTypes from "prop-types";
import {
  CardContainer,
  ContentContainer,
  DetailContainer,
  ImagePreview,
} from "./style";

export default class MemberCard extends React.Component {
  render() {
    const { name, countMember, imageSrc } = this.props;
    return (
      <CardContainer>
        <ImagePreview src={imageSrc} alt="member-image" />
        <ContentContainer>
          <p>Organizers</p>
          <DetailContainer>
            <p>{name}</p>
            <p>{countMember} others.</p>
          </DetailContainer>
        </ContentContainer>
      </CardContainer>
    );
  }
}
MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  countMember: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
