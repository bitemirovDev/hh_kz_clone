import styled from "styled-components";
import { useState } from "react";

const EmploymentTypesDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(100% - 240px);

  .checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 0;

    input {
      cursor: pointer;
      width: 15px;
      height: 15px;
    }

    label {
      cursor: pointer;
      width: max-content;
      min-width: max-content;
    }
  }
`;

export default function SelectEmploymentTypes({
  label,
  size,
  employmentTypes,
  ...props
}) {
  const [selectedEmpTypes, setSelectedEmpTypes] = useState([]);

  const onSelect = (e) => {
    let selectedEmpTypesCopy = [...selectedEmpTypes];
    if (
      e.target.checked &&
      !selectedEmpTypesCopy.includes(e.target.value * 1)
    ) {
      setSelectedEmpTypes([...selectedEmpTypes, e.target.value * 1]);
    } else if (
      !e.target.checked &&
      selectedEmpTypesCopy.includes(e.target.value * 1)
    ) {
      const index = selectedEmpTypesCopy.indexOf(e.target.value);
      selectedEmpTypesCopy.splice(index, 1);
      setSelectedEmpTypes(selectedEmpTypesCopy);
    }
  };

  console.log(selectedEmpTypes);

  return (
    <fieldset className={"fieldset " + size}>
      <label style={{ alignItems: "start" }}>{label}</label>
      <EmploymentTypesDiv>
        {employmentTypes.map((type) => (
          <div key={type.id} className="checkbox">
            <input
              type="checkbox"
              value={type.id}
              id={type.id + "-emp-type"}
              name="employmentTypes"
              onChange={onSelect}
            ></input>
            <label htmlFor={type.id + "-emp-type"}>{type.name}</label>
          </div>
        ))}
      </EmploymentTypesDiv>
    </fieldset>
  );
}
