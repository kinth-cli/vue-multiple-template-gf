<template>
	<div class="header">
		<div class="top">
			<h1>公司经营管理系统</h1>
			<span style="cursor:pointer;" @click="logout"><i class="next"></i>退出</span>
			<span><i class="admin"></i>{{sysUserName}}</span>
		</div>
	</div>
</template>

<script>
export default{
	name:'Hearder',
	data () {
		return {
			admin:""
		}
	},
	methods:{
		//推出登录
		logout: function () {
			var _this = this;
			this.$confirm('确认退出吗?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				cancelButtonClass: "btn-custom-cancel",
				type: 'warning'
			}).then(() => {
				sessionStorage.removeItem('accessToken');
				_this.$router.push('/login');
			}).catch(() => {

			});
		},
	},
	computed: {
		sysUserName () {
			return this.$store.state.sysUserName || sessionStorage.sysUserName
		}
	}

}
</script>

<style>
.header{background-image:url(../../../static/images/nav.png); background-repeat: no-repeat; background-size: 100% 100%; height: 64px;}
.header .top{line-height:64px; padding:0 40px;}
.header h1{ color: #fff; font-size:20px; float:left; margin: 0; line-height:64px;}
.header span{ float:right; margin-left:60px; color:#fff; font-size: 14px;}
.header i{ padding-left: 25px; height: 20px; display:inline-block; background-size: auto 100%; background-repeat: no-repeat; vertical-align: middle;}
.header .admin{ background-image:url(../../../static/images/admin.png);}
.header .next{ background-image:url(../../../static/images/next.png);}
.header .btn-custom-cancel{float: right !important; margin-left: 10px;}
</style>