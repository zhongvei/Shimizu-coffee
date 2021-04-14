import React from 'react';
import {StyleSheet,View,Text, ImageBackground ,Image, Dimensions, Button,ScrollView} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const win = Dimensions.get('window');

const data = ["Hand Drip","Batch Brew","Cold Drip"]

const HomeScreen = ({navigation}) => {
    return(

        <ImageBackground
            source={require('../../assets/images/homepage.png')}
            style={styles.background}>
                
            <View style={styles.container}>
                <ScrollView horizontal={true}
                snapToInterval={win.width}
                showsHorizontalScrollIndicator={true}
                centerContent={true}
                bounces={false}
                contentContainerStyle={{alignItems:"center"}}
                >
                    {data.map((method)=>{
                        return(
                            <TouchableHighlight style={styles.card}>
                            <View>
                                <Text>
                                    {method}
                                </Text>
                            </View>
                        </TouchableHighlight>
                        )
                    })}
                    {/* <TouchableHighlight 
                    style={styles.first_box}
                    onPress={()=> navigation.navigate('Hand Drip')}
                    underlayColor="#AFEEEE"
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
                    underlayColor="#AFEEEE"
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
                    underlayColor="#AFEEEE"
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
                    </TouchableHighlight>  */}
                </ScrollView>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    background: {
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
        backgroundColor:'#B0E0E6',
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
        backgroundColor:'#B0E0E6',
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
    },
    card:{
        width:win.width*0.5,
        height:win.height* 0.6,
        borderRadius:10,
        borderWidth:3,
        borderColor:"red",
        margin: win.width*0.25,
        marginTop: 40,
        padding:10
    }
})

export default HomeScreen;