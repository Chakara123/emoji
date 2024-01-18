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
    maxWidth: '63rem',
    height: '23rem',
  },
  cardContainer: {
    background: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '8rem',
    justifyContent: 'center',
    lineHeight: '100%',
    overflow: 'hidden',
    position: 'relative',
    padding: '1rem',
    width: '100%',
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
        backgroundImage: `url(./static/emoji-cards/images/${imgPath})`,
      }}
    >
      <h2 style={styles.emojiBg}>Header</h2>
    </div>
  </div>
);

export default Card;
