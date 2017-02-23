/**
 * Author: Jeejen.Dong
 * Date  : 17/2/23
 **/

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ListItemTemplate($scope, store) {
    return (
        <View style={{paddingVertical: 10, borderBottomWidth: 1, borderColor: 'gray', flexDirection: 'row'}}>
            <Text style={{flex: 1}}>{store.props.rowData.text}</Text>
            <TouchableOpacity style={{backgroundColor: '#000', padding: 10}} onPress={() => $scope.onPress()} >
                <Text style={{color: '#fff'}}>delete</Text>
            </TouchableOpacity>
        </View>
    );
}