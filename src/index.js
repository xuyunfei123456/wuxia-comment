import { processCodeFile, cli } from "./processCodeFile.js";
import { RunnableSequence } from "@langchain/core/runnables";
import { chain1, chain2, chain3 } from "./chain.js";

const { whichChain, filePath } = cli();

const chain = [chain1, chain2, chain3][whichChain - 1];
const runnable = RunnableSequence.from(chain);

processCodeFile(filePath, runnable);
