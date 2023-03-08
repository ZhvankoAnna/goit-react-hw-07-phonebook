import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter/filter-slice';
import css from 'components/Filter/filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <input
      className={css.input}
      type="text"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};

export default Filter;
