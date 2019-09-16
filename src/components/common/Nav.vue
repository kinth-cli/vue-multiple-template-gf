<template>
	<div class="tac" v-bind:class="{fullScreen: fullScreen,notFullScreen: notFullScreen}" >
	<el-row>
		<el-menu :default-active="$route.name" class="el-menu-vertical-demo" >
			<!--<router-link :to="{name:'ProjectManage'}" v-if="roleId==7||roleId==11"><el-menu-item index="ProjectManage">
				<i class="el-icon-menu"></i>
				<span slot="title">项目管理</span>
			</el-menu-item></router-link>-->
			<!--v-if="roleId==4||roleId==5||roleId==6||roleId==7||roleId==8||roleId==10||roleId==11||roleId==12||roleId==14||roleId==15||roleId==16"-->
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-menu"></i>
					<span>基础达成</span>
				</template>
				<el-menu-item-group><!-- v-if="roleId==4||roleId==5||roleId==6||roleId==7||roleId==8||roleId==10||roleId==11||roleId==12"-->
					<router-link :to="{name:'Foundation'}"><el-menu-item index="Foundation"><i class="el-icon-document"></i>保费达成</el-menu-item></router-link>
					<!--<router-link :to="{name:'Foundation_branch'}" v-if="roleId==16"><el-menu-item index="Foundation_branch"><i class="el-icon-document"></i>保费达成</el-menu-item></router-link>
					<router-link :to="{name:'Foundation_sj'}" v-if="roleId==14||roleId==15"><el-menu-item index="Foundation_sj"><i class="el-icon-document"></i>保费达成</el-menu-item></router-link>
					
					<router-link :to="{name:'ProjectList'}" v-if="roleId!=9 && roleId!=10 && roleId!=17"><el-menu-item index="ProjectList"><i class="el-icon-document"></i>规划达成</el-menu-item></router-link>-->
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
				<i class="el-icon-menu"></i>
				<span slot="title">预算管理</span>
				</template>
				<el-menu-item-group>
					<router-link :to="{name:'Budget'}" v-if="roleId!=10 && roleId!=15 && roleId!=17"><el-menu-item index="Budget"><i class="el-icon-printer"></i>预算执行情况</el-menu-item></router-link>
					<!--<router-link :to="{name:'PremiumRate'}" v-if="roleId==7"><el-menu-item index="PremiumRate"><i class="el-icon-printer"></i>基础费率</el-menu-item></router-link>-->
					<!--无-->
					<!--<router-link :to="{name:'CostEx'}"><el-menu-item index="CostEx"><i class="el-icon-printer"></i>费用开支</el-menu-item></router-link>
					<router-link :to="{name:'ImplementSituation'}"><el-menu-item index="ImplementSituation"><i class="el-icon-printer"></i>执行情况</el-menu-item></router-link>
					<router-link :to="{name:'SurplusCount'}"><el-menu-item index="SurplusCount"><i class="el-icon-printer"></i>结余计算</el-menu-item></router-link>
					-->
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="3" v-if="roleId==7">
				<template slot="title">
				<i class="el-icon-menu"></i>
				<span slot="title">架构管理</span>
				</template>
				<el-menu-item-group>
					<router-link :to="{name:'WorkplaceWl'}"><el-menu-item index="WorkplaceWl"><i class="el-icon-printer"></i>物理职场管理</el-menu-item></router-link>
					<router-link :to="{name:'WorkplaceAMIS'}"><el-menu-item index="WorkplaceAMIS"><i class="el-icon-printer"></i>AMIS职场管理</el-menu-item></router-link>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="4">
				<template slot="title">
				<i class="el-icon-menu"></i>
				<span slot="title">开支管理</span>
				</template>
				<el-menu-item-group>
					<router-link :to="{name:'PayRun'}"><el-menu-item index="PayRun">
						<i class="el-icon-menu"></i>
						<span slot="title">开支管理</span>
					</el-menu-item></router-link>
					<router-link :to="{name:'PayFinish'}"><el-menu-item index="PayFinish">
						<i class="el-icon-menu"></i>
						<span slot="title">开支完成</span>
					</el-menu-item></router-link>
					<router-link :to="{name:'ShareFructify'}"><el-menu-item index="ShareFructify">
						<i class="el-icon-menu"></i>
						<span slot="title">分摊结果</span>
					</el-menu-item></router-link>
					<router-link :to="{name:'ShareFormwork'}" v-if="roleId==18">
						<el-menu-item index="ShareFormwork">
							<i class="el-icon-menu"></i>
							<span slot="title">常用分摊管理</span>
						</el-menu-item>
					</router-link>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="5">
				<template slot="title">
				<i class="el-icon-menu"></i>
				<span slot="title">可用费用</span>
				</template>
				<el-menu-item-group>
					<router-link :to="{name:'FoundationBase'}"><el-menu-item index="FoundationBase"><i class="el-icon-document"></i>基础费用</el-menu-item></router-link>
				  <template v-if="$utils.authRoleList('7,21,20')">
				    <router-link :to="{name:'FoundationAdjust'}"><el-menu-item index="FoundationAdjust"><i class="el-icon-printer"></i>调整费用</el-menu-item></router-link>
            <router-link :to="{name:'FoundFructify'}"><el-menu-item index="FoundFructify"><i class="el-icon-printer"></i>调整分摊结果</el-menu-item></router-link>
				  </template>

					<!--<router-link :to="{name:'FoundationCost'}" v-if="roleId!=17"><el-menu-item index="FoundationCost"><i class="el-icon-printer"></i>基础费用</el-menu-item></router-link>-->
				</el-menu-item-group>
			</el-submenu>
			<!--无-->
			<!--<router-link :to="{name:'ProjectExpenditure'}"><el-menu-item index="ProjectExpenditure">
				<i class="el-icon-menu"></i>
				<span slot="title">开支计划</span>
			</el-menu-item></router-link>-->
	      <!--<el-menu-item index="2">
	        <i class="el-icon-menu"></i>
	        <span slot="title">方案管理</span>
	      </el-menu-item>
	      <el-menu-item index="3">
	        <i class="el-icon-menu"></i>
	        <span slot="title">成本分析</span>
	      </el-menu-item>
	      <el-menu-item index="Admin">
	        <i class="el-icon-menu"></i>
	        <span slot="title">用户管理</span>
	      </el-menu-item>-->
			<router-link :to="{name:'Attachment'}"><el-menu-item index="Attachment">
				<i class="el-icon-menu"></i>
				<span slot="title">模板列表</span>
			</el-menu-item></router-link>
		</el-menu>
		{{sysUserName}}
		<a class="changeWidth" @click="ifFull" v-bind:class="{fullSign:fullScreen}"></a>
	</el-row>
</div>
</template>

<script>
export default{
	name:'Nav',
	data () {
		return {
			//roleId:"",
			fullScreen: false,
			notFullScreen: false,
		}
	},
	methods:{
		ifFull(){
			if(this.fullScreen !== false || this.notFullScreen !== false){
  				this.notFullScreen = ! this.notFullScreen
  			}
			this.fullScreen = !  this.fullScreen
	  		//this.$store.commit('changeSidebarWidth',Math.random())
		}
	},
	mounted:function(){
		/*if(this.$route.name=='Login'){
			this.roleId=""
			return
		}
		var cookie=sessionStorage.roleId;
		if(cookie){
			this.roleId=cookie;
		}*/
	},	
	computed: {
		/*sysUserName () {
			this.roleId=this.$store.state.roleId;
		}*/
		roleId(){
			return this.$store.state.roleId || sessionStorage.roleId
		}
	}

}
</script>

<style>
	.tac{width: 16.1rem; height:100%; box-sizing: border-box;position: relative;}
	.tac ul{ margin-bottom: 0 !important;}
	.tac .el-row{ margin-bottom: 0 !important; height:100%}
	.tac .el-menu-item-group__title{ padding: 0 !important;}
	.tac .el-menu{ height: 100%; overflow: hidden;}
	.fullScreen{animation: bigWidth .5s;animation-fill-mode: forwards }
	.notFullScreen{animation: smallWidth .5s;animation-fill-mode: forwards}
	@keyframes bigWidth{
		from {width: 16.1rem;}
		to {width: 0rem;}
	}
	@keyframes smallWidth{
		from {width: 0rem;}
		to {width: 16.1rem;}
	}
	.changeWidth{width: 0.8rem;background: #2473e9;height: 10rem;display: block;position: absolute;
		right: 0;top:30%;cursor: pointer;text-align:center;font-size: 12px;}
	.changeWidth:after{width:0; height:0;border-width:0.4rem;border-style:solid;border-color:transparent #2473e9 #2473e9 transparent ;
        position: absolute;top:-0.8rem;content:'';left:0}
	.changeWidth:before{
		width:0; height:0;border-width:0.4rem;border-style:solid;border-color:#2473e9 #2473e9  transparent transparent ;
        position: absolute; bottom:-0.8rem;content:'';left:0}
	.fullSign:after{border-color: transparent transparent #2473e9 #2473e9;}
	.fullSign:before{border-color: #2473e9 transparent transparent #2473e9;}
	.fullSign{right:-0.8rem}
</style>