# 一个中二的项目

根据代码逻辑为代码生成武侠风格的注释，用于[前端 + AI 转型探索营](https://kyscj.xetlk.com/s/3pm8Df)教学目的

模型：默认使用`Ollama`跑本地的`qwen2.5:7b`模型，请提前[安装](https://ollama.com/library/qwen2.5)

## 使用方式

```bash
npm run wuxia (序号1～3，代表课程中所讲的提示词工程3个阶段) (要生成注释的代码文件目录，可以用examples目录下的文件)

# 比如
npm run wuxia 1 examples/quick_sort1.js
npm run wuxia 2 examples/quick_sort2.js
npm run wuxia 3 examples/quick_sort3.js
```

## 目录结构

wuxia-comment/
├── src/ # 源代码目录
│ ├── index.js # 入口文件，处理命令行参数并调用相应的 chain
│ ├── processCodeFile.js # 文件处理相关函数
│ ├── chain.js # 定义了三条 chain
│ └── prompt.js # 存放所有提示词模板
├── examples/ # 示例代码目录
│ ├── quick_sort1.js # 示例 1（为 chain1 准备）
│ ├── quick_sort2.js # 示例 2（为 chain2 准备）
│ └── quick_sort3.js # 示例 3（为 chain3 准备）

### 不同 Chain 的说明

1. Chain1 (最基础版本)

   - 没有明确需求的提示词

2. Chain2 (改进版本)

   - 明确需求（包含了代码分析、武侠元素映射等步骤）的提示词

3. Chain3 (最终版本)

- 明确需求（包含了代码分析、武侠元素映射等步骤）的提示词
- 拆分提示词
