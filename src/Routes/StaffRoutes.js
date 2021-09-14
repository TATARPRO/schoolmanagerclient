import React from 'react';

const StaffMain = React.lazy(() => import('../views/Dashboard/StaffDashboard/Index'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const StaffRoutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard/staff', name: 'Home', component: StaffMain }
];

export default StaffRoutes;