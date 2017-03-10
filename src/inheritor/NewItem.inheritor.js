/**
 * Author: Jeejen.Dong
 * Date  : 17/2/23
 **/

import Doy from 'doy';
import template from '../templates/NewItem.template';

const NewItemInheritor = ($scope, store) => {
    store.newText = "";
    $scope.onPress = () => {
        if (store.props.onAddRow) {
            store.props.onAddRow(store.newText);
        }
    }
};

export default Doy.extend({
    template: template,
    inheritor: NewItemInheritor,
    name: 'NewItem'
})