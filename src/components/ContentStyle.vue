<template>
	<div>
		<el-divider content-position="left">样式</el-divider>
		<el-form :model="form" class="form" label-width="100px">
			<el-form-item label="位置">
				<el-radio-group v-model="form['text-align']">
					<el-radio label="left">居左</el-radio>
					<el-radio label="center">居中</el-radio>
					<el-radio label="right">居右</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="大小">
				<el-tooltip class="item" effect="dark" content="例如：10px" placement="top">
					<el-input class="input-item" v-model="form['font-size']" placeholder="请输入文本大小"></el-input>
				</el-tooltip>
			</el-form-item>
			<el-form-item label="颜色">
				<el-color-picker v-model="form.color"></el-color-picker>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	props: ['contentStyle_p'],
	data() {
		return {
			form: {
				color: '#409EFF',
				'text-align': 'center',
				'font-size': null
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
	},
	created() {
		// 回绑数据
		if (this.contentStyle_p) {
			this.form = { ...this.contentStyle_p };
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
