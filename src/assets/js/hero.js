const hero = {
  backgroudImageStyling: {
    background: 'url(../src/assets/img/banner-4.png) no-repeat',
    backgroundSize: '100% 80%',
  },
  title: 'Download your best app',
  subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
  googlePlayBtn:{
    styling: {
        liStyling: 'list-inline-item mb-2 mb-lg-0',
        anchorStyling: 'btn btn-primary btn-lg px-4',
    },
    url: '#!',
    iconStyle: 'fab fa-google-play me-3',
    title: 'Google Play'
  },
  appStoreBtn:{
    styling: {
        liStyling: 'list-inline-item',
        anchorStyling: 'btn btn-primary btn-lg px-4',
    },
    url: '#!',
    iconStyle: 'fab fa-app-store me-3',
    title: 'App Store'
  },
  bannerImage: {
    styling: 'img-fluid',
    url: '/src/assets/img/mobile.png',
    alt: 'Banner Image',
  }
};

export { hero };
