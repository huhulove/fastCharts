<template>
	<el-drawer v-bind="$attrs" v-on="$listeners" :with-header="false">
		<el-form ref="form" label-width="100px" class="form">
			<el-form-item label="背景">
				<el-select v-model="bgType" placeholder="请选择" class="select-item" @change="bgTypeChange">
					<el-option label="图片" :value="1"></el-option>
					<el-option label="纯色" :value="2"></el-option>
				</el-select>
			</el-form-item>
			<component :is="componentId"></component>
		</el-form>
	</el-drawer>
</template>

<script>
import initRenderProjectMixin from '@/mixins/initRenderProject.mixin.js';
import BgImgComponent from './globalParams/BgImg.globalParams';
import BgColorComponent from './globalParams/BgColor.globalParams';

export default {
	inheritAttrs: false,
	mixins: [initRenderProjectMixin],
	components: {
		BgImgComponent,
		BgColorComponent
	},
	data() {
		return {
			componentId: null,
			bgType: null
		};
	},
	mounted() {},
	methods: {
		bgTypeChange(type) {
			if (type === 1) {
				this.componentId = BgImgComponent;
			}
			if (type === 2) {
				this.componentId = BgColorComponent;
			}
		}
	}
};
</script>

<style lang="less" scoped>
.form {
	margin-top: 30px;
	min-width: 350px;
	.select-item {
		width: 90%;
	}
}
</style>
