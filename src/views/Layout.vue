<template>
	<div>
		<div class="layout" :style="layoutStyle">
			<div class="top" :style="allComponentStyle.top.style">
				<div :style="allComponentStyle.top.content.style">{{ allComponentStyle.top.content.text }}</div>
			</div>
			<div class="center" :style="{ height: centerHeight }">
				<div class="center-left">
					<div class="center-left-top" :style="allComponentStyle.centerLeftTop.style">
						<div :style="allComponentStyle.centerLeftTop.content.style">{{ allComponentStyle.centerLeftTop.content.text }}</div>
					</div>
					<div class="center-left-center" :style="allComponentStyle.centerLeftCenter.style">
						<div :style="allComponentStyle.centerLeftCenter.content.style">{{ allComponentStyle.centerLeftCenter.content.text }}</div>
					</div>
					<div class="center-left-bottom" :style="allComponentStyle.centerLeftBottom.style">
						<div :style="allComponentStyle.centerLeftBottom.content.style">{{ allComponentStyle.centerLeftBottom.content.text }}</div>
					</div>
				</div>
				<div class="center-center">
					<div class="center-center-top" :style="allComponentStyle.centerCenterTop.style">
						<div :style="allComponentStyle.centerCenterTop.content.style">{{ allComponentStyle.centerCenterTop.content.text }}</div>
					</div>
					<div class="center-center-center" :style="allComponentStyle.centerCenterCenter.style">
						<div :style="allComponentStyle.centerCenterCenter.content.style">{{ allComponentStyle.centerCenterCenter.content.text }}</div>
					</div>
					<div class="center-center-bottom" :style="allComponentStyle.centerCenterBottom.style">
						<div :style="allComponentStyle.centerCenterBottom.content.style">{{ allComponentStyle.centerCenterBottom.content.text }}</div>
					</div>
				</div>
				<div class="center-right">
					<div class="center-right-top" :style="allComponentStyle.centerRightTop.style">
						<div :style="allComponentStyle.centerRightTop.content.style">{{ allComponentStyle.centerRightTop.content.text }}</div>
					</div>
					<div class="center-right-center" :style="allComponentStyle.centerRightCenter.style">
						<div :style="allComponentStyle.centerRightCenter.content.style">{{ allComponentStyle.centerRightCenter.content.text }}</div>
					</div>
					<div class="center-right-bottom" :style="allComponentStyle.centerRightBottom.style">
						<div :style="allComponentStyle.centerRightBottom.content.style">{{ allComponentStyle.centerRightBottom.content.text }}</div>
					</div>
				</div>
			</div>
			<div class="bottom" :style="allComponentStyle.bottom.style">
				<div :style="allComponentStyle.bottom.content.style">{{ allComponentStyle.bottom.content.text }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'layout',
	props: ['layoutStyle_p', 'allComponentStyle_p'],
	data() {
		return {
			centerHeight: 0,
			bottomHeight: 40,
			layoutStyle: {},
			allComponentStyle: {
				top: {
					style: {
						height: 0
					},
					content: {
						style: {},
						text: null
					}
				},
				centerLeftTop: {
					style: {
						height: 0
					},
					content: {
						style: {},
						text: null
					}
				},
				centerLeftCenter: {
					style: {
						height: 0
					},
					content: {
						style: {},
						text: null
					}
				},
				centerLeftBottom: {
					style: {
						height: 0
					},
					content: {
						style: {},
						text: null
					}
				},
				centerCenterTop: {
					style: {
						height: 0
					},
					content: {
						style: {},
						text: null
					}
				},
				centerCenterCenter: {
					style: {
						height: 0
					},
					content: {
						style: {},
						text: null
					}
				},
				centerCenterBottom: {
					style: {
						height: 0
					},
					content: {
						style: {},
						text: null
					}
				},
				centerRightTop: {
					style: {
						height: 0
					},
					content: {
						style: {},
						text: null
					}
				},
				centerRightCenter: {
					style: {
						height: 0
					},
					content: {
						style: {},
						text: null
					}
				},
				centerRightBottom: {
					style: {
						height: 0
					},
					content: {
						style: {},
						text: null
					}
				},
				bottom: {
					style: {
						height: 0
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
		layoutStyle_p: {
			handler(newValue) {
				this.layoutStyle = newValue;
			},
			deep: true
		},
		allComponentStyle_p: {
			handler(newValue) {
				console.log(newValue);
				this.allComponentStyle = newValue;
				this.initHeight();
			},
			deep: true
		}
	},
	created() {
		this.initHeight();
	},
	methods: {
		initHeight() {
			this.centerHeight = `calc(100vh - ${this.allComponentStyle.top.style.height} - ${this.allComponentStyle.bottom.style.height} )`;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.layout {
	height: 100%;
	color: #ffffff;
	text-align: center;
	.top {
		height: 20px;
		background: #a11;
		width: 100%;
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
