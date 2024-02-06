import Fieldset from "../fieldset";
import AutoCompleteSelectCity from "../autoCompleteSelectCity";
import { useEffect, useState } from "react";
import { END_POINT } from "@/config/end-point";
import axios from "axios";

export default function ContactDetails() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get(`${END_POINT}/api/region/cities`).then((res) => {
      setCities(res.data);
    });
  }, []);

  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  return (
    <div className="create_resume_block">
      <h3>Контактные данные</h3>
      <div>
        <Fieldset type="text" placeholder="" size="fieldset-md" label="Имя" />
        <Fieldset type="text" size="fieldset-md" label="Фамилия" />
        <Fieldset
          type="text"
          placeholder="+7"
          size="fieldset-md"
          label="Мобильный телефон"
        />
        <AutoCompleteSelectCity
          cities={cities}
          type="text"
          placeholder="Начните вводить здесь"
          size="fieldset-md"
          label="Город проживания"
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}
