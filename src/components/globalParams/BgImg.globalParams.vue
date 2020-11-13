<template>
	<el-form ref="form" :model="form" label-width="100px" class="form">
		<el-form-item label="平铺方式">
			<el-select v-model="form.repeatType" placeholder="请选择平铺方式" class="select-item">
				<el-option label="无" :value="1"></el-option>
				<el-option label="平铺" :value="2"></el-option>
				<el-option label="X轴平铺" :value="3"></el-option>
				<el-option label="Y轴平铺" :value="4"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="填充方式">
			<el-select v-model="form.bgSize" placeholder="请选择填充方式" class="select-item">
				<el-option label="覆盖背景区（保持图像宽高比）" value="cover"></el-option>
				<el-option label="装入背景区（保持图像宽高比）" value="container"></el-option>
			</el-select>
		</el-form-item>
		<el-upload drag action="https://jsonplaceholder.typicode.com/posts/" multiple class="upload-item">
			<i class="el-icon-upload"></i>
			<div class="el-upload__text">
				将文件拖到此处，或
				<em>点击上传</em>
			</div>
			<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
		</el-upload>
	</el-form>
</template>

<script>
export default {
	name: 'BgImgComponent',
	data() {
		return {
			form: {
				bgType: null,
				repeatType: null
			}
		};
	}
};
</script>

<style lang="less" scoped>
.form {
	margin-top: 0 !important;
	min-width: 350px;
	.select-item {
		width: 90%;
	}
	.upload-item {
		width: 90%;
		margin: 0 auto;
		position: relative;
		bottom: 0;
		/deep/ .el-upload {
			width: 100%;
			.el-upload-dragger {
				width: 100%;
			}
		}
	}
}
</style>
