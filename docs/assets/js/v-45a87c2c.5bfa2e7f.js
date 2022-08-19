"use strict";(self.webpackChunkxzs_mysql=self.webpackChunkxzs_mysql||[]).push([[71],{8992:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-45a87c2c",path:"/guide/wx.html",title:"4.2 小程序",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"4.2.1 登录",slug:"_4-2-1-登录",children:[]},{level:3,title:"4.2.2 注册",slug:"_4-2-2-注册",children:[]},{level:3,title:"4.2.3 检查绑定",slug:"_4-2-3-检查绑定",children:[]},{level:3,title:"4.2.3 解绑退出",slug:"_4-2-3-解绑退出",children:[]},{level:3,title:"4.2.3 主页试卷列表",slug:"_4-2-3-主页试卷列表",children:[]},{level:3,title:"4.2.4 任务中心",slug:"_4-2-4-任务中心",children:[]},{level:3,title:"4.2.4 试卷列表",slug:"_4-2-4-试卷列表",children:[]},{level:3,title:"4.2.5 试卷查询",slug:"_4-2-5-试卷查询",children:[]},{level:3,title:"4.2.6 答卷列表",slug:"_4-2-6-答卷列表",children:[]},{level:3,title:"4.2.7 试卷提交",slug:"_4-2-7-试卷提交",children:[]},{level:3,title:"4.2.8 获取当前用户信息",slug:"_4-2-8-获取当前用户信息",children:[]},{level:3,title:"4.2.9 用户信息更新",slug:"_4-2-9-用户信息更新",children:[]},{level:3,title:"4.2.10 用户动态",slug:"_4-2-10-用户动态",children:[]},{level:3,title:"4.2.11 消息列表",slug:"_4-2-11-消息列表",children:[]},{level:3,title:"4.2.12 消息详情",slug:"_4-2-12-消息详情",children:[]},{level:3,title:"4.1.13 消息未读数",slug:"_4-1-13-消息未读数",children:[]},{level:3,title:"4.1.14 消息标记已读",slug:"_4-1-14-消息标记已读",children:[]}],filePathRelative:"guide/wx.md",git:{updatedTime:1660613576e3}}},91:(n,s,e)=>{e.r(s),e.d(s,{default:()=>l});const a=(0,e(6252).uE)('<h1 id="_4-2-小程序" tabindex="-1"><a class="header-anchor" href="#_4-2-小程序" aria-hidden="true">#</a> 4.2 小程序</h1><h3 id="_4-2-1-登录" tabindex="-1"><a class="header-anchor" href="#_4-2-1-登录" aria-hidden="true">#</a> 4.2.1 登录</h3><ul><li>接口地址：/api/wx/student/auth/bind</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>     userName: student  //用户名\n     password: 123456   //密码\n     code: 023BNuFa1CQ14B07KVHa16RHM94BNuF0   //授权码\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: &quot;950efd96-ecd1-4482-9204-c54cd3325a8a&quot;  //登录Token\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-2-2-注册" tabindex="-1"><a class="header-anchor" href="#_4-2-2-注册" aria-hidden="true">#</a> 4.2.2 注册</h3><ul><li>接口地址：/api/wx/student/user/register</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    userName: student2  //用户名\n    password: 123456 //密码\n    userLevel: 1   //年级\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: null\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-2-3-检查绑定" tabindex="-1"><a class="header-anchor" href="#_4-2-3-检查绑定" aria-hidden="true">#</a> 4.2.3 检查绑定</h3><ul><li>接口地址：/api/wx/student/user/register</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    code: 063MMx000eoAnM15Tj400hq8l64MMx0Z  //令牌\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: &quot;2fa8cbb7-6be9-4e54-bc68-1265348cf703&quot;  //登录令牌\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-2-3-解绑退出" tabindex="-1"><a class="header-anchor" href="#_4-2-3-解绑退出" aria-hidden="true">#</a> 4.2.3 解绑退出</h3><ul><li>接口地址：/api/wx/student/auth/unBind</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    token: edadfcc9-4ce5-43a3-bb8f-302c5f7f2c59  //令牌\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: null\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-2-3-主页试卷列表" tabindex="-1"><a class="header-anchor" href="#_4-2-3-主页试卷列表" aria-hidden="true">#</a> 4.2.3 主页试卷列表</h3><ul><li>接口地址：/api/wx/student/dashboard/index</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    token: edadfcc9-4ce5-43a3-bb8f-302c5f7f2c59  //令牌\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;fixedPaper&quot;: [  //固定试卷\n            {\n                &quot;id&quot;: 24,  //试卷id\n                &quot;name&quot;: &quot;aaa&quot;,  //试卷名称\n                &quot;limitStartTime&quot;: null,\n                &quot;limitEndTime&quot;: null\n            }\n        ],\n        &quot;timeLimitPaper&quot;: [  //时段试卷\n            {\n                &quot;id&quot;: 24,  //试卷id\n                &quot;name&quot;: &quot;202008705&quot;,  //试卷名称\n                &quot;limitStartTime&quot;: 1600704000000,\n                &quot;limitEndTime&quot;: 1664985600000,\n                &quot;startTime&quot;: &quot;2020-09-22 00:00:00&quot;,  //考试开始时间\n                &quot;endTime&quot;: &quot;2022-10-06 00:00:00&quot;  //考试结束时间\n            }\n        ],\n        &quot;classPaper&quot;: [  //班级试卷\n            {\n                &quot;paperId&quot;: 21,  //试卷id\n                &quot;paperName&quot;: &quot;20200908&quot;,  //试卷名称\n                &quot;className&quot;: &quot;1班&quot;  //班级\n            }\n        ]\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="_4-2-4-任务中心" tabindex="-1"><a class="header-anchor" href="#_4-2-4-任务中心" aria-hidden="true">#</a> 4.2.4 任务中心</h3><ul><li>接口地址：/api/wx/student/dashboard/index</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    token: edadfcc9-4ce5-43a3-bb8f-302c5f7f2c59  //令牌\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: [\n        {\n            &quot;id&quot;: 24,\n            &quot;title&quot;: &quot;基础任务&quot;, //任务标题\n            &quot;paperItems&quot;: [\n                {\n                    &quot;examPaperId&quot;: 19,  //试卷id\n                    &quot;examPaperName&quot;: &quot;基础任务一&quot;,  //试卷名称\n                    &quot;examPaperAnswerId&quot;: 9,  //答卷id\n                    &quot;status&quot;: 2 //答卷状态\n                }\n            ]\n        }\n    ]\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_4-2-4-试卷列表" tabindex="-1"><a class="header-anchor" href="#_4-2-4-试卷列表" aria-hidden="true">#</a> 4.2.4 试卷列表</h3><ul><li>接口地址：/api/wx/student/exam/paper/pageList</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    paperType: 1,  //试卷类型\n    pageIndex: 1,  //页码\n    pageSize: 20  //每页数量\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;total&quot;: 9,\n        &quot;list&quot;: [\n            {\n                &quot;id&quot;: 24,\n                &quot;name&quot;: &quot;固定试卷&quot;, //试卷名称\n                &quot;questionCount&quot;: 1, //题目数量\n                &quot;score&quot;: 50, //分数\n                &quot;createTime&quot;: &quot;2021-09-10 16:06:45&quot;, //创建时间\n                &quot;createUser&quot;: 2, //创建人\n                &quot;subjectId&quot;: 4, //学科\n                &quot;subjectName&quot;: &quot;语文&quot;, //学科名称\n                &quot;paperType&quot;: 1, //试卷类型\n                &quot;frameTextContentId&quot;: 294,  试卷内容\n                &quot;startTime&quot;: &quot;&quot;,  //考试开始时间\n                &quot;endTime&quot;: &quot;&quot;, //考试结束时间\n                &quot;paperTypeStr&quot;: &quot;固定试卷&quot;, //试卷类型\n                &quot;scoreStr&quot;: &quot;5&quot;, //分数\n                &quot;suggestTimeStr&quot;: &quot;20分钟&quot; //考试时长\n            }\n        ]\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_4-2-5-试卷查询" tabindex="-1"><a class="header-anchor" href="#_4-2-5-试卷查询" aria-hidden="true">#</a> 4.2.5 试卷查询</h3><ul><li>接口地址：/api/wx/student/exam/paper/select/24</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;id&quot;: 24, //试卷id\n        &quot;level&quot;: 1,  //年级\n        &quot;subjectId&quot;: 4,  //学科\n        &quot;paperType&quot;: 1,  //试卷类型\n        &quot;name&quot;: &quot;20200912卷&quot;,  //试卷名称\n        &quot;suggestTime&quot;: 30,  //考试时长\n        &quot;limitDateTime&quot;: null,  \n        &quot;titleItems&quot;: [ //标题\n            {\n                &quot;name&quot;: &quot;一、解答题&quot;,  //标题名称\n                &quot;questionItems&quot;: [  //题目列表\n                    {\n                        &quot;id&quot;: 24,  //题目id\n                        &quot;questionType&quot;: 1, //题目类型\n                        &quot;subjectId&quot;: 4, //学科\n                        &quot;title&quot;: &quot;中华四大名著都有哪些，下列正确的是&quot;,  //题干\n                        &quot;gradeLevel&quot;: 1, //年级\n                        &quot;items&quot;: [  //选项\n                            {\n                                &quot;prefix&quot;: &quot;A&quot;,  //选项标识\n                                &quot;content&quot;: &quot;红楼梦&quot;,  //选项内容\n                                &quot;score&quot;: null //分数\n                            }\n                        ],\n                        &quot;analyze&quot;: &quot;题目比较简单，自行分析&quot;, //解析\n                        &quot;correctArray&quot;: null,  //标答\n                        &quot;correct&quot;: &quot;A&quot;,  //标答\n                        &quot;score&quot;: &quot;2.5&quot;, //得分\n                        &quot;difficult&quot;: 3, //难度\n                        &quot;itemOrder&quot;: 1, //题目排序\n                        &quot;knowledgeIdList&quot;: [ //题目知识点\n                            8,\n                            9\n                        ]\n                    }\n                ]\n            }\n        ],\n        &quot;score&quot;: &quot;20&quot;, //试卷得分\n        &quot;classes&quot;: null //班级\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h3 id="_4-2-6-答卷列表" tabindex="-1"><a class="header-anchor" href="#_4-2-6-答卷列表" aria-hidden="true">#</a> 4.2.6 答卷列表</h3><ul><li>接口地址：/api/wx/student/exam/paper/pageList</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    pageIndex: 1,  //页码\n    pageSize: 20  //每页数量\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;total&quot;: 248,\n        &quot;list&quot;: [\n            {\n                &quot;id&quot;: 262,\n                &quot;createTime&quot;: &quot;2021-09-15 14:42:22&quot;,  //提交时间\n                &quot;userScore&quot;: &quot;0&quot;,  //得分\n                &quot;subjectName&quot;: &quot;语文&quot;, //学科\n                &quot;subjectId&quot;: 4, //学科\n                &quot;questionCount&quot;: 2, //题目数量\n                &quot;questionCorrect&quot;: 1, //正确题数\n                &quot;paperScore&quot;: &quot;1&quot;, //试卷总分\n                &quot;doTime&quot;: &quot;2秒&quot;, //耗时\n                &quot;paperType&quot;: 7, //试卷类型\n                &quot;paperTypeStr&quot;: &quot;随机试卷&quot;, //试卷类型\n                &quot;systemScore&quot;: &quot;0&quot;, //自动批改得分\n                &quot;status&quot;: 2, //状态\n                &quot;paperName&quot;: &quot;智能训练试卷 - 51&quot;, //试卷名称\n                &quot;userName&quot;: null\n            }\n        ]\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_4-2-7-试卷提交" tabindex="-1"><a class="header-anchor" href="#_4-2-7-试卷提交" aria-hidden="true">#</a> 4.2.7 试卷提交</h3><ul><li>接口地址：/api/wx/student/exampaper/answer/answerSubmit</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &quot;1_42_1&quot;: &quot;A&quot; //答题信息\n    &quot;id&quot;: &quot;78&quot; //试卷id\n    &quot;doTime&quot;: 3  //耗时\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: &quot;0&quot;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-2-8-获取当前用户信息" tabindex="-1"><a class="header-anchor" href="#_4-2-8-获取当前用户信息" aria-hidden="true">#</a> 4.2.8 获取当前用户信息</h3><ul><li>接口地址：/api/wx/student/user/current</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;id&quot;: 24,\n        &quot;userUuid&quot;: &quot;d2d29da2-dcb3-4013-b874-727626236f47&quot;, //用户uuid\n        &quot;userName&quot;: &quot;student&quot;, //用户名\n        &quot;realName&quot;: &quot;学生&quot;, //真实姓名\n        &quot;age&quot;: 18, //年龄\n        &quot;role&quot;: 1, //角色\n        &quot;sex&quot;: 1, //性别\n        &quot;birthDay&quot;: &quot;2019-09-17&quot;, //生日\n        &quot;phone&quot;: &quot;158800882&quot;, //手机号\n        &quot;lastActiveTime&quot;: &quot;&quot;,\n        &quot;createTime&quot;: &quot;2019-09-07 18:55:02&quot;, //创建时间\n        &quot;modifyTime&quot;: &quot;2021-09-15 18:38:34&quot;, //修改时间\n        &quot;status&quot;: 1, //状态\n        &quot;userLevel&quot;: 1, //年级\n        &quot;userLevelStr&quot;: &quot;一年级&quot;, //年级\n        &quot;classes&quot;: &quot;1班&quot;, //班级\n        &quot;imagePath&quot;: &quot;&quot; //用户头像\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="_4-2-9-用户信息更新" tabindex="-1"><a class="header-anchor" href="#_4-2-9-用户信息更新" aria-hidden="true">#</a> 4.2.9 用户信息更新</h3><ul><li>接口地址：/api/wx/student/user/update</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &quot;realName&quot;: &quot;学生&quot;,  //真实姓名\n    &quot;age&quot;: 18, //年龄\n    &quot;sex&quot;: &quot;1&quot;, //性别\n    &quot;birthDay&quot;: &quot;2019-09-17&quot;,  //出生日期\n    &quot;phone&quot;: &quot;158800882&quot; //手机号\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;id&quot;: 24,\n        &quot;userUuid&quot;: &quot;d2d29da2-dcb3-4013-b874-727626236f47&quot;,  //用户uuid\n        &quot;userName&quot;: &quot;student&quot;, //用户名\n        &quot;realName&quot;: &quot;学生&quot;,  //真实姓名\n        &quot;age&quot;: 18, //年龄\n        &quot;role&quot;: 1, //角色\n        &quot;sex&quot;: 1, //性别\n        &quot;birthDay&quot;: &quot;2019-09-17 00:00:00&quot;, //出生日期\n        &quot;phone&quot;: &quot;158800882&quot;, //手机号\n        &quot;lastActiveTime&quot;: &quot;&quot;, //最好活动时间\n        &quot;createTime&quot;: &quot;2019-09-07 18:55:02&quot;, //创建时间\n        &quot;modifyTime&quot;: &quot;2021-09-23 21:20:34&quot;, //修改时间\n        &quot;status&quot;: 1, //状态\n        &quot;userLevel&quot;: 1, //年级\n        &quot;userLevelStr&quot;: null,  //年级\n        &quot;classes&quot;: null, //班级\n        &quot;imagePath&quot;: &quot;&quot; //头像\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="_4-2-10-用户动态" tabindex="-1"><a class="header-anchor" href="#_4-2-10-用户动态" aria-hidden="true">#</a> 4.2.10 用户动态</h3><ul><li>接口地址：/api/wx/student/user/log</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: [\n        {\n            &quot;id&quot;: 6136,  \n            &quot;userId&quot;: 1, //用户id\n            &quot;userName&quot;: &quot;student&quot;, //用户名\n            &quot;realName&quot;: &quot;学生&quot;, //真实姓名\n            &quot;content&quot;: &quot;student 登录了学之思开源考试系统&quot;, //日志内容\n            &quot;createTime&quot;: &quot;2021-09-24 21:52:05&quot; //创建时间\n        }\n    ]\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_4-2-11-消息列表" tabindex="-1"><a class="header-anchor" href="#_4-2-11-消息列表" aria-hidden="true">#</a> 4.2.11 消息列表</h3><ul><li>接口地址：/api/wx/student/user/message/page</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    pageIndex: 1,  //页码\n    pageSize: 20   //每页数量\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;total&quot;: 7,\n        &quot;list&quot;: [\n            {\n                &quot;id&quot;: 24, //消息\n                &quot;title&quot;: &quot;国庆假说明&quot;,  //消息标题\n                &quot;messageId&quot;: 17,  //消息id\n                &quot;content&quot;: &quot;假期七天请注意安全。。。&quot;,  //消息内容\n                &quot;readed&quot;: true, //是否已读\n                &quot;createTime&quot;: &quot;2021-09-25 14:51:32&quot;, //创建时间\n                &quot;sendUserName&quot;: &quot;admin&quot; //发送人用户名\n            }\n        ]\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_4-2-12-消息详情" tabindex="-1"><a class="header-anchor" href="#_4-2-12-消息详情" aria-hidden="true">#</a> 4.2.12 消息详情</h3><ul><li>接口地址：/api/wx/student/user/message/read/26</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;id&quot;: 24,\n        &quot;title&quot;: &quot;国庆假说明&quot;,  //消息标题\n        &quot;content&quot;: &quot;假期七天请注意安全。。。&quot;,  //消息内容\n        &quot;createTime&quot;: &quot;2021-09-25 14:51:32&quot;,  //创建时间\n        &quot;sendUserId&quot;: 2, //发送人id\n        &quot;sendUserName&quot;: &quot;admin&quot;, //发送人用户名\n        &quot;sendRealName&quot;: &quot;管理员&quot;, //发送人真实姓名\n        &quot;receiveUserCount&quot;: 4,\n        &quot;readCount&quot;: 1 \n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_4-1-13-消息未读数" tabindex="-1"><a class="header-anchor" href="#_4-1-13-消息未读数" aria-hidden="true">#</a> 4.1.13 消息未读数</h3><ul><li>接口地址：/api/wx/student/user/message/unreadCount</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: 0  //未读消息数量\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-1-14-消息标记已读" tabindex="-1"><a class="header-anchor" href="#_4-1-14-消息标记已读" aria-hidden="true">#</a> 4.1.14 消息标记已读</h3><ul><li>接口地址：/api/wx/student/user/message/read/14</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: null\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',74),u={},l=(0,e(3744).Z)(u,[["render",function(n,s){return a}]])},3744:(n,s)=>{s.Z=(n,s)=>{const e=n.__vccOpts||n;for(const[n,a]of s)e[n]=a;return e}}}]);