import Head from 'next/head';
import { useRouter } from 'next/router';
import CollegeMarquee from '../components/CollegeMarquee';
import styles from '../styles/Home.module.css';

export default function Home() {
    const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>TrackBound</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <div className={styles.container_col}>
        <div className={styles.title}>
            TrackBound
        </div>
        <div className={styles.subtitle}>
            Data driven. Proven results.
        </div>

        <div className={styles.content_box}>
            <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            </div>
            <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            </div>
            <div className={styles.description}>
                <button className={styles.button} onClick={()=>router.push('/match')}>Get started!</button>
            </div>

            <CollegeMarquee />
        </div>

      </div>

    <div className={styles.img_container}>
        <img src='/cropped_larger.jpg' className={styles.homeimg}></img>
        <div className={styles.triangle}></div>
        <div className={styles.inner_triangle}></div>
    </div>

        
    </div>
  )
}
