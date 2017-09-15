import React,{Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {memorizedWordAction, showWordAction} from './../Redux/actionCreators';

 class Word extends Component{
     

    render(){

        const{id,en, vn, memorized, isShow} = this.props.myWord; 
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const rememberedButtonText = memorized ? 'forgot' : 'remembered';
        const meaning = isShow ? vn : '--------';
        return(
            <View style={styles.container}>
                <Text style={{color:'white',textDecorationLine}}>{en}</Text>
                <Text style={styles.text}>{meaning}</Text>  
                <View style={styles.controller}>
                    <TouchableOpacity 
                    style={styles.button} 
                    onPress ={()=>{this.props.memorizedWordAction(id)}}
                    > 
                        <Text>{rememberedButtonText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.button}
                    onPress ={()=>{this.props.showWordAction(id)}}
                    >
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
export default connect(null, {memorizedWordAction,showWordAction})(Word);