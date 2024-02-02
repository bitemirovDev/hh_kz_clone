// images & icons
import TrashIcon from "@/app/images/trash_icon.svg";

// components
import Fieldset from "../fieldset";

// react\
import Image from "next/image";
import { useState } from "react";

export default function AutoCompleteSelect({
  label,
  placeholder,
  size,
  type,
  items,
  onSelect,
}) {
  const [value, setValue] = useState({ name: "" });
  const [filteredItems, setFilteredItems] = useState("");

  const onClick = (item) => {
    onSelect(item);
    setValue(item);
    setFilteredItems([]);
  };

  const reset = () => {
    setValue({ name: "" });
    onSelect(null);
  };

  const onChange = (e) => {
    if (e.target.value === "") {
      setFilteredItems([]);
    } else {
      setFilteredItems([
        ...items.filter((item) => item.name.includes(e.target.value)),
      ]);
    }
  };

  return (
    <div className={"auto_complete_select " + size}>
      <Fieldset
        label={label}
        placeholder={placeholder}
        size={size}
        type={type}
        onChange={onChange}
      />

      {value.name !== "" && value && (
        <div className="tag">
          <span>{value.name}</span>
          <i onClick={reset}>
            <Image src={TrashIcon} alt="trash-icon" />
          </i>
        </div>
      )}

      {filteredItems.length > 0 && (
        <div className="dropdown">
          {filteredItems.map((item) => (
            <a key={item.id} onClick={() => onClick(item)}>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
