<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
import updateMixin from './mixins/update.mixin';

export default {
	mixins: [updateMixin]
};
</script>
<style lang="less">
* {
	padding: 0;
	margin: 0;
}
html,
body {
	height: 100%;
	overflow: hidden;
	padding-right: 0 !important;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100%;
}
</style>
