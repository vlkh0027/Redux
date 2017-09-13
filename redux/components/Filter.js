import React,{Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class Filter extends Component{

    getTextStyle(statusName) {
        const { myFilterStatus } = this.props;
        if (statusName === myFilterStatus) return {color:'red', fontWeight:'bold'};
        return "";
    };

    setFilterStatus(actionType){
        this.props.dispatch({ type: actionType});
    }

    render(){
        return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{this.setFilterStatus('FILTER_SHOW_ALL')}}>
                <Text style={this.getTextStyle('SHOW_ALL')}>SHOW ALL</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>{this.setFilterStatus('FILTER_MEMORIZED')}}>
                <Text style={this.getTextStyle('MEMORIZED')}>MEMORIZED</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.setFilterStatus('FILTER_NEED_PRACTICE')}}>
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

export default connect(mapStateToProps)(Filter);