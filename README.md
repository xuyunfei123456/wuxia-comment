# 武侠风注释生成器

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
├── benchmark/ # 评测目录
│ ├── index.js # 评测入口
│ ├── evaluate.js # 评估器实现
│ ├── analyze.js # 结果分析器
│ └── testcases/ # 测试用例
│ └── models/ # 模型配置

### 不同 Chain 的说明

1. Chain1 (最基础版本)

   - 没有明确需求的提示词

2. Chain2 (改进版本)

   - 明确需求（包含了代码分析、武侠元素映射等步骤）的提示词

3. Chain3 (最终版本)

- 明确需求（包含了代码分析、武侠元素映射等步骤）的提示词
- 拆分提示词

## 赞助商

[前端 + AI 转型探索营](https://appjiz2zqrn2142.h5.xiaoeknow.com/p/course/column/p_673d5557e4b023c058a79b7d)由[302.AI](https://302.ai/)赞助大模型 token。

[302.AI](https://302.ai/)是一个按需付费的一站式 AI 应用平台，开放平台，开源生态

[![645-96-×2](https://github.com/user-attachments/assets/9d416233-bd01-44a9-ac94-91097049aebd)](https://302.ai/)
