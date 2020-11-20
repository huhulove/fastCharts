<template>
	<div>
		<el-divider content-position="left">样式</el-divider>
		<el-form :model="form" class="form" label-width="100px">
			<el-form-item label="颜色">
				<el-color-picker v-model="form.color"></el-color-picker>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				color: '#409EFF'
			}
		};
	},
	watch: {
		form: {
			handler(newValue) {
				this.$emit('update:contentStyle_p', newValue);
			},
			deep: true
		}
	}
};
</script>

<style lang="less" scoped>
.form {
	min-width: 350px;
	.select-item,
	.input-item {
		width: 90%;
	}
}
</style>
