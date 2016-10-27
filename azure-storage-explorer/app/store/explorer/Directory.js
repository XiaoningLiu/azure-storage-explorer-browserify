Ext.define('AzureStorageExplorer.store.explorer.Directory', {
    extend: 'Ext.data.TreeStore',

    alias: 'store.explorerdirectory',

    fields: ['text', 'duration', 'isLayover'],
    root: {
        expanded: true,
        text: 'Azure Storage Accounts',
        type: 'root',
        children: [{
            text: 'Account - lxntest',
            type: 'account',
            account: 'lxntest',
            leaf: false,
            children: [{
                text: 'Blob Containers',
                type: 'blob-entry',
                account: 'lxntest',
                children: [{
                    account: 'lxntest',
                    text: 'mycontainer',
                    type: 'container',
                    leaf: true
                }, {
                    account: 'lxntest',
                    text: 'mycontainer2',
                    type: 'container',
                    leaf: true
                }],    
                leaf: false
            }, {
                text: 'File Shares',
                type: 'file-entry',                
                account: 'lxntest',
                isLayover: false,
                leaf: false
            }, {
                text: 'Queues',
                account: 'lxntest',
                type: 'queue-entry',              
                leaf: false
            }, {
                text: 'Tables',
                account: 'lxntest',
                type: 'table-entry',              
                leaf: false
            }]
        }]
    }
            
});
