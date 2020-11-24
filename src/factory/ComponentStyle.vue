<template>
	<el-form :model="form" class="form" label-width="100px">
		<el-form-item label="高度">
			<el-tooltip class="item" effect="dark" content="例如：10px" placement="bottom">
				<el-input v-model="form.height" placeholder="请输入高度" class="input-item"></el-input>
			</el-tooltip>
		</el-form-item>
		<el-form-item label="背景">
			<el-select v-model="form.bgType" placeholder="请选择" class="select-item">
				<el-option label="图片" :value="1"></el-option>
				<el-option label="纯色" :value="2"></el-option>
			</el-select>
		</el-form-item>
		<template>
			<BgImgComponent v-if="form.bgType === 1" :layoutStyle_p.sync="layoutStyle"></BgImgComponent>
			<BgColorComponent v-if="form.bgType === 2" :layoutStyle_p.sync="layoutStyle"></BgColorComponent>
		</template>
	</el-form>
</template>

<script>
import BgImgComponent from '@/components/BgImg';
import BgColorComponent from '@/components/BgColor';

export default {
	props: ['componentStyle_p'],
	components: {
		BgImgComponent,
		BgColorComponent
	},
	data() {
		return {
			form: {
				height: 0,
				bgType: null
			},
			layoutStyle: {}
		};
	},
	watch: {
		form: {
			handler(newValue) {
				this.$emit('update:componentStyle_p', { ...this.layoutStyle, ...newValue });
			},
			deep: true
		},
		layoutStyle: {
			handler(newValue) {
				this.$emit('update:componentStyle_p', { ...this.form, ...newValue });
			},
			deep: true
		}
	},
	created() {
		// 回绑数据
		this.form = { ...this.componentStyle_p };
		this.layoutStyle = { ...this.componentStyle_p };
	},
	methods: {}
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
