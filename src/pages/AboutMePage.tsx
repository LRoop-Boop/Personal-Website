import headshot from "../assets/headshot.jpg";

import {
  PythonOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  JavascriptOriginal,
  SqldeveloperOriginal,
  COriginal,
  Html5Original,
  ReactnativeOriginal,
  GitOriginal,
  FirebaseOriginal,
} from "devicons-react";

import { useState } from "react";

const primaryTools = [
  {
    name: "Python",
    icon: PythonOriginal,
    description:
      "I am most confident in my python skills. I have completed countless python projects from algorithms to bespoke rotational animations in pygame.",
  },
  {
    name: "React",
    icon: ReactOriginal,
    description:
      "I frequently work with React, and I love how modular it is to connect it to other frameworks and libraries.",
  },
  {
    name: "React Native",
    icon: ReactnativeOriginal,
    description:
      "I enjoy learning more about design work and implementing creative applications in React Native, as well as its versatility accross platforms.",
  },
  {
    name: "TailwindCSS",
    icon: TailwindcssOriginal,
    description:
      "I enjoy using tailwindcss in my React projects to speed up the process and translate my ideas into the concrete.",
  },
  {
    name: "Git",
    icon: GitOriginal,
    description:
      "I have extensive experience with git and github, and I've worked on several group projects involving complex merges and pull requests.",
  },
  {
    name: "Firebase",
    icon: FirebaseOriginal,
    description:
      "I have integrated Firebase authentication on several projects, and I have also interacted with firestore databases.",
  },
];

const experiencedWith = [
  {
    name: "SQL",
    icon: SqldeveloperOriginal,
    description:
      "I have taken a database course that covered SQL and NOSQL syntax, as well as common practices and methodologies like normalization and the relational model.",
  },
  {
    name: "C",
    icon: COriginal,
    description:
      "I have taken a course that touched on operating systems and C, and I am comfortable with reading the syntax and understanding low-level execution.",
  },
  {
    name: "JavaScript",
    icon: JavascriptOriginal,
    description:
      "I have worked extensively with JavaScript and TypeScript, particularly jsx and tsx with React. ",
  },
  {
    name: "HTML + CSS",
    icon: Html5Original,
    description:
      "I am comfortable with making stylesheets and using traditional HTML along with my JS experince.",
  },
];

function SkillCard({
  name,
  icon: Icon,
  description,
}: {
  name: string;
  icon: React.ComponentType<{ size?: string | number }>;
  description: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-72 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >

        {/* Front */}
        <div className="absolute inset-0 bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center gap-4 backface-hidden">
          <Icon size="60" />

          <div>
            <h3 className="text-xl font-semibold">
              {name}
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              Click to learn more
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-slate-900 text-white rounded-3xl p-6 shadow-sm flex items-center justify-center text-center rotate-y-180 backface-hidden">
          <p className="leading-relaxed text-sm">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">

        
      <section className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-center">
        {/* Headshot */}
        <div className="flex justify-center md:justify-start">
          <img
            src={headshot}
            alt="Professional headshot"
            className="w-48 h-48 md:w-52 md:h-52 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>

        {/* Professional Bio */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Computer Science · Software Development
            </p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Me
            </h1>
          </div>

          <p className="text-slate-600 leading-relaxed">
            I'm a computer science student pursuing a combined bachelor's
            and master's degree, with hands-on experience developing
            software through collaborative client projects. I enjoy
            combining technical problem-solving with thoughtful UI/UX
            design to build applications that are both functional and
            intuitive.
          </p>

          <p className="text-slate-600 leading-relaxed">
            My experience includes React, React Native, Python, and
            Firebase, along with collaborating with teams to turn ideas
            into working software. I'm especially interested in
            opportunities that let me keep learning, tackle meaningful
            challenges, and create useful products.
          </p>
        </div>
      </section>


        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold">
              Primary Tools
            </h2>

            <p className="text-slate-500">
              Technologies I use most frequently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryTools.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                description={skill.description}
              />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold">
              Experienced With
            </h2>

            <p className="text-slate-500">
              Additional technologies and languages I have worked with.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiencedWith.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                description={skill.description}
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}