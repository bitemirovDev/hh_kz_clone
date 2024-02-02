export default function Fieldset({ label, size, ...props }) {
  return (
    <fieldset className={"fieldset " + size}>
      <label>{label}</label>
      <input className="input" {...props}></input>
    </fieldset>
  );
}
