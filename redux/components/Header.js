import React,{Component} from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {toggleIsAdding} from './../Redux/actionCreators';

 class Header extends Component{


    render(){
        return(
            <View style={{flex:1,paddingHorizontal: 20, backgroundColor:'#75CDF4', justifyContent:'space-between', alignItems:'center', flexDirection:'row'}}>
            <Text/>
            <Text>My Word</Text>
            <TouchableOpacity onPress={()=>{this.props.toggleIsAdding()}}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

export default connect(null, {toggleIsAdding})(Header);