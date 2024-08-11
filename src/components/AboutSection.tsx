import React from "react"

const webMobileSkills = [
  "ReactJS", "NextJS", "Android Java", "GraphQL", "Tailwind CSS", "HTML5"
]

const backendSkills = [
  "NodeJS", "Java EE", "MySQL", "PL/SQL", "Elasticsearch", "Apache Spark", 
  "Apache Kafka", "MongoDB", "BigQuery", "HBase", "Redis"
]

const aiSkills = [
  "Pytorch", "Langchain", "Langsmith", "Numpy", "Pandas"
]

const cloudSkills = [
  "AWS", "GCP", "Azure", "Oracle Cloud", "Terraform", "Serverless", 
  "Docker", "Kubernetes"
]

const languages = [
  "Python", "Java", "Javascript", "Typescript", "Go", "C"
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          My Skills
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div>
            <h1 className="text-2xl font-bold mb-6">Web/Mobile</h1>
            <hr className="w-full h-1 my-4 bg-gray-300 border-0 rounded"></hr>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {webMobileSkills.map((skill, idx) => (
                <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-6">Backend/Databases</h1>
            <hr className="w-full h-1 my-4 bg-gray-300 border-0 rounded"></hr>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {backendSkills.map((skill, idx) => (
                <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-6">AI</h1>
            <hr className="w-full h-1 my-4 bg-gray-300 border-0 rounded"></hr>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {aiSkills.map((skill, idx) => (
                <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-6">Cloud Infra</h1>
            <hr className="w-full h-1 my-4 bg-gray-300 border-0 rounded"></hr>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {cloudSkills.map((skill, idx) => (
                <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-6">Languages</h1>
            <hr className="w-full h-1 my-4 bg-gray-300 border-0 rounded"></hr>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {languages.map((skill, idx) => (
                <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
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