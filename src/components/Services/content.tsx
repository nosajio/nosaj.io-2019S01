import * as React from 'react';
import { BulletCardProps } from './BulletCard';
import { QuoteItem } from '../QuotesCarousel';
import { Link } from 'react-router-dom';

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
    access to capital.
  </>,
  'This presents a challenge for early stage startups. Hiring a team to cover the breadth of skills required to get even a simple SaaS product off the ground is getting more risky as costs increase, and as the market grows more competitive.',
  'The main reason I started nosaj.io was to help startups get software products to market effectively without sacrificing quality and without needing a six figure budget.',
  "Over the course of my ten year career in tech I've always focussed on doing whatever it takes to design and make performant websites, apps and other software, and not on any exclusive part of the process.",
  'Over the years, my broad focus on making products has constantly led me into new disciplines like design, programming, and infrastructure – and in recent years – marketing and entrepreneurship.',
  <>
    My proclivity to switch between multiple roles is valuable to startups and
    solo founders because it usually means they can hire fewer people to solve
    the same problems—
    <a
      href="https://en.wikipedia.org/wiki/The_Mythical_Man-Month"
      target="_blank"
    >
      often more quickly.
    </a>
  </>,
  'Hiring fewer people not only gives startups more runway to develop their product, it lowers the risk of mistakes and allows founders to be more involved throughout the process.',
  <>
    I'm currently accepting new opportunities for spring through summer 2019. If
    you're working on something{' '}
    <Link to="#contact">I'd love to hear about it!</Link>
  </>
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
  'Join an existing team for an entire project, or part of a project to fill a skill gap.',
  'Code a new feature or fix bugs.',
  'UI design and brand design.'
];

export const principles: BulletCardProps['children'] = [
  'Always be honest. Projects go smoothly when everybody has accurate information.',
  'Focus on being indispensable to the team.',
  'Stay humble; learn from the founders & team as they know the most about the problem.',
  'Work hard to ensure the project meets its goals on time and on budget.'
];
