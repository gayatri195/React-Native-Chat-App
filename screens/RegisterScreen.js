import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [imageURL, setImageURL] = useState("");
    return (
        <View style={styles.container}>
        <Input placeholder="Enter your name"
               label="Full Name"
               leftIcon={{type: 'material', name: 'badge'}}
               value={name}
               onChangeText={text => setName(text)}
        />
        <Input placeholder="Enter your email"
               label="Email"
               leftIcon={{type: 'material', name: 'email'}}
               value={email}
               onChangeText={text => setEmail(text)}
        />
         <Input placeholder="Enter your password"
               label="Password"
               secureTextEntry
               leftIcon={{type: 'material', name: 'lock'}}
               value={password}
               onChangeText={text=> setPassword(text)}
        />
        <Input placeholder="Enter your imageURL"
               label="Profile Picture"
               leftIcon={{type: 'material', name: 'face'}}
               value={imageURL}
               onChangeText={text => setImageURL(text)}
        />
        <Button style={styles.button} title='Register' onPress={() => navigation.navigate('Chat')}/>
    </View>
)
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        width: 400,
        marginTop: 20,
        borderRadius: 10,
        padding: 10
    }
})

