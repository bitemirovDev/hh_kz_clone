import ModalAddWorkExp from "../modalAddWorkExp";
import WorkingHistoryCard from "../workingHistoryCard";
import AutoCompleteSelectSkills from "../autoCompleteSelectSkills";

import { useState, useEffect } from "react";
import axios from "axios";
import { END_POINT } from "@/config/end-point";

export default function WorkExperience() {
  const [modal, setModal] = useState(false);
  const [working_histories, setWorking_histories] = useState([]);
  const [skills, setSkills] = useState([]);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const addWorkingHistory = (item) => {
    setWorking_histories([...working_histories, item]);
  };

  const removeWorkingHistory = (item) => {
    let whs = [...working_histories];
    let index = whs.indexOf(item);
    whs.splice(index, 1);
    setWorking_histories(whs);
  };

  useEffect(() => {
    axios.get(`${END_POINT}/api/skills`).then((res) => {
      setSkills(res.data);
    });
  }, []);

  const onSelectSkills = (data) => {
    console.log("onSelect", data);
  };

  return (
    <div className="create_resume_block">
      <h3>Опыт работы</h3>
      <fieldset className={"fieldset fieldset-md "}>
        <label style={{ alignItems: "start" }}>Места работы</label>
        <div className="exp" style={{ width: "100%" }}>
          {working_histories.map((item, index) => (
            <WorkingHistoryCard
              key={index}
              workingHistory={item}
              remove={removeWorkingHistory}
            />
          ))}

          <button
            className="button button-primary-bordered"
            onClick={() => openModal()}
          >
            Добавить место работы
          </button>
        </div>
      </fieldset>

      {modal && (
        <ModalAddWorkExp
          closeModal={closeModal}
          addNewWorkingHistory={addWorkingHistory}
        />
      )}

      <fieldset className={"fieldset fieldset-lg "}>
        <label style={{ alignItems: "start" }}>О себе</label>
        <textarea
          rows="8"
          cols="30"
          style={{
            width: "100%",
            outline: "none",
            padding: "10px",
            lineHeight: "18px",
            borderColor: "#e1e1e1",
            fontSize: "14px",
          }}
          placeholder="Расскажите о своих качествах, знаниях, увлечениях, которые, как вам кажется, будут полезны работодателю"
        ></textarea>
      </fieldset>

      <AutoCompleteSelectSkills
        type="text"
        label="Ключевые навыки"
        size="fieldset-lg"
        onSelect={onSelectSkills}
        skills={skills}
        placeholder="Навык, например, JavaScript"
      />
    </div>
  );
}
