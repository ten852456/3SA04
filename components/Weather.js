import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useState } from 'react';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })
    return (<View >
        <ImageBackground source={require('../assets/bg.jpg')} style={styles.backdrop}>
            <View style={styles.view}>
            <Text style={styles.fonts}>Zip Code is {props.zipCode}</Text>
            <Forecast {...forecastInfo} />
            </View>
        </ImageBackground>
    </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        flexDirexction: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    view: {
        alignItems: 'center',
        backgroundColor: 'blue',
        opacity: 0.4,
        width: '100%',
        height: '23%'
    },
    fonts: {
        marginTop: 10,
        fontSize : 18,
    } 
});