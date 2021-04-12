import React from 'react';
import {StyleSheet,View,Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
        <View style={styles.box}>
            <Button
                onPress={()=> navigation.navigate('Hand Drip')}
                title="Hand Drip"
            >
            </Button>
        </View>
        <View style={styles.box}>
            <Button
                    onPress={()=> navigation.navigate('Batch Brew')}
                    title="Batch Brew"
                >
            </Button>
        </View>
        <View style={styles.box}>
            <Button
                    onPress={()=> navigation.navigate('Cold Brew')}
                    title="Cold Brew"
                >
            </Button>
        </View>
        </View>

    )
};

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        width: "100%",
        height: "80%"
    },
    box: {
        margin: 20,
        padding: 20
    }
})

export default HomeScreen;