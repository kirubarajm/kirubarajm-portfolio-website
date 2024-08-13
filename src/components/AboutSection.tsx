import React from "react"

const webMobileSkills = [
  "ReactJS", "NextJS", "Android Java", "GraphQL", "Tailwind CSS", "Bootstrap", "HTML5"
]

const backendSkills = [
  "NodeJS", "ExpressJS", "Java EE", "MySQL", "PL/SQL", "MongoDB", "Elasticsearch", "Spark", "Hadoop", "Kafka", "Samza", "BigQuery", "Redis"
]

const aiSkills = [
  "Pytorch", "Langchain", "RAG", "Vector DB", "Large Language Model", "Fine Tuning", "Agents", "Prompt Engineering", "Numpy", "Pandas"
]

const cloudSkills = [
  "AWS", "GCP", "Azure", "Oracle Cloud", "Terraform", "Serverless", "Vercel", "Docker", "Kubernetes"
]

const languages = [
  "Python", "Java", "Javascript", "Typescript", "Go", "C"
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
            <h1 className="text-2xl font-bold mb-4">AI</h1>
            {/* <hr className="w-full h-1 my-2 bg-gray-300 border-0 rounded"></hr> */}
            <div className="flex flex-wrap">
              {aiSkills.map((skill, idx) => (
                <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mb-2 text-gray-500 rounded font-semibold">
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Backend and Databases</h1>
            {/* <hr className="w-full h-1 my-2 bg-gray-300 border-0 rounded"></hr> */}
            <div className="flex flex-wrap">
              {backendSkills.map((skill, idx) => (
                <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mb-2 text-gray-500 rounded font-semibold">
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Web and Mobile</h1>
            {/* <hr className="w-full h-1 my-2 bg-gray-300 border-0 rounded"></hr> */}
            <div className="flex flex-wrap">
              {webMobileSkills.map((skill, idx) => (
                <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mb-2 text-gray-500 rounded font-semibold">
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Cloud Infrastructure</h1>
            {/* <hr className="w-full h-1 my-2 bg-gray-300 border-0 rounded"></hr> */}
            <div className="flex flex-wrap">
              {cloudSkills.map((skill, idx) => (
                <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mb-2 text-gray-500 rounded font-semibold">
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Languages</h1>
            {/* <hr className="w-full h-1 my-2 bg-gray-300 border-0 rounded"></hr> */}
            <div className="flex flex-wrap">
              {languages.map((skill, idx) => (
                <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mb-2 text-gray-500 rounded font-semibold">
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