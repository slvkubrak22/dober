import styles from "../assets/styles/main-page.module.scss";

function AdvantagesRow({
  description,
  doberItem,
  signalItem,
  telegramItem,
  whatsappItem,
}) {
  return (
    <>
      <div>{description}</div>
      <div>{doberItem}</div>
      <div>{signalItem}</div>
      <div>{telegramItem}</div>
      <div>{whatsappItem}</div>
    </>
  );
}

const advantagesData = [
  {
    description: "dsfsdfsd",
    doberItem: "dsfsdfsd1",
    signalItem: "dsfsdfsd2",
    telegramItem: "dsfsdfsd3",
    whatsappItem: "dsfsdfsd4",
  },
  {
    description: "dsfsdfsd",
    doberItem: "dsfsdfsd1",
    signalItem: "dsfsdfsd2",
    telegramItem: "dsfsdfsd3",
    whatsappItem: "dsfsdfsd4",
  },
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
        <div>Dober</div>
        <div>Signal</div>
        <div>Telegram</div>
        <div>WhatsApp</div>
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "2fr repeat(4, 1fr)" }}
      >
        {advantagesData.map((item, key) => {
          <AdvantagesRow
            key={key}
            description={item.description}
            doberItem={item.doberItem}
            signalItem={item.signalItem}
            telegramItem={item.telegramItem}
            whatsappItem={item.whatsappItem}
          />;
        })}
        {/* <AdvantagesRow />
            <AdvantagesRow /> */}
      </div>
    </section>
  );
}
