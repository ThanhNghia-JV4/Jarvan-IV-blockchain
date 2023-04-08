import { createCampaign, dashboard, logout, payment, profile, withdraw, about } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'news',
    imgUrl: payment,
    link: '/news',
    // disabled: true,
  },
  {
    name: 'about',
    imgUrl: withdraw,
    link: '/about',
    // disabled: true,
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },

  // {
  //   name: 'logout',
  //   imgUrl: logout,
  //   link: '/',
  //   disabled: true,
  // },
];