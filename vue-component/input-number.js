function isValueNumber(value){
	return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value+'');
};


Vue.component('input-number',{
	template:'\
	<div class="input-number"> \
			<input \
				type="text" \
				:value="currentValue" \
				@change="handleChange" \
				@focus="kbSupport" \
				@keydown.38="kbup" \
				@keydown.40="kbdown"> \
			<button \
				@click="handleDown" \
				:disable="currentValue <= min "> - </button> \
			<button \
				@click="handleUp" \
				:disable="currentValue >= max "> + </button> \
	</div>',
	props:{
		max:{
			type:Number,
			default:Infinity
		},
		min:{
			type:Number,
			default:-Infinity
		},
		value:{
			type:Number,
			default:0
		},
		step:{
			type:Number,
			default:2
		}
	},
		data:function(){
		return {
			currentValue:this.value,
			kbSupport_flag:false,
			step:this.step
		}
	},
	watch:{
		currentValue:function(val){
			this.$emit('input',val);
			this.$emit('on-change',val);
		},
		value:function(val){
			this.updateValue(val);
		}
	},
	methods:{

		handleDown:function(){
			if(this.currentValue <= this.min) return;
			this.currentValue -= this.step;
		},
		handleUp:function(){
			if(this.currentValue >= this.max) return;
			this.currentValue += this.step;
		},
		updateValue:function(val){
			if(val>this.max)  val = this.max;
			if(val<this.min)  val = this.min;
			this.currentValue = val;
		},

		kbSupport:function() {
			kbSupport_flag = true;
		},
		kbdown:function(){
			if(kbSupport_flag)  this.handleDown();
		},
		kbup:function(){
			if(kbSupport_flag)  this.handleUp();
		},

		handleChange:function(){
			var val = event.target.value.trim();
			var max = this.max;
			var min = this.min;

			if (isValueNumber(val)){
				val = Number(val);
				this.currentValue = val;
				if(val>max) {
					this.currentValue = max;
				} else if ( val < min ) {
					this.currentValue = min;
				}
			}
		}
	},
	mounted:function(){
		this.updateValue(this.value);
	}	
});