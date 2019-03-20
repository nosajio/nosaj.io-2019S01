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
  "This presents a challenge for young startups because the majority of founders aren't technical, and hiring a team to cover the breadth of skills required to get a web product off the ground is getting more risky as costs increase. ",
  "This is where I can help. Over the course of my ten year career in tech I've always focussed on doing whatever it takes to design and make performant websites, apps and other software, and not on any exclusive part of the process.",
  'Over the years, my broad focus on making products has constantly led me into new disciplines like design, programming, and infrastructure, and more recently into sales, marketing, and entrepreneurship.',
  'My proclivity to switch between design and engineering roles is valuable to startups and solo founders because it usually means they can hire fewer people to solve the same problems.',
  'Hiring fewer people not only gives startups more runway to develop their product, it lowers the risk of mistakes and allows founders to be more involved throughout the process.',
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
  'Get a prototype or MVP off the ground in one or two sprints.',
  'Take a project from start to end. Including planning, design, dev and launch.',
  'Join an existing team for an entire project or to fill a temporary skill gap.',
  'Code a new feature or fix bugs.',
  'UI design and brand design.',
];

export const principles: BulletCardProps['children'] = [
  'Always be honest. Projects go smoothly when everybody has accurate information.',
  'Focus on being indispensable to the team.',
  'Stay humble; learn from the founders & team as they know the most about the problem.',
  'Work hard to ensure the project meets its goals on time and on budget.'
];
