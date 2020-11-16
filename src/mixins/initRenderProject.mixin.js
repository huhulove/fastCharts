const fs = window.require('fs');

const initRenderProjectMixin = {
	data() {
		return {
			folderPath: null
		};
	},
	methods: {
		saveFile(filePath) {
			this.folderPath = filePath;
			this.createFile();
		},
		createFile() {
			const n_component = `${this.folderPath}/component.vue`;
			const layoutDom = this.$refs.layout.$el;
			const componentStyle = `<style scoped lang="less">
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
            </style>`;
			const componentJS = '<script>export default {data(){return{}}}</script>';
			const templateContent = `<template>${layoutDom.innerHTML}</template>\n\n${componentJS}\n\n${componentStyle}`;
			this.writeFile(n_component, templateContent);
		},
		writeFile(path, content) {
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
