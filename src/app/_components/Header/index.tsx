"use client"

import { JSX } from 'react';
import { HEADER_BACKGROUND_COLOR } from '@/app/_data/customizations';
import Logo from '@/app/_components/Logo';
import PreviewSearch from '@/app/_widgets/PreviewSearch';
import LocaleSelector from '@/app/_components/LocaleSelector';
import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
      <div className="w-full h-[100px] top-0 z-[500] flex justify-items-start fixed shadow-md" style={{backgroundColor: HEADER_BACKGROUND_COLOR}}>
        <div className="w-[80%] m-auto flex items-center text-gray-900 justify-around">
          <div className="flex items-center justify-between">
            <Link href="/" tabIndex={1}>
              <Logo /> 
            </Link>
            <PreviewSearch rfkId="rfkid_6" />
            &nbsp;
            <LocaleSelector />
          </div>
        </div>
      </div>
  );
};

export default Header;