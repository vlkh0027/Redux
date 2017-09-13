import React,{Component} from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

 class Header extends Component{

    Add(){
        this.props.dispatch({type:'TOGGLE_IS_ADDING'})
    }

    render(){
        return(
            <View style={{flex:1,paddingHorizontal: 20, backgroundColor:'#75CDF4', justifyContent:'space-between', alignItems:'center', flexDirection:'row'}}>
            <Text/>
            <Text>My Word</Text>
            <TouchableOpacity onPress={()=>{this.Add()}}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

export default connect()(Header);