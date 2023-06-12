"use client"

import { useTranslation } from "react-i18next";
import TopSection from "../components/features/TopSection";

import styles from "../assets/styles/features-page.module.scss";
import Postulates from "../components/features/Postulates";
import UseDober from "../components/UseDober";

export default function Features() {

    const { t } = useTranslation();

    return (
        <>
            <TopSection t={t} styles={styles}/>
            <Postulates t={t} styles={styles}/>
            <UseDober />
        </>
    )    
}