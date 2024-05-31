import * as Headless from '@headlessui/react';
import NextLink from 'next/link';

export const Link = function ({ ...props }) {
  return (
    <Headless.DataInteractive>
      <NextLink {...props} />
    </Headless.DataInteractive>
  );
};
