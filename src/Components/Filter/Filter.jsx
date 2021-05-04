import './Filter.scss';

import PropTypes from 'prop-types';

const Filter = ({ filter, changeFilter }) => {
  return (
    <div className="Filter">
      <label className="Filter__label">
        Filter by name {'  '}
        <input
          type="text"
          name="filter"
          value={filter}
          className="Filter__input"
          title="Введите имя или номер абонента"
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default Filter;
