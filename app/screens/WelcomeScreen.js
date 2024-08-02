import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, FlatList, Image } from 'react-native';

const users = [
  { id: '1', 
    name: 'Frank Stark', 
    age: 23, 
    location: 'London, United Kingdom'
 },
  { id: '2',
     name: 'Andreea Miles', 
     age: 26, 
     location: 'London, United Kingdom' 
    },
  
];

function WelcomeScreen(props) {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: 'https://via.placeholder.com/150' }} />
                <View style={styles.topMatch}>
                    <Text style={styles.topMatchText}>TOP MATCH</Text>
                </View>
            </View>
            <View style={styles.details}>
                <Text style={styles.userName}>{item.name}, {item.age}</Text>
                <Text style={styles.userLocation}>{item.location}</Text>
                <TouchableOpacity style={styles.viewProfileButton} onPress={() => console.log(`View profile of ${item.name}`)}>
                    <Text style={styles.viewProfileButtonText}>View Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headingText}> 
                <Text style={styles.text}>Daily Connections</Text>
                <TouchableOpacity style={styles.button} onPress={() => console.log("button refreshed")}>
                    <Text style={styles.buttonText}>Refresh</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start', 
        alignItems: 'center', 
    },
    headingText: {
        marginTop: 10, 
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18, 
    },
    button: {
        backgroundColor: 'white', 
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 20, 
        borderWidth: 1,
        borderColor: 'magenta', 
        marginTop: 20,
    },
    buttonText: {
        color: 'magenta',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    list: {
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
    
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 20,
        width: '100%',
    },
    imageContainer: {
        position: 'relative',
    
    },
    image: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    topMatch: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'black',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    topMatchText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    details: {
        padding: 16,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    userLocation: {
        color: 'gray',
        marginBottom: 8,
    },
    viewProfileButton: {
        backgroundColor: 'white',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'magenta',
        borderRadius: 20,
    },
    viewProfileButtonText: {
        color: 'magenta',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default WelcomeScreen;
