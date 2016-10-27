//http://jsfiddle.net/prajavk/YhuWT/

Ext.define('AzureStorageExplorer.config.Runtime',{
    singleton : true,

    config : {
        myLastCustomer : 0   // initialize to 0
    },

    statics	: {
	},

    StorageAccounts : {

    },

    getAllStorageAccounts: function() {
        return Object.keys(this.StorageAccounts);
    },

    getStorageAccountKey: function(account) {
        if (this.isStorageAccountExist(account))
            return this.StorageAccounts[account].key;
        return null;
    },
    isStorageAccountExist: function(account) {
        if (this.StorageAccounts[account] == undefined || this.StorageAccounts[account] == null)
            return false;
        return true;
    },

    constructor : function(config){
        this.initConfig(config);
        console.log('Azure Storage Explorer Runtime Init');
    }
});