import { PromptTemplate } from "@langchain/core/prompts";

// 最原始的prompt，没有明确需求
export const prompt1_origin = PromptTemplate.fromTemplate(
  `请根据以下代码的特点，用武侠故事情节为代码添加注释
  
  {code}

  {format_instructions}
  `
);

// 明确需求的prompt
export const prompt2_clarification = PromptTemplate.fromTemplate(`
  请为以下代码生成武侠风格的注释。
  
  原代码：
  {code}
  
  请按以下步骤处理：
  
  1. 分析代码的关键信息：
     - 主要功能是什么？
     - 有哪些关键组件？
     - 核心算法/流程是什么？
     - 存在哪些潜在难点？
  
  2. 将代码关键信息映射为武侠元素：
     - 将主要功能比喻为江湖任务
     - 将关键组件比喻为角色门派
     - 将核心算法比喻为武功招式
     - 将潜在难点比喻为江湖险境
  
  3. 基于武侠元素，构建故事情节，要求：
     - 根据设定中的代码执行流程，构建故事情节
     - 故事情节包含江湖儿女的恩怨情仇，精彩纷呈，引人入胜
  
  4. 根据故事情节生成代码注释，要求：
    - 注释应遵循武侠故事的情节
    - 注释必须完全使用武侠用语，不允许出现任何编程相关术语
    - 注释风格要中二热血，充满江湖豪情
    - 注释要放在对应代码的上方，须以 // 开头
    - 不要翻译或修改代码本身，只添加注释
    - 输出格式必须是代码文本，不要包含任何其他内容
  
  {format_instructions}
  `);

// 拆分明确的需求，步骤1：分析代码
export const prompt3_1_codeAnalysis = PromptTemplate.fromTemplate(`
  分析以下代码片段，提取关键信息：
  {code}
  
  请按以下格式输出文本内容：
  - 主要功能：
  - 关键组件：
  - 核心算法/流程：
  - 潜在难点：
  `);

// 拆分明确的需求，步骤2：武侠世界观设定
export const prompt3_2_wuxiaSetting = PromptTemplate.fromTemplate(`
  基于以下代码分析，创建武侠世界观设定：
  {analysis}
  
  请设定：
  1. 将主要功能比喻为江湖任务
  2. 将关键组件比喻为角色门派
  3. 将核心算法比喻为武功招式
  4. 将潜在难点比喻为江湖险境
  
  要求：比喻要贴切，易理解。
  `);

// 拆分明确的需求，步骤3：情节设计
export const prompt3_3_plotDesign = PromptTemplate.fromTemplate(`
  基于以下武侠设定，构建故事情节：
  {setting}
  
  要求：
  1. 根据设定中的代码执行流程，构建故事情节
  2. 故事情节包含江湖儿女的恩怨情仇，精彩纷呈，引人入胜
  `);

// 拆分明确的需求，步骤4：生成注释
export const prompt3_4_commentGenerator = PromptTemplate.fromTemplate(`
  基于以下武侠故事，为代码生成热血沸腾的武侠风注释：
  {plot}
  
  原代码：
  {code}
  
  要求：
  1. 注释应遵循武侠故事的情节
  2. 注释必须完全使用武侠用语，不允许出现任何编程相关术语
  3. 注释风格要中二热血，充满江湖豪情
  4. 注释要放在对应代码的上方，须以 // 开头
  5. 不要翻译或修改代码本身，只添加注释
  6. 输出格式必须是代码文本，不要包含任何其他内容
  
  {format_instructions}
  `);
