<template>
	<div class="set">
		<Layout :topHeight_p="topHeight" :bottomHeight_p="bottomHeight"></Layout>
		<div class="set-button">
			<el-button type="primary" @click="paramsDrawerChange">
				<i class="el-icon-s-fold"></i>
				设置
			</el-button>
		</div>
		<Params :visible.sync="isShowParamsDrawer" :topHeight_p.sync="topHeight" :bottomHeight_p.sync="bottomHeight"></Params>
	</div>
</template>

<script>
import Layout from '@/components/Layout.vue';
import Params from '@/components/Params.vue';

export default {
	name: 'layout',
	components: {
		Layout,
		Params
	},
	data() {
		return {
			isShowParamsDrawer: false,
			topHeight: null,
			bottomHeight: null
		};
	},
	methods: {
		paramsDrawerChange() {
			this.isShowParamsDrawer = !this.isShowParamsDrawer;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.set-button {
	position: absolute;
	top: 0;
	right: 10px;
	width: 80px;
	height: 100px;
}
</style>
