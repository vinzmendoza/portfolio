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
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </div>
    </li>
  );
};

export default SocialLinkItem;
