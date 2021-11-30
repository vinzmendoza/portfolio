const Footer = () => {
  return (
    <footer className="flex justify-center max-w-2xl p-4 mx-auto">
      <p className="text-center text-gray-500">
        &copy; {new Date().getFullYear()} Vinz Mendoza. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
