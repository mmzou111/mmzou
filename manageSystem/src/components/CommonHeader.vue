<template>
	<header>
		<div class="l-content">
			<el-button @click='handleMenu' plain icon="el-icon-menu" size='mini'></el-button>
			<!-- <h3 style= "color: #fff;">首页</h3> -->
			<el-breadcrumb separator="/">
				<el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="r-content">
			<el-dropdown trigger="click" size='mini'>
				<span>
					<img class="user" :src="userImg">
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>个人中心</el-dropdown-item>
					<el-dropdown-item @click.native='logOut'>退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</header>
</template>

<script>
	// 注意vuex要有引号
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'CommonHeader',
		data() {
			return {
				userImg: require('../assets/images/user.png')
			}
		},
		methods: {
			handleMenu() {
				this.$store.commit('collapseMenu')
			},
			logOut(){
				this.$store.commit('clearToken')
				this.$store.commit('clearMenu')
				this.$router.push('/login')				
			}
		},
		computed: {
			...mapState({
				// 意思是将store里面的state里面的tabsList属性映射到computed属性中的tags中
				tags: state => state.tab.tabsList
			})
		}
	}
</script>

<style lang="less" scoped>
    .el-breadcrumb ::v-deep .el-breadcrumb__inner {
        color: #d9bb95 !important;
    }
	header {
		display: flex;
		height: 100%;
		justify-content: space-between;
		align-items: center;
	}

	.l-content {
		display: flex;
		// 上下居中
		align-items: center;

		.el-button {
			margin-right: 20px;
		}
	}

	.r-content {
		.user {
			width: 40px;
			height: 40px;
			border-radius: 50%;
		}
	}
</style>
