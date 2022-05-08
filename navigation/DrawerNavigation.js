import { React } from 'react';
import { createBottomTabNavigator } from "@react-navigation-bottom-tabs";
import CreatePost from '../screens/CreatePost';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component = {TabNavigator}/>
            <Drawer.Screen name = "Profile" component = {Profile}/>
        </Drawer.Navigator>
);
};

export default DrawerNavigator;