/**
 * Author: Jeejen.Dong
 * Date  : 17/2/23
 **/

import React from 'react';
import { View, Text, ScrollView, Animated } from 'react-native';
import TodoList from '../inheritor/TodoList.inheritor';
import NewItem from '../inheritor/NewItem.inheritor';

export default function TodoTemplate($scope, store) {
    let opacity = store.opacity;
    return (
        <ScrollView style={{margin: 30}}>
            <Animated.View style={{opacity: opacity}}>
                <Text style={{fontSize: 30, marginBottom: 30, alignSelf: 'center'}}>Doy-TodoList</Text>
                <NewItem onAddRow={$scope.onAddRow}></NewItem>
                <TodoList dataSource={store.dataSource} onDeleteRow={$scope.onDeleteRow}></TodoList>

                {$scope.renderChildren()}

                {$scope.renderObject()}

                {$scope.renderSet()}
            </Animated.View>
        </ScrollView>
    );
}
