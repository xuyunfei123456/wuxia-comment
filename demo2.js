import { Ollama } from "@langchain/ollama";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { z } from "zod";
import { StructuredOutputParser } from "langchain/output_parsers";

// 初始化模型
const llm = new Ollama({
  model: "qwen2.5:7b",
  temperature: 0.8,
  verbose: true,
});

// 1. 代码分析Chain
const codeAnalysisPrompt = PromptTemplate.fromTemplate(`
分析以下代码片段，提取关键信息：
{code}

请按以下格式输出：
- 主要功能：
- 关键组件：
- 核心算法/流程：
- 潜在难点：
`);

// 2. 武侠世界观设定Chain
const wuxiaSettingPrompt = PromptTemplate.fromTemplate(`
基于以下代码分析，创建武侠世界观设定：
{analysis}

请设定：
1. 将主要功能比喻为什么江湖任务
2. 将关键组件比喻为什么角色/门派
3. 将核心算法比喻为什么武功招式
4. 将潜在难点比喻为什么江湖险境

要求：比喻要贴切，易理解。
`);

// 3. 情节设计Chain
const plotDesignPrompt = PromptTemplate.fromTemplate(`
基于以下武侠设定，构建故事情节：
{setting}

要求：
1. 以江湖故事形式展开
2. 包含人物对话
3. 体现代码执行流程
4. 融入江湖术语
5. 保持趣味性的同时不失专业性
`);

// 4. 注释生成Chain
const commentGeneratorPrompt = PromptTemplate.fromTemplate(`
基于以下武侠故事，生成代码注释：
{plot}

原代码：
{code}

要求：
1. 保持武侠风格
2. 注释要分段对应代码
3. 既要有趣也要专业
4. 适当使用武侠术语
5. 注释格式规范
`);

// 创建输出结构
const outputParser = StructuredOutputParser.fromZodSchema(
  z.object({
    originalCode: z.string().describe("原始代码"),
    wuxiaComments: z.string().describe("武侠风格注释"),
    story: z.string().describe("完整武侠故事"),
  })
);

// 构建处理链
const chain = RunnableSequence.from([
  {
    code: (input) => input.code,
    analysis: async (input) => {
      const response = await codeAnalysisPrompt
        .pipe(llm)
        .invoke({ code: input.code });
      return response;
    },
  },
  {
    code: (input) => input.code,
    analysis: (input) => input.analysis,
    setting: async (input) => {
      const response = await wuxiaSettingPrompt
        .pipe(llm)
        .invoke({ analysis: input.analysis });
      return response;
    },
  },
  {
    code: (input) => input.code,
    setting: (input) => input.setting,
    plot: async (input) => {
      const response = await plotDesignPrompt
        .pipe(llm)
        .invoke({ setting: input.setting });
      return response;
    },
  },
  async (input) => {
    const comments = await commentGeneratorPrompt
      .pipe(llm)
      .invoke({ plot: input.plot, code: input.code });

    return outputParser.parse(
      JSON.stringify({
        originalCode: input.code,
        wuxiaComments: comments,
        story: input.plot,
      })
    );
  },
]);

// 主函数：使用链式调用
async function generateWuxiaCodeComments(code) {
  try {
    return await chain.invoke({ code });
  } catch (error) {
    console.error("Error generating wuxia comments:", error);
    throw error;
  }
}

// 使用示例
const sampleCode = `
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[0];
    const left = [];
    const right = [];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}
`;

// 测试函数
async function test() {
  const result = await generateWuxiaCodeComments(sampleCode);
  console.log(result);
}

test();
