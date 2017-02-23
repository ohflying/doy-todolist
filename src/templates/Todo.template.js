/**
 * Author: Jeejen.Dong
 * Date  : 17/2/23
 **/

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import TodoList from '../inheritor/TodoList.inheritor';
import NewItem from '../inheritor/NewItem.inheritor';

export default function TodoTemplate($scope, store) {
    return (
        <ScrollView style={{margin: 30}}>
            <View>
                <Text style={{fontSize: 30, marginBottom: 30, alignSelf: 'center'}}>Doy-TodoList</Text>
                <NewItem onAddRow={$scope.onAddRow}></NewItem>
                <TodoList dataSource={store.dataSource} onDeleteRow={$scope.onDeleteRow}></TodoList>
            </View>
        </ScrollView>
    );
}
