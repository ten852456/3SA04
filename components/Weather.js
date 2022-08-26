import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useState,useEffect } from 'react';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=00f14e588a7ca09fa1e5156848bf2b47`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

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
        height: '25%'
    },
    fonts: {
        marginTop: 10,
        fontSize: 18,
    }
});