import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loaihoa from './components/Loaihoa';
import Hoa from './components/Hoa';
import ChiTietHoa from '././components/ChiTietHoa';


 const Stack=createNativeStackNavigator();
export default function App() {
  return (

<NavigationContainer>
  <Stack.Navigator initialRouteName="Loaihoa">
    <Stack.Screen name="Loại hoa" component={Loaihoa}/>
    <Stack.Screen name="Hoa" component={Hoa}/>
    <Stack.Screen name='ChiTietHoa' component={ChiTietHoa}/>
    </Stack.Navigator>
</NavigationContainer>

  );
 
};
