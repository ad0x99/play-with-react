import { useContext, useState } from 'react';

import { AlertContext } from '../../context/Alert/AlertContext';
import { searchUsers } from '../../context/GithubContext/GithubAction';
import { GithubContext } from '../../context/GithubContext/GithubContext';
import { GITHUB_ACTION_TYPE } from '../../utils/actionTypes';

const UserSearch = () => {
  const [text, setText] = useState('');
  const { users, loading, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const { SET_LOADING, SEARCH_USERS, CLEAR_USERS } = GITHUB_ACTION_TYPE;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.length) {
      setAlert('Please enter something...', 'error');
    } else {
      dispatch({ type: SET_LOADING });
      const users = await searchUsers(text);
      dispatch({ type: SEARCH_USERS, payload: users });

      setText('');
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                {loading && (
                  <span class="loading loading-spinner text-error"></span>
                )}
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      {!!users.length && (
        <div>
          <button onClick={clearUsers} className="btn btn-error btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
