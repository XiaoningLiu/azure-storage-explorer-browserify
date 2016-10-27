/**
 * This view is an example list of people.
 */
Ext.define('AzureStorageExplorer.view.explorer.Directory', {
    extend: 'Ext.tree.Panel',
    xtype: 'explorerdirectory',

    requires: [
        'AzureStorageExplorer.store.Personnel',
        'AzureStorageExplorer.store.explorer.Directory',
        'AzureStorageExplorer.view.explorer.ExplorerController'
    ],

    title: 'Directory',

    store: {
        type: 'explorerdirectory'
    },

    controller : 'explorer',

    columns: [{
        xtype: 'treecolumn',
        text: 'Azure Storage Accounts',
        dataIndex: 'text',
        flex: 1,
        align: 'left', 
        sortable: 'false',
        renderer: function (val, meta, rec) {
            if (rec.get('isLayover')) {
                meta.tdStyle = 'color: gray; font-style: italic;';
            }
            return val;
        }
    }],

    listeners: {
        beforeitemexpand: 'onBeforeExpand',
        itemclick: "onItemClick",
        added: "onAdded"
    }
});