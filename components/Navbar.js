import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-filter backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-2xl p-6 mx-auto">
        <div>
          <NextLink href="/">
            <a className="rounded hover:text-gray-400">Vinz Mendoza</a>
          </NextLink>
        </div>

        <div className="">
          <button
            type="button"
            className="relative flex items-center justify-center transition-all bg-gray-600 rounded w-9 h-9 ring-gray-900 hover:ring-2 dark:ring-gray-500 dark:bg-gray-400"
            onClick={handleToggleTheme}
          >
            {mounted &&
              (resolvedTheme === "dark" ? (
                <HiOutlineSun size={24} className="text-gray-100" />
              ) : (
                <HiOutlineMoon size={24} className="text-gray-100" />
              ))}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
