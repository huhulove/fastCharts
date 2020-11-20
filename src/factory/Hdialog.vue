<template>
	<el-dialog title="设置顶部组件" v-bind="$attrs" v-on="$listeners">
		<el-tabs v-model="activeTab">
			<el-tab-pane label="基本属性" name="first">
				<ComponentStyle v-bind="$attrs" v-on="$listeners"></ComponentStyle>
			</el-tab-pane>
			<el-tab-pane label="组件内容" name="second">
				<ComponentContent v-bind="$attrs" v-on="$listeners"></ComponentContent>
			</el-tab-pane>
		</el-tabs>
	</el-dialog>
</template>

<script>
import ComponentContent from './ComponentContent';
import ComponentStyle from './ComponentStyle';

export default {
	inheritAttrs: false,
	components: {
		ComponentContent,
		ComponentStyle
	},
	data() {
		return {
			activeTab: 'first'
		};
	}
};
</script>

<style lang="less" scoped>
/deep/ .el-dialog__body {
	padding-top: 0;
	padding-bottom: 0;
}
</style>
