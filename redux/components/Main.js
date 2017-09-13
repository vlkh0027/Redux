import React,{Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Word from './Word';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';

 class Main extends Component{

    getWordList(){
        const {myFilter, myWords} = this.props;
        //if (myFilter === 'SHOW_ALL') return myWords;
        if (myFilter === 'MEMORIZED') return myWords.filter(e => e.memorized);
        if (myFilter === 'NEED_PARCTICE') return myWords.filter(e => !e.memorized);
        return myWords;
    }

    render(){
        const them = this.props.myIsAdding ? <Form/> : null;
        return(
            <View style={{backgroundColor:'#B1A5D8', flex:1, alignSelf:'stretch', justifyContent:'center'}}>
                <Header/>
                <View style={{flex:9}}> 
                    {them}
                    <FlatList
                        data={this.getWordList()}
                        renderItem={({item}) => <Word myWord ={item}/>}  
                        keyExtractor={item => item.id}
                    >
                </FlatList> 
                </View>
                 <Filter/>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
         myFilter: state.filterStatus,
         myWords: state.arrWords,
         myIsAdding: state.isAdding,
    };

}

export default connect(mapStateToProps)(Main);