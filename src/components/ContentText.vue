<template>
	<div>
		<el-divider content-position="left">内容</el-divider>
		<el-form :model="form" class="form" label-width="100px">
			<el-form-item label="文本">
				<el-input class="input-item" v-model="form.text" placeholder="请输入文本"></el-input>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	props: ['contentText_p'],
	data() {
		return {
			form: {
				text: null
			}
		};
	},
	watch: {
		form: {
			handler(newValue) {
				this.$emit('update:contentText_p', newValue.text);
			},
			deep: true
		}
	},
	created() {
		// 回绑数据
		if (this.contentText_p) {
			this.form = {
				text: this.contentText_p
			};
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
