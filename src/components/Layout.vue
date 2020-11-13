<template>
	<div class="layout">
		<div class="top" :style="{ height: topHeight + 'px' }">logo</div>
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
	</div>
</template>

<script>
export default {
	name: 'layout',
	props: ['topHeight_p', 'bottomHeight_p'],
	data() {
		return {
			topHeight: 40,
			centerHeight: 0,
			bottomHeight: 40
		};
	},
	watch: {
		topHeight_p() {
			this.initHeight();
		},
		bottomHeight_p() {
			this.initHeight();
		}
	},
	created() {
		this.initHeight();
	},
	methods: {
		initHeight() {
			this.centerHeight = `calc(100vh - ${this.topHeight}px - ${this.bottomHeight}px )`;
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
