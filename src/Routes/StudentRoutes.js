import React from 'react';

const StaffMain = React.lazy(() => import('../CMS/Home/HomeMain'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const StaffRoutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard/student', name: 'Home', component: StaffMain }
];

export default StaffRoutes;