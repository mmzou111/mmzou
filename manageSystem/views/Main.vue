<template>
	<el-container style="height: 100%;">
	  <el-aside width="auto">
		 <!-- 驼峰命名改成加横线 -->
		  <Common-Aside></Common-Aside>
	  </el-aside>
	  <el-container>
	    <el-header>
			<Common-Header></Common-Header>
		</el-header>
		<CommonTag></CommonTag>
	    <el-main>
			<router-view></router-view>
		</el-main>
	  </el-container>
	</el-container>
</template>

<script>
import CommonAside from '../src/components/CommonAside.vue'
import CommonHeader from '../src/components/CommonHeader.vue'
import CommonTag from '../src/components/CommonTag.vue'
export default{
	name: 'Home',
	components:{
		CommonAside,
		CommonHeader,
		CommonTag
	},
	data(){
		return{}
	}
}

</script>

<style lang="less" scoped>
.el-header{
	background-color: #333;
}
.el-main{
	padding-top: 0;
}
</style>