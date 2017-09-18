import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {connect} from 'react-redux';
import { startFetchData,fetchError, fetchSucces} from './../redux/Action';
import getTemp from './../api/getTemp';

 class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: ''
        };
    }

    getWeatherMessage(){
        const {cityName, error, temp, isLoading} = this.props;
        if(isLoading) return '...loading';
        if(error) return 'Vui long thu lai';
        if(cityName === null) return 'Nhap ten thanh pho';
        return `${cityName} hien tai la ${temp}oC`;
    }

    getTempByCityName(cityName){
        this.props.startFetchData();
        getTemp(cityName)
        .then(temp => this.props.fetchSucces(cityName, temp))
        .catch(()=> this.props.fetchError());
    }

  render() {
    return (
        <View style={styles.container}>
                <Text style={styles.message}>{this.getWeatherMessage()}</Text>
                <TextInput 
                style={styles.textInput}
                value={this.state.cityName}
                onChangeText={text => this.setState({ cityName: text })}
            />
                <TouchableOpacity style={styles.button} onPress={()=>{this.getTempByCityName(this.state.cityName)}}>
                    <Text style={styles.buttonText}>Lấy nhiệt độ</Text>
                </TouchableOpacity>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: 'lightblue', 
        flex: 1, 
        alignSelf: 'stretch', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    message: {
        color: 'white',
        fontSize: 25
    },
    button: {
        backgroundColor: 'gray',
        padding: 10,
        margin: 50
    },
    buttonText: {
        color: 'white'
    },
    textInput: {
        margin: 10,
        backgroundColor: 'black',
        height: 40,
        paddingHorizontal: 10,
        width:300,
        color: 'white'
    }
});

function mapStateToProps(state) {
    return {cityName: state.cityName, 
        temp: state.temp, 
        error: state.error, 
        isLoading: state.isLoading};
};

export default connect(mapStateToProps,{fetchError,fetchSucces,startFetchData})(Main);

