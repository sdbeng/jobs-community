import { unstable_flag as flag } from '@vercel/flags/next';

export const showWinterSale = flag({
    key: 'winter-sale',
    decide: () => process.env.WINTER_SALE_ENABLED === '1',
  });