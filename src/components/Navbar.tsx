export const Navbar = () => {
  return (
    <nav className="uppercase flex space-x-40 items-center py-12 max-w-screen-xl mx-auto">
      <h1 className="font-semibold nav">Masskara 2023</h1>

      <ul className="flex space-x-24 text-sm">
        <li className="nav">Home</li>
        <li className="nav">About</li>
        <li className="nav">Schedule</li>
      </ul>
    </nav>
  );
};
