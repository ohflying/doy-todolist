/**
 * Author: Jeejen.Dong
 * Date  : 17/2/23
 **/
import Doy from 'doy';
import template from '../templates/TodoList.template';

const TodoListInheritor = ($scope, store) => {

};

export default Doy.extend({
    template: template,
    inheritor: TodoListInheritor,
    name: 'TodoList'
})