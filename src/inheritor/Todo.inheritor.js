/**
 * Author: Jeejen.Dong
 * Date  : 17/2/23
 **/

import Doy from 'doy';
import template from '../templates/Todo.template';

const TodoInheritor = ($scope, store) => {
    store.dataSource = [{
        text: "第一个",
        id: 0,
    }, {
        text: "第二个",
        id: 1
    }];

    let id = store.dataSource.length;

    $scope.onAddRow = (text) => {
        store.dataSource.push({
            text: text,
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