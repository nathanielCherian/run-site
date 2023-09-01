import { useRouter } from 'next/router'
import Frame from '../../components/Frame';
import HorizontalLine from '../../components/HorizontalLine';
import styles from '../../styles/SchoolPage.module.css';


export default function Page() {
  const router = useRouter()

  const left = (
    <div className={styles.center_aligned}>
        <img src="/logos/usc.png" className={styles.school_img}></img>
        <h3>University of Southern California</h3>
        <hr className={styles.bar}></hr>
        <p className={styles.info_text}>Los Angles, California</p>
        <hr className={styles.bar}></hr>
        <p className={styles.info_text}>Division 3, Pacific Conference</p>
        <hr className={styles.bar}></hr>
        <p className={styles.info_text}>Acceptance Rate: 13%</p>
        <hr className={styles.bar}></hr>
        <p className={styles.info_text}>Private</p>
        <hr className={styles.bar}></hr>
        <p className={styles.info_text}>24,000 Students</p>
    </div>
  )

  const right = (
    <div>
        <h1>Univerity of Southern California stats</h1>
        <div className={styles.right_content}>
            <div className={styles.percentile_box}>
                <div className={styles.percentile_box_left}>
                    <p className={styles.percentile_hook}>5:04 in the 1600 places you...</p>
                    <ul>
                        <li>2nd on the team (out of 8)</li>
                        <li>13th in their conference (out of 45)</li>
                    </ul>
                </div>
                <div className={styles.percentile_box_right}>
                    <HorizontalLine position={0.65} />
                    <p className={styles.percentile_text}>You are faster than <bold>65%</bold> of the team!</p>
                </div>
            </div>
        </div>
    </div>
  )
    
  return (
    <Frame name="School" leftContent={left} rightContent={right}/>
  )
}