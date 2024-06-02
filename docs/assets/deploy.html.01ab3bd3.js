import{_ as t,r as i,o,c as r,a as n,b as s,d as a,e as l}from"./app.1da09039.js";const c={},p=l(`<h1 id="_6-项目部署" tabindex="-1"><a class="header-anchor" href="#_6-项目部署" aria-hidden="true">#</a> 6. 项目部署</h1><h3 id="_6-1-集成部署" tabindex="-1"><a class="header-anchor" href="#_6-1-集成部署" aria-hidden="true">#</a> 6.1 集成部署</h3><ul><li>分别在\\source\\vue\\xzs-student目录和source\\vue\\xzs-admin目录，执行前端打包命令</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm config set sass_binary_site https://registry.npmmirror.com
npm install --registry https://registry.npmmirror.com
npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=n("li",null,"打包后的目录为student和admin",-1),u=n("li",null,"将文件放到\\source\\xzs\\src\\main\\resources\\static下，然后将java程序打包成jar包",-1),m=n("li",null,"修改application-prod.yml中的datasource地址",-1),k={href:"http://ip:8000/student",target:"_blank",rel:"noopener noreferrer"},v={href:"http://ip:8000/admin",target:"_blank",rel:"noopener noreferrer"},h=n("li",null,"执行下列命令，运行程序",-1),_=l(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>nohup java <span class="token operator">-</span><span class="token class-name">Duser</span><span class="token punctuation">.</span>timezone<span class="token operator">=</span><span class="token class-name">Asia</span><span class="token operator">/</span><span class="token class-name">Shanghai</span> <span class="token operator">-</span>jar <span class="token operator">-</span><span class="token class-name">Dspring</span><span class="token punctuation">.</span>profiles<span class="token punctuation">.</span>active<span class="token operator">=</span>prod  xzs<span class="token operator">-</span><span class="token number">3.9</span><span class="token number">.0</span><span class="token punctuation">.</span>jar  <span class="token operator">&gt;</span> start1<span class="token punctuation">.</span>log  <span class="token number">2</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span><span class="token number">1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-2-前后端分离部署" tabindex="-1"><a class="header-anchor" href="#_6-2-前后端分离部署" aria-hidden="true">#</a> 6.2 前后端分离部署</h3>`,2),b=n("li",null,"采用前后端分离方式部署，后端启动和部署方式1一样",-1),g=n("li",null,"前端采用nginx来装载静态页面,先创建/usr/local/xzs/web/目录，然后将打包后的student、admin放到此目录下",-1),x=n("li",null,"页面访问端口为8001，注意检查防火墙端口是否打开",-1),f={href:"http://ip:8001/student",target:"_blank",rel:"noopener noreferrer"},z={href:"http://ip:8001/admin",target:"_blank",rel:"noopener noreferrer"},y=n("li",null,"nginx配置如下：",-1),w=l(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">8001</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> xzs</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span> /usr/local/xzs/web/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span>
       <span class="token directive"><span class="token keyword">proxy_pass</span>  http://localhost:8000</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-docker部署" tabindex="-1"><a class="header-anchor" href="#_6-3-docker部署" aria-hidden="true">#</a> 6.3 docker部署</h3>`,2),q={href:"https://gitee.com/mindskip/xzs-mysql",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.mindskip.net:999",target:"_blank",rel:"noopener noreferrer"},j=l(`<div class="language-xzs-mysql line-numbers-mode" data-ext="xzs-mysql"><pre class="language-xzs-mysql"><code>CREATE DATABASE \`xzs\` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE xzs;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>sql文件改好后，将文件移动到 docker/sql 目录下</li><li>将整个docker目录中的文件，复制到/usr/local/xzs下面</li><li>进入到install目录，执行下面命令，安装docker-compose</li></ul><div class="language-docker-compose line-numbers-mode" data-ext="docker-compose"><pre class="language-docker-compose"><code>cd /usr/local/xzs/install
mv docker-compose-linux-x86_64 /usr/local/bin/docker-compose
chmod +x  /usr/local/bin/docker-compose
docker-compose --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行下面命令，启动冬青网站，有问题可以看下/usr/local/xzs/log中的日志</li></ul><div class="language-docker-xzs line-numbers-mode" data-ext="docker-xzs"><pre class="language-docker-xzs"><code>cd /usr/local/xzs
docker-compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),A={href:"http://ip:8000/student",target:"_blank",rel:"noopener noreferrer"},T={href:"http://ip:8000/admin",target:"_blank",rel:"noopener noreferrer"};function C(S,B){const e=i("ExternalLinkIcon");return o(),r("div",null,[p,n("ul",null,[d,u,m,n("li",null,[s("学生端访问地址为："),n("a",k,[s("http://ip:8000/student"),a(e)])]),n("li",null,[s("管理员端访问地址为："),n("a",v,[s("http://ip:8000/admin"),a(e)])]),h]),_,n("ul",null,[b,g,x,n("li",null,[s("学生端访问地址为："),n("a",f,[s("http://ip:8001/student"),a(e)])]),n("li",null,[s("管理员端访问地址为："),n("a",z,[s("http://ip:8001/admin"),a(e)])]),y]),w,n("ul",null,[n("li",null,[s("打开网站"),n("a",q,[s("https://gitee.com/mindskip/xzs-mysql"),a(e)]),s("，找到docker目录，里面有已配置好的文件")]),n("li",null,[s("下载sql脚本，下载教程"),n("a",E,[s("https://www.mindskip.net:999"),a(e)]),s("，然后解压sql压缩包，找到xzs-mysql.sql文件，编辑此文件，在文件开头加如下代码：")])]),j,n("ul",null,[n("li",null,[s("学生端访问地址为："),n("a",A,[s("http://ip:8000/student"),a(e)])]),n("li",null,[s("管理员端访问地址为："),n("a",T,[s("http://ip:8000/admin"),a(e)])])])])}const N=t(c,[["render",C],["__file","deploy.html.vue"]]);export{N as default};
