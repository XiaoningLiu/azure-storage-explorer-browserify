Ext.define('AzureStorageExplorer.view.explorer.ExplorerController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.explorer',

    displayLoadingForNode: function(node){
        node.removeAll();
        node.appendChild({
            text : 'loading...',
            leaf : true,
            type : 'loading'
        })
    },

    updateBlobEntryNodeChildren: function(node){
        this.displayLoadingForNode(node);

        var data = node.getData();
        var account = data.account;

        var runTime = AzureStorageExplorer.config.Runtime;
        var accountKey = runTime.getStorageAccountKey(account);
        if (accountKey == null)
        {
            console.error("Couldn't get account key for account " + account);
            node.removeAll();            
        }

        var blobService = AzureStorage.createBlobService(account, accountKey);
        blobService.listContainersSegmented(null, function(err, result) {
            if (err) {
                console.log("Couldn't list containers");
                console.error(err);
                node.removeAll();
            } else {
                console.log('Successfully listed containers');
                node.removeAll();
                for (var item in result.entries)
                {
                    var itemContent = result.entries[item];
                    var newNode = {
                        text : itemContent.name,
                        leaf : true,
                        account : account,
                        type : 'container',
                        data : itemContent
                    };
                    node.appendChild(newNode);
                }
            }
        });
    },

    updateFileEntryNodeChildren: function(node){
        this.displayLoadingForNode(node);

        var data = node.getData();
        var account = data.account;

        var runTime = AzureStorageExplorer.config.Runtime;
        var accountKey = runTime.getStorageAccountKey(account);
        if (accountKey == null)
        {
            console.error("Couldn't get account key for account " + account);
            node.removeAll();            
        }

        var fileService = AzureStorage.createFileService(account, accountKey);
        fileService.listSharesSegmented(null, function(err, result) {
            if (err) {
                console.log("Couldn't list shares");
                console.error(err);
                node.removeAll();
            } else {
                console.log('Successfully listed shares');
                node.removeAll();
                for (var item in result.entries)
                {
                    var itemContent = result.entries[item];
                    var newNode = {
                        text : itemContent.name,
                        leaf : true,
                        account : account,
                        type : 'share',
                        data : itemContent
                    };
                    node.appendChild(newNode);
                }
            }
        });
    },

    updateQueueEntryNodeChildren: function(node){
        this.displayLoadingForNode(node);

        var data = node.getData();
        var account = data.account;

        var runTime = AzureStorageExplorer.config.Runtime;
        var accountKey = runTime.getStorageAccountKey(account);
        if (accountKey == null)
        {
            console.error("Couldn't get account key for account " + account);
            node.removeAll();            
        }

        var queueService = AzureStorage.createQueueService(account, accountKey);
        queueService.listQueuesSegmented(null, function(err, result) {
            if (err) {
                console.log("Couldn't list queues");
                console.error(err);
                node.removeAll();
            } else {
                console.log('Successfully listed queues');
                node.removeAll();
                for (var item in result.entries)
                {
                    var itemContent = result.entries[item];
                    var newNode = {
                        text : itemContent.name,
                        leaf : true,
                        account : account,
                        type : 'queue',
                        data : itemContent
                    };
                    node.appendChild(newNode);
                }
            }
        });
    },

    updateTableEntryNodeChildren: function(node){
        this.displayLoadingForNode(node);

        var data = node.getData();
        var account = data.account;

        var runTime = AzureStorageExplorer.config.Runtime;
        var accountKey = runTime.getStorageAccountKey(account);
        if (accountKey == null)
        {
            console.error("Couldn't get account key for account " + account);
            node.removeAll();            
        }

        var tableService = AzureStorage.createTableService(account, accountKey);
        tableService.listTablesSegmented(null, function(err, result) {
            if (err) {
                console.log("Couldn't list tables");
                console.error(err);
                node.removeAll();
            } else {
                console.log('Successfully listed tables');
                node.removeAll();
                for (var item in result.entries)
                {
                    var itemContent = result.entries[item];
                    var newNode = {
                        text : itemContent,
                        leaf : true,
                        account : account,
                        type : 'table',
                        data : itemContent
                    };
                    node.appendChild(newNode);
                }
            }
        });
    },

    addAccountNode: function(rootNode, account) {
        var newNode = {
            text : 'Account - ' + account,
            leaf : false,
            account : account,
            type : 'account',
            data : account,
            children: [{
                text: 'Blob Containers',
                type: 'blob-entry',
                account: account,
                leaf: false
            }, {
                text: 'File Shares',
                type: 'file-entry',                
                account: account,
                isLayover: false,
                leaf: false
            }, {
                text: 'Queues',
                account: account,
                type: 'queue-entry',              
                leaf: false
            }, {
                text: 'Tables',
                account: account,
                type: 'table-entry',              
                leaf: false
            }]
        };
        rootNode.appendChild(newNode);
    },

    refreshAccounts: function(rootNode) {
        rootNode.removeAll();
        var accounts = AzureStorageExplorer.config.Runtime.getAllStorageAccounts();
        for (var i in accounts)
        {
            var account = accounts[i];
            this.addAccountNode(rootNode, account);
        }
    },

    onBeforeExpand: function (s, r) {
        var data = s.getData();
        switch (data.type)
        {
            case 'blob-entry' :
                this.updateBlobEntryNodeChildren(s);
                break;
            case 'file-entry' :
                this.updateFileEntryNodeChildren(s);
                break;
            case 'queue-entry' :
                this.updateQueueEntryNodeChildren(s);
                break;
            case 'table-entry' :
                this.updateTableEntryNodeChildren(s);
                break;
            default:
                console.log("Expand " + data.type);
        } 
    },

    onItemClick : function(s,r) {
        // alert(r.data.text);
    },

    onAdded : function(s , container , pos , eOpts)
    {
        console.log("Init directory");
        this.refreshAccounts(s.getRootNode());
    }
});
