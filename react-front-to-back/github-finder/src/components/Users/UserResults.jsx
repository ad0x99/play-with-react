import { useContext } from 'react';
import { GithubContext } from '../../context/GithubContext/GithubContext';
import Spinner from '../Layout/Spinner';
import UserItem from './UserItem';

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <h1 className="grid grid-cols-1 gal-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </h1>
      </div>
    );
  }
};

export default UserResults;
