Ext.define('AzureStorageExplorer.store.explorer.Directory', {
    extend: 'Ext.data.TreeStore',

    alias: 'store.explorerdirectory',

    fields: ['text', 'duration', 'isLayover'],
    root: {
        expanded: true,
        text: 'Azure Storage Accounts',
        type: 'account-root',
            children: [{
                text: 'Account - lxntest',
                type: 'account',                
                leaf: false,
                children: [{
                    text: 'Blob Containers',
                    type: 'blob-entry',
                    children: [{
                        text: 'mycontainer',
                        type: 'container',
                        leaf: true
                    }, {
                        text: 'mycontainer2',
                        type: 'container',
                        leaf: true
                    }],    
                    leaf: false
                }, {
                    text: 'File Shares',
                    type: 'file-entry',                
                    isLayover: true,
                    leaf: false
                }, {
                    text: 'Queues',
                    type: 'queue-entry',              
                    leaf: false
                }, {
                    text: 'Tables',
                    type: 'table-entry',              
                    leaf: false
                }]
            }, {
                text: 'Account - dmportal',
                type: 'account',                
                isLayover: true,
                leaf: false
            }, {
                text: 'Account - yatrt',
                type: 'account',                
                leaf: false
            }]
    }
            
});
