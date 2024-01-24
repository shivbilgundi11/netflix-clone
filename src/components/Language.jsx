const LanguageDropDown = () => {
  return (
    <select
      name="lang"
      id="lang"
      className="sm:py-1 sm:px-3 bg-transparent sm:mr-3 border border-light-gray rounded-[5px] sm:text-md"
    >
      <option value="English" className=" text-black">
        English
      </option>
      <option value="Hindi" className="text-black">
        हिन्दी
      </option>
    </select>
  );
};

export default LanguageDropDown;
