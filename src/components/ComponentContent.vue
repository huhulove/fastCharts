<template>
	<el-form :model="form" class="form" label-width="100px">
		<el-form-item label="内容">
			<el-select v-model="form.contentType" placeholder="请选择" class="select-item">
				<el-option label="文本" :value="1"></el-option>
				<el-option label="图表" :value="2"></el-option>
			</el-select>
		</el-form-item>
        
	</el-form>
</template>

<script>
export default {
	data() {
		return {
			form: {
				contentType: null
			}
		};
	}
};
</script>

<style lang="less" scoped>
.form {
	min-width: 350px;
	.select-item {
		width: 90%;
	}
}
</style>
