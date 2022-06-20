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

export default SkillItem;
