import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';

/**
 * This is a turnaround needed for the module whatwg-url error
 * `TextEncoder is not defined Reference`
 * Which the following solution can be found here:
 * https://github.com/jsdom/whatwg-url/issues/209
 *
 * But since we're assigning TextDecoder a different type
 * from global.TextDecoder, we add a @ts-ignore into
 * that line
 */
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.TextDecoder = TextDecoder;

const reactTestingLibrarySerializer: jest.SnapshotSerializerPlugin = {
  print: (val: unknown, serialize: (i: unknown) => string) =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    serialize(val?.container?.firstChild),
  test: (val) => val && val.hasOwnProperty('container'),
};

initStoryshots({
  renderer: render,
  storyKindRegex: /^Widgets\//,
  snapshotSerializers: [reactTestingLibrarySerializer],
});
