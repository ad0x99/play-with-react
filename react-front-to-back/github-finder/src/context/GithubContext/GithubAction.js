import { Octokit } from 'octokit';
import {
  GITHUB_API_VERSION,
  GITHUB_TOKEN,
  SEARCH_USERS_PATH,
  USERS_PATH,
} from '../../utils/config';

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

const searchUsers = async (text) => {
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

  return items;
};

const fetchUsers = async () => {
  const { data } = await octokit.request(`GET ${USERS_PATH}`, {
    headers: {
      'X-GitHub-Api-Version': GITHUB_API_VERSION,
    },
  });

  return data;
};

const getUserAndRepos = async (login) => {
  const url = `GET ${USERS_PATH}/${login}`;
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });
  const headers = {
    'X-GitHub-Api-Version': GITHUB_API_VERSION,
  };

  const [user, repos] = await Promise.all([
    octokit.request(url, {
      headers,
    }),
    octokit.request(`${url}/repos?${params}`, {
      headers,
    }),
  ]);

  return { user: user.data, repos: repos.data };
};

export { searchUsers, fetchUsers, getUserAndRepos };
