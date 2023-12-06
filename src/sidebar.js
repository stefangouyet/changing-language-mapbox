import * as React from "react";
import Select from "react-select";

const Sidebar = ({ handleChangeMapLanguage, currentLanguage }) => {
  const languages = [
    { label: "French", value: "fr" },
    { label: "English", value: "en" },
    { label: "German", value: "de" },
    { label: "Portuguese", value: "pt" },
    { label: "Spanish", value: "es" },
    { label: "Chinese", value: "zh" },
  ];

  const currentLanguageModified = languages.find(
    (option) => option.value === currentLanguage
  );
  return (
    <div className="sidebar">
      <h3>Change Map Language</h3>
      <hr />
      <div>
        <Select
          name="change-language"
          isSearchable={true}
          onChange={handleChangeMapLanguage}
          options={languages}
          value={currentLanguageModified}
          components={{ IndicatorSeparator: () => null }}
        />
      </div>
    </div>
  );
};
export default Sidebar;
