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
}) {
  return (
    <>
        <div className={styles["advantages_item"]}>
            <p className={styles["advantages_item_text"]}>
                {description}
            </p>
        </div>
        <div className={styles["advantages_item"] + ' ' + styles["justify"] + ' ' + styles["advantages_bg-col"] + ' ' + styles["advantages_shadow"]}>
            <Image src={doberItem} alt="Dober Item"/>
        </div>
        <div className={styles["advantages_item"] + ' ' + styles["justify"] + ' ' + styles["advantages_shadow"]}>
            <Image src={signalItem} alt="Ignal Item"/>
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

const advantagesData = [
  {
    description: "Підтримка наскрізного шифрування за промовчаннням",
    doberItem: checkmark,
    signalItem: checkmark,
    telegramItem: cross,
    whatsappItem: checkmark,
  },
  {
    description: "Відсутність збору особистих даних користувача з боку адміністрації месенджера",
    doberItem: checkmark,
    signalItem: checkmark,
    telegramItem: cross,
    whatsappItem: cross,
  },
  {
    description: "Хешує персональну інформацію (номер, список контактів, тощо)",
    doberItem: checkmark,
    signalItem: cross,
    telegramItem: cross,
    whatsappItem: cross,
  },
  {
    description: "Застосовуються надійні криптографічні алгоритми",
    doberItem: checkmark,
    signalItem: checkmark,
    telegramItem: checkmark,
    whatsappItem: checkmark,
  },
  {
    description: "Зберігання даних користувача ",
    doberItem: cross,
    signalItem: checkmark,
    telegramItem: cross,
    whatsappItem: cross,
  },
  {
    description: "Захист листування від читання адміністрацією месенджера",
    doberItem: checkmark,
    signalItem: checkmark,
    telegramItem: checkmark,
    whatsappItem: checkmark,
  },
  {
    description: "Вхід за PIN-кодом / парольною фразою",
    doberItem: checkmark,
    signalItem: checkmark,
    telegramItem: checkmark,
    whatsappItem: cross,
  },
  {
    description: "Відсутність передачі особистих даних користувача державним органам безпеки",
    doberItem: checkmark,
    signalItem: checkmark,
    telegramItem: cross,
    whatsappItem: cross,
  },
  {
    description: "Можливість анонімної реєстрації",
    doberItem: checkmark,
    signalItem: cross,
    telegramItem: cross,
    whatsappItem: cross,
  },
  {
    description: "Можливість повного видалення облікового запису з системи",
    doberItem: checkmark,
    signalItem: cross,
    telegramItem: cross,
    whatsappItem: cross,
  },
  {
    description: "Повідомлення учасників чату про зроблений скріншот листування",
    doberItem: checkmark,
    signalItem: cross,
    telegramItem: checkmark,
    whatsappItem: cross,
  },
  {
    description: "Виділений сервер",
    doberItem: checkmark,
    signalItem: cross,
    telegramItem: cross,
    whatsappItem: cross,
  },
  {
    description: "Чи рекомендується застосунок для безпечної передачі повідомлень",
    doberItem: checkmark,
    signalItem: checkmark,
    telegramItem: cross,
    whatsappItem: cross,
  },
//   {
//     description: "Головна причина чому застосунок не рекомендовано",
//     doberItem: ' ',
//     signalItem: "Порада скасувати обов’язкову вимогу для користувачів реєструватися за допомогою мобільного номера",
//     telegramItem: "Криптографія не за замовчуванням",
//     whatsappItem: "Названий партнером АНБ у викриттях Сноудена",
//   },
];

export default function Advantages() {
  return (
    <section style={{marginTop: 100}} className="container">
        <div className={styles["advantages"]}>
            <div>
            <h2 style={{marginTop: 0}}>Наші переваги</h2>
            </div>
            <div className={styles["justify"] + ' ' + styles["advantages_bg-col"] + ' ' + styles["advantages_border-top"] + ' ' + styles["advantages_shadow"]}>
                <Image src={doberLogo}/>
                <p className={styles["advantages_item_text"]}>Dober</p>
            </div>
            <div className={styles["justify"] + ' ' + styles["advantages_border-top"] + ' ' + styles["advantages_shadow"]}>
                <Image src={signalLogo}/>
                <p className={styles["advantages_item_text"]}>Signal</p>
            </div>
            <div className={styles["justify"] + ' ' + styles["advantages_border-top"] + ' ' + styles["advantages_shadow"]}>
                <Image src={telegramLogo}/>
                <p className={styles["advantages_item_text"]}>Telegram</p>
            </div>
            <div className={styles["justify"] + ' ' + styles["advantages_border-top"] + ' ' + styles["advantages_shadow"]}>
                <Image src={whatsAppLogo}/>
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
            />
            )}
            <div className={styles["advantages_item"]}>
                <p className={styles["advantages_item_text"]}>
                    Головна причина чому застосунок не рекомендовано
                </p>
                <p className={styles["advantages_item_text"]}>
                    securemessagingapps.com - источник
                </p>
            </div>
            <div className={styles["advantages_item"] + ' ' + styles["justify"] + ' ' + styles["advantages_bg-col"] + ' ' + styles["advantages_shadow"] + ' ' + styles["advantages_border-bottom"] }>
            </div>
            <div className={styles["advantages_item"] + ' ' + styles["justify"] + ' ' + styles["advantages_shadow"] + ' ' + styles["advantages_border-bottom"] }>
                <p className={styles["advantages_item_text"]} style={{textAlign: 'center', fontSize: 13, fontWeight: 400}}>
                    Порада скасувати обов’язкову вимогу для користувачів реєструватися за допомогою мобільного номера
                </p>
            </div>
            <div className={styles["advantages_item"] + ' ' + styles["justify"] + ' ' + styles["advantages_shadow"] + ' ' + styles["advantages_border-bottom"] }>
                <p className={styles["advantages_item_text"]} style={{textAlign: 'center', fontSize: 16, fontWeight: 400}}>
                    Криптографія не за замовчуванням
                </p>
            </div>
            <div className={styles["advantages_item"] + ' ' + styles["justify"] + ' ' + styles["advantages_shadow"] + ' ' + styles["advantages_border-bottom"] }>
                <p className={styles["advantages_item_text"]} style={{textAlign: 'center', fontSize: 16, fontWeight: 400}}>
                    Названий партнером АНБ у викриттях Сноудена 
                </p>
            </div>
        </div>

    </section>
  );
}
