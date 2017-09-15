import React,{Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {filterShowAllAction, filterMemorizedAction, filterNeedParcticeAction} from './../Redux/actionCreators';
class Filter extends Component{

    getTextStyle(statusName) {
        const { myFilterStatus } = this.props;
        if (statusName === myFilterStatus) return {color:'red', fontWeight:'bold'};
        return "";
    };

    render(){
        return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{this.props.filterShowAllAction()}}>
                <Text style={this.getTextStyle('SHOW_ALL')}>SHOW ALL</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>{this.props.filterMemorizedAction()}}>
                <Text style={this.getTextStyle('MEMORIZED')}>MEMORIZED</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.props.filterNeedParcticeAction()}}>
                <Text style={this.getTextStyle('NEED_PARCTICE')}>NEED PRACTICE</Text>
            </TouchableOpacity>
        </View>             
        );
    }
};

const styles=StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#FAFAFA', 
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
});

function mapStateToProps(state){
    return {myFilterStatus: state.filterStatus};
}

export default connect(mapStateToProps,{filterMemorizedAction,filterNeedParcticeAction,filterShowAllAction})(Filter);