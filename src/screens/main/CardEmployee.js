import React from "react"
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import {Avatar, Card, Paragraph, Text, Title} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";

export default function CardEmployee({item}) {
    const navigation = useNavigation();
    const goToDetails = () => {
        console.log(item.id);
        navigation.navigate("DetailEmployee",item);
    };
    const LeftContent = (props, url) => <Avatar.Icon {...props} icon="account"/>
    return (
        <TouchableWithoutFeedback onPress={goToDetails}>
            <Card>
                <Card.Title title={`${item.firstname} ${item.lastname}`} subtitle={item.email}
                            left={LeftContent}/>
                <Card.Content>
                    <Title>Localization</Title>
                    <Paragraph>
                        <Text>{`${item.address["country"]}, ${item.address["city"]}, ${item.address["streetName"]}`}</Text>
                    </Paragraph>
                </Card.Content>
            </Card>
        </TouchableWithoutFeedback>
    )
}