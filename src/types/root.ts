import { ReactNode } from 'react';

// ==============================|| TYPES - ROOT ||============================== //

export interface ChildrenProps {
  children: ReactNode;
}

export type KeyedObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: string | number | KeyedObject | any;
};

export type VirtualElement = {
  getBoundingClientRect: () => DOMRect;
  contextElement?: Element;
};
