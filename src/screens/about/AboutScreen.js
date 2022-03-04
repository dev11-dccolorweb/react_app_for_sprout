import React from "react";
import {Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Card,Title, Paragraph} from "react-native-paper";
export default function AboutScreen() {
    return (
        <SafeAreaView>
            <Card>
                <Card.Content>
                    <Title>Made by Carlos Hernandez</Title>
                    <Paragraph>For Sprout</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://crm.sprout.online/images/logo-sprout-v2.png?1' }} />
            </Card>
        </SafeAreaView>
    )
}
