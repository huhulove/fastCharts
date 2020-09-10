import { Menu } from 'electron';
import checkVersion from './APPAutoUpdater.js';

const customMenu = win => {
	// 主菜单
	const menuList = [
		{
			label: '文件',
			submenu: [
				{
					// 添加快捷键
					accelerator: 'alt+n',
					// 子标题
					label: '新建文件',
					// 子标题类型 type String
					// normal - 正常  separator - 分隔符  submenu - 子菜单  checkbox - 复选框  radio - 单选框
					type: 'normal',
					// 点击事件
					click() {
						// alert('ctrl');
					}
				}
			]
		},
		{
			label: '编辑',
			submenu: [
				{
					// 添加快捷键
					accelerator: 'ctrl+t',
					// 子标题
					label: '主题',
					// 子标题类型 type String
					// normal - 正常  separator - 分隔符  submenu - 子菜单  checkbox - 复选框  radio - 单选框
					type: 'normal',
					// 点击事件
					click() {
						// alert('ctrl');
						win.webContents.send('showThemeSelect');
					}
				}
			]
		},
		{
			label: '帮助',
			submenu: [
				{
					label: '关于',
					type: 'normal',
					click() {
						// alert('ctrl');
					}
				},
				{
					label: '检查',
					type: 'normal',
					click() {
						// 手动更新
						const { isInstall } = checkVersion(win);
						!isInstall && win.webContents.send('noInstall', '已经是最新版本');
					}
				}
			]
		}
	];

	const menu = Menu.buildFromTemplate(menuList); // 如果 menu= null; window 隐藏顶部菜单;  mac 开发时不会隐藏，打包之后会隐藏顶部菜单
	Menu.setApplicationMenu(menu);
};
export default customMenu;
