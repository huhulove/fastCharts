const fs = window.require('fs');

const initRenderProjectMixin = {
	data() {
		return {
			folderPath: null
		};
	},
	methods: {
		initRenderProject(filePath) {
			this.folderPath = filePath;
			this.initPackage();
			this.initSrc();
		},
		initPackage() {
			const n_filePath = `${this.folderPath}/package.js`;
			this.writeFile(n_filePath, 'sdf123');
		},
		initSrc() {
			const n_filePath = `${this.folderPath}/App.vue`;
			this.writeFile(n_filePath, 'app');
		},
		writeFile(path, content) {
			console.log(path, content);
			fs.writeFile(path, content, error => {
				if (error) {
					console.log(error);
				}
				console.log('success');
			});
		}
	}
};

export default initRenderProjectMixin;
