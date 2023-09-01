import { useEffect, useState } from 'react';
import Frame from '../components/Frame';
import styles from '../styles/Match.module.css';
import PRBox from '../components/PRBox';


export default function Match() {

    const getPRS = () => {
        const pr_str = localStorage.getItem('PRs');
        if (pr_str == null) {
            return [];
        }
        return JSON.parse(prs);
    }

    const addPR = (pr) => {
        const prs = getPRS();
        const new_prs = [...prs, pr];
        localStorage.setItem('PRs', JSON.stringify(new_prs));
    }

    const storePR = (pr, i) => {
        const arr = getPRS();
        if (i >= arr.length) {
            return;
        }
        
    }

    useEffect(()=> {
        console.log(getPRS());
        storePR({1:1}, 0);
    }, [])

    return (
        <Frame name="Match">
            <div className={styles.centered}>
                <h1 className={styles.title}>Enter your PR to get started...</h1>
                <p>Start with one, but add more later for better matches</p>
                <div className={styles.pr_box}>
                    {/* <PRBox id={0}/> */}
                </div>
                <div className={styles.continue_box}>
                    <button>Continue</button>
                </div>
            </div>
        </Frame>
    )
}