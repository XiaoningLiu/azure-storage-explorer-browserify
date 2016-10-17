/**
 * This view is an example list of people.
 */
Ext.define('AzureStorageExplorer.view.board.Console', {
    extend: 'Ext.panel.Panel',
    xtype: 'boardconsole',

    requires: [
        'AzureStorageExplorer.store.Personnel'
    ],

    title: 'Console',

    html: 'Activity Logs...'
});
