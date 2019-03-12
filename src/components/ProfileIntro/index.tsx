import * as React from 'react';
import { ProfileIntroCard, ProfileIntroFrame, ProfileIntroImg } from './styled';
import Go from '../Go';

interface ProfileIntroProps {
  className?: string;
}

const ProfileIntro: React.FunctionComponent<ProfileIntroProps> = ({
  className
}) => {
  return (
    <ProfileIntroFrame className={className}>
      <ProfileIntroCard>
        <p>
          Nice to meet you, I’m Jason. I started nosaj.io after over a decade
          designing and building websites and apps for The BBC, William Hill
          Online, Utility Warehouse, Channel 4, and more. Today{' '}
          <Go to="/services">I work closely with startups</Go> to efficiently
          plan, prototype, design and build growth-driven web products.
        </p>
      </ProfileIntroCard>
      <ProfileIntroImg src="/jason-howmans.png" />
    </ProfileIntroFrame>
  );
};

export default ProfileIntro;
