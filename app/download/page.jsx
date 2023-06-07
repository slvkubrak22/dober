"use client"

import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import styles from "../assets/styles/download-page.module.scss";

export default function Download() {

    const pathname = usePathname();
    console.log(pathname);

    const { t } = useTranslation()
 
  return (
    <>
        <div style={{height: 100}}></div>
        <section className="container">
            <h2 className="" style={{textAlign: 'center'}}>{t("download_page_title")}</h2>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div>
                    <p>Mobile app</p>
                </div>
                <div>
                    <p>Web Client</p>
                </div>
            </div>
        </section>
    </>
  );
}
