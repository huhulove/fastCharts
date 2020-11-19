<template>
	<div class="global-mask">
		<div class="top" :style="componentStyle.top.style">
			<div class="icon-group">
				<i class="el-icon-setting" @click="topSetVueHandler"></i>
			</div>
		</div>
		<div class="center" :style="{ height: centerHeight }">
			<div class="center-left">
				<div class="center-left-top" style="height: 25%">center-left-top</div>
				<div class="center-left-center" style="height: 25%">center-left-center</div>
				<div class="center-left-bottom" style="height: 50%">center-left-bottom</div>
			</div>
			<div class="center-center">
				<div class="center-center-top" style="height: 12.5%">center-center-top</div>
				<div class="center-center-center" style="height: 62.5%">center-center-center</div>
				<div class="center-center-bottom" style="height: 25%">center-center-bottom</div>
			</div>
			<div class="center-right">
				<div class="center-right-top" style="height: 25%">center-right-top</div>
				<div class="center-right-center" style="height: 50%">center-right-center</div>
				<div class="center-right-bottom" style="height: 25%">center-right-bottom</div>
			</div>
		</div>
		<div class="bottom" :style="{ height: bottomHeight + 'px' }">footer</div>
		<TopSet :visible.sync="isShowTopSet" :layoutStyle_p.sync="layoutStyle"></TopSet>
	</div>
</template>

<script>
import TopSet from './maskSet/TopSet';

export default {
	components: {
		TopSet
	},
	data() {
		return {
			centerHeight: 0,
			bottomHeight: 40,

			isShowTopSet: false,
			layoutStyle: null,
			componentStyle: {
				top: {
					style: {},
					content: 'a2222sdf'
				}
			}
		};
	},
	watch: {
		componentStyle: {
			handler(newValue) {
				this.$emit('update:componentStyle_p', newValue);
			},
			deep: true
		},
		layoutStyle: {
			handler(newValue) {
				this.componentStyle.top.style = {
					...this.componentStyle.top.style,
					...newValue
				};
				this.initHeight();
			},
			deep: true
		}
	},
	created() {
		this.initHeight();
	},
	methods: {
		// 初始化中间高度
		initHeight() {
			this.centerHeight = `calc(100vh - ${this.componentStyle.top.style.height} - ${this.bottomHeight}px )`;
		},
		// 显示顶部设置框
		topSetVueHandler() {
			this.isShowTopSet = true;
		}
	}
};
</script>

<style lang="less" scoped>
.global-mask {
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.3);
	width: 100%;
	height: 100%;
	.top {
		/* background: #a11; */
		width: 100%;
		position: relative;
		.icon-group {
			position: absolute;
			top: 6px;
			right: 10px;
			cursor: pointer;
			color: #fff;
		}
	}
	.center {
		height: 30px;
		width: 100%;
		display: flex;
		&-left {
			column-count: 1;
			width: 25%;
			height: 100%;
			&-top {
				width: 100%;
				background: chartreuse;
			}
			&-center {
				width: 100%;
				background: cornflowerblue;
			}
			&-bottom {
				width: 100%;
				background: darkcyan;
			}
		}
		&-center {
			column-count: 1;
			width: 50%;
			height: 100%;
			&-top {
				width: 100%;
				background: #f0f;
			}
			&-center {
				width: 100%;
				background: darkgreen;
			}
			&-bottom {
				width: 100%;
				background: darkorange;
			}
		}
		&-right {
			column-count: 1;
			width: 25%;
			height: 100%;
			&-top {
				width: 100%;
				background: #aaa;
			}
			&-center {
				width: 100%;
				background: deeppink;
			}
			&-bottom {
				width: 100%;
				background: hotpink;
			}
		}
	}
	.bottom {
		height: 40px;
		background: #0f0;
		width: 100%;
	}
}
</style>
