<template>
	<el-form ref="form" :model="form" label-width="100px" class="form">
		<el-form-item label="渐变方式">
			<el-select v-model="form.gradientType" placeholder="请选择渐变方式" class="select-item">
				<el-option label="线性" value="linear-gradient"></el-option>
				<el-option label="径向" value="radial-gradient"></el-option>
			</el-select>
		</el-form-item>
		<template v-if="form.gradientType === 'linear-gradient'">
			<el-form-item label="线性方向">
				<el-select v-model="form.linearType" placeholder="请选择线性方向" class="select-item">
					<el-option label="从上到下" value="to bottom"></el-option>
					<el-option label="从左到右" value="to right"></el-option>
					<el-option label="对角（左上-右下）" value="to bottom right"></el-option>
					<el-option label="对角（左下-右上）" value="to top right"></el-option>
				</el-select>
			</el-form-item>
		</template>
		<template v-if="form.gradientType === 'radial-gradient'">
			<el-form-item label="径向形状">
				<el-select v-model="form.radialShape" placeholder="请选择径向形状" class="select-item">
					<el-option label="圆形" value="circle"></el-option>
					<el-option label="椭圆形" value="ellipse"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="是否重复">
				<el-select v-model="form.isRepeat" placeholder="请选择背景是否重复" class="select-item">
					<el-option label="是" value="repeat"></el-option>
					<el-option label="否" value="no-repeat"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="圆点位置">
				<el-tooltip class="item" effect="dark" content="从左上角开始计算像素，空格为间隔。例如：100px 100px" placement="bottom">
					<el-input v-model="form.dotPosition" placeholder="请输入圆点位置" class="input-item"></el-input>
				</el-tooltip>
			</el-form-item>
		</template>
		<el-form-item label="颜色">
			<template v-for="(color, index) in form.bgColorArr">
				<div :key="index" class="color-group">
					<el-color-picker v-model="color.value" class="colorPicker-item" show-alpha></el-color-picker>
					<el-button type="primary" circle class="colorIcon-item" @click="colorDelHandler(index)">
						<i class="el-icon-remove-outline"></i>
					</el-button>
				</div>
			</template>
			<el-button class="button-add" @click="colorAddHandler">
				<i class="el-icon-plus"></i>
			</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
	inheritAttrs: false,
	name: 'BgColorComponent',
	props: ['layoutStyle_p'],
	data() {
		return {
			form: {
				bgType: 2,
				gradientType: 'linear-gradient',
				linearType: 'to bottom',
				radialShape: 'circle',
				dotPosition: null,
				isRepeat: 'repeat',
				bgColorArr: [
					{
						value: 'rgba(19, 206, 102, 1)'
					}
				]
			}
		};
	},
	watch: {
		form: {
			handler(newValue) {
				const styleJson = this.bgColorStyleHandler(newValue);
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
				if (item.indexOf('base64') === -1) {
					const json = this.parseBgImageHandler(item);
					this.form = { ...this.form, ...json };
				}
			}
			if (key === 'background-position') {
				this.form.dotPosition = item;
			}
			if (key === 'background-repeat') {
				this.form.isRepeat = item;
			}
		}
	},
	methods: {
		// 添加背景色
		colorAddHandler() {
			this.form.bgColorArr.push({
				value: 'rgba(19, 206, 102, 0.8)'
			});
		},
		// 删除背景色
		colorDelHandler(index) {
			if (this.form.bgColorArr.length === 2 && (index === 0 || index === 1)) {
				return false;
			}
			this.form.bgColorArr.splice(index, 1);
		},
		// 颜色数组转换为颜色字符串
		colorStrHandler(value) {
			const colorArr = [];
			value.bgColorArr.forEach(color => {
				colorArr.push(color.value);
			});
			return colorArr.join(',');
		},
		bgColorStyleHandler(value) {
			const colorStr = this.colorStrHandler(value);
			const styleJson = {};
			let tempParams = '';
			if (value.gradientType === 'linear-gradient') {
				tempParams = value.linearType;
				styleJson['background-position'] = '0px 0px';
				styleJson['background-repeat'] = 'no-repeat';
			}
			if (value.gradientType === 'radial-gradient') {
				tempParams = value.radialShape;
				let repeat = '';
				styleJson['background-position'] = value.dotPosition;
				if (!value.isRepeat) {
					repeat = 'no-repeat';
				} else {
					repeat = 'repeat';
				}
				styleJson['background-repeat'] = repeat;
			}
			styleJson['background-image'] = `${value.gradientType}(${tempParams}, ${colorStr})`;
			return styleJson;
		},
		parseBgImageHandler(backgroundImage) {
			const backgroundImageTemp = backgroundImage.slice(0, backgroundImage.length - 1);
			const imageArr = backgroundImageTemp.split('t(');
			const linearArr = imageArr[1].split(',');
			const colorArr = backgroundImageTemp.split('rgba(');
			const bgColorArr = [];
			for (let i = 1; i < colorArr.length; i++) {
				const color = colorArr[i].replace('),', ')');
				bgColorArr.push({
					value: `rgba(${color}`
				});
			}
			return {
				gradientType: `${imageArr[0]}t`,
				linearType: linearArr[0],
				radialShape: linearArr[0],
				bgColorArr: bgColorArr
			};
		}
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
	.color-group {
		position: relative;
		display: inline-block;
		width: 44px;
		height: 44px;
		.colorPicker-item {
			margin-right: 10px;
		}
		.colorIcon-item {
			position: absolute;
			top: -6px;
			right: 6px;
			color: #a6a6a6;
			font-size: 12px;
			cursor: pointer;
			padding: 0;
			border: none;
			i {
				color: #ffffff;
			}
		}
	}
	.button-add {
		width: 32px;
		height: 32px;
		padding: 0;
		vertical-align: top;
	}
}
</style>
