import React from "react";
import {View,Text,StyleSheet, SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import Hearto from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useFonts} from 'expo-font'
export const ProductNavbar = () => {
    const [loaded] = useFonts({
        Poppins : require('../../assets/fonts/Poppins-Medium.ttf'),
    })
      if(!loaded)
      {
        return null;
      }
    return (
        <SafeAreaView style={styles.navcontainer}>
          <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",width:'30%'}}>
          <Icon 
            name="arrow-left"
            size={25}
          />
          <Text style={{fontSize:18,fontFamily:'Poppins'}}>Women</Text>
          </View>
          <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:'45%' ,paddingHorizontal:10}}>
          <Icon
           name="search"
           size={25}
          />
          <Hearto
          name="hearto"
           size={25}
          />
          <SimpleLineIcons
          name="handbag"
          size={25}/>
          </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    navcontainer:{
        backgroundColor:"#fff",
        borderColor:"#E2E1E1",
        borderBottomWidth:1,
        height:44,  
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:5,
    }

})