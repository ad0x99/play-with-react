import { useContext } from 'react';
import { useState } from 'react';
import { GithubContext } from '../../context/GithubContext/GithubContext';
import { AlertContext } from '../../context/Alert/AlertContext';

const UserSearch = () => {
  const [text, setText] = useState('');
  const { users, searchUsers, clearUsers, loading } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.length) {
      setAlert('Please enter something...', 'error');
    } else {
      searchUsers(text);
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
