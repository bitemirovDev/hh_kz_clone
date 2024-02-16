import Fieldset from "../fieldset";
import InputWithSelect from "../inputWithSelect";

export default function Speciality() {
  return (
    <div className="create_resume_block">
      <h3>Специальность</h3>
      <div>
        <Fieldset label="Желаемая должность" size="fieldset-lg" />
        <InputWithSelect size="fieldset-sm" label="Зарплата" />
      </div>
    </div>
  );
}
