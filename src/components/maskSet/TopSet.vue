<template>
	<el-dialog title="设置顶部组件" v-bind="$attrs" v-on="$listeners">
		<el-tabs v-model="activeTab">
			<el-tab-pane label="基本属性" name="first">
				<el-form :model="form" class="form" label-width="100px">
					<el-form-item label="高度">
						<el-tooltip class="item" effect="dark" content="例如：10px" placement="bottom">
							<el-input v-model="form.height" placeholder="请输入高度"></el-input>
						</el-tooltip>
					</el-form-item>
					<el-form-item label="背景">
						<el-select v-model="form.bgType" placeholder="请选择" class="select-item" @change="bgTypeChange">
							<el-option label="图片" :value="1"></el-option>
							<el-option label="纯色" :value="2"></el-option>
						</el-select>
					</el-form-item>
					<component :is="componentId" v-bind="$attrs" v-on="$listeners"></component>
				</el-form>
			</el-tab-pane>
			<el-tab-pane label="组件内容" name="second">
				<ComponentContent></ComponentContent>
			</el-tab-pane>
		</el-tabs>
	</el-dialog>
</template>

<script>
import BgImgComponent from '../globalParams/BgImg.globalParams';
import BgColorComponent from '../globalParams/BgColor.globalParams';
import ComponentContent from '../ComponentContent';

export default {
	inheritAttrs: true,
	components: {
		ComponentContent
	},
	data() {
		return {
			activeTab: 'first',
			componentId: null,
			form: {
				height: '40px',
				bgType: null
			}
		};
	},
	watch: {
		form: {
			handler(newValue) {
				this.$emit('update:layoutStyle_p', newValue);
			},
			deep: true
		}
	},
	created() {
		this.$emit('update:layoutStyle_p', this.form);
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
	.select-item {
		width: 90%;
	}
}
</style>
