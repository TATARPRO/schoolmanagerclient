export default {
    items: [
      {
        name: 'Dashboard',
        url: '/staffdash',
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
        name: 'Check Result',
        url: '/staffdash/results/index',
        icon: 'fa fa-institution',
      },
      {
        name: 'Performance',
        url: '/staffdash/performance/index',
        icon: 'icon-pencil',
      },
      {
        name: 'Check Result',
        url: '/staffdash/resultmanage/index',
        icon: 'fa fa-cc-amex fa-sm',
      },
      {
        name: 'Upload',
        url: '/staffdash/Upload/index',
        icon: 'fa fa-file-text fa-sm',
      }
    ]
  };
  