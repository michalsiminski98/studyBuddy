import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

const UsersList = () => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UsersListItem key={userData.id} userData={userData} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
