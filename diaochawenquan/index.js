Vue.component('button-reset',{
	template:' \
	<button  \
	@:click="reset"> \
	<slot></slot><button>',
	data:{

		function()
		return {currentView:'1'};
	},
    methods:{
    	reset:function(){
    		this.currentView = '1';
    	}
    }
}

)
