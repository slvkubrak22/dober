"use client"

import { useTranslation } from "react-i18next";
import Image from "next/image";

import styles from "../assets/styles/main-page.module.scss";

import checkmark from "../assets/img/checkmark.png";
import cross from "../assets/img/cross.png";
import doberLogo from "../assets/img/dober-logo.png";
import signalLogo from "../assets/img/signal-logo.png";
import telegramLogo from "../assets/img/telegram-logo.png";
import whatsAppLogo from "../assets/img/whatsApp-logo.png";

function AdvantagesRow({
  description,
  doberItem,
  signalItem,
  telegramItem,
  whatsappItem,
  borderStyle
}) {
  return (
    <>
        <div className={styles["advantages_item"]}>
            <p className={styles["advantages_item_text"]}>
                {description}
            </p>
        </div>
        <div className={styles["advantages_item"] + ' ' + styles["justify"] + ' ' + styles["advantages_bg-col"] + ' ' + styles["advantages_shadow"] + ' ' + borderStyle}>
            <Image src={doberItem} alt="Dober Item"/>
        </div>
        <div className={styles["advantages_item"] + ' ' + styles["justify"] + ' ' + styles["advantages_shadow"]}>
            <Image src={signalItem} alt="Signal Item"/>
        </div>
        <div className={styles["advantages_item"] + ' ' + styles["justify"] + ' ' + styles["advantages_shadow"]}>
            <Image src={telegramItem} alt="Telegram Item"/>
        </div>
        <div className={styles["advantages_item"] + ' ' + styles["justify"] + ' ' + styles["advantages_shadow"]}>
            <Image src={whatsappItem} alt="Whatsapp Item"/>
        </div>
    </>
  );
}

export default function Advantages() {

  const { t } = useTranslation();

  const advantagesData = [
    {
      description: t("main_page_advantages_text_1"),
      doberItem: checkmark,
      signalItem: checkmark,
      telegramItem: cross,
      whatsappItem: checkmark,
    },
    {
      description: t("main_page_advantages_text_2"),
      doberItem: checkmark,
      signalItem: checkmark,
      telegramItem: cross,
      whatsappItem: cross,
    },
    {
      description: t("main_page_advantages_text_3"),
      doberItem: checkmark,
      signalItem: cross,
      telegramItem: cross,
      whatsappItem: cross,
    },
    {
      description: t("main_page_advantages_text_4"),
      doberItem: checkmark,
      signalItem: checkmark,
      telegramItem: checkmark,
      whatsappItem: checkmark,
    },
    {
      description: t("main_page_advantages_text_5"),
      doberItem: cross,
      signalItem: checkmark,
      telegramItem: checkmark,
      whatsappItem: checkmark,
    },
    {
      description: t("main_page_advantages_text_6"),
      doberItem: checkmark,
      signalItem: checkmark,
      telegramItem: checkmark,
      whatsappItem: checkmark,
    },
    {
      description: t("main_page_advantages_text_7"),
      doberItem: checkmark,
      signalItem: checkmark,
      telegramItem: checkmark,
      whatsappItem: cross,
    },
    {
      description: t("main_page_advantages_text_8"),
      doberItem: checkmark,
      signalItem: checkmark,
      telegramItem: cross,
      whatsappItem: cross,
    },
    {
      description: t("main_page_advantages_text_9"),
      doberItem: checkmark,
      signalItem: cross,
      telegramItem: cross,
      whatsappItem: cross,
    },
    {
      description: t("main_page_advantages_text_10"),
      doberItem: checkmark,
      signalItem: cross,
      telegramItem: cross,
      whatsappItem: cross,
    },
    {
      description: t("main_page_advantages_text_11"),
      doberItem: checkmark,
      signalItem: cross,
      telegramItem: checkmark,
      whatsappItem: cross,
    },
    {
      description: t("main_page_advantages_text_12"),
      doberItem: checkmark,
      signalItem: cross,
      telegramItem: cross,
      whatsappItem: cross,
      borderStyle: styles["border-bottom"],
    },
  ];

  return (
    <section style={{marginTop: 100}} className="container">
        <div className={styles["advantages"]}>
            <div>
              <h2 style={{marginTop: 0}}>{t("main_page_advantages_title")}</h2>
            </div>
            <div className={styles["justify"] + ' ' + styles["advantages_bg-col"] + ' ' + styles["advantages_border-top"] + ' ' + styles["advantages_shadow"]}>
                <Image src={doberLogo} alt="dober logo"/>
                <p className={styles["advantages_item_text"]}>Dober</p>
            </div>
            <div className={styles["justify"] + ' ' + styles["advantages_border-top"] + ' ' + styles["advantages_shadow"]}>
                <Image src={signalLogo} alt="signal logo"/>
                <p className={styles["advantages_item_text"]}>Signal</p>
            </div>
            <div className={styles["justify"] + ' ' + styles["advantages_border-top"] + ' ' + styles["advantages_shadow"]}>
                <Image src={telegramLogo} alt="telegram logo"/>
                <p className={styles["advantages_item_text"]}>Telegram</p>
            </div>
            <div className={styles["justify"] + ' ' + styles["advantages_border-top"] + ' ' + styles["advantages_shadow"]}>
                <Image src={whatsAppLogo} alt="whatsApp logo"/>
                <p className={styles["advantages_item_text"]}>WhatsApp</p>
            </div>
            {advantagesData.map((item, key) => 
            <AdvantagesRow
                key={key}
                description={item.description}
                doberItem={item.doberItem}
                signalItem={item.signalItem}
                telegramItem={item.telegramItem}
                whatsappItem={item.whatsappItem}
                borderStyle={item.borderStyle}
            />
            )}
        </div>

    </section>
  );
}
