<template>
	<div class="footer">
		<div v-for='(item,index) of items' :class='[item.cls,{on:index === idx}]' @click="$router.push(item.push)" :key="index">
			<img :src="index===idx?item.iconSelect:item.icon">
			<p :class="['colorChange',{on:index===idx}]" >{{item.name}}</p>
		</div>
 
	</div>
</template>
 
<script type="text/javascript">
 
export default{
props:['idx'],
data(){
    return {
        items:[{
            cls:"home",
            name:"首页",
            push:"/home",
            icon:"../static/home.png",
            iconSelect:"../static/home_select.png"
        },
        {
            cls:"shares",
            name:"股票",
            push:"/shares",
            icon:"../static/home.png",
            iconSelect:"../static/home_select.png"
        },
        {
            cla:"community",
            name:"社区",
            push:"/community",
            icon:"../static/home.png",
            iconSelect:"../static/home_select.png"
        },
        {
            cla:"mine",
            name:"我的",
            push:"/mine",
            icon:"../static/home.png",
            iconSelect:"../static/home_select.png"
        }]
    }
}
} 
 
</script>

<style scoped>
.footer{
	display: flex;
	position: absolute;
	left: 0;
	bottom: 0;
	box-sizing: border-box;
	height: 6rem;
	background: #909090;
	width: 100%;}
	div{
		flex: 1;
		font-size: 30px;
	}
	div img{
		width: 30px;
		height: 30px;
	}
	div p{
		color:black;
	}
	.on{
		color: red;
	}
</style>