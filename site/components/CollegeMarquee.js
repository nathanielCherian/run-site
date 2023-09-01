import React from "react";
import Marquee from "react-fast-marquee";
import styles from '../styles/CollegeMarquee.module.css';

function CollegeLogo(props) {
    return (
        <img src={"/logos/" + props.name.toLowerCase() + ".png"} key={props.name} className={styles.college_logo} height={60}/>
    )
}

export default function CollegeMarquee() {
    const NAMES = [
        "Purdue",
        "Grinnell",
        "Harvard",
        "Middlebury",
        "Oregon",
        "Claremont",
        "Pomona-Pitzer",
        "Williams",
        "Amherst College",
        "Stanford",
        "Tennessee",
        "Bates College",
        "Princeton",
        "Rice",
        "USC",
        "Tufts",
        "Indiana",
    ].sort((a, b) => 0.5 - Math.random());

    return (
        <div className={styles.dm}>
            <Marquee gradient={true} autoFill={true} gradientColor={[1,4,17]} pauseOnHover={false}>
                {NAMES.map((name) => (
                    <CollegeLogo name={name} />
                    // <img src={"/logos/" + name.toLowerCase() + ".png"} height={60}/>
                ))}
                {/* <img src="/logos/purdue.png" height={60}/>
                <img src="/logos/lsu.png" height={60}/>
                <img src="/logos/grinnell.png" height={60}/> */}
            </Marquee>
        </div>
    );
}
