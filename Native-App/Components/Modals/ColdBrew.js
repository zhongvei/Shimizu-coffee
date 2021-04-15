import React from 'react';
import {View,StyleSheet,Dimensions,Image, Text} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';

const win = Dimensions.get('window');

const ColdBrew = () => {
    const [selection,setSelection] = React.useState(0);
    const [coffeBean,setcoffeeBean] = React.useState('');
    return(
        <View
            style={styles.container}
        >
            <View 
                style={styles.box}>
                <Image
                    source={require('../../assets/icons/ColdBrew.png')}
                    style={{width:"100%",height:"100%"}}
                >
                </Image>
            </View>
            <View style={{width:win.width*0.5,height:40,justifyContent:"center",alignItems:"center",marginBottom:55}}>
                <Text style={{fontSize:35}}>
                    Cold Brew
                </Text>
            </View>
            <View 
                style={styles.box_2}>
                    <Text style={{fontSize:20}}>
                        Pick your coffee bean
                    </Text>
                    <View style={styles.picker_view}>
                        <Picker
                            selectedValue={coffeBean}
                            onValueChange={(itemValue, itemIndex) =>
                                setcoffeeBean(itemValue)
                            }
                            style={styles.picker}
                            itemStyle={{color:"blue"}}
                            >
                            <Picker.Item label="Arabica" value="Arabica" />
                            <Picker.Item label="Robusta" value="Robusta" />
                            <Picker.Item label="Liberica" value="Liberica" />
                            
                        </Picker>
                    </View>
            </View>
            <View 
                style={styles.box_3}>
                    <Text style={{fontSize:20}}>
                        Select Size
                    </Text>
                    <View style={styles.size_box}>
                        <TouchableHighlight 
                        style={selection==1?styles.pressed:styles.size}
                        underlayColor={"#DEB887"}
                        activeOpacity={0.5}
                        onPress={()=>{
                            setSelection(1)
                        }}
                        >
                            <Text style={{fontSize:23}}>
                                S
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                        style={selection==2?styles.pressed:styles.size}
                        underlayColor={"#DEB887"}
                        activeOpacity={0.5}
                        onPress={()=>{
                            setSelection(2)
                        }}
                        >
                            <Text style={{fontSize:23}}>
                                M
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                        style={selection==3?styles.pressed:styles.size}
                        underlayColor={"#DEB887"}
                        activeOpacity={0.5}
                        onPress={()=>{
                            setSelection(3)
                        }}
                        >
                            <Text style={{fontSize:23}}>
                                L
                            </Text>
                        </TouchableHighlight>
                    </View>
            </View>
            <TouchableHighlight style={styles.btn}
                underlayColor={"#B0E0E6"}
                onPress={()=>{
                    if (selection) {
                        alert("Your order is completed!")
                    }
                    else {
                        alert("Please select your coffee size!")
                    }
                }}
            >
                <View>
                    <Text style={{fontSize:18}}>
                    Confirm Selection
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:"100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white"
    },
    box: {
        borderRadius:5,
        width: win.width*0.5,
        height: win.height*0.2,
        alignItems: "center",
        margin: 20,
        backgroundColor: "white"
    },
    box_2: {
        width: win.width*0.5,
        height: win.height*0.15,
        alignItems: "center",
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "white",
        justifyContent:"space-evenly"
    },
    box_3: {
        width: win.width*0.7,
        height: win.height*0.15,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
        backgroundColor: "white",
        marginTop: 5

    },  
    btn: {
        width: win.width*0.5,
        height: 50,
        alignItems: "center",
        justifyContent:"center",
        borderRadius: 30,
        backgroundColor: "#6495ED"
    },
    size_box:{
        width:"100%",
        height:"50%",
        flexDirection:"row",
        justifyContent: "center",
        borderColor:"red",
    },
    size: {
        width:win.width*0.15,
        height:win.height*0.07,
        margin: 5,
        borderRadius: 100,
        borderWidth: 5,
        borderColor:"#BC8F8F",
        alignItems:"center",
        justifyContent: "center"
    },
    pressed: {
        width:win.width*0.15,
        height:win.height*0.07,
        margin: 5,
        borderRadius: 100,
        borderColor:"#DEB887",
        backgroundColor:"#DEB887",
        alignItems:"center",
        justifyContent: "center",
        padding: 0
    },
    picker_view: {
        width: "80%",
        backgroundColor:"#CD853F",
        justifyContent: "center",
        borderRadius: 20
    },
    picker: {
        width:"100%",
        height: "40%",
    }

})

export default ColdBrew;