import "react-native-gesture-handler";
import {DefaultTheme ,Provider as PaperProvider} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import TabBarNavigation from "./src/navigation/TabBarNavigation";

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
    "Some dependencies are incompatible with the installed expo package version:"
]);

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#00cdbe',
        accent: '#252935',
    },
};

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <TabBarNavigation/>
            </NavigationContainer>
        </PaperProvider>
    );
}