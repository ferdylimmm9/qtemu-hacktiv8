import * as React from "react";
import PropTypes from "prop-types";
import { CardContainer, DateText } from "./style";
export default class CommentCard extends React.Component {
  render() {
    const { title, date, content } = this.props;
    return (
      <CardContainer>
        <h3>{title}</h3>
        <DateText>{date}</DateText>
        <p>{content}</p>
      </CardContainer>
    );
  }
}

CommentCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
