<template>
	<el-form ref="form" :model="form" label-width="100px" class="form">
		<el-form-item label="平铺方式">
			<el-select v-model="form.repeatType" placeholder="请选择平铺方式" class="select-item">
				<el-option label="无" value="no-repeat"></el-option>
				<el-option label="平铺" value="repeat"></el-option>
				<el-option label="X轴平铺" value="repeat-x"></el-option>
				<el-option label="Y轴平铺" value="repeat-y"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="填充方式">
			<el-select v-model="form.bgSize" placeholder="请选择填充方式" class="select-item">
				<el-option label="自动" value="auto"></el-option>
				<el-option label="覆盖背景区（保持图像宽高比）" value="cover"></el-option>
				<el-option label="装入背景区（保持图像宽高比）" value="container"></el-option>
			</el-select>
		</el-form-item>
		<el-upload drag action="https://jsonplaceholder.typicode.com/posts/" class="upload-item" :limit="1" :on-change="uploadSuccess">
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
	props: ['layoutStyle_p'],
	data() {
		return {
			form: {
				bgType: 1,
				repeatType: 'no-repeat',
				bgSize: 'cover',
				bgImg: null
			}
		};
	},
	watch: {
		form: {
			handler(newValue) {
				const styleJson = this.bgImgStyleHandler(newValue);
				this.$emit('update:layoutStyle_p', styleJson);
			},
			deep: true
		}
	},
	created() {
		// 回绑数据
		for (const key in this.layoutStyle_p) {
			const item = this.layoutStyle_p[key];
			if (key === 'background-image') {
				const imageBase64Old = item;
				const imageBase64New = imageBase64Old.replace('url(', '');
				const imageBase64 = imageBase64New.slice(0, imageBase64New.length - 1);
				this.form.bgImg = imageBase64;
			}
			if (key === 'background-size') {
				this.form.bgSize = item;
			}
			if (key === 'background-repeat') {
				this.form.repeatType = item;
			}
		}
	},
	methods: {
		uploadSuccess(file) {
			const reader = new FileReader();
			reader.readAsDataURL(file.raw);
			reader.onload = e => {
				this.form.bgImg = e.target.result;
			};
		},
		bgImgStyleHandler(value) {
			const styleJson = {};
			styleJson['background-image'] = `url(${value.bgImg})`;
			styleJson['background-repeat'] = value.repeatType;
			styleJson['background-size'] = value.bgSize;
			return styleJson;
		}
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
