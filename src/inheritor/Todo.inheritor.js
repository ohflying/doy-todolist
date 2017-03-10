/**
 * Author: Jeejen.Dong
 * Date  : 17/2/23
 **/

import React from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import Doy from 'doy';
import template from '../templates/Todo.template';

const TodoInheritor = ($scope, store) => {
    store.dataSource = [{
        text: {
            a: '第一个'
        },
        id: 0,
    }, {
        text: {
            a: "第二个"
        },
        id: 1
    }];

    let keys = "";
    Object.keys(store).forEach((key) => {
        keys += key + ',';
    });

    let id = store.dataSource.length;

    store.opacity = Doy.atom(new Animated.Value(0));
    store.map = new Map();
    store.map.set('Key1', 'Value1');
    setTimeout(() => {
        store.map.set('Key2', 'Value2');
    }, 2000);
    store.a = {};
    store.a.text = "开始！！";
    store.setObj = new Set();
    store.setObj.add('11111');

    setTimeout(() => {
        Animated.timing(store.opacity, {
            easing: Easing.linear,
            duration: 1000,
            toValue: 1
        }).start();
    });

    setTimeout(() => {
        store.a.text = "结束";
    }, 3000);

    setTimeout(() => {
        store.setObj.add('22222');
    }, 2000);

    setTimeout(() => {
        store.setObj.delete('22222');
    }, 5000);

    $scope.onAddRow = (text) => {
        store.dataSource.push({
            text: {
                a: text
            },
            id: id++
        });
    };

    $scope.onDeleteRow = (id) => {
        let data = store.dataSource.filter((data) => {
            return data.id == id;
        });

        data.forEach((d) => {
            let index = store.dataSource.indexOf(d);
            if (index > -1) {
                store.dataSource.splice(index, 1);
            }
        });
    };

    $scope.renderChildren = () => {
        let children = [];
        for(let key of store.map.keys()) {
            children.push((
                <View key={key}>
                    <Text>Key: {key} Value: {store.map.get(key)}</Text>
                </View>
            ))
        }

        return children;
    };

    $scope.renderObject = () => {
        return (<View>
            <Text>Obj: {store.a.text}</Text>
        </View>)
    };

    $scope.renderSet = () => {
        let children = [];
        for(let value of store.setObj.values()) {
            children.push((
                <View key={value}>
                    <Text>Set: {value} </Text>
                </View>
            ))
        }

        return children;
    };

    $scope.$on('view.loaded', (event) => {
        console.log('view.loaded');
    });

    $scope.$on('view.enter', (event) => {
        console.log('view.enter');
    });

    $scope.$on('view.leave', (event) => {
        console.log('view.leave');
    });

    $scope.$on('view.unloaded', (event) => {
        console.log('view.unloaded');
    });
};

export default Doy.extend({
    template: template,
    inheritor: TodoInheritor,
    name: 'todo'
})