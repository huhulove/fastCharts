<template>
	<el-drawer v-bind="$attrs" v-on="$listeners" :with-header="false">
		<el-form ref="form" :model="form" label-width="100px" class="form">
			<el-form-item label="顶部高度">
				<el-input v-model="form.topHeight" @blur="topHeightChange($event)"></el-input>
			</el-form-item>
			<el-form-item label="底部高度">
				<el-input v-model="form.bottomHeight" @blur="bottomHeightChange"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm">导出</el-button>
			</el-form-item>
		</el-form>
	</el-drawer>
</template>

<script>
import initRenderProjectMixin from '@/mixins/initRenderProject.mixin.js';

const { dialog } = window.require('electron').remote;

export default {
	inheritAttrs: false,
	mixins: [initRenderProjectMixin],
	data() {
		return {
			form: {
				topHeight: 40,
				bottomHeight: 40
			}
		};
	},
	mounted() {
		this.topHeightChange();
		this.bottomHeightChange();
	},
	methods: {
		topHeightChange() {
			this.$emit('update:topHeight_p', this.form.topHeight);
		},
		bottomHeightChange() {
			this.$emit('update:bottomHeight_p', this.form.bottomHeight);
		},
		async submitForm() {
			try {
				const res = await dialog.showOpenDialog({
					title: '请选择文件夹',
					properties: ['openFile', 'openDirectory']
				});
				this.saveFile(res.filePaths);
			} catch (error) {
				console.log(error);
			}
		}
	}
};
</script>

<style lang="less" scoped>
.form {
	width: 80%;
	margin-top: 30px;
}
</style>
