<template>
	<el-form :model="form" class="form" label-width="100px">
		<el-form-item label="类型">
			<el-select v-model="form.type" placeholder="请选择" class="select-item">
				<el-option label="文本" :value="1"></el-option>
				<el-option label="图表" :value="2"></el-option>
			</el-select>
		</el-form-item>
		<template>
			<ContentTextComponent v-if="form.type === 1" :contentText_p.sync="form.text"></ContentTextComponent>
		</template>
		<ContentStyleComponent :contentStyle_p.sync="form.style"></ContentStyleComponent>
	</el-form>
</template>

<script>
import ContentStyleComponent from '@/components/ContentStyle';
import ContentTextComponent from '@/components/ContentText';

export default {
	components: {
		ContentStyleComponent,
		ContentTextComponent
	},
	props: ['componentContent_p'],
	data() {
		return {
			form: {
				type: null,
				style: null,
				params: null,
				text: 'sdfasdfsadf'
			}
		};
	},
	watch: {
		form: {
			handler(newValue) {
				this.$emit('update:componentContent_p', newValue);
			},
			deep: true
		}
	},
	created() {
		// 回绑数据
		if (this.componentContent_p) {
			this.form = { ...this.componentContent_p };
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
