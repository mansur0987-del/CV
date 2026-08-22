import { CaseStudyPage } from "@/components/case-study";

const sections = [
  {
    title: "Problem",
    content:
      "A large enterprise group needed to automate tax monitoring reporting to the Federal Tax Service (FNS). The existing process involved manual data extraction from multiple corporate systems including SAP, which was time-consuming, error-prone and difficult to scale across 9 legal entities.",
  },
  {
    title: "Context",
    content:
      "The system needed to serve 40+ users across a group of 9 legal entities. Data sources included SAP ERP and other corporate systems. The architecture required microservices to handle different aspects of data processing, validation and reporting independently.",
  },
  {
    title: "My Role",
    content: [
      "System analysis and requirements gathering from business stakeholders",
      "Designing integration architecture between SAP, PostgreSQL, ClickHouse and internal systems",
      "Defining API contracts and data structures for microservice communication",
      "Technical documentation and architecture decision records",
      "Coordination between business, development and operations teams",
    ],
  },
  {
    title: "Architecture",
    content:
      "Microservice architecture with dedicated services for data extraction, transformation, validation and reporting. SAP integration layer handling data synchronization. PostgreSQL for transactional data, ClickHouse for analytical queries and reporting. Airflow orchestrating data pipelines.",
  },
  {
    title: "Technical Solution",
    content: [
      "REST API layer for inter-service communication with well-defined contracts",
      "ETL pipelines orchestrated by Airflow for data extraction and transformation",
      "Schema-driven data validation ensuring compliance with FNS requirements",
      "Caching layer for frequently accessed reference data",
      "Monitoring and alerting for data pipeline health",
    ],
  },
  {
    title: "Challenges",
    content: [
      "Complex data structures across 9 different legal entities with varying configurations",
      "SAP integration requiring deep understanding of enterprise data models",
      "Strict compliance requirements from FNS with zero tolerance for data errors",
      "Performance requirements for large data volumes in analytical queries",
    ],
  },
  {
    title: "Result",
    content: [
      "5x optimization in time and resource usage through automation",
      "Successfully serving 40+ users across 9 legal entities",
      "Eliminated manual data extraction and validation errors",
      "Reduced report generation time from days to hours",
    ],
  },
];

const technologies = [
  "SAP",
  "PostgreSQL",
  "ClickHouse",
  "REST API",
  "Airflow",
  "Python",
  "SQL",
  "Microservices",
  "Docker",
];

export default function TaxMonitoringPage() {
  return (
    <CaseStudyPage
      title="Tax Monitoring System"
      subtitle="SAP / FNS / Microservices / PostgreSQL / ClickHouse / Airflow"
      sections={sections}
      technologies={technologies}
    />
  );
}
