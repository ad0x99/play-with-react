import { Octokit } from 'octokit';
import { createContext, useReducer } from 'react';
import {
  GITHUB_API_VERSION,
  GITHUB_TOKEN,
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

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
