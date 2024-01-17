import { Meta, Story } from '@storybook/react';
import PublicImage, { PublicImageProps } from './PublicImage';

const stories: Meta = {
  component: PublicImage,
  title: 'Common/Public Image',
};

const Template: Story<PublicImageProps> = (args) => <PublicImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgPath: 'images/hello.jpg',
  widgetId: 'emoji-cards',
  className: 'screen',
  alt: 'Some alternative text',
};

export const NoImagePath = Template.bind({});
NoImagePath.args = {
  imgPath: '',
  widgetId: 'emoji-cards',
  alt: 'Image is expected to be broken',
};

export default stories;
