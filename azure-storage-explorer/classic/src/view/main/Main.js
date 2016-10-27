/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AzureStorageExplorer.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',

        'AzureStorageExplorer.view.main.MainController',
        'AzureStorageExplorer.view.main.MainModel',

        'AzureStorageExplorer.view.explorer.Main',
        'AzureStorageExplorer.view.board.Main'
    ],

    controller: 'main',
    viewModel: 'main',
    border: false,
    header: {
        // height: 40,
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        }
    },
    layout: {
        type: 'border',
        padding: 0,
        align: 'stretch'
    },
    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 0
    },
    items: [{
        region : 'west',
        collapsible: true,
        minWidth: 200,
        maxWidth: 400,
        width: 300,
        xtype: 'explorermain'
    },{
        region : 'center',
        collapsible: false,
        xtype: 'boardmain'
    }]
});
