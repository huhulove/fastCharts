<template>
	<el-form :model="form" class="form" label-width="100px">
		<el-form-item label="高度">
			<el-tooltip class="item" effect="dark" content="例如：10px" placement="bottom">
				<el-input v-model="form.height" placeholder="请输入高度" class="input-item"></el-input>
			</el-tooltip>
		</el-form-item>
		<el-form-item label="背景">
			<el-select v-model="form.bgType" placeholder="请选择" class="select-item" @change="bgTypeChange">
				<el-option label="图片" :value="1"></el-option>
				<el-option label="纯色" :value="2"></el-option>
			</el-select>
		</el-form-item>
		<component :is="componentId" :layoutStyle_p.sync="layoutStyle"></component>
	</el-form>
</template>

<script>
import BgImgComponent from '@/components/BgImg';
import BgColorComponent from '@/components/BgColor';

export default {
	props: ['componentStyle_p'],
	data() {
		return {
			componentId: null,
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
				console.log(newValue);
				this.$emit('update:componentStyle_p', { ...this.layoutStyle, ...newValue });
			},
			deep: true
		},
		layoutStyle: {
			handler(newValue) {
				this.$emit('update:componentStyle_p', { ...newValue, ...this.form });
			},
			deep: true
		}
	},
	created() {
		this.form = { ...this.componentStyle_p };
		this.layoutStyle = { ...this.componentStyle_p };
	},
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
	min-width: 350px;
	.select-item,
	.input-item {
		width: 90%;
	}
}
</style>
