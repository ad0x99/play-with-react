import { createContext } from 'react';
import { Octokit } from 'octokit';
import { useState } from 'react';
import {
  GITHUB_API_VERSION,
  GITHUB_TOKEN,
  USERS_PATH,
} from '../../utils/config';

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const { data } = await octokit.request(`GET ${USERS_PATH}`, {
      headers: {
        'X-GitHub-Api-Version': GITHUB_API_VERSION,
      },
    });

    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
