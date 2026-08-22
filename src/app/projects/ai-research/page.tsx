import { CaseStudyPage } from "@/components/case-study";

const sections = [
  {
    title: "Problem",
    content:
      "System analysts and engineers spend significant time understanding existing codebases, finding relevant context, analyzing dependencies and generating technical documentation. Traditional tools provide limited semantic understanding of code and architecture.",
  },
  {
    title: "Context",
    content:
      "Modern software systems are complex with deep dependency chains, distributed architectures and extensive documentation. AI-powered approaches using LLM, RAG and graph-based models can provide deeper understanding and faster context retrieval than traditional search.",
  },
  {
    title: "My Role",
    content: [
      "Research and prototyping of AI-powered code analysis systems",
      "Designing graph-based models for code representation (AST, dependencies, architecture)",
      "Implementing RAG pipelines for code and documentation search",
      "Exploring MCP (Model Context Protocol) for AI agent architectures",
      "Evaluating tools and frameworks: LangChain, vector databases, graph databases",
    ],
  },
  {
    title: "Architecture",
    content:
      "Code → AST / dependencies → Graph → RAG → AI. The system transforms codebases into knowledge graphs with semantic embeddings, enabling natural language queries over code structure, documentation and architectural decisions.",
  },
  {
    title: "Technical Solution",
    content: [
      "Code parsing into AST and dependency graphs",
      "Vector embeddings for semantic search across code and documentation",
      "Graph RAG combining structured graph traversal with vector similarity",
      "AI agents with tool use for automated code exploration and analysis",
      "MCP integration for context-aware AI interactions",
    ],
  },
  {
    title: "Challenges",
    content: [
      "Balancing graph complexity with query performance",
      "Handling diverse codebases and programming languages",
      "Ensuring accuracy of AI-generated analysis and recommendations",
      "Integrating with existing development workflows and tools",
    ],
  },
  {
    title: "Result",
    content: [
      "Prototypes demonstrating semantic code search and analysis capabilities",
      "Frameworks for transforming codebases into queryable knowledge graphs",
      "Insights into practical applications of Graph RAG for engineering work",
      "Ongoing research into AI-assisted system analysis workflows",
    ],
  },
];

const technologies = [
  "LLM",
  "RAG",
  "Graph RAG",
  "Vector Search",
  "Knowledge Graph",
  "MCP",
  "AI Agents",
  "LangChain",
  "Python",
  "Graph Database",
];

export default function AIResearchPage() {
  return (
    <CaseStudyPage
      title="AI / RAG Research"
      subtitle="Graph RAG / Code Graph / AI Agents / MCP"
      sections={sections}
      technologies={technologies}
    />
  );
}
