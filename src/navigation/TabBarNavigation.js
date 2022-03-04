import React from "react"
import { BottomNavigation, Text } from 'react-native-paper';
import MainStackNavigation from "./MainStackNavigation";
import AboutScreen from "../screens/about/AboutScreen";

const TabBarNavigation = () => {

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'employees', title: 'Employees', icon: 'account' },
        { key: 'about', title: 'About', icon: 'album' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        employees : MainStackNavigation,
        about: AboutScreen,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );

};
export default TabBarNavigation;