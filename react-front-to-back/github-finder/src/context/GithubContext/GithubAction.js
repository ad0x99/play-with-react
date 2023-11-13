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

const getUserDetail = async (login) => {
  const { data } = await octokit.request(`GET ${USERS_PATH}/${login}`, {
    headers: {
      'X-GitHub-Api-Version': GITHUB_API_VERSION,
    },
  });

  if (!data) {
    window.location = '/notfound';
  }

  return data;
};

const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });

  const { data } = await octokit.request(
    `GET ${USERS_PATH}/${login}/repos?${params}`,
    {
      headers: {
        'X-GitHub-Api-Version': GITHUB_API_VERSION,
      },
    }
  );

  return data;
};

export { searchUsers, fetchUsers, getUserDetail, getUserRepos };
