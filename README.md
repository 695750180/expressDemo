# expressDemo
描述：此工程为前端开发人员提供接口模拟服务，已经具备post和get请求， 若由其他请求尽情留言，期待更新版本通知

1. 下载工程后使用npm i 进行以来安装（若由cnpm 建议使用cnpm i指令来安装）
2. 安装完依赖，请执行npm start 来运行服务
3. 服务运行完后，使用的端口为3000，将前端访问代理到本机的3000端口即可
4. 访问接口统一为 /getData ， 参数为fileName 值为public-->json下的json文件名（需要带后缀名）
5. 例子：
	+ post请求：
		+ this.$http.post("/getData",{
				fileName :'test.json' 
			}).then(res=>{
				debugger;
			});
	+ get请求：
		+ http://localhost:3000/getData?fileName=test.json
6. 接口数据想要什么样的格式，直接自己在public-->json下新建json文件获取。接口参数指向为改目录下json文件