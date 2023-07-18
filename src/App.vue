<script setup>
import data from './assets/js/data'
</script>

<template>
    <!-- navbar-->
    <header class="header">
        <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="navbar">
            <div class="container">
                <a class="navbar-brand" href="index.html"> {{ data.siteBranding }} </a>
                <button class="navbar-toggler navbar-toggler-end" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link link-scroll active" href="#hero">Home <span
                                    class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link-scroll" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link-scroll" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link-scroll" href="#testimonials">Testimonials</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <!-- Hero Section-->
    <section class="hero bg-top py-5" id="hero" style="
      background: url(img/banner-4.png) no-repeat;
      background-size: 100% 80%;
    ">
        <div class="container py-5">
            <div class="row py-5">
                <div class="col-lg-5 py-5">
                    <h1>Download your best app</h1>
                    <p class="my-4 text-muted">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod.
                    </p>
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item mb-2 mb-lg-0">
                            <a class="btn btn-primary btn-lg px-4" href="#!">
                                <i class="fab fa-google-play me-3"></i>Google Play</a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn btn-primary btn-lg px-4" href="#!">
                                <i class="fab fa-app-store me-3"></i>App Store</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 ml-auto">
                    <div class="device-wrapper mx-auto">
                        <div class="device shadow" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                            <div class="screen">
                                <img class="img-fluid" src="/src/assets/img/mobile.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-center py-0" id="about" style="
      background: url(img/service-bg.svg) no-repeat;
      background-size: cover;
    ">
        <section class="about py-0">
            <div class="container">
                <p class="h6 text-uppercase text-primary">What is it all about?</p>
                <h2 class="mb-5">Track your time and expenses</h2>
                <div class="row pb-5 gy-4">
                    <div class="col-lg-4 col-md-6">
                        <!-- Services Item-->
                        <div class="card border-0 shadow rounded-lg py-4 text-start">
                            <div class="card-body p-5">
                                <svg class="svg-icon svg-icon-light" style="width: 60px; height: 60px; color: #ff904e">
                                    <use xlink:href="#document-saved-1"></use>
                                </svg>
                                <h3 class="h4 my-4">Online Marketing</h3>
                                <p class="text-sm text-muted mb-0">
                                    Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod
                                    tempor incididunt ut labore.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <!-- Services Item-->
                        <div class="card border-0 shadow rounded-lg py-4 text-start">
                            <div class="card-body p-5">
                                <svg class="svg-icon svg-icon-light" style="width: 60px; height: 60px; color: #39f8d2">
                                    <use xlink:href="#map-marker-1"></use>
                                </svg>
                                <h3 class="h4 my-4">Track your move</h3>
                                <p class="text-sm text-muted mb-0">
                                    Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod
                                    tempor incididunt ut labore.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <!-- Services Item-->
                        <div class="card border-0 shadow rounded-lg py-4 text-start">
                            <div class="card-body p-5">
                                <svg class="svg-icon svg-icon-light" style="width: 60px; height: 60px; color: #8190ff">
                                    <use xlink:href="#arrow-target-1"></use>
                                </svg>
                                <h3 class="h4 my-4">Market analysis</h3>
                                <p class="text-sm text-muted mb-0">
                                    Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod
                                    tempor incididunt ut labore.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="with-pattern-1 py-5" id="services">
            <div class="container py-5">
                <div class="row align-items-center mb-5 gy-5">
                    <div class="col-lg-6">
                        <img class="img-fluid w-100 px-lg-5" src="/src/assets/img/objects.svg" alt="" />
                    </div>
                    <div class="col-lg-6">
                        <h2>The Best Business Solutions Guide for You</h2>
                        <p class="text-muted">
                            Dolor sit amet consectetur elit sed do eiusmod tempor incididunt
                            labore dolore magna aliqua enim ad minim veniam quis nostrud
                            exercitation.
                        </p>
                        <button class="btn btn-primary js-modal-btn" data-video-id="B6uuIHpFkuo">
                            <i class="fas fa-play-circle me-2"></i>Play video
                        </button>
                    </div>
                </div>
                <div class="row align-items-center gy-5">
                    <div class="col-lg-6">
                        <h2>Make your own success as simple you clap</h2>
                        <p class="text-muted">
                            Dolor sit amet consectetur elit sed do eiusmod tempor incididunt
                            labore dolore magna aliqua enim ad minim veniam quis nostrud
                            exercitation.
                        </p>
                        <ul class="list-check">
                            <li class="text-muted mb-2">Various Analysis Options</li>
                            <li class="text-muted mb-2">
                                Page Load Details (time, size, number of requests)
                            </li>
                            <li class="text-muted mb-2">
                                Waterfall, Video and Report History
                            </li>
                        </ul>
                        <button class="btn btn-primary js-modal-btn" data-video-id="B6uuIHpFkuo">
                            <i class="fas fa-play-circle me-2"></i>Play video
                        </button>
                    </div>
                    <div class="col-lg-6">
                        <div class="row gy-4">
                            <div class="col-lg-6 col-sm-6">
                                <!-- Services Item-->
                                <div class="card border-0 shadow rounded-lg text-start px-2">
                                    <div class="card-body px py-5">
                                        <svg class="svg-icon" style="width: 40px; height: 40px; color: #ff904e">
                                            <use xlink:href="#document-saved-1"></use>
                                        </svg>
                                        <h3 class="h5 my-3">Online Marketing</h3>
                                        <p class="text-sm mb-0 text-muted">
                                            Lorem ipsum dolor amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-6">
                                <!-- Services Item-->
                                <div class="card border-0 shadow rounded-lg text-start px-2">
                                    <div class="card-body px py-5">
                                        <svg class="svg-icon" style="width: 40px; height: 40px; color: #39f8d2">
                                            <use xlink:href="#map-marker-1"></use>
                                        </svg>
                                        <h3 class="h5 my-3">Track your move</h3>
                                        <p class="text-sm mb-0 text-muted">
                                            Lorem ipsum dolor amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-6">
                                <!-- Services Item-->
                                <div class="card border-0 shadow rounded-lg text-start px-2">
                                    <div class="card-body px py-5">
                                        <svg class="svg-icon" style="width: 40px; height: 40px; color: #8190ff">
                                            <use xlink:href="#arrow-target-1"></use>
                                        </svg>
                                        <h3 class="h5 my-3">Market analysis</h3>
                                        <p class="text-sm mb-0 text-muted">
                                            Lorem ipsum dolor amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-6">
                                <!-- Services Item-->
                                <div class="card border-0 shadow rounded-lg text-start px-2">
                                    <div class="card-body px py-5">
                                        <svg class="svg-icon" style="width: 40px; height: 40px; color: #ff634b">
                                            <use xlink:href="#sorting-1"></use>
                                        </svg>
                                        <h3 class="h5 my-3">Full Settings</h3>
                                        <p class="text-sm mb-0 text-muted">
                                            Lorem ipsum dolor amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <section class="p-0" id="testimonials" style="
      background: url(img/testimonials-bg.png) no-repeat;
      background-size: 40% 100%;
      background-position: left center;
    ">
        <div class="container text-center">
            <p class="h6 text-uppercase text-primary">Testimonials</p>
            <h2 class="mb-5">What Our Users Says?</h2>
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="swiper testimonials-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide h-auto">
                                <div class="mx-3 mx-lg-5 my-5 pt-3">
                                    <div class="card shadow rounded-lg px-4 py-5 px-lg-5 with-pattern bg-white border-0">
                                        <div class="card-body index-forward pt-5 rounded-lg">
                                            <div class="testimonial-img">
                                                <img class="rounded-circle" src="/src/assets/img/avatar-1.jpg" alt=""
                                                    width="100" />
                                            </div>
                                            <p class="lead text-muted mb-5">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam.
                                            </p>
                                            <h5 class="mb-0">Sarah Hudson</h5>
                                            <p class="text-primary mb-0 text-sm">Tech Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide h-auto">
                                <div class="mx-3 mx-lg-5 my-5 pt-3">
                                    <div class="card shadow rounded-lg px-4 py-5 px-lg-5 with-pattern bg-white border-0">
                                        <div class="card-body index-forward pt-5 rounded-lg">
                                            <div class="testimonial-img">
                                                <img class="rounded-circle" src="/src/assets/img/avatar-2.png" alt=""
                                                    width="100" />
                                            </div>
                                            <p class="lead text-muted mb-5">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam.
                                            </p>
                                            <h5 class="mb-0">Frank Smith</h5>
                                            <p class="text-primary mb-0 text-sm">Tech Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide h-auto">
                                <div class="mx-3 mx-lg-5 my-5 pt-3">
                                    <div class="card shadow rounded-lg px-4 py-5 px-lg-5 with-pattern bg-white border-0">
                                        <div class="card-body index-forward pt-5 rounded-lg">
                                            <div class="testimonial-img">
                                                <img class="rounded-circle" src="/src/assets/img/avatar-1.jpg" alt=""
                                                    width="100" />
                                            </div>
                                            <p class="lead text-muted mb-5">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam.
                                            </p>
                                            <h5 class="mb-0">Sarah Hudson</h5>
                                            <p class="text-primary mb-0 text-sm">Tech Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide h-auto">
                                <div class="mx-3 mx-lg-5 my-5 pt-3">
                                    <div class="card shadow rounded-lg px-4 py-5 px-lg-5 with-pattern bg-white border-0">
                                        <div class="card-body index-forward pt-5 rounded-lg">
                                            <div class="testimonial-img">
                                                <img class="rounded-circle" src="/src/assets/img/avatar-2.png" alt=""
                                                    width="100" />
                                            </div>
                                            <p class="lead text-muted mb-5">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam.
                                            </p>
                                            <h5 class="mb-0">Frank Smith</h5>
                                            <p class="text-primary mb-0 text-sm">Tech Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <a class="scroll-top-btn" id="scrollTop" href="#!"><i class="fas fa-long-arrow-alt-up"></i></a>
    <footer class="with-pattern-1 position-relative pt-5">
        <div class="container py-5">
            <div class="row gy-4">
                <div class="col-lg-3">
                    <h4>
                        {{ data.siteBranding }}
                    </h4>
                    <p class="text-muted">
                        {{ data.footerSiteSlogan }}
                    </p>
                </div>
                <div class="col-lg-2">
                    <h2 class="h5 mb-4">Quick Links</h2>
                    <div class="d-flex">
                        <ul class="list-unstyled d-inline-block me-4 mb-0">
                            <li class="mb-2">
                                <a class="footer-link" :href="data.footerLinks[0].url">
                                    {{ data.footerLinks[0].title }}
                                </a>
                            </li>
                            <li class="mb-2">
                                <a class="footer-link" :href="data.footerLinks[1].url">{{
                                    data.footerLinks[1].title }}
                                </a>
                            </li>
                            <li class="mb-2">
                                <a class="footer-link" :href="data.footerLinks[2].url">{{
                                    data.footerLinks[2].title }}
                                </a>
                            </li>
                            <li class="mb-2">
                                <a class="footer-link" :href="data.footerLinks[3].url">{{
                                    data.footerLinks[3].title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2">
                    <h2 class="h5 mb-4">Services</h2>
                    <div class="d-flex">
                        <ul class="list-unstyled me-4 mb-0">
                            <li class="mb-2">
                                <a class="footer-link" :href="data.footerLinks[0].url">
                                    {{ data.footerLinks[0].title }}
                                </a>
                            </li>
                            <li class="mb-2">
                                <a class="footer-link" :href="data.footerLinks[1].url">{{
                                    data.footerLinks[1].title }}
                                </a>
                            </li>
                            <li class="mb-2">
                                <a class="footer-link" :href="data.footerLinks[2].url">{{
                                    data.footerLinks[2].title }}
                                </a>
                            </li>
                            <li class="mb-2">
                                <a class="footer-link" :href="data.footerLinks[3].url">{{
                                    data.footerLinks[3].title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-5">
                    <h2 class="h5 mb-4">Contact Info</h2>
                    <ul class="list-unstyled me-4 mb-3">
                        <li class="mb-2 text-muted">
                            {{ data.contactInfo.address }}
                        </li>
                        <li class="mb-2">
                            <a class="footer-link" :href="'tel:' + data.contactInfo.phone">{{ data.contactInfo.phone }}</a>
                        </li>
                        <li class="mb-2">
                            <a class="footer-link" href="mailto:Nova@example.com">{{ data.contactInfo.email }}</a>
                        </li>
                    </ul>
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                            <a class="social-link" href="#!"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li class="list-inline-item">
                            <a class="social-link" href="#!"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li class="list-inline-item">
                            <a class="social-link" href="#!"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                        <li class="list-inline-item">
                            <a class="social-link" href="#!"><i class="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="copyrights">
            <div class="container text-center py-4">
                <p class="mb-0 text-muted text-sm">
                    &copy; {{ data.copyright.year }}, {{ data.copyright.text }}
                    <a href="https://bootstrapious.com/p/app-landing-page" class="text-reset">{{
                        data.copyright.companyName }}</a>.
                </p>
            </div>
        </div>
    </footer>
</template>

<style scoped></style>
