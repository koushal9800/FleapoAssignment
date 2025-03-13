import React from "react";
import { View,Text, StyleSheet } from "react-native";
import { typography } from "../utils/typography";

const HitlistScreen = () =>{
    return(
        <View style={styles.container} >
            <Text style={{...typography.sectionTitle, color:'#fff'}} >HitlistScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C1C1E',
      justifyContent:'center',
      alignItems:'center',

    },
})

export default HitlistScreen