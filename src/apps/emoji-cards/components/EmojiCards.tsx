import React, { ReactElement } from 'react';

import { DATA } from '../data/emojis';
import Card from './Card';
import { FormattedMessage } from 'react-intl';

export interface EmojiCardsProps {
  /**
   * The name of the emoji.
   *
   * @default tada
   */
  emoji: string;
}

const BG_COLORS = [
  'rgba(255, 0, 0, 0.3)',
  'rgba(255, 255, 0, 0.3)',
  'rgba(255, 0, 255, 0.3)',
  'rgba(0, 255, 255, 0.3)',
  'rgba(0, 255, 0, 0.3)',
  'rgba(0, 0, 255, 0.3)',
];

const EmojiCards = ({ emoji }: EmojiCardsProps): ReactElement => {
  let packedData = DATA?.emojis[emoji];
  if (!packedData) {
    emoji = 'invalid';
    packedData = [
      '🚫',
      <FormattedMessage defaultMessage="Empty" id="+RhnH+" />,
      8,
    ];
  }
  const [unicode, description, categoryIndex] = packedData;

  const category = DATA.categories[categoryIndex];

  // Pick a background color based on the character codes that make up the emoji
  let charCodeSum = 0;
  for (let i = 0; i < unicode.length; i++) {
    charCodeSum = charCodeSum * 65536 + unicode.charCodeAt(i);
  }
  const backgroundColor = BG_COLORS[charCodeSum % BG_COLORS.length];

  // Repeat the display name enough times to use as a background
  let nameRepeated = '';
  while (nameRepeated.length < 200) {
    nameRepeated += emoji;
  }
  return (
    <Card
      backgroundColor={backgroundColor}
      unicode={unicode}
      nameRepeated={nameRepeated}
      emoji={emoji}
      description={description}
      category={category}
    />
  );
};

export default EmojiCards;
