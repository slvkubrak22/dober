"use client"

import { useState } from 'react';
import Image from 'next/image';

import tab_img_1 from "../assets/img/for-companies/tab_img_1.png";

export default function TabsComponent({ t, styles })  {

    const [activeTab, setActiveTab] = useState(0);
    const tabsData = [
      {
        tab: 'Privacy',
        title: 'Tab 1',
        text: 'Text for Tab 1',
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
                        {tab.title}
                    </div>
                ))}
            </div>
            <div className="tab-content">
                {tabsData.map((tab, index) => (
                    <div key={index} style={{ display: activeTab === index ? 'block' : 'none' }}>
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
            {/* <style jsx>{`
            .tab-buttons {
                display: flex;
            }
            
            .tab-buttons button {
                padding: 10px 20px;
                background-color: #e9e9e9;
                border: none;
                cursor: pointer;
            }
            
            .tab-buttons button.active {
                background-color: #c4c4c4;
            }
            
            .tab-content {
                margin-top: 10px;
            }
            
            .tab-content img {
                max-width: 100%;
                height: auto;
            }
            `}</style> */}
        </div>
    );
};


