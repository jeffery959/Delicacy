import { useDispatch } from 'react-redux';
import { Filter } from '../features/counter/menuSlice'; 
import './Categories.css';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <nav className='Categories'>
      <h3 className='text-black '>Menu</h3>
      <ul className='flex justify-between mt-14 text-lg'>
        <li onClick={() => dispatch(Filter('all'))}>All</li>
        <li onClick={() => dispatch(Filter('Breakfast'))}>Breakfast</li>
        <li onClick={() => dispatch(Filter('Lunch'))}>Lunch</li>
        <li onClick={() => dispatch(Filter('Dinner'))}>Dinner</li>
      </ul>
    </nav>
  );
};

export default Categories;
