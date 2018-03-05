<script type="text/javascript">
var simulation = function(){
	var stimes = 10000;
	var q = new Array(1,0,0,0);
	var chouqu=[0,0,0,0];
	var j=0,k=0;
	flag=0;flag1=0;flag2=0;
	//模拟100次
	while (k<100) {
		// statement
		for (i=0;i<4;i++){
		chouqu[i] = q.splice(Math.floor( Math.random(1)*(4-i)),1);
		console.log(chouqu[i]);}
	//chouqu为一个四位数组，其中1的位置代表中奖的位置；
		if (chouqu[0]&&!chouqu[1])
		flag++;
		else if(!chouqu[0]&&!chouqu[1])
		flag1++;
	}
	console.log('100次中奖中策略1中奖次数:'+flag;);
	console.log('100次中奖中策略2中奖次数:'+flag1);
}
</script>