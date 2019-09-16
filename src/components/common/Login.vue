<template>
	<div class="login">
		<div class="conter">
			<div class="info">
				<div class="title">公司经营管理系统</div>
				<el-form ref="form" :model="form" label-width="0px" @keyup.native.enter="onSubmit">
					<el-form-item>云助理账号</el-form-item>
					<el-form-item>
						<el-input v-model="form.account" placeholder="账号" >
							<i slot="prefix" class="name"></i>
						</el-input>
					</el-form-item>
					<el-form-item>云助理密码</el-form-item>
					<el-form-item>
						<el-input type="password" v-model="form.passWord" placeholder="密码">
							 <i slot="prefix" class="password"></i>
						</el-input>
					</el-form-item>
					<el-form-item>
		    			<el-button class="button" type="success" @click="onSubmit" :disabled="load" :loading="load">登录</el-button>
		    		</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data () {
		return {
			form: {
				account:"",
				passWord:""
			},
			load:false
		}
	},
	methods:{
		onSubmit() {
	        if(this.form.account==""||this.form.passWord==""){
	        	this.$message({
						message : '账号或密码为空！',
						type : 'error'
				});
				return;
	        }
	        var _this=this;
	        this.load=true;
			this.$ajax.post({
			    url:'/admin/sysUserInfo/loginByPassword',
			    data: this.form,
			    cache:true,
			    success:function(data){
			    	_this.load=false;
			    	if(data.code==0){
			    		sessionStorage.setItem('accessToken', data.item.accessToken);
			    		let sysUserName=data.item.name+"("+data.item.account+")"
			    		sessionStorage.setItem('sysUserName',sysUserName);
			    		sessionStorage.setItem('roleId', data.item.roleId);
			    		sessionStorage.setItem('roleList', data.item.roleId);
			    		//_this.$store.state.sysUserName=data.item.account;
			    		_this.$store.commit('newAuthor',sysUserName)
			    		_this.$store.commit('roleId',data.item.roleId)
	        			
	        			
	        			/*if(data.item.roleId==7||data.item.roleId==11){
	        				_this.$router.push({name:'ProjectManage'});
	        			}else if(data.item.roleId==14||data.item.roleId==15){
	        				_this.$router.push({name:'Foundation_sj'});
	        			}else if(data.item.roleId==13||data.item.roleId==16){
	        				_this.$router.push({name:'Foundation_branch'});
	        			}else if(data.item.roleId==4||data.item.roleId==5||data.item.roleId==6||data.item.roleId==8||data.item.roleId==9||data.item.roleId==10||data.item.roleId==12){
	        				_this.$router.push({name:'Foundation'});
	        			}else{
	        				_this.$router.push({name:'ProjectList'});
	        			}*/
	        			_this.$router.push({name:'PayRun'});
	        			
	        			
			    	}else{
			    		_this.$message({
						message : data.message,
						type : 'error'
						});
			    	}
			    },
			    error: function(data){
			    	_this.load=false;
			    	_this.$message.error("服务器出错！请联系开发人员！");
			    }
			});
	    }
	}
}
</script>

<style>
.login{ position:fixed; width: 100%; height: 100%; background-image:url('~@/../assets/admin/images/login.png'); background-repeat: no-repeat; background-size:100% 100%; top: 0; left: 0;}
.login .conter{ width: 100%; position: relative; height: 100%;}
.login .info{ width: 500px; padding:30px; background: #fff; border-radius: 5px; position: absolute; top: 50%; left: 50%; margin:-169px 0 0 -250px;}
.login .title{ color: #1b71f6; font-size: 24px; line-height: 60px; font-weight: bold;}
.login .name{background-image:url('~@/../assets/admin/images/name.png');; width: 20px; height: 20px; display: block; margin-top: 8px; background-size:100% auto; background-repeat: no-repeat; vertical-align: middle;}
.login .password{background-image:url('~@/../assets/admin/images/password.png'); width: 20px; height: 20px; display: block; margin-top: 8px; background-size:100% auto; background-repeat: no-repeat; vertical-align: middle;}
.login .el-form-item{ margin-bottom: 0; text-align: left;}
.login .el-form-item__content{line-height: 30px; color: #478af1;}
.login .el-input__inner{ height: 35px; line-height: 35px; background: #eef4fa; border-color: #fff; font-size: 12px; margin-bottom: 15px;}
.login .el-input__inner:focus{ border-color: #1b71f6;}
.login .button{ width: 100%; background:#1b71f6; color: #fff; border:none; margin-top: 20px; box-shadow: 0 5px 13px #1b71f6;}
</style>