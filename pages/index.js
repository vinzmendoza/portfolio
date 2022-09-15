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
import SkillItem from "../components/SkillItem";
import WorkItem from "../components/WorkItem";
import SocialLinkItem from "../components/SocialLinkItem";

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
        </section>

        <section className="flex flex-col">
          <h2 className="mb-6 text-2xl font-bold">Recent work</h2>
          <div className="flex flex-col gap-16">
            <WorkItem
              path="https://archive-app.vercel.app/"
              title="Archive"
              githubLink="https://github.com/vinzmendoza/archive"
              techUsed={[
                "Next.js",
                "Supabase",
                "Tailwind CSS",
                "React CodeMirror",
              ]}
            >
              A note-taking web application with markup integration. The app
              allows basic CRUD functionalities. It also has the option to add
              tags and use it for filtering.
            </WorkItem>
            <WorkItem
              path="https://rikai.vercel.app/"
              title="Rikai"
              githubLink="https://github.com/vinzmendoza/rikai"
              techUsed={["Next.js", "Tailwind CSS", "KanjiAlive API"]}
            >
              Rikai is an unofficial web application using the KanjiAlive API
              and it has 1235 kanji available. Users can search kanji by their
              english terms, the character itself and other search terms
              presented in the Rikai web aplication.
            </WorkItem>
            <WorkItem
              path="https://fgo-dmg-calc.vercel.app/"
              title="Fate/Grand Order NP Damage Calculator"
              githubLink="https://github.com/vinzmendoza/fgo-dmg-calc"
              techUsed={[
                "Next.js",
                "Tailwind CSS",
                "fgo-calc",
                "Atlas Academy API",
              ]}
            >
              A damage calculator for the mobile game Fate/Grand Order. A UI
              that interfaces with fgo-calc that handles the necessary
              calculations for the damage calculation specifically the ultimate
              skill known as Noble Phantasms.
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
