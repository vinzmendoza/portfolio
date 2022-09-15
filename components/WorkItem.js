import { SiGithub } from "react-icons/si";

const WorkItem = ({ path, children, title, githubLink, techUsed }) => {
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
        <ul className="flex flex-row flex-wrap justify-end mb-4 space-x-4">
          {techUsed.map((tech) => (
            <li key={tech} className="italic">
              {tech}
            </li>
          ))}
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

export default WorkItem;
