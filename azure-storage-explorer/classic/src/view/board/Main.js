/**
 * This view is an example list of people.
 */
Ext.define('AzureStorageExplorer.view.board.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'boardmain',

    requires: [
        'AzureStorageExplorer.view.board.Grid',
        'AzureStorageExplorer.view.board.Console'
    ],

    title: 'Main',
    header: false,
    border: false,
    layout: {
        type: 'border',
        padding: 0
    },

    items: [{
        region : 'center',
        collapsible: false,
        xtype: 'boardgrid'
    },{
        region : 'south',
        collapsible: true,
        xtype: 'boardconsole',
        height: 200,
        minHeight: 75,
        maxHeight: 300,
    }]
});
