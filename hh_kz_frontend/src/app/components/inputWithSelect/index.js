import classes from "@/app/style/components/inputWithSelect.module.css";

export default function InputWithSelect({ label, size, ...props }) {
  return (
    <fieldset className={"fieldset " + size}>
      <label>{label}</label>
      <div className={classes.container}>
        <input className="input" {...props}></input>
        <select className="input" {...props}>
          <option>KZT</option>
          <option>RUB</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </div>
    </fieldset>
  );
}
