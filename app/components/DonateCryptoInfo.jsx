
import Image from "next/image";

import copy from "../assets/img/donate/copy.svg"
import btc from "../assets/img/donate/btc.svg";
import eth from "../assets/img/donate/eth.svg";
import eth_black from "../assets/img/donate/eth-black.svg";
import trc from "../assets/img/donate/trc.svg";
import usdc from "../assets/img/donate/usdc.svg";
import doge from "../assets/img/donate/doge.svg";
import xrm from "../assets/img/donate/xrm.svg";
import ltc from "../assets/img/donate/ltc.svg";


function DonateCryptoInfoItem({ img, cryptoName, cryptoNameShort, cryptoCode, styles }) {

    function copyText(text) {
        navigator.clipboard.writeText(text);
    }

    return (
        <div className={styles["crypto-info"]}>
            <div className={styles["crypto-info_item"]}>
                <Image src={img} alt="btc icon" />
                <p>{cryptoName}</p>
                <p>{cryptoNameShort}</p>
            </div>
            <div onClick={() => copyText(cryptoCode)} className={styles["crypto-info_item"]}>
                <Image src={copy} alt="copy"/>
                <p className={styles["code"]}>{cryptoCode}</p>
            </div>
        </div>
    )
}

export default function DonateCryptoInfo({styles}) {

    const donateCryptoInfoData = [
        {
            img: btc,
            cryptoName: 'Bitcoin',
            cryptoNameShort: 'BTC',
            cryptoCode: 'bc1q288tzlpsgsq80u87kpk3hw9j6awgd7gsl9ehx3'   
        },
        {
            img: eth,
            cryptoName: 'Ethereum',
            cryptoNameShort: 'ETH',
            cryptoCode: '0x340441515e7Df7200cAEB13BDa682410fFA79871'   
        },
        {
            img: eth_black,
            cryptoName: 'USDT',
            cryptoNameShort: 'ETH',
            cryptoCode: '0x340441515e7Df7200cAEB13BDa682410fFA79871'   
        },
        {
            img: trc,
            cryptoName: 'USDT',
            cryptoNameShort: 'TRC',
            cryptoCode: 'TENyFkNToqDeNDyQyamCFfHSdFxpAURAmg'   
        },
        {
            img: usdc,
            cryptoName: 'USD Coin',
            cryptoNameShort: 'USDC ETH',
            cryptoCode: '0x340441515e7Df7200cAEB13BDa682410fFA79871'   
        },
        {
            img: doge,
            cryptoName: 'Dogecoin',
            cryptoNameShort: 'DOGE',
            cryptoCode: 'DQXhkFRA9rABeLUZdWsiUw4w4hAXUjCMkV'   
        },
        {
            img: xrm,
            cryptoName: 'Monero',
            cryptoNameShort: 'XRM',
            cryptoCode: '43UzoKJ6YU4BaTMdvV7nY1FCDSbZNDzDsKCi5hMoscSM6Ftf7nDuRBgH8awMif8dbGH9PyLGSrirQgrqYg3ygLvyV9spQrv'   
        },
        {
            img: ltc,
            cryptoName: 'Litecoin',
            cryptoNameShort: 'LTC',
            cryptoCode: 'LKXVU9VjZD6jeBJahinsbFnAJ1trPmsS91'   
        }
    ]

    return(
        <>
            {
                donateCryptoInfoData.map((item, key) => 
                    <DonateCryptoInfoItem key={key} img={item.img} cryptoName={item.cryptoName} cryptoNameShort={item.cryptoNameShort} cryptoCode={item.cryptoCode} styles={styles}/>
                )
            }
        </>
    )
}