/**
 * 
 */
Ext.define('AzureStorageExplorer.view.explorer.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'explorermain',

    requires: [
        'AzureStorageExplorer.view.explorer.Directory',
        'AzureStorageExplorer.view.explorer.Action'
    ],

    title: 'Explorer',
    header: false,
    border: false,
    layout: {
        type: 'border',
        padding: 0
    },

    items: [{
        region : 'center',
        collapsible: false,
        xtype: 'explorerdirectory'
    },{
        region : 'south',
        collapsible: true,
        xtype: 'exploreraction',
        height: 200,
        minHeight: 75,
        maxHeight: 300,
    }]
});
