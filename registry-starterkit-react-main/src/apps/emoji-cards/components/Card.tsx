import { background } from '@storybook/theming';
import React, { CSSProperties, ReactElement } from 'react';

interface CardProps {
  backgroundColor: string;
  unicode: string;
  nameRepeated: string;
  emoji: string;
  description: ReactElement;
  category: ReactElement;
  imgPath: string;
}

const styles: Record<string, CSSProperties> = {
  card: {
    background: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.1)',
    display: 'flex',
    fontFamily: 'helvetica, sans-serif',
    overflow: 'hidden',
    maxWidth: '100%',
    height: '41rem',
  },
  cardContainer: {
    background: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '8rem',
    lineHeight: '100%',
    overflow: 'hidden',
    position: 'relative',
    padding: '1rem',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
  },
  emojiH2: {
    margin: '5rem 0 0 4rem',
    fontSize: '4rem',
    lineHeight: '100%',
    color: '#fff',
  },
  emojip: {
    margin: '0.7rem 0px 0px 4rem',
    fontSize: '1rem',
    width: '75%',
    color: '#fff',
    lineHeight: '23px',
  },
  emoji: {
    textShadow: '0 0 1rem rgba(0, 0, 0, 0.5)',
    zIndex: '1',
  },
  emojiBg: {
    left: '-1rem',
    right: '-2rem',
    top: '0',
    bottom: '0',
    fontSize: '5rem',
    lineHeight: '3rem',
    position: 'absolute',
    wordBreak: 'break-all',
  },
  cardInfo: {
    background: 'rgba(0, 0, 0, 0.01)',
    color: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    flex: '1 1 0%',
    flexDirection: 'column',
    padding: '1rem',
  },
  cardName: {
    fontWeight: 'bold',
    fontSize: '2rem',
  },
  cardDescription: {
    flex: '1 1 0%',
    fontSize: '1.25rem',
    padding: '1rem 0',
  },
  cardCategory: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    textAlign: 'right',
  },
};

const Card = ({
  backgroundColor,
  unicode,
  nameRepeated,
  imgPath,
  emoji,
  description,
  category,
}: CardProps): ReactElement => (
  <div style={styles.card}>
    <div
      style={{
        ...styles.cardContainer,
        backgroundImage: `url(https://lhcdn-src.mars.com/adaptivemedia/rendition/id_ac78588966f544fa67fd81d5504e2ec5de2ba9f4/name_ac78588966f544fa67fd81d5504e2ec5de2ba9f4.jpg)`,
      }}
    >
      <h2 style={styles.emojiH2}>A Year of Helping Cultivate Change</h2>
      <p style={styles.emojip}>
        One year ago on World Soil Day, the NUTRO™ brand announced the launch of
        the Greater Ground™ program, which aims to grow awareness of the
        importance of healthy soil and encourage select growers in our network
        to implement to healthy soil practices by providing training, support
        and funding. We want to celebrate all that's been accomplished in the
        program's first year.
      </p>
    </div>
  </div>
);

export default Card;
