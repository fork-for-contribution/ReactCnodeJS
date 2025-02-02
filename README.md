# ReactCnodeJS

> 一个 React 的**初/中级**练习项目：重构 CnodeJS 社区

[**在线预览**](https://reactcnodejs.netlify.com/)
![图片预览](static/preview.png)

---

这里**简述下我学习 React 的方式：**

1. 看了一边文档，把‘主要概念’全部看完，‘高级指引’里的根据个人兴趣挑了一些看了看。
2. 紧接着就动手写此项目（大概花了 3 天的业余时间完成）

在此期间根据需要，看了 React-Router 文档，了解了 Redux 的实现原理（但本项目并没有用 Redux）（歪个楼：“我相信任何复杂技术背后的原理都是简单易懂的”）

项目起源于[Vue.js版CnodeJS](https://github.com/fork-for-contribution/VueCnodeJS)。

---

#### 本地运行：

```bash
npm config set prefix /mnt/y/tmp/npm_global_nodejs
npm config set cache /mnt/y/tmp/npm_cache
yarn config set global-folder /mnt/y/tmp/yarn_global_nodejs
yarn config set cache-folder /mnt/y/tmp/yarn_cache

git clone git@github.com:fork-for-contribution/ReactCnodeJS.git
cd ReactCnodeJS
yarn
yarn start
```

P.S.: 默认用的是 3000 端口。

---

#### 技术栈：

[React](https://reactjs.org/)

[React-Router](https://reacttraining.com/react-router/web/example/basic)

[Ant Design](https://ant.design/index-cn)

[CnodeJS API](https://cnodejs.org/api)
