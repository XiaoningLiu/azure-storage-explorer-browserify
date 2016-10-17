/**
 * This view is an example list of people.
 */
Ext.define('AzureStorageExplorer.view.explorer.Action', {
    extend: 'Ext.grid.Panel',
    xtype: 'exploreraction',

    requires: [
        'AzureStorageExplorer.store.Personnel'
    ],

    title: 'Action',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
