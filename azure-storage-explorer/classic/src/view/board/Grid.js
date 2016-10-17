/**
 * This view is an example list of people.
 */
Ext.define('AzureStorageExplorer.view.board.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'boardgrid',

    requires: [
        'AzureStorageExplorer.store.board.Grid'
    ],

    title: 'Grid',
    header: true,
    store: {
        type: 'boardgrid'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', align: 'left' },
        { text: 'Last Modified', dataIndex: 'email', flex: 1, align: 'left'  },
        { text: 'Blog Type', dataIndex: 'phone', flex: 1, align: 'left'  },
        { text: 'Size', dataIndex: 'email', flex: 1, align: 'left'  },
    ],

    tbar: [
        { xtype: 'button', text: 'Upload' },
        { xtype: 'button', text: 'Download' },
        { xtype: 'button', text: 'Open' },
        { xtype: 'button', text: 'Copy URL' },
        { xtype: 'button', text: 'Delete' },
        { xtype: 'button', text: 'Refresh' }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});