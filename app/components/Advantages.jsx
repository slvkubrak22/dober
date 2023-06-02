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
      <div className={styles["advantages-item"]}>
        <p className={styles["advantages-item_text"]}>
            {description}
        </p>
      </div>
      <div className={styles["advantages-item"] + ' ' + styles["just"]}>
        <Image src={doberItem} alt="Dober Item"/>
      </div>
      <div className={styles["advantages-item"] + ' ' + styles["just"]}>
        <Image src={signalItem} alt="Ignal Item"/>
      </div>
      <div className={styles["advantages-item"] + ' ' + styles["just"]}>
        <Image src={telegramItem} alt="Telegram Item"/>
      </div>
      <div className={styles["advantages-item"] + ' ' + styles["just"]}>
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
    <section className="container">
      {/* <h2>Наші переваги</h2> */}
      <div
        style={{ display: "grid", gridTemplateColumns: "2fr repeat(4, 1fr)" }}
      >
        <div>
          <h2>Наші переваги</h2>
        </div>
        <div>
            <Image src={doberLogo}/>
            <p>Dober</p>
        </div>
        <div>
            <Image src={signalLogo}/>
            <p>Signal</p>
        </div>
        <div>
            <Image src={telegramLogo}/>
            <p>Telegram</p>
        </div>
        <div>
            <Image src={whatsAppLogo}/>
            <p>WhatsApp</p>
        </div>
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "2fr repeat(4, 1fr)" }}
      >
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
        
      </div>
    </section>
  );
}
