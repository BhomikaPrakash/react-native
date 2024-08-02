import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';

function ProfileScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
            <Text style={styles.text}>Profile Screen</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20, 
    },
});

export default ProfileScreen;
