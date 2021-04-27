import PropTypes from 'prop-types';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';
import Button from 'components/atoms/Button/Button';

const UsersListItem = ({ userData: { name, attendance = '0%', average } }) => {
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <Button />
        </p>
        <p>{attendance}</p>
      </StyledInfo>
    </Wrapper>
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
