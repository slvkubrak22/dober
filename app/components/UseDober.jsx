import Image from "next/image";

import img1 from "../assets/img/apple.png";
import img2 from "../assets/img/android.png";
import img3 from "../assets/img/web.png";


import styles from "../assets/styles/use-dober.module.scss"

export default function UseDober() {
    return(
        <section className={styles["bg_color"]}>
            <div className="container">
                <div className={styles["dober-container"] + ' ' + styles["dober-container_justify"]}>
                    <div>
                        <div className={styles["dober-container"]} style={{alignItems: 'baseline'}}>
                            <div className={styles["dober-container_item"]}>
                                <Image src={img1} alt='apple icon'/>
                                <p className={styles["dober-container_p"]}>IOS</p>
                            </div>
                            <div className={styles["dober-container_item"]}>
                                <Image src={img2} alt='android icon'/>
                                <p className={styles["dober-container_p"]}>Android</p>
                            </div>
                            <div className={styles["dober-container_item"]}>
                                <Image src={img3} alt='computer icon'/>
                                <p className={styles["dober-container_p"]}>Web</p>
                            </div>
                        </div>
                        {/* <div className={styles["dober-container"]}>
                            <p className={styles["dober-container_p"]}>IOS</p>
                            <p className={styles["dober-container_p"]}>Android</p>
                            <p className={styles["dober-container_p"]}>Web</p>
                        </div> */}
                    </div>
                    <div style={{padding: "100px 0"}}>
                        <h2 className={styles["h2"]}>Use dober on your smartphone, tablet, or on your desktop computer</h2>
                        <button>Download</button>
                    </div>
                </div>
            </div>
        </section>
    )
    
}