import React from "react";
import { View, Image } from "react-native";

export default class BaseView extends React.Component {
    constructor(props){
        super(props);
    }
    
    static navigationOptions = {
        headerTitle: (
            <Image style={
                { 
                    flex: 1,
                    alignSelf: 'center',
                    resizeMode: 'contain'
                }} 
                source={require('../Images/header-logo.png')}
            />
        ),
        headerStyle: {
            height: 60,
            backgroundColor: '#411121'
        },
        headerTintColor: '#ffffff',
        headerRight: (
            <View />
        )
    };
  
    render() {
        return(
        null
        )
    }
}