import PropTypes from 'prop-types';
const UsersListItem = ({ userData: { name, attendance = '0%', average } }) => {
  return (
    <li>
      <p>{attendance}</p>
      <p>{name}</p>
      <p>{average}</p>
      <button>X</button>
    </li>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
  }),
};

export default UsersListItem;
