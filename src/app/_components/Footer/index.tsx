"use client"
import { JSX } from 'react';

import footerData from '@/app/_data/footer.json';
import { FOOTER_BACKGROUND_COLOR, FOOTER_TEXT_COLOR } from '@/app/_data/customizations';

const Footer = (): JSX.Element => {
  return (
    <footer className="relative w-full border-t border-t-gray-200 pt-12 pb-12" style={{backgroundColor: FOOTER_BACKGROUND_COLOR}}>
      <div className="w-[80%] m-auto flex justify-between flex-wrap">
        {footerData.map((list, index) => (
          <div
            key={`${list.mainTitle}-${index}`}
            className="flex-grow-0 flex-shrink-0 basis-[25%] max-w-[20%] text-left"
          >
              <h4 className="text-lg font-bold mb-[30px]" style={{color: FOOTER_TEXT_COLOR}}>{list.mainTitle}</h4>
            <ul>
              {list.items.map((item, index) => (
                <li key={`${item}-${index}`}>
                  <a href="#" className="text-sm" style={{color: FOOTER_TEXT_COLOR}}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;