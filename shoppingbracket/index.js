// vue abstract example
var app = new Vue({
	el:"#app",
	data:{
		list:[
		{ 	id:1,
			name:'iphone8',
			price:6188,
			count:1


		},
		{	id:2,
			name:'ipad pro',
			price:5888,
			count:1

		},
		{	id:3,
			name:'macbook pro',
			price:2199,
			count:1

		}
		]

	},
	computed:{
		totalPrice:function(){
			var total = 0;
			for (var i=0;i<this.list.length;i++){
				var item = this.list[i];
				total += item.price * item.count;
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
	}
	},
	methods:{
		handleReduce:function(){
			if(this.list[index].count==1) return;
			this.list[index].count--;
		},
		handleAdd:function(){
			this.list[index].count++;
		},
		handleRemove:function(){
			this.list.splice(index,1);
		}

	}
});