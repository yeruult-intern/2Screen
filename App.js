import * as React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ScreenA({ navigation, route }) {
  const [postText, setPostText] = React.useState('');
  const {navigate} = this.props.navigation;
  return (
    <>
      <TextInput
        multiline
        placeholder="ug useg bichne uu"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Send"
        onPress={() => {
          navigation.navigate({
            name: 'screenB',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}
function ScreenB({ navigation, route }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text style={{ margin: 10 }}>Input: {route.params?.post}</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="screenA" component={ScreenA} />
        <Stack.Screen name="screenB" component={ScreenB} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
