import Fieldset from "../fieldset";
import { useEffect, useState } from "react";

import classes from "@/app/style/components/education.module.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 10px;
    color: #aaa8a8;
    font-size: 14px;
    line-height: 18px;
    max-width: calc(100% - 240px - 80px);
  }
`;

const EducationDiv = styled.div`
  position: relative;
  margin-bottom: 10px;
  border: 1px solid #e1e1e1;
  padding: 10px 20px;
  border-radius: 4px;
`;

const educationLevels = [
  "Среднее",
  "Высшее",
  "Неоконченное высшее",
  "Магистратура",
];

export default function Education() {
  const [educations, setEducations] = useState([]);

  const onChange = (data) => {
    console.log(data);
  };

  const onChangeData = (e) => {
    const [index, name] = e.target.name.split("-");
    let eds = [...educations];
    eds[index * 1][name] = e.target.value;
    setEducations(eds);
  };

  const removeEdu = (edu) => {
    const eds = [...educations];
    const index = eds.indexOf(edu);
    eds.splice(index, 1);
    setEducations(eds);
  };

  const edusMap = educations.map((item, index) => (
    <EducationDiv key={index} className="education fieldset-md">
      <Fieldset
        type="select"
        placeholder=""
        size="fieldset-md"
        label="Уровень"
        options={educationLevels}
        onChange={onChangeData}
        value={item.level}
        name={index + "-level"}
      />
      <Fieldset
        type="text"
        placeholder="Название или аббревиатура"
        size="fieldset-md"
        label="Учебное заведение"
        onChange={onChangeData}
        value={item.university_name}
        name={index + "-university_name"}
      />
      <Fieldset
        type="text"
        size="fieldset-md"
        label="Факультет"
        onChange={onChangeData}
        value={item.faculty}
        name={index + "-faculty"}
      />
      <Fieldset
        type="text"
        size="fieldset-md"
        label="Специализация"
        onChange={onChangeData}
        value={item.major}
        name={index + "-major"}
      />

      <StyledDiv className="fieldset-md">
        <Fieldset
          type="text"
          size="fieldset-vsm"
          label="Год окончания"
          maxLength="4"
          onChange={onChangeData}
          value={item.end_date}
          name={index + "-end_date"}
        />
        <p>
          Если учитесь в настоящее время, укажите год предпологаемого окончания
        </p>
      </StyledDiv>

      <button className={classes.remove_btn} onClick={() => removeEdu()}>
        X
      </button>
    </EducationDiv>
  ));

  const newEducation = () => {
    setEducations([
      ...educations,
      {
        level: "",
        university_name: "",
        faculty: "",
        major: "",
        end_date: "",
      },
    ]);
  };

  useEffect(() => {
    onChange(educations);
  }, [educations]);

  return (
    <div className="create_resume_block">
      <h3>Образование</h3>

      {edusMap}

      <button className={classes.add_new_edu} onClick={newEducation}>
        {educations.length > 0
          ? "Добавить еще одно образование"
          : "Добавить образование"}
      </button>
    </div>
  );
}
