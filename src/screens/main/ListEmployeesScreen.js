import React, {useEffect, useState} from "react";
import {Text} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import apiClient from "../../api/apiClient";
import {HOST} from "../../constants/system";
import EmployeeCard from "./EmployeeCard";
import {ActivityIndicator} from "react-native-paper";

async function getEmployees(params = {}){
    return await apiClient.postWrapper(HOST,"/persons?_quantity=20","GET");
}

export default function ListEmployeesScreen() {
    const [employees, setEmployees] = useState([])
    const [errorGettingInformation, setErrorGettingInformation] = useState(false)
    const [dataIsLoaded, setDataIsLoaded] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    function getInnerEmployees() {
        setDataIsLoaded(false)
        setIsLoading(true)
        setErrorGettingInformation(false)
        getEmployees().then((data)=>{
            setEmployees(data.data)
            setDataIsLoaded(true)
            setIsLoading(false)
        }).then((error)=>{
            if(dataIsLoaded){
                setErrorGettingInformation(true)
                setDataIsLoaded(false)
            }
            setIsLoading(false)
        })
    }

    useEffect(()=>{
        getInnerEmployees()
    },[])

    return (
        <SafeAreaProvider>

            {
                isLoading ? <ActivityIndicator/> : dataIsLoaded ?
                   <EmployeeCard employees={employees}/>
                    : errorGettingInformation ? <Text>Error</Text> : <Text>Stale</Text>
            }
        </SafeAreaProvider>
    )
}