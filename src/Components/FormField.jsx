import React from "react";

const FormField = ({
  labelName,
  placeholder,
  name,
  type,
  value,
  handleSurpriseMe,
  isSurpriseMe,
  handleChange,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 ">
        <label
          htmlFor={name}
          className=" blocck text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ececf1] 
        py-1 px-2 rounded-sm text-black"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border text-gray-900 text-sm rounded-lg
        focus:border-[#4649ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
