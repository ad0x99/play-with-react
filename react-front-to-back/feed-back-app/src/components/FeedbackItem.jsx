import { FaEdit, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Card from './shared/Card';
import { FeedbackContext } from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
  const { editFeedback, deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>

      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>

      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propsType = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
