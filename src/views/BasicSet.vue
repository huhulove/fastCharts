<template>
	<div class="screen-basic-set">
		<el-form label-position="right" label-width="100px" :model="basicSetFormData">
			<el-row>
				<el-col :span="6">
					<el-form-item label="宽">
						<el-input v-model="basicSetFormData.width"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="高">
						<el-input v-model="basicSetFormData.height"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-form-item label="背景">
				<el-radio-group v-model="basicSetFormData.backgroundType">
					<el-radio :label="1">纯色</el-radio>
					<el-radio :label="2">图片</el-radio>
				</el-radio-group>
			</el-form-item>
			<template v-if="basicSetFormData.backgroundType == 1">
				<el-form-item label="背景颜色">
					<el-color-picker v-model="basicSetFormData.backgroundColor"></el-color-picker>
				</el-form-item>
			</template>
			<template v-if="basicSetFormData.backgroundType == 2">
				<el-form-item label="背景图片">
					<el-input v-model="basicSetFormData.height"></el-input>
				</el-form-item>
				<el-form-item label="平铺方式">
					<el-select v-model="basicSetFormData.repeat" placeholder="活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
			</template>
			<el-form-item>
				<el-button type="primary" @click="submitForm">生成</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import initRenderProjectMixin from '@/mixins/initRenderProject.mixin.js';

const { dialog } = window.require('electron').remote;

export default {
	mixins: [initRenderProjectMixin],
	data() {
		return {
			basicSetFormData: {
				width: null,
				height: null,
				repeat: null,
				backgroundType: 1,
				backgroundColor: '#409EFF'
			}
		};
	},
	methods: {
		async submitForm() {
			try {
				const res = await dialog.showOpenDialog({
					title: '请选择文件夹',
					properties: ['openDirectory']
				});
				this.initRenderProject(res.filePaths);
			} catch (error) {
				console.log(error);
			}
		}
	}
};
</script>

<style lang="less">
.screen-basic-set {
	margin-top: 20px;
	overflow: hidden;
}
</style>
