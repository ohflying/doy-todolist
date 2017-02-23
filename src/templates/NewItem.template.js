/**
 * Author: Jeejen.Dong
 * Date  : 17/2/23
 **/
import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';

export default function NewItemTemplate($scope, store) {
    return (
        <View style={{flexDirection: 'row'}}>
            <TextInput style={{flex: 1, height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => store.newText = text} />
            <TouchableOpacity onPress={() => $scope.onPress()} style={{marginLeft: 10, justifyContent: 'center', backgroundColor: '#ff0000', paddingHorizontal: 20}}>
                <Text style={{color: '#fff'}}>
                    Add
                </Text>
            </TouchableOpacity>
        </View>
    );
}