"use client"

import { JSX } from 'react'
import { PAGE_EVENTS_HOME } from '@/app/_data/constants';
import { HOME_HERO_RFKID, HIGHLIGHTED_ARTICLES_RFKID, DEFAULT_QUESTION } from './_data/customizations';
import withPageTracking from '@/app/_hocs/withPageTracking';
import HomeHighlighted from '@/app/_widgets/HomeHighlighted';
import QuestionsAnswers from '@/app/_widgets/QuestionsAnswers'
import { HTMBlockWidget } from '@sitecore-search/react';

const Home = (): JSX.Element => {
  return (
    <>
      <HTMBlockWidget rfkId={HOME_HERO_RFKID} />
      <div className="mx-auto w-[80%]">
        <QuestionsAnswers
            rfkId="rfkid_qa"
            defaultKeyphrase={DEFAULT_QUESTION}
            defaultRelatedQuestions={2}
          />
      </div>
      <HomeHighlighted rfkId={HIGHLIGHTED_ARTICLES_RFKID} />
      </>
  );
}

export default withPageTracking(Home, PAGE_EVENTS_HOME);
