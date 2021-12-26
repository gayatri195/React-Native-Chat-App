import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {AntDesign} from 'react-native-vector-icons';

const ChatScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.textContainer}>Chat Screen</Text>

      </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
textContainer: {
    justifyContent: 'center',
    alignItems: 'center'
}
})

