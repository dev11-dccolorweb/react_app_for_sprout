import React, {useEffect} from "react";
import {Card, Paragraph, Title, Avatar, Text} from "react-native-paper";

export default function DetailEmployeeScreen(props) {
    const {route} = props;
    const employee = route.params;

    const LeftContent = props => <Avatar.Icon {...props} icon="account"/>
    return (
        <Card>
            <Card.Title title={`Employee #${employee.id}`} subtitle="Details" left={LeftContent}/>
            <Card.Content>
                <Title>{employee.firstname} {employee.lastname}</Title>
                <Paragraph>
                    <Text>{`${employee.address["country"]}, ${employee.address["city"]}, ${employee.address["streetName"]}`}</Text>
                </Paragraph>
            </Card.Content>
            <Card.Cover source={{uri: employee.image}}/>
            <Card.Actions>

            </Card.Actions>
        </Card>
    )
}