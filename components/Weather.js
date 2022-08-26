import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useState } from 'react';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
    main: '-',
    description: '-',
    temp: 0
    }) 
    return ( <View>
        <ImageBackground source={require('../assets/bg.jpg')} style={styles.backdrop}>
        <Text>Zip Code</Text>
        <Text>{props.zipCode}</Text>
        <Forecast {...forecastInfo} />
        </ImageBackground>
        </View>
        );
       }
       const styles = StyleSheet.create({
        backdrop: {
        justifyContent: 'center',
        flexDirexction: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
        },
       });