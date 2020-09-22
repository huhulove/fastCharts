<template>
	<div class="set">
		<div class="set-button">
			<el-button type="primary" @click="paramsDrawerChange">
				<i class="el-icon-s-fold"></i>
				设置
			</el-button>
		</div>
		<Params :visible.sync="isShowParamsDrawer" v-bind="$attrs" v-on="$listeners"></Params>
	</div>
</template>

<script>
import Params from '@/components/Params.vue';

export default {
	inheritAttrs: false,
	name: 'layout',
	components: {
		Params
	},
	data() {
		return {
			isShowParamsDrawer: false
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
