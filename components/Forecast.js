import {StyleSheet, Text, View } from 'react-native';

export default function Forecast(props) {
    return (
    <View style={styles.div}>
    <Text style={styles.main}>{props.main}</Text>
    <Text style={styles.desc}>{props.description}</Text>
    <View>
    <Text style={styles.temp}>{props.temp} °C</Text>
    </View>
    </View>
    );
   }
   const styles = StyleSheet.create({
    div: {
    flexDirexction: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },
    main : {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 24,
    },
    desc : {
        fontSize : 18,
        marginBottom: 20,

    },
    temp : {
        fontSize : 24,
        fontWeight : 'bold',
    },

   });