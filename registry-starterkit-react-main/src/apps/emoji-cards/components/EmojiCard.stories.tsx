import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import EmojiCards, { EmojiCardsProps } from './EmojiCards';
import storyWithTranslation from '../lib/storyWithTranslation';
import { Locale } from '../../../types/locale';

const stories: Meta = {
  title: 'Widgets/Emoji Cards/Components',
  component: EmojiCards,
  decorators: [storyWithTranslation()],
  argTypes: {
    imgPath: {
      control: 'select',
      options: ['No Image', 'hello.jpg', 'articles_bg.jpg'],
      description: 'Please Choose the Background Image.',
      table: {
        defaultValue: { summary: 'No Image' },
      },
    },
  },
  args: {
    imgPath: 'hello.jpg',
  },
};

const Template: StoryFn<EmojiCardsProps> = (args) => <EmojiCards {...args} />;

export const PlusOne = Template.bind({});
PlusOne.args = {
  emoji: '+1',
};

export default stories;
