"use client"

import { useState } from 'react';
import Image from 'next/image';

import tab_img_1 from "../assets/img/for-companies/tab_img_1.svg";
import tab_img_2 from "../assets/img/for-companies/tab_img_2.svg";
import tab_img_3 from "../assets/img/for-companies/tab_img_3.svg";
import tab_img_4 from "../assets/img/for-companies/tab_img_4.svg";
import tab_img_5 from "../assets/img/for-companies/tab_img_5.svg";
import tab_img_6 from "../assets/img/for-companies/tab_img_6.svg";

export default function TabsComponent({ t, styles })  {

  const [open, setOpen] = useState();
  
  const onOpen = () => {
    setOpen(!open);
  }

    const [activeTab, setActiveTab] = useState(0);
    const tabsData = [
      {
        title: t("for_companies_page_title_tab_1"),
        text_1: t("for_companies_page_text_1_tab_1"),
        text_2: t("for_companies_page_text_2_tab_1"),
        image: tab_img_1,
      },
      {
        title: t("for_companies_page_title_tab_2"),
        text_1: t("for_companies_page_text_1_tab_2"),
        text_2: t("for_companies_page_text_2_tab_2"),
        image: tab_img_2,
      },
      {
        title: t("for_companies_page_title_tab_3"),
        text_1: t("for_companies_page_text_1_tab_3"),
        text_2: t("for_companies_page_text_2_tab_3"),
        image: tab_img_3,
      },
      {
        title: t("for_companies_page_title_tab_4"),
        text_1: t("for_companies_page_text_1_tab_4"),
        text_2: t("for_companies_page_text_2_tab_4"),
        image: tab_img_4,
      },
      {
        title: t("for_companies_page_title_tab_5"),
        text_1: t("for_companies_page_text_1_tab_5"),
        text_2: t("for_companies_page_text_2_tab_5"),
        image: tab_img_5,
      },
      {
        title: t("for_companies_page_title_tab_6"),
        text_1: t("for_companies_page_text_1_tab_6"),
        text_2: t("for_companies_page_text_2_tab_6"),
        image: tab_img_6,
      },
    ];
  
    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
  
    return (
      <>
        <div className={styles["tabs_container"]}>
            <div className={styles["tabs_container_buttons"]}>
                {tabsData.map((tab, index) => (
                    <div
                    key={index}
                    className={styles["tabs_container_buttons_item"] + ' ' + (activeTab === index ? styles["active_tab"] : '')}
                    onClick={() => handleTabClick(index)}
                    >
                        <p>{tab.title}</p>
                    </div>
                ))}
            </div>
            <div className={styles["tabs_container_content"]}>
                {tabsData.map((tab, index) => (
                    <div key={index} style={{ display: activeTab === index ? 'flex' : 'none' }} className={styles["tabs_container_content_inner"]}>
                        <div className={styles['tabs_container_content_inner_text-container']}>
                            <p>{tab.text_1}</p>
                            <p>{tab.text_2}</p>
                        </div>
                        <div className='image-container'>
                            <Image src={tab.image} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {/* <div className="dropped-tabs-container"> 
          <div className='dropped-tabs-container_item'>
            <div className='dropped-tabs-container_item_button'>
              <p>{title}</p>
            </div>
            <div className='dropped-tabs-container_item_content'>
              
            </div>
          </div>
        </div>       */}
      </>  
    );
};


