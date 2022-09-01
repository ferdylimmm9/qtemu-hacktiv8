import * as React from "react";
import PropTypes from "prop-types";
import {
    ButtonJoinCard,
  CardContainer,
  ContentContainer,
  ImagePreview,
} from "./style";
export default class MeetupCard extends React.Component {
  render() {
    const { title, location, countMember, organizers, imageUrl } = this.props;
    return (
      <CardContainer>
        <ImagePreview src={imageUrl} alt="image-meetup" />
        <ContentContainer>
          <h2>{title}</h2>
          <p>Location : {location}</p>
          <p>Member : {countMember}</p>
          <p>Organizer: {organizers}</p>
          <ButtonJoinCard>Join Us</ButtonJoinCard>
        </ContentContainer>
      </CardContainer>
    );
  }
}

MeetupCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  countMember: PropTypes.number.isRequired,
  organizers: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
