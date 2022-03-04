import "react-native-gesture-handler";
import {DefaultTheme ,Provider as PaperProvider} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import TabBarNavigation from "./src/navigation/TabBarNavigation";

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