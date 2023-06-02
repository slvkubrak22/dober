import Image from "next/image";

import img1 from "../assets/img/apple.png";
import img2 from "../assets/img/android.png";
import img3 from "../assets/img/web.png";


import styles from "../assets/styles/use-dober.module.scss"

export default function UseDober() {
    return(
        <section className={styles["bg_color"]}>
            <div className="container">
                <div className={styles["flex"]}>
                    <div className={styles["flex"]}>
                        <div>
                            <Image src={img1}/>
                            <p>IOS</p>
                        </div>
                        <div>
                            <Image src={img2}/>
                            <p>Android</p>
                        </div>
                        <div>
                            <Image src={img3}/>
                            <p>Web</p>
                        </div>
                    </div>
                    <div>
                        <h2 className={styles["h2"]}>Use dober on your smartphone, tablet, or on your desktop computer</h2>
                        <button>Download</button>
                    </div>
                </div>
            </div>
        </section>
    )
    
}