import { unstable_flag as flag } from '@vercel/flags/next';

export const showWinterSale = flag({
    key: 'winter-sale',
    decide: () => false,
  });