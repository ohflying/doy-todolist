/**
 * Author: Jeejen.Dong
 * Date  : 17/2/23
 **/
import React from 'react';
import { ListView } from 'react-native';
import ListItem from '../inheritor/ListItem.inheritor';

export default function TodoListTemplate($scope, store) {
    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(store.props.dataSource);
    return (
        <ListView
            dataSource = {dataSource}
            renderRow={(rowData) => {
                return (
                    <ListItem rowData={rowData} onDeleteRow={store.props.onDeleteRow} />
                ) }}
            enableEmptySections={true}
        />
    )
};
