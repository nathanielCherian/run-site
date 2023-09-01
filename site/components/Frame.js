import Head from 'next/head';
import styles from '../styles/Frame.module.css';
import Navbar from './Navbar';

const Frame = ({ name, leftContent, rightContent }) => {
    return (
        <div className={styles.frame_container}>
            <Head>
                <title>{(name == '') ? 'TrackBound' : name + ' - TrackBound'}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <div className={styles.content_container}>
                <div className={styles.left}>{leftContent}</div>
                <div className={styles.right}>{rightContent}</div>                
            </div>
        </div>
    );
};

export default Frame;

// export default function Frame({name, children}) {
//     return (
//         <div className={styles.container}>
//             <Head>
//                 <title>{(name == '') ? 'TrackBound' : name + ' - TrackBound'}</title>
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>
//             <Navbar />
//             <div className={styles.row_ctr_container}>
//                 <div className={styles.col_container}>
//                     {children}
//                 </div>
//             </div>

//         </div>
//     )
// }