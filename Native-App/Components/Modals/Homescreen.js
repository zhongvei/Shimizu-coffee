import React from 'react';
import {StyleSheet,View,Text, Button, Image, Dimensions} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const win = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.background}>
            <View style={styles.container}>

                <TouchableHighlight 
                style={styles.first_box}
                onPress={()=> navigation.navigate('Hand Drip')}
                underlayColor="	rgb(210,105,30)"
                >
                    <>
                        <View
                        style={styles.image_view}>
                            <Image
                                style={{width:100,height:110}}
                                source={require('../../assets/icons/HandDrip.png')}>
                            </Image>
                        </View>
                        <View
                            style={styles.text_view}
                        >
                            <Text
                                style={{fontSize:30}}
                            >
                                Hand Drip
                            </Text>
                        </View>
 
                    </>
                </TouchableHighlight>   

                <TouchableHighlight 
                style={styles.box}
                onPress={()=> navigation.navigate('Batch Brew')}
                underlayColor="	rgb(210,105,30)"
                >
                    <>
                        <View
                        style={styles.image_view}>
                            <Image
                                style={{width:100,height:110}}
                                source={require('../../assets/icons/BatchBrew.jpg')}>
                            </Image>
                        </View>
                        <View
                            style={styles.text_view}
                        >
                            <Text
                                style={{fontSize:30}}
                            >
                                Cold Brew
                            </Text>
                        </View>
 
                    </>
                </TouchableHighlight>  

                <TouchableHighlight 
                style={styles.box}
                onPress={()=> navigation.navigate('Cold Brew')}
                underlayColor="	rgb(210,105,30)"
                >
                    <>
                        <View
                        style={styles.image_view}>
                            <Image
                                style={{width:100,height:120}}
                                source={require('../../assets/icons/ColdBrew.png')}>
                            </Image>
                        </View>
                        <View
                            style={styles.text_view}
                        >
                            <Text
                                style={{fontSize:30}}
                            >
                                Batch Brew
                            </Text>
                        </View>
 
                    </>
                </TouchableHighlight>  
            </View>
        </View>
        

    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor:"rgb(244,164,96)",
        height:win.height,
        width:win.width
    },
    container:{
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: "center",


    },
    box: {
        width:win.width*0.85,
        height:win.height*0.13,
        margin: 30,
        padding: 20,
        borderRadius: 100,
        backgroundColor:'rgb(139,69,19)',
        flexDirection:"row",
        justifyContent:"space-between"
    },
    first_box:{
        width:win.width*0.85,
        height:win.height*0.13,
        margin: 30,
        marginTop: 0,
        padding: 20,
        borderRadius: 100,
        backgroundColor:'rgb(139,69,19)',
        flexDirection:"row",
        justifyContent:"space-between"
    },
    image_view: {
        width:"40%",
        height:"100%",
        justifyContent:"center"
    },
    text_view: {
        width:"60%",
        height:"100%",
        justifyContent:"center"
    }
})

export default HomeScreen;