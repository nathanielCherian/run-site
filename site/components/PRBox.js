import { useState, useEffect } from 'react';
import styles from '../styles/PRBox.module.css';
import { EVENTS } from '../utils.js/constants';

export default function PRBox({id}) {
    const [event, setEvent] = useState("100m");
    const [value, setValue] = useState({num1:0, num2:0});

    const save = (val) => {
        const score = (EVENTS[event][0] == "seconds") ? val.num1 : ((12*val.num1) + val.num2) * 2.54;
        const d = {event, score};
        console.log("saved: ", d);
        localStorage.setItem("PR", JSON.stringify(d));
        setValue(val);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        const new_val = {
            ...value,
            [name]: Number(val),
        }
        save(new_val);
    }

    const changeEvent = (e) => {
        setEvent(e.target.value);
        save({num1:0, num2:0});
    }

    const units = {
        "seconds": (
            <input type={"number"} 
            placeholder={"seconds"} 
            name="num1"
            className={styles.input_box}
            onChange={handleChange}
            />
        ),
        "cm": (
            <div>
                <input type={"number"} 
                placeholder={"feet"} 
                name="num1"
                className={styles.input_box} 
                onChange={handleChange}
                />
                <input type={"number"} 
                placeholder={"inches"}
                name="num2"
                className={styles.input_box}    
                onChange={handleChange}
                max="12"
                min="0"
                />
            </div>
        )
    }
    
    return (
        <div className={styles.pr}>
            <select name="event" selected={event} onChange={changeEvent} className={styles.select_box}>
                {Object.keys(EVENTS).map((name) => (
                    <option value={name} key={name}>{name}</option>
                ))}
            </select>

            <div className={styles.pr_row}>
                <form>
                    {units[EVENTS[event][0]]}
                </form>
            </div>
        </div>
    )
}