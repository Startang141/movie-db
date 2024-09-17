const Navbar = () => {
  return (
    <div className="text-white flex items-center justify-between py-6 mb-6">
      <h3 className="font-semibold text-3xl italic">Mdiv</h3>
      <ul className="flex items-center gap-3">
        <li>Home</li>
        <li>Movies</li>
        <li>TV</li>
      </ul>
    </div>
  );
};

export default Navbar;
