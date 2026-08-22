import { CaseStudyPage } from "@/components/case-study";

const sections = [
  {
    title: "Problem",
    content:
      "System analysts spent significant time manually processing XSD schemas, converting them to internal formats and creating documentation for development teams. Schema changes required repetitive manual work across multiple documents and code artifacts.",
  },
  {
    title: "Context",
    content:
      "The workflow involved XSD schemas defining data structures for inter-system communication. Each schema change required updates to JSON Schema definitions, validation rules, documentation and processing scripts — creating a bottleneck in the development cycle.",
  },
  {
    title: "My Role",
    content: [
      "Identified the automation opportunity in the schema processing workflow",
      "Designed the XSD → JSON Schema → Python transformation pipeline",
      "Implemented Python scripts for automated schema conversion and code generation",
      "Validated output accuracy against manual processing results",
    ],
  },
  {
    title: "Architecture",
    content:
      "Pipeline architecture: XSD source → parsing layer → JSON Schema generation → Python script generation → validation → output artifacts. Each stage is modular and can be extended for new schema types or output formats.",
  },
  {
    title: "Technical Solution",
    content: [
      "Python-based XSD parser extracting type definitions, constraints and relationships",
      "Automated JSON Schema generation with proper type mapping and validation rules",
      "Code generation for data models, validators and API documentation",
      "Diff-based processing to handle incremental schema changes",
    ],
  },
  {
    title: "Challenges",
    content: [
      "Complex XSD features including namespaces, inheritance and custom types",
      "Maintaining accuracy across automated transformations",
      "Handling edge cases in schema definitions without human intervention",
    ],
  },
  {
    title: "Result",
    content: [
      "5x faster schema processing through automation",
      "Significantly reduced manual work for analysts and developers",
      "Faster turnaround on schema change requests",
      "Reduced errors in schema-to-code translation",
    ],
  },
];

const technologies = ["XSD", "JSON Schema", "Python", "Automation", "XML", "Code Generation"];

export default function SchemaAutomationPage() {
  return (
    <CaseStudyPage
      title="Schema-driven Automation"
      subtitle="XSD → JSON Schema → Python"
      sections={sections}
      technologies={technologies}
    />
  );
}
