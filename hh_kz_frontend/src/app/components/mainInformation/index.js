import AutoCompleteSelectCountries from "../autoCompleteSelectCountries";
import DateSelect from "../dateSelect";
import Radio from "../radio";
import classes from "@/app/style/components/mainInformation.module.css";

import { useEffect, useState } from "react";
import { END_POINT } from "@/config/end-point";
import axios from "axios";

export default function MainInfromation() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(`${END_POINT}/api/region/countries`).then((res) => {
      setCountries(res.data);
    });
  }, []);

  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  return (
    <div className="create_resume_block">
      <h3>Основная информация</h3>
      <div>
        <DateSelect size="fieldset-sm" label="Дата рождения" />
        <Radio
          type="radio"
          size="fieldset-sm"
          label="Пол"
          value1="Мужской"
          value2="Женский"
          name="gender"
          classForLabel={classes.label}
        />
        <AutoCompleteSelectCountries
          type="text"
          countries={countries}
          onSelect={onSelect}
          size="fieldset-md"
          placeholder="Начните вводить здесь"
          label="Гражданство"
        />
        <Radio
          type="radio"
          size="fieldset-sm"
          label="Опыт работы"
          value1="Есть опыт работы"
          value2="Нет опыта работы"
          name="experience"
          classForLabel={classes.label}
        />
      </div>
    </div>
  );
}
