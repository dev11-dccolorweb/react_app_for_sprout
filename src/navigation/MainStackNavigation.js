import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import ListEmployeesScreen from "../screens/main/ListEmployeesScreen";
import DetailEmployeeScreen from "../screens/main/DetailEmployeeScreen";

const Stack = createStackNavigator()


export default function MainStackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen component={ ListEmployeesScreen } name={"ListEmployee"} options={{
                title: "Employees"
            }} />
            <Stack.Screen component={ DetailEmployeeScreen } name={"DetailEmployee"} options={{
                title: "Detail Employee"
            }} />
        </Stack.Navigator>
    )
}