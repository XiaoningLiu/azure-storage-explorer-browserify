//http://jsfiddle.net/prajavk/YhuWT/

Ext.define('AzureStorageExplorer.config.Runtime',{
    singleton : true,
    config : {
        myLastCustomer : 0   // initialize to 0
    },
    statics	: {
		user: 'Raja',
		count: 0,
        getCount:function () {
            return this.count;
        },
        increment:function () {
            this.count++;
        }

	},
    constructor : function(config){
        this.initConfig(config);
        var statics = this.statics();
        console.log('USER:'+statics.user);
    }
});