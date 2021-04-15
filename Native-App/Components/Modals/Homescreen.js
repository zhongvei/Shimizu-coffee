import React from 'react';
import {StyleSheet,View,Text, ImageBackground ,Image, Dimensions, Button,ScrollView} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {useState} from 'react';

const win = Dimensions.get('window');

const data = ["Hand Drip","Batch Brew","Cold Brew"]

const HomeScreen = ({navigation}) => {
    return(

        <ImageBackground
            source={require('../../assets/images/homepage.png')}
            style={styles.background}>
                
            <View style={styles.container}>
                <ScrollView horizontal={true}
                snapToInterval={win.width*0.7}
                centerContent={true}
                decelerationRate={0.1}
                pagingEnabled={true}
                scrollEventThrottle={10}
                contentContainerStyle={{alignItems:"center"}}
                >
                    
                    <View style={styles.box}>
                        <TouchableHighlight 
                        style={styles.card}
                        underlayColor={"none"}
                        activeOpacity={1}
                        onPress={()=>navigation.navigate('Hand Drip')}>
                        <>
                        <View style={styles.image_view}>
                            <Image
                                source={require('../../assets/images/HandDrip.jpg')}
                                style={{height:"100%",width:"100%",borderRadius:50}}
                            >
                            </Image>
                        </View>
                        <View style={{padding:40}}>
                            <Text style={{fontSize:30,color:"brown"}}>
                                Hand Drip
                            </Text>
                        </View>
                        </>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.box}>
                        <TouchableHighlight 
                        style={styles.card}
                        underlayColor={"none"}
                        activeOpacity={1}
                        onPress={()=>navigation.navigate('Batch Brew')}>
                        <>
                        <View style={styles.image_view}>
                            <Image
                                source={require('../../assets/images/BatchBrew.jpg')}
                                style={{height:"100%",width:"100%",borderRadius:50}}
                            >

                            </Image>
                        </View>
                        <View style={{padding:40}}>
                            <Text style={{fontSize:30,color:"brown"}}>
                                Batch Brew
                            </Text>
                        </View>
                        </>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.box}>
                        <TouchableHighlight 
                        style={styles.card}
                        underlayColor={"none"}
                        activeOpacity={1}
                        onPress={()=>navigation.navigate('Cold Brew')}>
                        <>
                        <View style={styles.image_view}>
                            <Image
                                source={require('../../assets/images/ColdBrew.jpg')}
                                style={{height:"100%",width:"100%",borderRadius:50}}
                            >

                            </Image>
                        </View>
                        <View style={{padding:40}}>
                            <Text style={{fontSize:30,color:"brown"}}>
                                Cold Brew
                            </Text>
                        </View>
                        </>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    background: {
        height:win.height,
        width:win.width,
        backgroundColor:"#add8e6"
    },
    container:{
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: "center",
    },
    box: {
        width:win.width*0.8,
        height:win.height,
        borderRadius: 100,
        alignItems:"center",
        justifyContent:"center",
        paddingBottom:20,
    },
    card:{
        width:win.width*0.65,
        height:win.height* 0.5,
        borderRadius:50,
        backgroundColor:"#add8e6"
    },
    image_view: {
        width:"100%",
        height:"60%"
    },
    text_view: {
        width:"60%",
        height:"100%",
        justifyContent:"center"
    }
})

export default HomeScreen;