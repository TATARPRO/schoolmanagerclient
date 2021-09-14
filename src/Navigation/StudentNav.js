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
      name: 'CBT',
      url: '/studdash/cbt/index',
      icon: 'fa fa-institution',
    },
    {
      name: 'Performance',
      url: '/studdash/performance/index',
      icon: 'icon-pencil',
    },
    {
      name: 'Check Result',
      url: '/studdash/resuls/index',
      icon: 'fa fa-cc-amex fa-sm',
    }
  ]
};
