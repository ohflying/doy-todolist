/**
 * Author: Jeejen.Dong
 * Date  : 17/2/23
 **/

import Doy from 'doy';
import template from '../templates/ListItem.template';

const ListItemInheritor = ($scope, store) => {
    $scope.onPress = () => {
        if (store.props.onDeleteRow) {
            store.props.onDeleteRow(store.props.rowData.id);
        }
    }
};

export default Doy.extend({
    template: template,
    inheritor: ListItemInheritor,
    name: 'ListItem'
});