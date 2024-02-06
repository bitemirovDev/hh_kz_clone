import classes from "@/app/style/components/radio.module.css";

export default function Radio({
  label,
  size,
  value1,
  value2,
  gender,
  classForLabel,
  ...props
}) {
  return (
    <fieldset className={"fieldset " + size}>
      <label className={classForLabel}>{label}</label>
      <div className={classes.radios_container}>
        <div className={classes.radio}>
          <input className="input" {...props}></input>
          <label>{value1}</label>
        </div>
        <div className={classes.radio}>
          <input className="input" {...props}></input>
          <label>{value2}</label>
        </div>
      </div>
    </fieldset>
  );
}
