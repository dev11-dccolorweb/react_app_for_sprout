import React, {useEffect} from "react";
import {Card, Paragraph, Title, Avatar, Text, ActivityIndicator} from "react-native-paper";
import {useIsFocused} from "@react-navigation/native";

export default function DetailEmployeeScreen(props) {
    const {route} = props;
    const employee = route.params;
    const LeftContent = props => <Avatar.Icon {...props} icon="account"/>
    const isFocused = useIsFocused();
    console.log(isFocused);
    return (
        <Card>
            <Card.Title title={`Employee #${employee.id}`} subtitle="Details" left={LeftContent}/>
            <Card.Content>
                <Title>{employee.firstname} {employee.lastname}</Title>
                <Paragraph>
                    <Text>{`${employee.address["country"]}, ${employee.address["city"]}, ${employee.address["streetName"]}`}</Text>
                </Paragraph>
            </Card.Content>
            {
                isFocused ?

                    <Card.Cover source={{uri: isFocused ? employee.image+"?id="+employee.id : "https://crm.sprout.online/images/logo-sprout-v2.png?1" }}/>
                    :
                    <ActivityIndicator/>
            }
            <Card.Actions>

            </Card.Actions>
        </Card>
    )
}