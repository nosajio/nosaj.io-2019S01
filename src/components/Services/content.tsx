import * as React from 'react';
import { BulletCardProps } from './BulletCard';
import { QuoteItem } from '../QuotesCarousel';

export const bodyText = [
  <>
    The{' '}
    <a
      href="https://stripe.com/files/reports/the-developer-coefficient.pdf"
      target="_blank"
    >
      September 2018 Developer Coefficient
    </a>{' '}
    found that access to skills is now more critical to a startup's success than
    access to capital
  </>,
  "This presents a challenge for young startups because the majority of founders aren't technical, and hiring a team to cover the breadth of skills required is getting more risky as costs increase. ",
  "This is where I can help. Over the course of my ten year career in tech I've always focussed on doing whatever it takes to design and make websites, apps and other software, and not so much on a specific part of the process. ",
  'This broad pursuit to make web products has constantly led me into new disciplines like design, programming, and infrastructure, enabling me to make my own web products without a team behind me.',
  'My proclivity to switch between design and engineering roles is useful to startups and solo founders because a lot of the time it means they can hire only one person instead of hiring a team of designers and developers. Not only does this give them more runway, it lowers the risk of mistakes and allows the founders to be more involved in the process.'
];

export const testimonials: QuoteItem[] = [
  {
    author: {
      name: 'Alec Sorensen',
      role: 'CEO, Tradespace inc'
    },
    quotation:
      'Jason delivered a remarkable product within budget on a tight timeline. As a startup, this was critical to ensuring we got to market quickly with a robust product.'
  }
];

export const whyStartupsHireMe: BulletCardProps['children'] = [
  'Lead a project from start to end. Including planning, design, dev and launch.',
  'Join an existing team for the duration of a project.',
  'UI design or brand design.',
  'Rapidly prototype an idea.'
];

export const principles: BulletCardProps['children'] = [
  'Always be honest. Projects go smoother when everybody has accurate information.',
  'Focus on being indespensable to the team.',
  'Stay humble; learn from the team as they know more about the problem space than me.',
  'Work hard to ensure the project is a success.'
];