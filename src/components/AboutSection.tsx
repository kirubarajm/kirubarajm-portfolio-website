import React from "react"

const agenticAISkills = [
  "Agent Orchestration", "MCP", "Tool Use", "Bedrock AgentCore", "Agent Memory", "LangChain", "Prompt Engineering", "AI Evaluation", "AI Safety"
]

const aiFoundationSkills = [
  "RAG", "Embeddings", "Transformers", "Fine Tuning", "PyTorch", "Vector DB"
]

const backendSkills = [
  "NodeJS", "gRPC", "DynamoDB", "MongoDB", "Redis", "Elasticsearch", "Kafka", "Spark", "MySQL", "BigQuery"
]

const cloudSkills = [
  "AWS", "CloudFormation", "Kubernetes", "Docker", "GCP", "Azure", "Oracle Cloud", "Terraform", "CI/CD"
]

const webMobileSkills = [
  "ReactJS", "NextJS", "REST API", "WebSockets", "SSE", "GraphQL"
]

const languages = [
  "Python", "Java", "Typescript", "Go"
]

const AboutSection = () => {
  return (
    <section id="skills">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          My Skills
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="space-y-10 md:space-y-6 md:p-4">
          <div>
            <h1 className="text-2xl font-bold mb-4">Agentic AI</h1>
            <div className="flex flex-wrap">
              {agenticAISkills.map((skill, idx) => (
                <p key={idx} className="bg-gray-800 dark:bg-gray-200 px-4 py-2 mr-2 mb-2 text-gray-200 dark:text-gray-500 rounded font-semibold">
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">AI Foundations</h1>
            <div className="flex flex-wrap">
              {aiFoundationSkills.map((skill, idx) => (
                <p key={idx} className="bg-gray-800 dark:bg-gray-200 px-4 py-2 mr-2 mb-2 text-gray-200 dark:text-gray-500 rounded font-semibold">
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Backend & Data</h1>
            <div className="flex flex-wrap">
              {backendSkills.map((skill, idx) => (
                <p key={idx} className="bg-gray-800 dark:bg-gray-200 px-4 py-2 mr-2 mb-2 text-gray-200 dark:text-gray-500 rounded font-semibold">
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Cloud & Infrastructure</h1>
            <div className="flex flex-wrap">
              {cloudSkills.map((skill, idx) => (
                <p key={idx} className="bg-gray-800 dark:bg-gray-200 px-4 py-2 mr-2 mb-2 text-gray-200 dark:text-gray-500 rounded font-semibold">
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Full Stack</h1>
            <div className="flex flex-wrap">
              {webMobileSkills.map((skill, idx) => (
                <p key={idx} className="bg-gray-800 dark:bg-gray-200 px-4 py-2 mr-2 mb-2 text-gray-200 dark:text-gray-500 rounded font-semibold">
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Languages</h1>
            <div className="flex flex-wrap">
              {languages.map((skill, idx) => (
                <p key={idx} className="bg-gray-800 dark:bg-gray-200 px-4 py-2 mr-2 mb-2 text-gray-200 dark:text-gray-500 rounded font-semibold">
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection