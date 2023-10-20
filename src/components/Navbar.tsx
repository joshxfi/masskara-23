export const Navbar = () => {
  return (
    <nav className="uppercase flex space-x-40 items-center py-12 max-w-screen-xl mx-auto px-6">
      <h1 className="font-semibold nav">Masskara 2023</h1>

      <ul className="space-x-24 text-sm hidden lg:flex">
        <li className="nav">Home</li>
        <li className="nav">About</li>
        <li className="nav">Schedule</li>
      </ul>
    </nav>
  );
};
