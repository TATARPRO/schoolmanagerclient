export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Theme',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Classes',
      url: '/dashboard/classes/index',
      icon: 'fa fa-institution',
    },
    {
      name: 'Gazzettes',
      url: '/dashboard/gazzettes/index',
      icon: 'icon-pencil',
    },
    {
      name: 'Pins',
      url: '/dashboard/pins/index',
      icon: 'fa fa-cc-amex fa-sm',
    },
    {
      name: 'Results',
      url: '/dashboard/results/index',
      icon: 'fa fa-file-text fa-sm',
    },
    {
      name: 'Sessions',
      url: '/dashboard/sessions/index',
      icon: 'cui-puzzle icons font-md',
    },
    {
      name: 'Settings',
      url: '/dashboard/settings/index',
      icon: 'cui-settings icons font-md',
    },
    {
      name: 'Positions',
      url: '/dashboard/positions/index',
      icon: 'fa fa-certificate',
    },
    {
      name: 'Students',
      url: '/dashboard/students/index',
      icon: 'fa fa-male',
    },
    {
      name: 'Subjects',
      url: '/dashboard/subjects/index',
      icon: 'fa fa-list',
    },
    {
      name: 'Teacher',
      url: '/dashboard/teachers/index',
      icon: 'fa fa-user',
    },
    {
      name: 'Teacher Alloc.',
      url: '/dashboard/teachersubject/index',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Terms',
      url: '/dashboard/terms/index',
      icon: 'fa fa-plug',
    },
    {
      name: 'Uploads',
      url: '/dashboard/uploads/index',
      icon: 'fa fa-upload',
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        }
      ]
    }
  ],
};