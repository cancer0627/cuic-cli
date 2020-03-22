const chalk = require('chalk')
const shell = require('shelljs');
const fs = require('fs');

function touchFileToRoot(file) {
    // shell.sed('', TEMPLATE.gitignore.join('\n') + '\n', process.cwd() + '/.gitignore');
    shell.touch(process.cwd() + file);
    shell.cat(__dirname + '/temp' + file).to(process.cwd() + file);
}

function copyFiles() {
    fs.copyFileSync(__dirname + '/temp/index.js', process.cwd() + '/index.js');
}

function replaceConfig(config) {
    console.log('replaceConfig', config);
    // 没有配置项文件，不继续执行
    if (!config) return;
}

function getConfig() {
    let p = process.cwd() + '/cuic.config.js';
    if (fs.existsSync(p)) {
        return require(p);
    } else {
        return null;
    }
}

module.exports = () => {
    console.log(__dirname, process.cwd());
    // 复制目录，初始化文件结构
    copyFiles();
    // 读取config，修改文件
    const config = getConfig();
    // 根据配置项，修改文件内容
    replaceConfig(config);
    console.log(chalk.green(`\n cuic 初始化成功！`));
}