import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';

import { FeedbackContext } from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';
import Spinner from './shared/Spinner';

const FeedbackList = ({ handleDelete }) => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || !feedback.length)) {
    return <p>No feedback available.</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
