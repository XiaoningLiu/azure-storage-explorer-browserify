/**
 * This view is an example list of people.
 */
Ext.define('AzureStorageExplorer.view.explorer.Action', {
    extend: 'Ext.grid.Panel',
    xtype: 'exploreraction',

    requires: [
        'AzureStorageExplorer.store.Personnel'
    ],

    title: 'Action (Under development)',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Properties',  dataIndex: 'name',  align: 'left'},
        { text: 'Values', dataIndex: 'email', flex: 1, align: 'left'},
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
