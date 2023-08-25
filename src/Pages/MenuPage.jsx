import Categories from '../Components/Categories'
import FoodList from '../Components/FoodList'
import { useSelector} from 'react-redux'
import { lazy,Suspense } from 'react';
import Loading from './Loading';
const Footer = lazy(()=>import('../Components/Footer'))
const MenuPage = () => {
  
  const Menu = useSelector((state) => state.menu.Menu);
 
  return (
    <div>
      <Categories/>
      <Suspense fallback={<Loading/>}>
      <FoodList Menu={Menu}/>
      </Suspense>
      <Footer/>
      
    </div>
  )
}

export default MenuPage
