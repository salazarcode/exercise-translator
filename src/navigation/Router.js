import { createStackNavigator, createAppContainer } from "react-navigation";

//Pantallas externas ___________________________________________
import Home  from '../screens/Home'
import EjerciciosHome  from '../screens/EjerciciosHome'
import ComidasHome from '../screens/ComidasHome'



const AppNavigator = createStackNavigator({
  //Pantallas externas
  Home: Home,
  EjerciciosHome: EjerciciosHome,
  ComidasHome: ComidasHome
},
{
  initialRouteName: "ComidasHome"
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;