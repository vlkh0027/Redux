import React,{Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

 class Word extends Component{
     
    memorizedWord(){
        this.props.dispatch({
            type: 'TOGGLE_MEMORIZED',
            id: this.props.myWord.id,
        });
    }

    render(){

        const{en, vn, memorized} = this.props.myWord; 
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const rememberedButtonText = memorized ? 'forgot' : 'remembered';

        return(
            <View style={styles.container}>
                <Text style={{color:'white',textDecorationLine}}>{en}</Text>
                <Text style={styles.text}>{vn}</Text>  
                <View style={styles.controller}>
                    <TouchableOpacity 
                    style={styles.button} 
                    onPress ={this.memorizedWord.bind(this)}> 
                        <Text>{rememberedButtonText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text>show</Text>
                    </TouchableOpacity>
                </View>   
            </View>
        );
    }
}

const styles=StyleSheet.create({
    
    container:{
        backgroundColor:'#4C5387',
        padding:10,
        margin:10,
    },
    text:{
        color:'white',
    },
    controller:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    button:{
        padding:5,
        margin:5,
        marginTop:10,
        backgroundColor:'#CECECE',
    }

})
export default connect()(Word);