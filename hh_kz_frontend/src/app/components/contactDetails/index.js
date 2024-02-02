import Fieldset from "../fieldset";
import AutoCompleteSelect from "../autoCompleteSelect";

export default function ContactDetails({ cities }) {
  const onSelect = () => {};
  return (
    <div>
      <h3>Контактные данные</h3>
      <div>
        <Fieldset type="text" placeholder="" size="fieldset-md" label="Имя" />
        <Fieldset
          type="text"
          placeholder=""
          size="fieldset-md"
          label="Фамилия"
        />
        <Fieldset
          type="text"
          placeholder="+7"
          size="fieldset-md"
          label="Мобильный телефон"
        />
        <AutoCompleteSelect
          items={cities}
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
