import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiPostgresql,
  SiTailwindcss,
  SiGithub,
  SiTwitter,
  SiInstagram,
} from "react-icons/si";

import Layout from "../components/layout/Page";

const WorkItem = ({ path, children, title, githubLink }) => {
  return (
    <div className="space-y-2">
      <a
        href={path}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col p-4 transition duration-200 ease-in-out border-2 border-gray-900 rounded-lg cursor-pointer group dark:border-gray-100 hover:bg-gray-100/90 dark:hover:bg-gray-800/90"
      >
        <a className="text-xl font-bold transition duration-200 ease-in-out group-hover:text-red-600 dark:group-hover:text-blue-400">
          {title}
        </a>

        <p className="my-6 text-gray-600 dark:text-gray-400">{children}</p>
        <ul className="flex flex-row justify-end mb-4 space-x-4">
          <li className="italic">Next.js</li>
          <li className="italic">Supabase</li>
          <li className="italic">Tailwind CSS</li>
          <li className="italic">React CodeMirror</li>
        </ul>
        <div className="flex flex-row items-center justify-end space-x-4">
          <a href={githubLink} target="_blank" rel="noreferrer">
            <SiGithub
              size="24"
              className="transition duration-200 ease-in-out hover:text-red-600 dark:hover:text-blue-400"
            />
          </a>
        </div>
      </a>
    </div>
  );
};

const SocialLinkItem = ({ children, path, title }) => {
  return (
    <li className="flex flex-row items-start my-4">
      <div className="flex items-center group">
        <span className="transition duration-200 ease-in-out group-hover:text-red-600 dark:group-hover:text-blue-400">
          {children}
        </span>
        <a
          href={path}
          className="ml-2 underline transition duration-200 ease-in-out group-hover:text-red-600 dark:group-hover:text-blue-400"
        >
          {title}
        </a>
      </div>
    </li>
  );
};

const SkillItem = ({ title, path, children }) => {
  return (
    <div className="flex flex-col group">
      <a href={path} target="_blank" rel="noreferrer" aria-label={title}>
        {children}
      </a>
      <a
        href={path}
        target="_blank"
        rel="noreferrer"
        className="mt-2 text-center underline transition duration-200 ease-in-out group-hover:text-red-600 dark:group-hover:text-blue-400"
      >
        {title}
      </a>
    </div>
  );
};

export default function Home() {
  return (
    <Layout title="Home">
      <div className="p-6 space-y-20 sm:space-y-24">
        <section className="flex flex-col-reverse items-center sm:flex-row">
          <div className="flex flex-col sm:pr-8">
            <h1 className="mb-2 text-3xl font-bold">
              Hi, I&apos;m Vinz Mendoza
            </h1>
            <p className="mb-2 text-justify text-gray-600 dark:text-gray-400">
              Front-end developer based in Philippines with a passion for
              developing web applications with React/Next.js
            </p>
          </div>
          <div className="w-20 sm:w-52">
            <Image
              alt="avatar"
              src="/avatar.jpg"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
        </section>

        <section className="flex flex-col">
          <h2 className="mb-6 text-2xl font-bold">Recent work</h2>
          <div className="flex flex-col gap-16">
            <WorkItem
              path="https://archive-app.vercel.app/"
              title="Archive"
              githubLink="https://github.com/vinzmendoza/archive"
            >
              A note-taking web application with markup integration. The app
              allows basic CRUD functionalities. It also has the option to add
              tags and use it for filtering.
            </WorkItem>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold">Skills</h2>
          <p className="mb-16 text-gray-600 dark:text-gray-400">
            Here are the tools/technologies I am most familiar with and use it
            to build websites or web apps.
          </p>
          <div className="grid grid-cols-2 gap-12 justify-items-center sm:flex sm:flex-row sm:justify-between">
            <SkillItem title="Next.js" path="https://nextjs.org/">
              <SiNextdotjs
                size={72}
                className="transition duration-200 group-hover:text-red-600 dark:group-hover:text-blue-400"
              />
            </SkillItem>
            <SkillItem title="Postgresql" path="https://www.postgresql.org/">
              <SiPostgresql
                size={72}
                className="transition duration-200 group-hover:text-red-600 dark:group-hover:text-blue-400"
              />
            </SkillItem>
            <SkillItem title="React.js" path="https://reactjs.org/">
              <SiReact
                size={72}
                className="transition duration-200 group-hover:text-red-600 dark:group-hover:text-blue-400"
              />
            </SkillItem>
            <SkillItem title="Tailwind CSS" path="https://tailwindcss.com/">
              <SiTailwindcss
                size={72}
                className="transition duration-200 group-hover:text-red-600 dark:group-hover:text-blue-400"
              />
            </SkillItem>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold">Socials</h2>
          <p className="text-gray-600 dark:text-gray-400">
            The best way to reach out to me is by messaging me through any of my
            social links below or you can send me an{" "}
            <a
              href="mailto:vinzkarloemendoza@gmail.com"
              className="font-bold underline transition duration-200 ease-in-out hover:text-red-600 dark:hover:text-blue-400"
            >
              email
            </a>
            . I&apos;m looking forward to hear from you.
          </p>
          <ul>
            <SocialLinkItem
              path="https://github.com/vinzmendoza"
              title="Github"
            >
              <SiGithub />
            </SocialLinkItem>
            <SocialLinkItem
              path="https://twitter.com/vinzmendoza_"
              title="Twitter"
            >
              <SiTwitter />
            </SocialLinkItem>
            <SocialLinkItem
              path="https://instagram.com/vinzmendoza_"
              title="Instagram"
            >
              <SiInstagram />
            </SocialLinkItem>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
