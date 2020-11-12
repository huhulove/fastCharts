<template>
	<div class="home" :class="themeColor">
		<Layout ref="layout" :topHeight_p="topHeight" :bottomHeight_p="bottomHeight"></Layout>
		<SelectTheme :visible.sync="isShowSelectTheme" :theme.sync="theme"></SelectTheme>
		<GlobalParams :visible.sync="isShowParamsDrawer" :topHeight_p.sync="topHeight" :bottomHeight_p.sync="bottomHeight"></GlobalParams>
	</div>
</template>

<script>
// @ is an alias to /src
import Layout from '@/components/Layout.vue';
import SelectTheme from '@/components/SelectTheme.vue';
import GlobalParams from '@/components/GlobalParams.vue';
import initRenderProjectMixin from '@/mixins/initRenderProject.mixin.js';

const { dialog } = window.require('electron').remote;

export default {
	name: 'Home',
	mixins: [initRenderProjectMixin],
	components: {
		Layout,
		SelectTheme,
		GlobalParams
	},
	data() {
		return {
			isShowSelectTheme: false,
			isShowParamsDrawer: false,
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
		this.$ipcRenderer.on('showSetGlobal', () => {
			this.isShowParamsDrawer = true;
		});
		this.$ipcRenderer.on('exportFile', async () => {
			try {
				const res = await dialog.showOpenDialog({
					title: '请选择文件夹',
					properties: ['openFile', 'openDirectory']
				});
				this.saveFile(res.filePaths);
			} catch (error) {
				console.log(error);
			}
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
