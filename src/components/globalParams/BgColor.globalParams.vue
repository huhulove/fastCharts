<template>
	<el-form ref="form" :model="form" label-width="100px" class="form">
		<el-form-item label="渐变方式">
			<el-select v-model="form.gradientType" placeholder="请选择渐变方式" class="select-item">
				<el-option label="线性" :value="1"></el-option>
				<el-option label="径向" :value="2"></el-option>
			</el-select>
		</el-form-item>
		<template v-if="form.gradientType === 1">
			<el-form-item label="线性方向">
				<el-select v-model="form.linearType" placeholder="请选择渐变方式" class="select-item">
					<el-option label="从上到下" :value="1"></el-option>
					<el-option label="从左到右" :value="2"></el-option>
					<el-option label="对角" :value="3"></el-option>
				</el-select>
			</el-form-item>
		</template>
		<template v-if="form.gradientType === 2">
			<el-form-item label="径向形状">
				<el-select v-model="form.radialShape" placeholder="请选择渐变方式" class="select-item">
					<el-option label="圆形" value="circle"></el-option>
					<el-option label="椭圆形" value="ellipse"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="圆点位置">
				<el-input v-model="form.dotPosition" placeholder="请输入圆点位置" class="input-item"></el-input>
			</el-form-item>
		</template>
		<el-form-item label="颜色">
			<el-color-picker v-model="form.bgColor1" class="colorPicker-item" show-alpha></el-color-picker>
			<el-color-picker v-model="form.bgColor2" class="colorPicker-item" show-alpha></el-color-picker>
			<el-button class="button-add">
				<i class="el-icon-plus"></i>
			</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
	name: 'BgColorComponent',
	data() {
		return {
			form: {
				bgColor1: null,
				bgColor2: null,
				gradientType: null,
				linearType: null,
				radialShape: null,
				dotPosition: null
			}
		};
	}
};
</script>

<style lang="less" scoped>
.form {
	margin-top: 0 !important;
	min-width: 350px;
	.select-item,
	.input-item {
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
	.colorPicker-item {
		margin-right: 10px;
	}
	.button-add {
		width: 32px;
		height: 32px;
		padding: 0;
		vertical-align: top;
	}
}
</style>
