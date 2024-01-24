const NavbarItem = (props) => {
  return (
    <div className="text-white font-normal text-sm cursor-pointer hover:text-gray-300 transition">
      {/* eslint-disable-next-line react/prop-types */}
      {props.label}
    </div>
  );
};

export default NavbarItem;
