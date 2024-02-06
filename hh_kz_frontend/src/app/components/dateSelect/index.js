import classes from "@/app/style/components/dateSelect.module.css";

export default function DateSelect({ label, size, ...props }) {
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  return (
    <fieldset className={"fieldset " + size}>
      <label>{label}</label>
      <div className={classes.inputs_container}>
        <input className={classes.input} placeholder="День"></input>
        <select className={classes.input}>
          {months.map((month) => (
            <option key={month}>{month}</option>
          ))}
        </select>
        <input className={classes.input} placeholder="Год"></input>
      </div>
    </fieldset>
  );
}
