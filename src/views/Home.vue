<template>
	<div class="home" :class="themeColor">
		<Layout ref="layout" :topHeight_p="topHeight" :bottomHeight_p="bottomHeight"></Layout>
		<SelectTheme :visible.sync="isShowSelectTheme" :theme.sync="theme"></SelectTheme>
		<Set :topHeight_p.sync="topHeight" :bottomHeight_p.sync="bottomHeight"></Set>
	</div>
</template>

<script>
// @ is an alias to /src
import Layout from '@/components/Layout.vue';
import SelectTheme from '@/components/SelectTheme.vue';
import Set from '@/views/Set.vue';

export default {
	name: 'Home',
	components: {
		Layout,
		SelectTheme,
		Set
	},
	data() {
		return {
			isShowSelectTheme: false,
			theme: null,
			topHeight: null,
			bottomHeight: null
		};
	},
	computed: {
		themeColor() {
			return `theme-${this.theme}`;
		}
	},
	mounted() {
		this.$ipcRenderer.on('showThemeSelect', () => {
			this.isShowSelectTheme = true;
		});
		this.$ipcRenderer.on('hideThemeSelect', () => {
			this.isShowSelectTheme = false;
		});
		this.$ipcRenderer.on('theme', (event, theme) => {
			this.theme = theme;
		});
	},
	methods: {}
};
</script>

<style lang="less">
.home {
	width: 100%;
	height: 100%;
	border-top: 1px solid #f1f1f1;
}
</style>
