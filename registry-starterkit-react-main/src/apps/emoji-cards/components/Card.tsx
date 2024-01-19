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
    height: '71rem',
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
    borderRadius: '0.5rem',
    boxShadow: '0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.1)',
  },
  emojiH2: {
    margin: '0',
    fontSize: '2rem',
    lineHeight: '100%',
    color: '#fff',
  },
  emojip: {
    margin: '1rem 0 0 0',
    fontSize: '1.5rem',
    width: '75%',
    color: '#fff',
    lineHeight: '23px',
  },
  emojicontent: {
    width: '50%',
    marginLeft: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
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
        backgroundImage: `url(https://lhcdn-src.mars.com/adaptivemedia/rendition/id_919e6e013d38db09d6d399277723fba84757fc90/name_919e6e013d38db09d6d399277723fba84757fc90.png)`,
      }}
    >
      <div style={styles.emojicontent}>
        <h2 style={styles.emojiH2}>SHEBA® KITTEN SOFT PATE IS HERE</h2>
        <p style={styles.emojip}>
          OSHEBA® PERFECT PORTIONS™ Wet Kitten Food gives your kittens the
          nutrition they need and the flavors thy desire.
        </p>
      </div>
    </div>
  </div>
);

export default Card;
