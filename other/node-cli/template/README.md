## 操作文档

### 前端项目工作流指引

- 代码规范 eslint
- 代码风格 prettier

安装依赖

```json
{
  "name": "workflow-template",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "prepare": "husky install",
    "commit": "git cz"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@commitlint/cli": "^17.0.3",
    "@commitlint/config-conventional": "^17.0.3",
    "commitizen": "^4.2.5",
    "eslint": "^8.22.0",
    "eslint-config-standard": "^17.0.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-n": "^15.2.4",
    "eslint-plugin-promise": "^6.0.0",
    "eslint-plugin-vue": "^9.3.0",
    "husky": "^8.0.1",
    "lint-staged": "^12.5.0",
    "prettier": "^2.7.1"
  }
}
```
