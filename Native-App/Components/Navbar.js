import React from 'react';
import {View,Text,Image} from 'react-native';
import { color } from 'react-native-reanimated';

const Navbar = () => {
    return(
        <View style={{flex:1, alignItems:"center",color:'red',backgroundColor:"red"}}>
            <Image
                style={{width:100,height:63}}
                source={require('../assets/icons/Shimizu-Logo.jpg')}
            >
            </Image>
        </View>
    )
};

export default Navbar;