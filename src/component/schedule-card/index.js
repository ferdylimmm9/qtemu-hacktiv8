import * as React from "react";
import PropTypes from "prop-types";
import {
  ButtonViewCard,
  CardContainer,
  ContentContainer,
  HeaderCard,
  WentText,
} from "./style";

export default class ScheduleCard extends React.Component {
  render() {
    const { date, content, countWent } = this.props;
    return (
      <CardContainer>
        <HeaderCard>{date}</HeaderCard>
        <ContentContainer>
          <p>{content}</p>
          <p>
            {countWent} <WentText>Went</WentText>
          </p>
        </ContentContainer>
        <ButtonViewCard>View</ButtonViewCard>
      </CardContainer>
    );
  }
}

ScheduleCard.propTypes = {
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  countWent: PropTypes.number.isRequired,
};
