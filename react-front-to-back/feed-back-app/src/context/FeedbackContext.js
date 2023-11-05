import { createContext, useEffect, useState } from 'react';

import { FEEDBACK_API } from '../constant/api';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(`${FEEDBACK_API}?_sort=id&_order=desc`);
    const feedbackData = await response.json();

    setFeedback(feedbackData);
    setIsLoading(false);
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch(FEEDBACK_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  const editFeedback = async (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = async (id, updatedFeedback) => {
    const response = await fetch(`${FEEDBACK_API}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFeedback),
    });
    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      await fetch(`${FEEDBACK_API}/${id}`, {
        method: 'DELETE',
      });

      setFeedback(feedback.filter((item) => item.id !== id));
    }

    return;
  };

  return (
    <FeedbackContext.Provider
      value={{
        isLoading,
        feedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        deleteFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackContext, FeedbackProvider };
