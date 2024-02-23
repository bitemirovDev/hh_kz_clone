import Fieldset from "../fieldset";
import { useEffect, useState } from "react";
import { END_POINT } from "@/config/end-point";
import axios from "axios";
import SelectEmploymentTypes from "../selectEmploymentTypes";

export default function EmploymentTypes() {
  const [employment_types, setEmploymentTypes] = useState([]);

  useEffect(() => {
    axios.get(`${END_POINT}/api/employment-types`).then((res) => {
      setEmploymentTypes(res.data);
    });
  }, []);

  return (
    <div className="create_resume_block">
      <h3>Другая важная информация</h3>
      <div>
        <SelectEmploymentTypes
          label="Занятость"
          size="fieldset-md"
          employmentTypes={employment_types}
        />
      </div>
    </div>
  );
}
