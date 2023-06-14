"use client"

import { useState } from 'react';
import Image from 'next/image';

import tab_img_1 from "../assets/img/for-companies/tab_img_1.png";

export default function TabsComponent({ t, styles })  {

    const [activeTab, setActiveTab] = useState(0);
    const tabsData = [
      {
        tab: 'Privacy',
        title: 'Прийняті методи та концепціїї',
        text: 'Постквантове наскрізне шифрування забезпечує конфіденційність ваших даних. Виділений сервер забезпечує впевненість у зберіганні та доступу до корпоративної інформації. Конфіденційність листування та розмов – право кожної вільної людини у світі.Використовуйте Dober і конфіденційність підвищиться.',
        image: tab_img_1,
      },
      {
        tab: 'Privacy',
        title: 'Tab 2',
        text: 'Text for Tab 2',
        image: tab_img_1,
      },
      {
        tab: 'Privacy',
        title: 'Tab 3',
        text: 'Text for Tab 3',
        image: tab_img_1,
      },
      {
        tab: 'Privacy',
        title: 'Tab 4',
        text: 'Text for Tab 4',
        image: tab_img_1,
      },
    ];
  
    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
  
    return (
        <div className={styles["tabs_container"]}>
            <div className={styles["tabs_container_buttons"]}>
                {tabsData.map((tab, index) => (
                    <div
                    key={index}
                    className={styles["tabs_container_buttons_item"] + ' ' + (activeTab === index ? styles["active_tab"] : '')}
                    onClick={() => handleTabClick(index)}
                    >
                        {tab.tab}
                    </div>
                ))}
            </div>
            <div className={styles["tabs_container_content"]}>
                {tabsData.map((tab, index) => (
                    <div key={index} style={{ display: activeTab === index ? 'flex' : 'none' }} className={styles["tabs_container_content_inner"]}>
                        <div className='text-container'>
                            <h3>{tab.title}</h3>
                            <p>{tab.text}</p>
                        </div>
                        <div className='image-container'>
                            <Image src={tab.image} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


