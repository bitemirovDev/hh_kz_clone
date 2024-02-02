export default function Fieldset({ size, label, placeholder, type, onChange }) {
  return (
    <fieldset className={"fieldset " + size}>
      <label>{label}</label>
      <input
        className="input"
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      ></input>
    </fieldset>
  );
}
