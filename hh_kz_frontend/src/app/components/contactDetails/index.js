import Fieldset from "../fieldset";
import AutoCompleteSelectCity from "../autoCompleteSelectCity";

export default function ContactDetails({ cities }) {
  const onSelect = (data) => {
    console.log("onSelect", data);
  };
  return (
    <div>
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
          placeholder=""
          size="fieldset-md"
          label="Город проживания"
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}
