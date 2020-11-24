<template>
	<div class="global-mask">
		<div class="top" :style="allComponentStyle.top.style">
			<div class="icon-group">
				<i class="el-icon-setting" @click="showHdialogHandler('top')"></i>
			</div>
		</div>
		<div class="center" :style="{ height: centerHeight }">
			<div class="center-left">
				<div class="center-left-top" :style="allComponentStyle.centerLeftTop.style">
					<div class="icon-group">
						<i class="el-icon-setting" @click="showHdialogHandler('centerLeftTop')"></i>
					</div>
				</div>
				<div class="center-left-center" :style="allComponentStyle.centerLeftCenter.style">
					<div class="icon-group">
						<i class="el-icon-setting" @click="showHdialogHandler('centerLeftCenter')"></i>
					</div>
				</div>
				<div class="center-left-bottom" :style="allComponentStyle.centerLeftBottom.style">
					<div class="icon-group">
						<i class="el-icon-setting" @click="showHdialogHandler('centerLeftBottom')"></i>
					</div>
				</div>
			</div>
			<div class="center-center">
				<div class="center-center-top" :style="allComponentStyle.centerCenterTop.style">
					<div class="icon-group">
						<i class="el-icon-setting" @click="showHdialogHandler('centerCenterTop')"></i>
					</div>
				</div>
				<div class="center-center-center" :style="allComponentStyle.centerCenterCenter.style">
					<div class="icon-group">
						<i class="el-icon-setting" @click="showHdialogHandler('centerCenterCenter')"></i>
					</div>
				</div>
				<div class="center-center-bottom" :style="allComponentStyle.centerCenterBottom.style">
					<div class="icon-group">
						<i class="el-icon-setting" @click="showHdialogHandler('centerCenterBottom')"></i>
					</div>
				</div>
			</div>
			<div class="center-right">
				<div class="center-right-top" :style="allComponentStyle.centerRightTop.style">
					<div class="icon-group">
						<i class="el-icon-setting" @click="showHdialogHandler('centerRightTop')"></i>
					</div>
				</div>
				<div class="center-right-center" :style="allComponentStyle.centerRightCenter.style">
					<div class="icon-group">
						<i class="el-icon-setting" @click="showHdialogHandler('centerRightCenter')"></i>
					</div>
				</div>
				<div class="center-right-bottom" :style="allComponentStyle.centerRightBottom.style">
					<div class="icon-group">
						<i class="el-icon-setting" @click="showHdialogHandler('centerRightBottom')"></i>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom" :style="allComponentStyle.bottom.style">
			<div class="icon-group">
				<i class="el-icon-setting" @click="showHdialogHandler('bottom')"></i>
			</div>
		</div>
		<Hdialog
			:visible.sync="isShowHdialog"
			:componentStyle_p.sync="componentStyle"
			:componentContent_p.sync="componentContent"
			:componentPos_p.sync="componentPos"
			v-if="isShowHdialog"
		></Hdialog>
	</div>
</template>

<script>
import Hdialog from '../factory/Hdialog';

export default {
	components: {
		Hdialog
	},
	data() {
		return {
			centerHeight: 0,

			isShowHdialog: false,
			componentStyle: null,
			componentContent: null,
			componentPos: null,

			allComponentStyle: {
				top: {
					style: {
						height: '40px',
						bgType: null
					},
					content: {
						style: {},
						text: null
					}
				},
				centerLeftTop: {
					style: {
						height: '25%'
					},
					content: {
						style: {},
						text: null
					}
				},
				centerLeftCenter: {
					style: {
						height: '25%'
					},
					content: {
						style: {},
						text: null
					}
				},
				centerLeftBottom: {
					style: {
						height: '50%'
					},
					content: {
						style: {},
						text: null
					}
				},
				centerCenterTop: {
					style: {
						height: '12.5%'
					},
					content: {
						style: {},
						text: null
					}
				},
				centerCenterCenter: {
					style: {
						height: '62.5%'
					},
					content: {
						style: {},
						text: null
					}
				},
				centerCenterBottom: {
					style: {
						height: '25%'
					},
					content: {
						style: {},
						text: null
					}
				},
				centerRightTop: {
					style: {
						height: '25%'
					},
					content: {
						style: {},
						text: null
					}
				},
				centerRightCenter: {
					style: {
						height: '50%'
					},
					content: {
						style: {},
						text: null
					}
				},
				centerRightBottom: {
					style: {
						height: '25%'
					},
					content: {
						style: {},
						text: null
					}
				},
				bottom: {
					style: {
						height: '40px',
						bgType: null
					},
					content: {
						style: {},
						text: null
					}
				}
			}
		};
	},
	watch: {
		allComponentStyle: {
			handler(newValue) {
				this.$emit('update:allComponentStyle_p', newValue);
			},
			deep: true,
			immediate: true
		},
		componentStyle: {
			handler(newValue) {
				if (newValue) {
					this.allComponentStyle[this.componentPos].style = newValue;
					this.initHeight();
				}
			},
			deep: true
		},
		componentContent: {
			handler(newValue) {
				if (newValue) {
					this.allComponentStyle[this.componentPos].content = newValue;
				}
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
			this.centerHeight = `calc(100vh - ${this.allComponentStyle.top.style.height} - ${this.allComponentStyle.bottom.style.height} )`;
		},
		// 显示顶部设置框
		showHdialogHandler(pos) {
			this.componentPos = pos;
			this.isShowHdialog = true;

			console.log(this.componentPos);
			this.componentStyle = this.allComponentStyle[this.componentPos].style;
			this.componentContent = this.allComponentStyle[this.componentPos].content;
			console.log(this.componentStyle);
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
		background: none !important;
		width: 100%;
		position: relative;
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
				/* background: chartreuse; */
				position: relative;
				background: none !important;
			}
			&-center {
				width: 100%;
				/* background: cornflowerblue; */
				position: relative;
				background: none !important;
			}
			&-bottom {
				width: 100%;
				/* background: darkcyan; */
				position: relative;
				background: none !important;
			}
		}
		&-center {
			column-count: 1;
			width: 50%;
			height: 100%;
			&-top {
				width: 100%;
				/* background: #f0f; */
				position: relative;
				background: none !important;
			}
			&-center {
				width: 100%;
				/* background: darkgreen; */
				position: relative;
				background: none !important;
			}
			&-bottom {
				width: 100%;
				/* background: darkorange; */
				position: relative;
				background: none !important;
			}
		}
		&-right {
			column-count: 1;
			width: 25%;
			height: 100%;
			&-top {
				width: 100%;
				/* background: #aaa; */
				position: relative;
				background: none !important;
			}
			&-center {
				width: 100%;
				/* background: deeppink; */
				position: relative;
				background: none !important;
			}
			&-bottom {
				width: 100%;
				/* background: hotpink; */
				position: relative;
				background: none !important;
			}
		}
	}
	.bottom {
		width: 100%;
		/* background: #0f0; */
		background: none !important;
		position: relative;
	}
	.icon-group {
		position: absolute;
		top: 6px;
		right: 10px;
		cursor: pointer;
		color: #fff;
	}
}
</style>
