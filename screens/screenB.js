import React from 'react';  
import { StyleSheet, View, Text, Button } from 'react-native';  
  
export default class ProfileScreen extends React.Component {  
    static navigationOptions = {  
        title: 'Profile',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };  
    render() {  
        {}  
        const { navigation } = this.props;  
        const text_input = navigation.getParam('post', 'postText');  
        const other_param = navigation.getParam('otherParam', 'some default value');  
        return (  
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
                <Text style={{ marginTop: 16,fontSize: 20,}}>  
                    ScreenBim  
                </Text>  
                <Text style={styles.textStyle}>Input text: {JSON.stringify(text_input)}</Text>  
                <Text style={styles.textStyle}>Other Param: {JSON.stringify(other_param)}</Text>  
                <Text style={{ margin: 10 }}>Input: {route.params?.post}</Text>
                <View style={styles.buttonStyle}>  
                <Button  
                    title="Go back"  
                    onPress={() => this.props.navigation.goBack()}  
                />  
                </View>  
            </View>  ,
        []);  
    }  
}  
const styles = StyleSheet.create({  
    textStyle: {  
        fontSize: 23,  
        textAlign: 'center',  
        color: '#f00',  
    },  
  
    buttonStyle:{  
        width: "93%",  
        marginTop: 50,  
        backgroundColor: "red",  
    }  
});  