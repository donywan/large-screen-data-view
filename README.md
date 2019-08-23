# 大屏数据可视化DEMO
## 预览
![preview](https://raw.githubusercontent.com/DonyWan/large-screen-data-view/master/public/demo.png)
![preview](https://raw.githubusercontent.com/DonyWan/large-screen-data-view/dev/public/demo-1.png)
![preview](https://raw.githubusercontent.com/DonyWan/large-screen-data-view/dev/public/demo-2.png)
### 克隆dev分支版本
```
git clone -b dev git@github.com:DonyWan/large-screen-data-view.git
```
```
cd large-screen-data-view
```
```
npm install
```
### 编译并启动
```
npm run serve
```
或者使用vue图形化启动方式
```
vue ui
```
### 编译用来部署到生产环境
```
npm run build
```
## NGINX跨域代理配置
```
server {
    location /api/ {
	    proxy_pass http://x.x.x.x:8080/carnot_webtrends/;
	}
}
注意：端口后面跟项目地址
```
