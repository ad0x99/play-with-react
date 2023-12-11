import axios from 'axios';
import { API_URL } from '../../utils/constant';

// Get ticket notes
const getNotes = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    `${API_URL.TICKETS}/${ticketId}${API_URL.NOTES}`,
    config
  );

  return response.data;
};

// Create ticket note
const createNote = async (noteText, ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${API_URL.TICKETS}/${ticketId}${API_URL.NOTES}`,
    {
      text: noteText,
    },
    config
  );

  return response.data;
};

const noteService = {
  getNotes,
  createNote,
};

export default noteService;
