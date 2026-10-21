import{j as e,r as h}from"./index-DKNSGo3u.js";import{I as b,O as y}from"./CanvasSpike-DjzckkF6.js";function k(o){const n=f(o);return n.length>0&&n.every(s=>/^:?-{2,}:?$/.test(s.trim()))}function f(o){let n=o.trim();return n.startsWith("|")&&(n=n.slice(1)),n.endsWith("|")&&(n=n.slice(0,-1)),n.split("|").map(s=>s.trim())}function g(o){return o.toLowerCase().replace(/[`*_~[\]()]/g,"").replace(/[^\p{L}\p{N}\s-]/gu,"").trim().replace(/\s+/g,"-")}function w(o){const n=o.replace(/\r\n?/g,`
`).split(`
`),s=[];let t=0;for(;t<n.length;){const r=n[t];if(!r.trim()){t++;continue}if(/^```/.test(r.trim())){const i=r.trim().slice(3).trim(),a=[];for(t++;t<n.length&&!/^```/.test(n[t].trim());)a.push(n[t]),t++;t++,s.push({type:"code",lang:i,text:a.join(`
`)});continue}if(/^(---|\*\*\*|___)\s*$/.test(r.trim())){s.push({type:"hr"}),t++;continue}const l=/^(#{1,4})\s+(.*)$/.exec(r.trim());if(l){s.push({type:"h",level:l[1].length,text:l[2].trim()}),t++;continue}if(r.includes("|")&&t+1<n.length&&k(n[t+1])){const i=f(r);t+=2;const a=[];for(;t<n.length&&n[t].includes("|")&&n[t].trim();)a.push(f(n[t])),t++;s.push({type:"table",head:i,rows:a});continue}if(/^>\s?/.test(r.trim())){const i=[];for(;t<n.length&&/^>\s?/.test(n[t].trim());)i.push(n[t].trim().replace(/^>\s?/,"")),t++;s.push({type:"quote",text:i.join(" ")});continue}const d=/^(\s*)[-*+]\s+(.*)$/,c=/^(\s*)(\d+)\.\s+(.*)$/;if(d.test(r)||c.test(r)){const i=c.test(r)&&!d.test(r),a=[];for(;t<n.length;){const p=n[t],u=i?c.exec(p):d.exec(p);if(!u)break;const j=u[1].length,v=i?u[3]:u[2];a.push({text:v,depth:j>=2?1:0}),t++}s.push({type:i?"ol":"ul",items:a});continue}const m=[];for(;t<n.length&&n[t].trim()&&!/^(#{1,4}\s|```|>|\s*[-*+]\s|\s*\d+\.\s)/.test(n[t])&&!/^(---|\*\*\*|___)\s*$/.test(n[t].trim())&&!(n[t].includes("|")&&t+1<n.length&&k(n[t+1]));)m.push(n[t].trim()),t++;m.length?s.push({type:"p",text:m.join(" ")}):t++}return s}const N=/(\*\*[^*]+\*\*)|(`[^`]+`)|(\[[^\]]+\]\([^)]+\))|(\*[^*\n]+\*)/g;function A(o){const n=[];let s=0;for(const t of o.matchAll(N)){const r=t.index??0;r>s&&n.push({kind:"text",text:o.slice(s,r)});const l=t[0];if(l.startsWith("**"))n.push({kind:"strong",text:l.slice(2,-2)});else if(l.startsWith("`"))n.push({kind:"code",text:l.slice(1,-1)});else if(l.startsWith("[")){const d=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(l);d?n.push({kind:"link",text:d[1],href:d[2]}):n.push({kind:"text",text:l})}else n.push({kind:"em",text:l.slice(1,-1)});s=r+l.length}return s<o.length&&n.push({kind:"text",text:o.slice(s)}),n}function C(o){return o.filter(n=>n.type==="h"&&n.level>=2&&n.level<=3).map(n=>({id:g(n.text),level:n.level,text:n.text}))}function x({text:o}){return e.jsx(e.Fragment,{children:A(o).map((n,s)=>{if(n.kind==="strong")return e.jsx("strong",{className:"font-semibold text-slate-900 dark:text-slate-100",children:n.text},s);if(n.kind==="em")return e.jsx("em",{className:"not-italic text-slate-600 dark:text-slate-300",children:n.text},s);if(n.kind==="code")return e.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5 font-mono text-[0.92em] text-rose-600 dark:bg-slate-800 dark:text-rose-300",children:n.text},s);if(n.kind==="link"){const t=n.href.startsWith("#");return e.jsx("a",{href:n.href,...t?{}:{target:"_blank",rel:"noreferrer"},className:"text-blue-600 underline decoration-blue-300 hover:text-blue-700 dark:text-blue-400 dark:decoration-blue-700",children:n.text},s)}return e.jsx("span",{children:n.text},s)})})}function I({blocks:o,className:n=""}){return e.jsx("div",{className:`text-[13px] leading-relaxed text-slate-700 dark:text-slate-300 ${n}`,children:o.map((s,t)=>{switch(s.type){case"h":{const r=g(s.text);return s.level===1?e.jsx("h1",{id:r,className:"mb-3 scroll-mt-20 text-lg font-bold text-slate-900 dark:text-slate-50",children:e.jsx(x,{text:s.text})},t):s.level===2?e.jsx("h2",{id:r,"data-role":"help-section",className:"mb-2 mt-6 scroll-mt-20 border-b border-slate-100 pb-1 text-[15px] font-semibold text-slate-900 dark:border-slate-800 dark:text-slate-100",children:e.jsx(x,{text:s.text})},t):s.level===3?e.jsx("h3",{id:r,className:"mb-2 mt-4 scroll-mt-20 text-[13px] font-semibold text-slate-800 dark:text-slate-100",children:e.jsx(x,{text:s.text})},t):e.jsx("h4",{id:r,className:"mb-1 mt-3 scroll-mt-20 text-[12px] font-semibold text-slate-700 dark:text-slate-200",children:e.jsx(x,{text:s.text})},t)}case"p":return e.jsx("p",{className:"my-2",children:e.jsx(x,{text:s.text})},t);case"ul":return e.jsx("ul",{className:"my-2 space-y-1",children:s.items.map((r,l)=>e.jsxs("li",{className:`flex gap-2 ${r.depth>0?"ml-5":""}`,children:[e.jsx("span",{className:"mt-[2px] shrink-0 text-slate-400 dark:text-slate-500",children:r.depth>0?"◦":"•"}),e.jsx("span",{children:e.jsx(x,{text:r.text})})]},l))},t);case"ol":return e.jsx("ol",{className:"my-2 space-y-1",children:s.items.map((r,l)=>e.jsxs("li",{className:`flex gap-2 ${r.depth>0?"ml-5":""}`,children:[e.jsxs("span",{className:"mt-[1px] shrink-0 font-mono text-[11px] text-blue-600 dark:text-blue-400",children:[l+1,"."]}),e.jsx("span",{children:e.jsx(x,{text:r.text})})]},l))},t);case"code":return e.jsx("pre",{className:"my-2 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-3 font-mono text-[11.5px] leading-relaxed text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300",children:e.jsx("code",{children:s.text})},t);case"quote":return e.jsx("blockquote",{className:"my-2 rounded-r-lg border-l-4 border-blue-300 bg-blue-50/70 px-3 py-2 text-[12px] text-slate-600 dark:border-blue-700 dark:bg-blue-950/40 dark:text-slate-300",children:e.jsx(x,{text:s.text})},t);case"table":return e.jsx("div",{className:"my-3 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700",children:e.jsxs("table",{className:"w-full border-collapse text-left text-[12px]",children:[e.jsx("thead",{className:"bg-slate-50 text-slate-500 dark:bg-slate-800/60 dark:text-slate-400",children:e.jsx("tr",{children:s.head.map((r,l)=>e.jsx("th",{className:"border-b border-slate-200 px-2.5 py-1.5 font-medium dark:border-slate-700",children:e.jsx(x,{text:r})},l))})}),e.jsx("tbody",{children:s.rows.map((r,l)=>e.jsx("tr",{className:"border-b border-slate-100 last:border-0 dark:border-slate-800",children:r.map((d,c)=>e.jsx("td",{className:"px-2.5 py-1.5 align-top text-slate-600 dark:text-slate-300",children:e.jsx(x,{text:d})},c))},l))})]})},t);case"hr":return e.jsx("hr",{className:"my-4 border-slate-200 dark:border-slate-800"},t);default:return null}})})}const P=`# OPC 一人公司 · 使用手册（新手逐步版）

> 这份手册的目标：**你从没接触过这个平台，也能照着它一步步做出一条成品**。
> 全文按"点哪里 → 填什么 → 会看到什么 → 出问题怎么办"写，每个操作步骤都不跳步。
> 遇到看不懂的词，翻到最后的「术语表」。

---

## 目录

1. [十分钟跑通第一条流水线](#1-十分钟跑通第一条流水线)
2. [界面总览：屏幕上的每一块是什么](#2-界面总览屏幕上的每一块是什么)
3. [节点：六个类型分别干什么](#3-节点六个类型分别干什么)
4. [连接与数据流：{{input}} 怎么用](#4-连接与数据流input-怎么用)
5. [执行体：把节点接到真实模型上](#5-执行体把节点接到真实模型上)
6. [运行、失败排查与撤销](#6-运行失败排查与撤销)
7. [图像生成与同图微调](#7-图像生成与同图微调)
8. [视频生成与成片（时间线）](#8-视频生成与成片时间线)
9. [数字员工：让 AI 自己拆步骤干活](#9-数字员工让-ai-自己拆步骤干活)
10. [模型服务：填 Key，把模拟换成真生成](#10-模型服务填-key把模拟换成真生成)
11. [知识库：让平台"懂你的业务"](#11-知识库让平台懂你的业务)
12. [作品库 / 我的画布 / 项目](#12-作品库--我的画布--项目)
13. [团队空间：多人协作与权限](#13-团队空间多人协作与权限)
14. [合规审核与用量](#14-合规审核与用量)
15. [公告与工单：接收通知 / 反馈问题](#15-公告与工单接收通知--反馈问题)
16. [对话式创作：自然语言生成画布](#16-对话式创作自然语言生成画布)
17. [反幻觉校验：产物级可信度检查](#17-反幻觉校验产物级可信度检查)
18. [参考视频换品：爆款结构换品重制](#18-参考视频换品爆款结构换品重制)
19. [移动端 H5：手机创作与协作](#19-移动端-h5手机创作与协作)
20. [边缘体验：评论草稿箱与离线提示](#20-边缘体验评论草稿箱与离线提示)
21. [演示模式：免后端快速体验](#21-演示模式免后端快速体验)
22. [开放 API：把平台接进你的自动化](#22-开放-api把平台接进你的自动化)
23. [插件 / 应用市场：把能力装进你的空间](#23-插件--应用市场把能力装进你的空间)
24. [快捷键一览](#24-快捷键一览)
25. [常见问题（FAQ）](#25-常见问题faq)
26. [术语表](#26-术语表)

---

## 1. 十分钟跑通第一条流水线

**目标**：做一张"春季新品海报 + 一句种草文案"，全部用离线模拟跑通（不需要任何 API Key）。

> **第一次进入工作台，画布上已经摆好了本章的成品编排**：两个节点（文本「春季新品推文」→ 图像「春季海报」）加一条连线，标题和提示词都预填好了。你不需要从零搭——对照本章看懂每一块是什么，然后直接点顶部 **▶ 运行图** 就能看到完整闭环。想体验上千节点的压测画布，点状态栏的「节点数」即可随时切换。

### 第 1 步：登录

1. 打开站点首页 → 点右上角 **登录**。
2. 没有账号就点登录框下方的 **注册**，填邮箱 + 密码（≥8 位）+ 昵称。
3. 登录成功后自动进入 **工作台**（地址 \`/app\`）。

> 第一次进入会弹「三步上手」浮层，点 **跳过** 或看完点 **开始创作** 都会关闭，之后可以在右上角 **帮助** 里再看。

### 第 2 步：加第一个节点（写文案）

> 画布上已经有一个预填好的「春季新品推文」节点——你可以直接用它跳到[第 5 步运行](#第-5-步运行)；也可以按下面步骤在别处从零搭一个，顺便学会添加节点。

1. 在画布空白处 **点右键** → 菜单出现「添加节点」。
2. 点 **文本**（图标：文档）。节点出现在你右键的位置。
3. 双击节点标题，输入：\`春季新品推文\`。
4. 选中节点后，右侧出现 **属性面板**；在「提示词」里填：
   \`为春季新品写一条 60 字的种草文案，目标人群是养猫的上班族\`

### 第 3 步：加第二个节点（生成海报）

1. 空白处右键 → 点 **图像**。把它拖到文本节点右侧。
2. 双击标题改为 \`春季海报\`。
3. 属性面板 → 提示词填：\`春季新品海报，柔光，浅绿背景，居中构图\`。
4. 提示词里写上 \`{{input}}\` 就能**接住上游节点的输出**，例如：
   \`根据这段文案生成海报：{{input}}\`

### 第 4 步：连线

1. 鼠标移到 **文本节点右侧的小圆点**（输出锚点）上，光标变成十字。
2. 按住左键，拖到 **图像节点左侧的小圆点**（输入锚点）上松开。
3. 出现一条曲线 = 连线成功。**方向很重要**：数据从上游流向下游。

### 第 5 步：运行

1. 点顶部 **▶ 运行图** 按钮。
2. 按钮会依次变成 \`执行 1/2\` → \`执行 2/2\` → \`✓ 完成\`。
3. 节点右上角出现状态角标：灰点=排队、蓝点=执行中、✓=成功、✕=失败。

### 第 6 步：看产物

1. 图像节点里会直接显示生成的图（离线模式下是可预览的示意图）。
2. 点左侧 **作品库** → 能看到刚才落盘的产物，可预览、下载、删除。
3. 点左侧 **日志** → 看到每次运行的执行体、耗时、产物。

**到这里你已经跑通了完整闭环**。接下来按需往下读：想用真模型看第 10 节；想出自视频看成片看第 8 节。

---

## 2. 界面总览：屏幕上的每一块是什么

从上到下、从左到右：

| 位置 | 叫什么 | 干什么 |
|---|---|---|
| 最上方 | 顶栏 | 左侧显示当前用户名/空间；右侧是「运营后台」（仅管理员可见）与「退出」 |
| 顶栏下方左侧 | **资源导航栏**（细长条） | 12 个入口：空间 / 我的画布 / 项目 / 作品库 / 成片 / 知识库 / 数字员工 / 员工目录 / 模型服务 / 合规 / 日志 / 帮助 |
| 中间大面积 | **画布舞台** | 所有创作发生的地方：节点、连线、缩放平移 |
| 画布右上角 | **属性面板** | 选中节点后出现：类型、尺寸、提示词、执行体、字段 |
| 画布右下 | 小地图 / 缩放控件 | 长按空格拖拽平移；\`+\`/\`-\` 缩放，\`0\` 复位 |
| 最下方 | 状态栏 | 显示 FPS、节点数、连线数、当前缩放、选中数、撤销历史深度；**点「节点数」可切换画布压测档位**（1.2k / 5k / 1万 / 5万） |

**三个最常用的入口**（新手只需先记住这三个）：

- **画布空白处右键** → 加节点
- **选中节点** → 右侧属性面板改参数
- **顶部 ▶ 运行图** → 跑起来

---

## 3. 节点：六个类型分别干什么

| 图标 | 类型 | 默认尺寸 | 用来做什么 | 典型输入 → 输出 |
|---|---|---|---|---|
| 📄（蓝） | **文本** | 220×120 | 写文案、脚本、标题、提示词；也是"胶水"，把上游内容拼起来 | 提示词 → 一段文字 |
| 🖼（绿） | **图像** | 240×160 | 生成图片、做同图微调 | 提示词（可含 \`{{input}}\`）→ 图片 |
| 🎬（红） | **视频** | 240×135 | 文生视频、图生视频 | 提示词或图片 → 视频 |
| 🎵（紫） | **音频** | 220×88 | 配音、TTS | 文本 → 音频 |
| 🤖（橙） | **智能体** | 200×140 | 交给某个数字员工，自动拆步骤执行 | 目标 → 分步结果（可中断待审批） |
| ⌨（青） | **脚本** | 200×120 | 放代码/结构化文本片段，做中间数据 | 任意文本 → 变换后的文本 |

### 常用操作

| 想做什么 | 怎么做 |
|---|---|
| 加节点 | 画布空白处右键 → 选类型 |
| 改标题 | **双击**标题直接输入，回车确认 |
| 改类型 | 选中节点 → 右侧面板「类型」六个图标按钮点一下（多选时批量改） |
| 复制节点 | 选中后 \`Ctrl/Cmd + D\` |
| 删除 | 选中后 \`Delete\` |
| 多选 | 空白处拖框，或按住 \`Shift\` 逐个点 |
| 对齐（多选≥2） | 右侧面板出现「对齐」按钮组：左/中/右、上/中/下 |
| 撤销/重做 | \`Ctrl/Cmd + Z\` / \`Ctrl/Cmd + Shift + Z\` |

---

## 4. 连接与数据流：{{input}} 怎么用

**核心规则一句话**：连线决定"谁先跑"，\`{{input}}\` 决定"把上游的什么塞进来"。

### 连线

1. 从上游节点 **右侧圆点** 拖到下游节点 **左侧圆点**。
2. 一条边 = 一条数据通路。多条边进入同一节点时，内容按顺序拼接。
3. 删除连线：点中连线后按 \`Delete\`。

### \`{{input}}\` 的三种写法

| 写法 | 效果 | 例子 |
|---|---|---|
| \`{{input}}\` | 上游输出原样插入 | \`把它翻译成英文：{{input}}\` |
| 文字 + \`{{input}}\` + 文字 | 拼接 | \`基于这段内容写 3 个标题：\\n{{input}}\` |
| 不写 \`{{input}}\` | 只用本节点自己的提示词，不用上游 | \`生成一张纯色背景图\` |

### 一个真实的例子

\`\`\`
[文本: 写春季新品卖点，目标人群：养猫上班族]
              │
              ▼
[图像: 根据文案生成海报，风格清新：{{input}}]
              │
              ▼
[视频: 让海报轻微动起来（图生视频），提示：镜头缓慢推进]
\`\`\`

### 环形连线的坑

平台会**检测环**：如果 A→B→A 形成闭环，运行按钮会变成 \`⚠ 有环\`，需要先删掉一条线。

---

## 5. 执行体：把节点接到真实模型上

"执行体"= 这个节点到底由谁来干活。

1. 选中节点 → 右侧面板 → **执行体** 下拉。
2. 选择项分三类：
   - **后端编排（OPC API）**：Key 存服务端，最推荐；未配 Key 时自动走离线模拟。
   - **本地/直连模型**：浏览器直连（适合自建服务或调试）。
   - **离线模拟**：不联网也能出确定性结果，用来验证流程。
3. 面板下方 **params** 是执行体自己的参数（如 \`width\`/\`height\`/\`voice\`/\`format\`），选完执行体自动出现。

> 判断有没有真的接到模型：跑完后看「日志」里的 provider 字段。\`mock-*\` = 离线模拟，其它 = 真实调用。

---

## 6. 运行、失败排查与撤销

### 运行

| 按钮状态 | 含义 |
|---|---|
| \`▶ 运行图\` | 空闲，可点 |
| \`执行 3/8\` | 正在跑，第 3 步 |
| \`✓ 完成\` | 全部成功 |
| \`✕ 失败\` | 有节点失败，点节点看红色结果行 |
| \`⚠ 有环\` | 连线成环，需先改连线 |

### 失败怎么办（按顺序检查）

1. **看节点的结果行**：红色文字就是错误原因（如"未配置模型服务"）。
2. **看日志面板**：每次运行的执行体、耗时、错误都在里面。
3. **检查连线**：下游节点是否真的收到了上游内容（把 \`{{input}}\` 临时改成固定文字试）。
4. **检查模型服务**：左侧「模型服务」是否配置了可用厂商 + Key；没配就先跑离线模拟排除流程问题。
5. **检查额度**：左侧「合规 / 用量」看是否超了产物数配额（超限会返回 402，提示升级）。

### 中断与重跑

- 运行中点 \`■ 停止\` 可中断；已完成的节点产物保留。
- 想只重跑某个节点：选中它 → 属性面板 → 「重跑本节点」。

---

## 7. 图像生成与同图微调

### 文生图

1. 加 **图像** 节点，提示词写清"主体 + 风格 + 构图 + 光线"。
2. 执行体选后端编排；\`params\` 里可改 \`width\`/\`height\`。
3. 运行 → 图直接显示在节点里。

**提示词模板（可直接抄）**：

\`\`\`
主体：一只戴围巾的橘猫
场景：冬日午后窗台
风格：柔和插画，浅色背景
构图：居中，留白多
光线：自然侧光
\`\`\`

### 同图微调（改图而不是重画）

1. 选中**已经出图的图像节点**（或作品库里那张图）。
2. 属性面板 → **同图微调 / 以此为底图**，平台会把这张图作为 \`parentArtifactId\` 传下去。
3. 提示词写"**要改什么**"，例如：\`把背景换成浅绿色，猫的姿势保持不变\`。
4. 运行 → 出图与上一版同源，改动可控，不会面目全非。

> 建议：微调时一次只改一个要素（先背景、再光线、最后加文字），比一次全改更好控制。

---

## 8. 视频生成与成片（时间线）

### 文生视频 / 图生视频

1. 加 **视频** 节点。
2. 文生视频：提示词直接写画面描述。
3. 图生视频：先把一张图连进视频节点（或作为首帧），再写"镜头怎么动"，例如 \`镜头缓慢推进，猫的胡须轻动\`。
4. \`params\` 里可选分辨率、时长、方向。

### 成片（把多个素材拼成一条片子）

1. 先把要用的图/视频/音频节点跑出产物。
2. 点左侧 **成片** → 打开时间线编辑器。
3. **加片段**：从下拉里选产物 → 设时长（秒）→ 选转场。
4. **调顺序**：上下移动片段；拖动改时长。
5. 点 **渲染成片**：
   - 服务器装了 FFmpeg → 输出真正的 **MP4**（可在作品库预览）。
   - 没装 FFmpeg → 输出**离线分镜**预览（一样能看到节奏与顺序，用于校对）。
6. 渲染完成的成片会落进作品库，可直接下载交付。

---

## 9. 数字员工：让 AI 自己拆步骤干活

**和"节点"的区别**：节点是"你手动编排的流水线"；数字员工是"给一个目标，它自己拆步骤、逐步执行、关键步骤等你审批"。

### 用一次

1. 点左侧 **数字员工**（或 **员工目录** 里挑人）。
2. 选员工 → 点 **新建任务**。
3. 写 **目标**，越具体越好：
   - ❌ \`做个内容\` 
   - ✅ \`为宠物店春季新品写 3 条小红书文案，每条 100 字内，带 3 个话题标签\`
4. 点 **运行** → 任务开始按步骤推进。
5. 遇到 **待审批** 步骤：任务会**停下来**，页面出现 **通过 / 驳回** 按钮，可填写审批意见。
   - **通过** → 继续跑下一步。
   - **驳回** → 任务终止（可在评论区留下原因）。
6. 跑完的任务有 **交付物**（文案、图片、脚本等），可在任务详情查看、下载。

### 八个数字员工

| 员工 | 适合交给它的活 |
|---|---|
| 内容创作 | 选题、脚本、长文、种草文案 |
| 视觉设计 | 封面、海报、商品图、同图微调 |
| 视频制作 | 分镜、文/图生视频、成片合成 |
| 品牌策划 | 定位、slogan、视觉与语气规范 |
| 销售增长 | 卖点提炼、话术、转化路径 |
| 客户服务 | 咨询应答、FAQ、售后话术 |
| 合规审核 | 广告法用语、绝对化用语自查 |
| 数据分析 | 内容表现复盘、选题建议 |

### 协作：评论与 @

- 任务详情底部是 **评论线程**：写下意见、\`@成员\` 提醒对方。
- 被 @ 的人会在左侧「日志」旁看到红点提示，也能在移动端收到。

---

## 10. 模型服务：填 Key，把模拟换成真生成

1. 点左侧 **模型服务**。
2. 选厂商（DeepSeek / 阿里百炼 / 火山方舟 / OpenAI / 月之暗面 / 智谱 / 自定义兼容）。
3. 填 **API Key**，需要时填 **Base URL** 与 **模型名**（留空用厂商默认）。
4. 点 **保存**：
   - Key **加密后存在服务端**，界面只回显掩码（如 \`sk-****abcd\`）。
   - 保存后，未单独配置 Key 的节点会走这个配置。
5. **测试连通**：填完保存后跑一个文本节点；若返回厂商报错（如 \`api key is invalid\`），说明链路通、只差有效 Key。

> 安全说明：平台只记录调用的厂商/模型/耗时/长度，**不记录提示词全文与密钥**；密钥永远不下发到浏览器。

---

## 11. 知识库：让平台"懂你的业务"

1. 点左侧 **知识库** → **新增学习**。
2. 粘贴一个网页链接（产品介绍、行业报告、竞品页面都行）→ 点 **开始学习**。
3. 平台会：抓取正文 → 生成摘要 → 入库。
4. 之后在**任何提示词里**都能让它生效：写内容时，平台会自动把相关摘要作为背景资料一并送给模型。
5. 需要精修时，可在知识库里**编辑条目**（改摘要、删过期内容）。

**什么时候最有用**：写自家产品文案、答客户问题、做行业选题——把资料喂进去，输出立刻"内行"很多。

---

## 12. 作品库 / 我的画布 / 项目

| 入口 | 是什么 | 关键操作 |
|---|---|---|
| **作品库** | 本空间所有落盘产物（图/视频/音频/成片） | 预览、下载、删除、用某张图做同图微调 |
| **我的画布** | 画布存档 | 保存 / 打开 / 另存为 / 删除；不保存刷新会丢 |
| **项目** | 把画布 + 任务 + 产物归到一个项目下，并绑定数字员工 | 新建项目 → 归入画布/任务 → 进项目看全貌 |

**建议习惯**：一个客户/一条产品线开一个项目，画布按"内容类型"命名（如 \`春季新品-小红书\`）。

---

## 13. 团队空间：多人协作与权限

1. 点左侧 **空间** → **新建空间**（团队空间）。
2. 生成 **邀请码** → 发给同事 → 对方在「空间」里点 **加入**。
3. 空间内三档角色：

| 角色 | 能做什么 |
|---|---|
| 所有者 | 全部权限：改成员角色、删除空间、配置空间模型 Key |
| 成员 | 创作、运行、评论、审批 |
| 只读 | 只能看，不能改 |

4. 顶部可 **切换空间**：切到哪个空间，画布/产物/任务就只显示那个空间的内容。

> 数据隔离：跨空间访问一律返回 404，别人的空间数据你看不到——这是设计要求，不是 bug。

---

## 14. 合规审核与用量

- **合规**：选中一段文案点「自检」，平台会标出广告法风险词（"最"、"第一"、"绝对"等）并给修改建议；生成的敏感内容会进入**待审队列**，由管理员处置。
- **用量**：左侧面板可看当前空间的产物数、模型调用次数与套餐上限；超限时接口会返回 402，页面提示升级。

---

## 15. 公告与工单：接收通知 / 反馈问题

工作台顶栏「帮助」按钮旁边有两个触达入口：**公告铃铛** 与 **反馈**。

### 15.1 看公告（铃铛）

1. 点顶栏 **铃铛** 图标 → 右侧弹出公告抽屉；铃铛上有**红点 + 数字**表示未读条数。
2. 公告按"置顶优先、新在前"排列；每条显示级别（如「重要」「普通」）。
3. 打开抽屉后点过的公告会**自动标记已读**，红点数字随之减少。
4. 看完点抽屉外的空白处（遮罩）即可关闭。

### 15.2 提工单（反馈）

1. 点顶栏 **反馈** 图标 → 弹出工单抽屉。
2. 点 **新建工单** → 选分类（如「功能异常 / 建议反馈 / 账号问题」）→ 填标题和详细描述 → 提交。
3. 工单状态流转：**待处理 → 处理中 → 已解决 → 已关闭**。
4. 点列表中的工单进入**详情线程**：你和运营都可以追加回复，像聊天一样沟通；运营回复后状态自动变为"处理中"。
5. 问题解决了，点 **关闭工单** 结束这条线程。

> 每人同时在开的工单有数量上限（20 条）；提了重复问题可以直接在旧工单里追回复。

---

## 16. 对话式创作：自然语言生成画布

不想一个个拖节点？用一句话让 AI 帮你建好整张图。

### 怎么用
1. 在工作台右上角点 **✨（对话创作）** 图标，打开对话浮层。
2. 描述你的目标，例如「做一张春分茶品海报 + 一句种草文案，发小红书」。
3. 可打开 **知识库** 开关，让这次创作参考你已学习的资料。
4. 点发送 → 平台先用「规划轮」拆成节点和连线，再用「校验轮」自查有没有悬空边、空标签、缺提示词，自动修补后返回一张 **草稿预览卡**。
5. 确认无误后点 **一键落图** → 草稿直接变成画布上的节点，你可以继续微调或运行。

### 会看到什么
- 草稿卡里列出：节点清单、\`{{input}}\` 连线、已自动修补的地方、AI 给的注意事项（notes）、知识库注入了几条、来源与耗时。
- 落图后画布上出现对应节点；未配模型 Key 时节点走离线模拟，也能跑出可预览产物。

### 出问题怎么办
- 卡里提示「需要补充」：按 notes 改描述再发一次。
- 落图后想改：落图只是生成节点，后续和手动画的节点一样可编辑。
- 反幻觉细节见下一节。

## 17. 反幻觉校验：产物级可信度检查

担心 AI 编内容？平台在两层做校验：创作时（上一节的「校验轮」）和产物出来后（本节的「校验产物」）。

### 怎么用
1. 在画布上 **右键** 一个节点 → 选 **节点 → 校验产物**。
2. 平台把节点输出（和原始提示词）送到 \`/chat/verify\`：配置了模型就由模型复核全文；没配模型走 **本地规则**（查空标签、缺提示词、悬空边、成环）。
3. 浮层返回结论：
   - **通过（绿）**：产物结构 / 内容可信。
   - **可修订（琥珀）**：指出具体问题 + 来源（模型复核 / 本地规则），照着改即可。
   - **无产物**：节点还没跑出结果，先运行再校验。

### 什么时候最有用
- 文案 / 海报要对外的场景，发布前右键校验一遍，避免把没验证的内容发出去。

## 18. 参考视频换品：爆款结构换品重制

看到同行一条爆款视频，想「换成我的产品、复用它的结构」重做一条？平台支持你 **主动上传** 参考视频，自动拆解它的「爆款配方」（钩子 / 镜头顺序 / 节奏 / CTA），再把每个镜头改写成你的产品，生成可落画的 DAG 分镜。

> 合规说明：只接受你 **主动上传** 的文件，平台 **不内置任何第三方平台的视频下载 / 爬取入口**。抓取不到参考视频时，就由你自己上传——这正是设计边界。

### 怎么用
1. 左侧资源栏点 **参考视频**（图标为双层方框）。
2. 上传一段 mp4 / mov / webm / m4v（几十秒以内最佳），点 **上传并拆解**。
   - 配了多模态（视觉）模型 → 自动逐镜拆解台词、卖点、景别。
   - 没配视觉模型 / 拉不到帧 → 按 **场景切换** 给「本地兜底」三拍结构，并在配方卡上诚实标注来源，画面内容需你补充。
3. 面板显示 **爆款配方卡**：钩子、每个镜头（景别 / 画面 / 台词 / 时长）、结尾 CTA、音乐情绪。
4. 在「换成我的产品」里填 **产品名称** 与 **卖点**（逗号分隔），可选勾 **知识库**（生成时检索本空间知识库减少编造）。
5. 点 **生成换品分镜** → 平台复用对话式创作的「规划轮 + 校验轮」产出 DAG 草稿，浮层显示节点数 / 连线数与校验结论。
6. 点 **应用到画布** → 草稿节点真实落图，标题 / 提示词已回填，后续按正常流程运行出图、图生视频、时间线成片。

### 出问题怎么办
- **配方卡只显示「本地兜底」、镜头描述很笼统**：说明没配视觉模型或视频无法抽帧。去「模型服务」配一个带视觉能力的模型（如 GLM-4V / Qwen-VL 类）即可拿到完整拆解；或手动在镜头描述里补充你的产品画面。
- **上传失败「仅支持 mp4/mov/webm/m4v」**：文件名后缀不在允许列表，改名或转码后再传。
- **生成分镜后节点为空**：检查产品名称是否填了（空名不会生成）；若仍异常，看后端日志 \`/references/{id}/to-draft\` 是否 402（套餐额度耗尽）或 500。
- **想复用上一条参考**：面板底部「历史参考」会列出本空间上传过的视频，点一下回看配方，不必重复上传。

### 它和「对话式创作」的关系
参考视频是「对话式创作」的 **结构化前置**：视频负责把「爆款骨架」抽出来，产品信息负责把肉填进去。两者最终都落到同一套 DAG 草稿 → 画布 → 执行体链路，所以后续出图 / 出视频 / 成片流程完全一致。

### 镜头级产品替换（进阶：同一视频只换产品画面）
如果只想「视频完全不动、只把里面出现的产品换成我的」，用 **镜头替换** 而不是重新生成分镜：

1. 在配方卡下方切到 **镜头替换** tab。
2. 面板按 **场景切换** 列出每个镜头的时间区间（如 \`0.0–3.2s\`），**勾选** 你要替换的镜头。
3. 上传一张 **产品图**（png / jpg 等），选替换方式：
   - **画中画贴片**：在原视频对应时间区间叠加产品图（适合口播中露出产品）。
   - **全屏替换**：用产品图覆盖对应镜头整段画面。
4. 点 **生成替换视频** → 服务端用 ffmpeg 在选中镜头区间合成，生成的新视频保留原视频其余部分，落为一条视频产物，可在产物区预览 / 下载。

> 前提：服务端需启用 **ffmpeg**（生产部署已自带；演示模式无真实视频合成，会提示「演示模式不支持真实合成」）。未配视觉模型时，镜头时间区间仍由场景切换检测给出，足够支撑镜头级替换。

## 19. 移动端 H5：手机创作与协作

手机浏览器打开站点，登录后自动进入移动端（H5）。功能比 PC 精简，但核心创作与协作都在。

### 对话式创作（手机版）
1. 顶部点 **✨** 打开对话浮层 → 描述目标 → 可选知识库开关 → 发送。
2. 同 PC：先看草稿卡，再选一个 **数字员工** 提交为任务。
3. 提交后自动跳到 **任务** 页签并打开详情，在手机上就能看步骤时间线、审批、看产物。

### 参考视频换品（手机版）
手机上也支持「爆款视频换品」，入口在顶部 **🎬**（与 ✨ 对话创作并列）：

1. 点 **🎬** → 选一个爆款视频上传（mp4 / mov / webm / m4v）→ 服务端拆出「爆款配方」（钩子 / 镜头 / 台词 / CTA / 音乐情绪）。
2. 配方卡右上角标注来源：**多模态拆解** = 模型逐镜分析；**本地兜底** = 未配视觉模型时按场景切换切分（画面内容需人工补充，诚实标注不编造）。
3. 切到 **换品分镜** tab → 填产品名 + 卖点（逗号分隔）→ 可选知识库开关 → 点「生成换品分镜」→ 看草稿卡 → 选一个 **数字员工** 提交为任务（手机无画布，任务体系承接执行）。
4. 切到 **镜头替换** tab → 勾选要替换的镜头（带时间区间）→ 上传产品图 → 选 **画中画贴片** / **全屏替换** → 点「生成替换视频」→ 合成完成后可直接在手机上看视频、下载。

> 同 PC：镜头替换需服务端启用 ffmpeg；仅你主动上传的视频，不上任何第三方平台。

### 任务与协作
- **任务详情**：步骤时间线 + 审批留痕 + 评论线程 + @ 成员。
- **评论草稿箱**：在任务里写评论没发出去就退出？下次进来会自动恢复（顶部有「已恢复草稿」提示），输入即存，发送成功即清。
- **断网提示**：手机没网时顶部出现琥珀色横幅「内容可能不是最新」，恢复网络后自动消失。

### 入口
- 移动端顶部铃铛 = 公告 / @我的通知；右上角「我的」可切空间、看用量。

## 20. 边缘体验：评论草稿箱与离线提示

（PC 端也有的小体验，避免误操作丢内容）

- **评论草稿箱**：在任务详情写评论中途离开，文字会存在本地；回来自动恢复，不发也不丢。
- **断网横幅**：浏览器离线时全局顶部提示，联网即消失。
- 这些只存本地浏览器，换设备不共享，属防丢辅助，不是云端草稿。

## 21. 演示模式：免后端快速体验

没后端也能进工作台看效果？可以。

- **演示版地址**：\`https://arronjack.github.io/\`，打开即进工作台（免登录、用本地演示会话）。
- 顶部有横幅提示「演示模式 · 数据仅本地」，所有操作不联网、不落服务端。
- 适合：快速看界面、给伙伴演示、验证交互；不适合：多人协作、真实生成、持久保存。
- 想真用：按 \`docs/deploy/README.md\` 自部署后端，或本地 \`npm run dev\` 起前后端。

---

## 22. 开放 API：把平台接进你的自动化

想让 CI 流水线、外部工具、自己的小程序直接调本平台？用 **API 密钥**。

### 签发一把密钥
1. 左侧资源栏点 **API 密钥**（在「模型服务」下面）。
2. 填用途名称 → 勾 **可写**（不勾就只有读权限）→ 点 **签发**。
3. 面板会显示一串 \`opc_xxxx…\` 明文 —— **只显示这一次**，服务端只存 sha256 摘要，之后取不回。立刻复制保存。

> 密钥默认绑定**当前空间**；每个用户最多 20 把有效密钥。

### 调用
把密钥放进请求头（也支持 \`Authorization: Bearer opc_xxx\`）：

\`\`\`bash
curl -H "X-OPC-Key: opc_xxxxxxxx" https://你的后端/api/v1/open/whoami
\`\`\`

受管端点（面板底部有实时清单，也可用 \`GET /api/v1/open/catalog\` 自描述）：

| 方法 | 路径 | 作用 | 需要 |
|---|---|---|---|
| GET | \`/api/v1/open/whoami\` | 回显密钥绑定的身份与空间 | 读 |
| GET | \`/api/v1/open/catalog\` | 受管端点清单 | 读 |
| GET | \`/api/v1/open/tasks\` | 列出本空间的数字员工任务 | 读 |
| POST | \`/api/v1/open/tasks\` | 创建任务 | **可写** |
| GET | \`/api/v1/open/artifacts\` | 列出本空间的产物 | 读 |

创建任务的例子：

\`\`\`bash
curl -X POST -H "X-OPC-Key: opc_xxxxxxxx" -H "Content-Type: application/json" \\
  -d '{"employee_id":"copywriter","goal":"写一套秋季新品推文"}' \\
  https://你的后端/api/v1/open/tasks
\`\`\`

### 安全须知（平台已替你把关）
- **明文不落盘**：服务端只存摘要 + 前缀 + 尾 4 位，列表接口永远不回明文。
- **密钥即租户键**：一把密钥只能看到它绑定空间的数据，跨空间一律看不到。
- **成员关系实时校验**：共享空间里被移出成员，密钥立刻失效。
- **账号禁用即刻失效**：与登录令牌同一套语义。
- **可随时吊销**：面板点「吊销」即失效，不可恢复；签发与吊销都留审计。

---

## 23. 插件 / 应用市场：把能力装进你的空间

插件市场是平台的「能力货架」：官方把内置能力（参考视频换品、对话式创作、知识库等）和运营上架的插件 / 模板 / 集成放在一个目录里，你浏览后一键装进当前空间。

### 怎么用

1. 点画布左侧资源栏的 **「插件市场」**。
2. 面板上半是「当前空间已安装」，下半是「目录」。
3. 看到想要的项，点 **「安装到本空间」**；装过的项会显示「已安装」标记。
4. 不需要了就点已安装列表里的 **「卸载」**。

### 几个要点

- **按空间隔离**：安装记录挂在当前空间上，切换到别的空间看到的是另一份清单，互不影响。
- **团队空间共享**：空间里任一有编辑权限的成员都能安装 / 卸载，装完所有成员都能用。
- **目录谁维护**：内置项来自平台发布；运营上架项由管理员在运营后台「系统」页签上架 / 下架，上架后你这里立即可见。
- **骨架阶段**：当前版本安装的是「能力开关」记录（表示这个空间启用了该能力），后续版本会在这里放真正可安装的插件包。

---

## 24. 快捷键一览

| 快捷键 | 作用 |
|---|---|
| \`Ctrl/Cmd + Z\` | 撤销 |
| \`Ctrl/Cmd + Shift + Z\` | 重做 |
| \`Ctrl/Cmd + D\` | 复制选中节点 |
| \`Delete\` / \`Backspace\` | 删除选中节点或连线 |
| \`Shift + 点击\` | 加选 |
| 空白处拖框 | 框选 |
| 空格 + 拖拽 | 平移画布 |
| 滚轮 | 缩放 |
| \`0\` | 缩放复位 |
| \`Esc\` | 关闭弹层 / 取消连线 |
| 双击节点标题 | 直接改名 |

---

## 24. 常见问题（FAQ）

**Q1：一定要自己有模型 Key 吗？**
不必须。没配 Key 时走**离线模拟**，画布、数字员工、成片、知识库全链路都能跑，用来验证流程与练手。配了 Key 就自动切换成真实生成。

**Q2：运行了但节点里什么都没有？**
按顺序查：① 节点的结果行有红字吗 → 有就看错误；② 日志里 provider 是 \`mock-*\` 吗 → 是的话说明在用模拟（也会有产物）；③ 是不是节点太小放不下预览 → 拉大节点。

**Q3：\`{{input}}\` 没生效？**
先确认**有没有连线**（连线才传数据）；再确认下游提示词里确实写了 \`{{input}}\`；最后看上游节点是否成功产出（失败节点没有输出）。

**Q4：图和上一张完全不一样了？**
说明是**重新生成**而不是微调。微调必须选"以此为底图/同图微调"，且提示词只描述要改的部分。

**Q5：刷新后画布空了？**
画布需要**保存**（「我的画布」→ 保存）。未保存的改动只在当前会话内。

**Q6：成片没出 MP4？**
服务器没有 FFmpeg 时会输出**离线分镜**（可预览、能校对节奏）。装上 FFmpeg 后自动输出 MP4。

**Q7：我的数据别人能看到吗？**
不能。每个账号有独立空间，服务端按空间隔离；团队协作必须由所有者发邀请码加入。

**Q8：哪里看谁改了/跑了什么？**
左侧 **日志**（执行历史）与 **审计日志**（管理员后台可看全平台、可导出 CSV）。

---

## 25. 术语表

| 词 | 意思 |
|---|---|
| **节点** | 画布上的一块"工序"，有类型（文本/图像/视频/音频/智能体/脚本） |
| **连线 / 边** | 节点之间的箭头，表示"数据先经过谁" |
| **DAG** | 有向无环图，平台跑图的顺序依据；成环会拒绝执行 |
| **执行体（Provider）** | 真正干活的实现：后端编排 / 直连模型 / 离线模拟 |
| **params** | 执行体的参数（尺寸、时长、音色等） |
| **产物（Artifact）** | 跑出来的结果文件（图片/视频/音频/成片），落在作品库 |
| **落盘** | 把结果保存到服务端，得到稳定链接（而不是内嵌一大串 base64） |
| **数字员工** | 会自动拆步骤执行的 AI 角色，关键步骤等你审批 |
| **审批留痕** | 谁在什么时候通过/驳回，记录在任务详情里 |
| **空间** | 数据隔离的单位：个人空间 + 若干团队空间 |
| **租户 / 空间键** | 服务端用来区分"这批数据属于谁"的标识 |
| **知识库回灌** | 把学到的资料在生成时自动作为背景送给模型 |
| **成片时间线** | 把多个素材按顺序/时长拼成一条视频的编辑器 |
| **离线模拟（mock）** | 不联网也能产出确定性结果的模式，用于练手与验证流程 |

---

## 需要更多帮助？

- 工作台右上角 **帮助** 随时打开本手册。
- 想了解平台本身（服务、方案、能力）→ 回到站点首页 \`/\`。
- 管理员（运营后台）：用户管理 / 空间 / 商业化 / 内容 / 审计 / 合规 / 系统（含快照备份与恢复）。
`;function _({onClose:o}){const[n,s]=h.useState(""),[t,r]=h.useState(""),l=h.useMemo(()=>w(P),[]),d=h.useMemo(()=>C(l),[l]),c=h.useMemo(()=>{const a=n.trim().toLowerCase();return a?d.filter(p=>p.text.toLowerCase().includes(a)):d},[d,n]),m=a=>{r(a);const p=document.getElementById(a);p==null||p.scrollIntoView({block:"start",behavior:"smooth"})},i=()=>{try{localStorage.removeItem(y)}catch{}o(),window.location.reload()};return e.jsx("div",{"data-role":"help-mask",className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4",children:e.jsxs("div",{"data-role":"help-panel",className:"flex max-h-[90vh] w-full max-w-[95vw] flex-col rounded-xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900 md:max-w-5xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2 border-b border-slate-100 px-4 py-3 dark:border-slate-800",children:[e.jsxs("h2",{className:"flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100",children:[e.jsx("span",{className:"flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",children:e.jsx(b,{name:"help",size:15})}),"使用手册"]}),e.jsx("span",{className:"hidden text-[11px] text-slate-400 sm:inline dark:text-slate-500",children:"从建节点到出成片，逐步照做即可"}),e.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[e.jsx("input",{"data-role":"help-search",value:n,onChange:a=>s(a.target.value),placeholder:"搜索章节（如 成片 / 模型 / 快捷键）",className:"w-40 rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 outline-none focus:border-blue-400 sm:w-56 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"}),e.jsxs("button",{"data-role":"help-close",onClick:o,className:"flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 hover:border-blue-400 hover:text-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400",children:[e.jsx(b,{name:"close",size:13}),"关闭"]})]})]}),e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden md:flex-row",children:[e.jsx("nav",{"data-role":"help-nav",className:"flex shrink-0 gap-1 overflow-x-auto border-b border-slate-100 px-3 py-2 md:w-[15rem] md:flex-col md:gap-0.5 md:overflow-y-auto md:border-b-0 md:border-r md:py-3 dark:border-slate-800",children:c.length===0?e.jsx("p",{className:"px-2 py-3 text-[11px] text-slate-400 dark:text-slate-500",children:"没有匹配的章节"}):c.map(a=>e.jsx("button",{"data-role":`help-nav-${a.id}`,onClick:()=>m(a.id),className:`shrink-0 whitespace-nowrap rounded-md px-2.5 py-1.5 text-left text-xs md:whitespace-normal ${a.level===3?"md:pl-5":""} ${a.id===t?"bg-blue-50 font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-400":"text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"}`,children:a.text},a.id))}),e.jsxs("div",{"data-role":"help-content",className:"flex-1 overflow-y-auto px-5 py-4",children:[e.jsx(I,{blocks:l}),e.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4 dark:border-slate-800",children:[e.jsxs("button",{"data-role":"help-replay-onboarding",onClick:i,className:"flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-blue-400 hover:text-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400",children:[e.jsx(b,{name:"rotate-ccw",size:13}),"重新观看新手引导"]}),e.jsx("button",{"data-role":"help-to-top",onClick:()=>{var a;return m(((a=d[0])==null?void 0:a.id)??"")},className:"rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-blue-400 hover:text-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300",children:"回到顶部"}),e.jsx("span",{className:"text-[11px] text-slate-400 dark:text-slate-500",children:"手册源文件：docs/09-user-manual.md（与代码同源维护）"})]})]})]})]})})}export{_ as default};
