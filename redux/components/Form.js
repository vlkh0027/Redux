import React,{Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {toggleIsAdding, addWord} from './../Redux/actionCreators';
 class Form extends Component{

    constructor(props){
        super(props);
        this.state={
            en:'',
            vn:'',
        }
    }

    onAdd(){
        const {en, vn} = this.state;
        this.props.toggleIsAdding();
        this.props.addWord();

    }

    render(){
        return(
            <View style={styles.container}> 
                <TextInput style={styles.textInput}
                value={this.state.en}
                onChangeText={text => this.setState({en:text})}
                placeholder="English word"
                />
                <TextInput style={styles.textInput}
                value={this.state.vn}
                onChangeText={text => this.setState({vn:text})}
                placeholder="Mean"
                />
                <TouchableOpacity onPress={()=>{this.onAdd()}}>
                    <Text>ADD</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput:{
        height:40,
        width:300,
        backgroundColor:'#CBC6C5',
        margin:10,
        paddingHorizontal:10,
        //color:'white',
    },
    container:{
        alignSelf:'stretch',
        alignItems:'center',
        justifyContent:'center',
    },
});

export default connect(null,{toggleIsAdding, addWord})(Form);
