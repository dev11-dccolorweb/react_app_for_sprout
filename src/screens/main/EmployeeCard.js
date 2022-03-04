import React from "react";
import {FlatList} from "react-native";
import {Card, Paragraph, Title, Avatar, Text} from "react-native-paper";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import CardEmployee from "./CardEmployee";


export default function EmployeeCard({employees}) {
    return (
        <FlatList
            data={employees}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <CardEmployee item={item}/>
            }
        />
    )
}