export default function Fieldset({ label, size, ...props }) {
  return (
    <fieldset className={"fieldset " + size}>
      <label>{label}</label>
      {props.type === "text" && <input className="input" {...props}></input>}
      {props.type === "select" && (
        <select className="input" {...props}>
          {props.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </fieldset>
  );
}
