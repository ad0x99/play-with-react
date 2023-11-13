import { Octokit } from 'octokit';
import { createContext, useReducer } from 'react';
import {
  GITHUB_API_VERSION,
  GITHUB_TOKEN,
  SEARCH_USERS_PATH,
  USERS_PATH,
} from '../../utils/config';
import githubReducer from './GithubReducer';

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    setLoading();

    const { data } = await octokit.request(`GET ${USERS_PATH}`, {
      headers: {
        'X-GitHub-Api-Version': GITHUB_API_VERSION,
      },
    });

    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };

  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const {
      data: { items },
    } = await octokit.request(`GET ${SEARCH_USERS_PATH}?${params}`, {
      headers: {
        'X-GitHub-Api-Version': GITHUB_API_VERSION,
      },
    });

    dispatch({
      type: 'SEARCH_USERS',
      payload: items,
    });
  };

  const getUserDetail = async (login) => {
    setLoading();

    const { data } = await octokit.request(`GET ${USERS_PATH}/${login}`, {
      headers: {
        'X-GitHub-Api-Version': GITHUB_API_VERSION,
      },
    });

    if (!data) {
      window.location = '/notfound';
    }

    dispatch({
      type: 'GET_USER_DETAIL',
      payload: data,
    });
  };

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        fetchUsers,
        searchUsers,
        clearUsers,
        getUserDetail,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
