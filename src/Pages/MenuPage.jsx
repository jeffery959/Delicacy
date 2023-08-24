import Categories from '../Components/Categories'
import FoodList from '../Components/FoodList'
import { useSelector} from 'react-redux'
import Footer from '../Components/Footer';

const MenuPage = () => {
  
  const Menu = useSelector((state) => state.menu.Menu);
 
  return (
    <div>
      <Categories/>
      <FoodList Menu={Menu}/>
      <Footer/>
      
    </div>
  )
}

export default MenuPage
