import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../Redux/phonebook-selectors';
import * as actions from '../../Redux/phonebook-actions';
import './Filter.scss';

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const change = event => dispatch(actions.changeFilter(event.target.value));

  return (
    <div className="Filter">
      <label>
        {/* Find contacts by name: */}
        <input
          className="Filter__input"
          name="filter"
          type="text"
          value={value}
          onChange={change}
          title="Введите имя или номер абонента"
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
