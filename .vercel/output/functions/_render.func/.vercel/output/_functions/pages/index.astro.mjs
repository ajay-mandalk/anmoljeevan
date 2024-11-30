import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as createAstro, h as renderComponent, i as renderHead, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_oeCz78ac.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
/* empty css                                 */
import { jsx, jsxs } from 'react/jsx-runtime';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import { Play, XIcon } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Container;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/Ajaym/anmol-jeevan/src/components/shared/Container.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const backgroundImages = [
    "./asset/about-1.png",
    "./asset/about-2.png",
    "./asset/about-3.png"
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-[750px] bg-body overflow-hidden" data-astro-cid-txibpiox>  ${backgroundImages.map((img, index) => renderTemplate`<img${addAttribute(img, "src")}${addAttribute(`Background drone image ${index + 1}`, "alt")}${addAttribute(`object-cover absolute inset-0 size-full brightness-[0.85] dark:opacity-50 opacity-25 transition-opacity duration-1000 slide-image`, "class")}${addAttribute(index === 0 ? "eager" : "lazy", "loading")} data-astro-cid-txibpiox>`)} ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-txibpiox": true }, { "default": ($$result2) => renderTemplate` <div class="relative z-10 flex flex-col items-center text-center pt-32 pb-20" data-astro-cid-txibpiox>  <div class="relative" data-astro-cid-txibpiox> <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4" data-astro-cid-txibpiox>
Anmol Jeevan Foundation
</h1> <div class="w-24 h-1 bg-[#00ff00] mx-auto mt-4 mb-6" data-astro-cid-txibpiox></div> </div>  <p class="mt-6 text-lg font-light text-gray-800 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed" data-astro-cid-txibpiox>
अनमोल जीवन फाउंडेशन एक गैर-लाभकारी संगठन है जो प्रदान करता है
        नशीली दवाओं और शराब की लत के लिए उपचार और पुनर्वास सेवाएँ।
</p> <a href="#about" class="mt-20 text-gray-800 dark:text-gray-200 hover:text-[#00ff00] transition-colors duration-300 flex items-center gap-2" data-astro-cid-txibpiox>
Learn More
<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-astro-cid-txibpiox> <path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-txibpiox></path> </svg> </a> </div> ` })} </section> `;
}, "C:/Users/Ajaym/anmol-jeevan/src/components/section/Hero.astro", void 0);

const AnimatedBanner = () => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "absolute inset-0",
      style: { background: "linear-gradient(to right, rgba(234,179,8,0.5), rgba(34,197,94,0.5), rgba(59,130,246,0.5), rgba(168,85,247,0.5))" },
      animate: {
        x: ["-100%", "100%"]
      },
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 5
      }
    }
  );
};

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="relative w-full" data-astro-cid-qlfjksao> <!-- Announcement Banner --> <div id="announcement-banner" class="relative overflow-hidden bg-gradient-to-r from-background-gradient-from to-background-gradient-to" data-astro-cid-qlfjksao> <div class="absolute inset-0 overflow-hidden" data-astro-cid-qlfjksao> ${renderComponent($$result, "AnimatedBanner", AnimatedBanner, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/shared/AnimatedBanner", "client:component-export": "AnimatedBanner", "data-astro-cid-qlfjksao": true })} </div> <!-- Main Banner Content --> <div class="relative flex min-h-[60px] w-full items-center justify-between bg-[#2DF8C5]/80 backdrop-blur-sm
      before:absolute before:inset-0 before:-z-[1]
      before:bg-[linear-gradient(90deg,#488cfb,#29dbbc,#ddf505,#ff9f0e,#e440bb,#655adc,#488cfb)]
      before:bg-[length:200%_auto] before:animate-borderAnimation" data-astro-cid-qlfjksao> <!-- Left Side - Emergency Contact --> <div class="flex-1 flex justify-start pl-4" data-astro-cid-qlfjksao> <div class="flex items-center gap-2 text-[#013437]" data-astro-cid-qlfjksao> <svg class="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z" data-astro-cid-qlfjksao></path> </svg> <span class="text-sm font-medium" data-astro-cid-qlfjksao>24/7 Emergency Support</span> </div> </div> <!-- Center - Phone Number --> <div class="flex-1 flex justify-center" data-astro-cid-qlfjksao> <div class="group" data-astro-cid-qlfjksao> <a href="tel:+918285362996" class="flex items-center gap-2 text-[#013437] hover:opacity-80" data-astro-cid-qlfjksao> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z" data-astro-cid-qlfjksao></path> </svg> <span class="text-sm font-medium" data-astro-cid-qlfjksao>+91 82853 62996</span> </a> </div> </div> <!-- Right Side - Social Media Links --> <div class="flex-1 flex justify-end pr-4" data-astro-cid-qlfjksao> <ul class="flex items-center gap-4" data-astro-cid-qlfjksao> <li data-astro-cid-qlfjksao> <a href="#" class="text-[#013437] hover:opacity-80" data-astro-cid-qlfjksao> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z" data-astro-cid-qlfjksao></path> </svg> </a> </li> <li data-astro-cid-qlfjksao> <a href="#" class="text-[#013437] hover:opacity-80" data-astro-cid-qlfjksao> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z" data-astro-cid-qlfjksao></path> </svg> </a> </li> </ul> </div> </div> </div> </header> `;
}, "C:/Users/Ajaym/anmol-jeevan/src/components/layout/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$BtnLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BtnLink;
  const { href, text, className, variant } = Astro2.props;
  const getThemeStyle = (variant2) => {
    const styles = {
      primary: "bg-[#00ff00] border-transparent relative after:bg-[#00ff00] hover:border-[#17ee17]",
      secondary: "bg-transparent border-[#d2e825] hover:bg-[#d2e825]/10"
    };
    return styles[variant2];
  };
  const getTextColor = (variant2) => {
    return variant2 === "primary" ? "text-gray-800" : "text-[#d2e825]";
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`inline-flex items-center px-6 py-3 rounded-lg outline-none relative overflow-hidden border duration-300 ease-linear
    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center 
    after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0
    ${getThemeStyle(variant)} hover:after:opacity-100 hover:after:scale-[2.5] ${className}`, "class")}> <span${addAttribute(`relative ${getTextColor(variant)} z-10 font-medium`, "class")}> ${text} </span> </a>`;
}, "C:/Users/Ajaym/anmol-jeevan/src/components/shared/BtnLink.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      href: "/",
      text: "Home"
    },
    {
      href: "#services",
      text: "Services"
    },
    {
      href: "#about-us",
      text: "About us"
    },
    {
      href: "#features",
      text: "Features"
    },
    {
      href: "/DashBoard",
      text: "Dashboard"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 w-full z-50 transition-all duration-300" id="navbar" data-astro-cid-jp2pq5zm> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-jp2pq5zm": true }, { "default": ($$result2) => renderTemplate` <nav class="flex items-center justify-between h-16 lg:h-20 gap-6" data-astro-cid-jp2pq5zm> <!-- Logo --> <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-all" aria-label="Anmol Jeevan Foundation" data-astro-cid-jp2pq5zm> <span class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#488cfb] to-[#29dbbc] bg-clip-text text-transparent" data-astro-cid-jp2pq5zm>Anmol Jeevan Foundation</span> </a> <!-- Navigation Menu --> <div data-navbar class="nav-wrapper" data-astro-cid-jp2pq5zm> <ul class="flex flex-col lg:flex-row gap-y-6 gap-x-8 lg:items-center lg:justify-center lg:flex-1 text-base font-medium text-gray-800 dark:text-gray-200" data-astro-cid-jp2pq5zm> ${navItems.map((item) => renderTemplate`<li data-astro-cid-jp2pq5zm> <a${addAttribute(item.href, "href")} class="nav-link relative py-2.5 duration-300 hover:text-[#29dbbc] dark:hover:text-[#2DF8C5]" data-astro-cid-jp2pq5zm> ${item.text} </a> </li>`)} </ul> <div class="mt-6 lg:mt-0 lg:ml-6" data-astro-cid-jp2pq5zm> ${renderComponent($$result2, "BtnLink", $$BtnLink, { "text": "Book Appointment", "href": "#cta", "className": "w-full lg:w-auto flex justify-center items-center gap-2 font-medium  text-white hover:opacity-90 transition-opacity", "variant": "primary", "data-astro-cid-jp2pq5zm": true }, { "default": ($$result3) => renderTemplate`
Book Appointment
<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" data-astro-cid-jp2pq5zm> <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="currentColor" data-astro-cid-jp2pq5zm></path> </svg> ` })} </div> </div> <!-- Controls --> <div class="flex items-center gap-x-4" data-astro-cid-jp2pq5zm> <button data-switch-theme class="theme-toggle-btn text-gray-800 dark:text-gray-200" aria-label="Toggle theme" data-astro-cid-jp2pq5zm> <svg class="w-6 h-6 dark:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-astro-cid-jp2pq5zm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" data-astro-cid-jp2pq5zm></path> </svg> <svg class="w-6 h-6 hidden dark:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-astro-cid-jp2pq5zm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-astro-cid-jp2pq5zm></path> </svg> </button> <button data-toggle-nav class="hamburger-btn lg:hidden flex items-center justify-center text-gray-800 dark:text-gray-200" aria-label="Toggle navigation" aria-expanded="false" data-astro-cid-jp2pq5zm> <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-jp2pq5zm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-jp2pq5zm></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" class="hidden w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-jp2pq5zm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-jp2pq5zm></path> </svg> </button> </div> </nav> ` })} </header>  `;
}, "C:/Users/Ajaym/anmol-jeevan/src/components/layout/Navbar.astro", void 0);

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fixed bottom-8 left-4 sm:left-9 z-[999]"> <a href="tel:+918285362996" class="relative inline-flex items-center gap-[10px] py-2 px-[14px] rounded-lg z-10
      before:absolute before:inset-0 before:rounded-lg before:-z-[1]
      before:bg-[linear-gradient(90deg,#488cfb,#29dbbc,#ddf505,#ff9f0e,#e440bb,#655adc,#488cfb)]
      before:bg-[length:200%_auto] before:animate-borderAnimation
      after:absolute after:inset-[2px] after:rounded-[6px] after:bg-[#00ff00] after:-z-[1] dark:after:bg-dark-2"> <img src="/icons/call.svg" alt="Call Icon" class="w-5 h-5"> <span class="relative z-10 text-white font-medium text-base dark:text-dark-6">
अभी कॉल करें
</span> </a> </div>`;
}, "C:/Users/Ajaym/anmol-jeevan/src/components/layout/CallToAction.astro", void 0);

const $$BackToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ====== Back To Top Start -->${maybeRenderHead()}<a href="javascript:void(0)" id="backToTop" class="back-to-top fixed bottom-8 right-8 left-auto z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-lime-500 text-white shadow-md transition duration-300 ease-in-out hover:bg-lime-600"> <span class="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span> </a> <!-- ====== Back To Top End --> `;
}, "C:/Users/Ajaym/anmol-jeevan/src/components/layout/BackToTop.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Navbar", $$Navbar, { "title": title })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "CallToAction", $$CallToAction, {})} ${renderComponent($$result, "BackToTop", $$BackToTop, {})} </body></html>`;
}, "C:/Users/Ajaym/anmol-jeevan/src/layouts/Layout.astro", void 0);

const $$Treatment = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="Treatment" class="bg-gray-900 text-white w-full"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"> <div class="max-w-xl"> <h2 class="font-bold text-[#00ff00]">Our Treatment</h2> <h2 class="text-4xl font-bold sm:text-5xl">For Drug and Alcohol</h2> <p>
Anmol Jeevan Foundation in best nasha mukti kendra in delhi NCR, it is
          started by Mr. Dulal Mandal in 2018. We treat both men and women,
          aged 18 and older, from all around the Dehli NCR.
</p> </div> <!-- Cards container --> <!-- Card 1 --> <div class="mt-10 rounded-lg border-2 border-[#00ff00] p-6 hover:bg-lime-500 hover:bg-opacity-10 transition-all"> <div class="flex items-center gap-4"> <!-- Added gap-4 for spacing --> <img src="./icons/no-drink.svg" alt="Protect" class="w-16 h-16"> <div class="flex flex-col items-start"> <p class="text-base font-bold">Alcohol De-Addiction</p> <p class="text-sm">
Our therapists are trained and certified in therapy technique
</p> </div> </div> </div> <!--Card 2 --> <div class="mt-2 rounded-lg border-2 border-[#00ff00] p-6 hover:bg-lime-500 hover:bg-opacity-10 transition-all"> <div class="flex items-center gap-4"> <img src="./icons/anti-drug.svg" alt="Saving" class="w-16 h-16"> <div class="flex flex-col items-start"> <p class="text-base font-bold">Drug Addiction</p> <p class="text-sm">
You will receive a full individualized treatment plan
</p> </div> </div> </div> <!--Card 3 --> <div class="mt-2 rounded-lg border-2 border-[#00ff00] p-6 hover:bg-lime-500 hover:bg-opacity-10 transition-all"> <div class="flex items-center gap-4"> <img src="./icons/diagnosis.svg" alt="Saving" class="w-16 h-16"> <div class="flex flex-col items-start"> <p class="text-base font-bold">Dual Diagnosis Treatment</p> <p class="text-sm">
Our therapists are trained and certified in therapy technique
</p> </div> </div> </div> <!--Card 4 --> <div class="mt-2 rounded-lg border-2 border-[#00ff00] p-6 hover:bg-lime-500 hover:bg-opacity-10 transition-all"> <div class="flex items-center gap-4"> <img src="./icons/detox.svg" alt="Saving" class="w-16 h-16"> <div class="flex flex-col items-start"> <p class="text-base font-bold">Detoxification Treatment</p> <p class="text-sm">
Our therapists are trained and certified in therapy technique
</p> </div> </div> </div> <!--Card 5 --> <div class="mt-2 rounded-lg border-2 border-[#00ff00] p-6 hover:bg-lime-500 hover:bg-opacity-10 transition-all"> <div class="flex items-center gap-4"> <img src="./icons/anti_heroine.svg" alt="Saving" class="w-16 h-16"> <div class="flex flex-col items-start"> <p class="text-base font-bold">Heroin De-Addiction Treatment</p> <p class="text-sm">
Our therapists are trained and certified in therapy technique
</p> </div> </div> </div> <!-- <TreatmentCard /> --> </div> ` })} </section>`;
}, "C:/Users/Ajaym/anmol-jeevan/src/components/section/Treatment.astro", void 0);

const $$FAQs = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "How Much Does Rehab Cost?",
      answer: "Anmol Jeevan Foundation Nahsa Mukti Centre is very reasonable and we support patients financially because we understand that many patients have already undergone treatments at various centers without success."
    },
    {
      question: "What is the duration of the treatment?",
      answer: "The duration of the treatment depends on the severity of the addiction. It can range from 30 days to 90 days."
    },
    {
      question: "What Does a Rehab Treatment Include?",
      answer: "The treatment process involves a combination of detoxification, counseling, and therapy. The duration of the treatment depends on the severity of the addiction."
    },
    {
      question: "Are Private Rooms Available?",
      answer: "Yes, private rooms are available at Anmol Jeevan Foundation Nahsa Mukti Centre. We understand the importance of privacy and comfort for our patients."
    }
  ];
  const icons = {
    plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
          <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
        </svg>`,
    minus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
          <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
        </svg>`
  };
  return renderTemplate`${maybeRenderHead()}<section id="FAQs" class="flex flex-col justify-center items-center px-16 py-16 w-full bg-white dark:bg-gray-900 max-md:px-5 max-md:max-w-full"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class=" max-w-screen-xl px-4 py-2 sm:px-4 sm:py-6 lg:px-4 lg:py-8"> <div class="max-w-xl"> <h2 class="text-4xl font-bold sm:text-5xl text-neutral-800 dark:text-white">Frequently Asked Questions</h2> <p class="mt-4 text-lg text-neutral-800 dark:text-gray-300">
Anmol Jeevan Foundation is the best nasha mukti kendra in delhi NCR, it is
            started by Mr. Dulal Mandal in 2018. We treat both men and women,
            aged 18 and older, from all around the Dehli NCR
</p> </div> ${faqs.map((faq, index) => renderTemplate`<div class="border-[#00ff00]"> <button${addAttribute(index + 1, "data-accordion-button")} class="w-full flex items-center justify-between px-5 h-[55px] border-2 border-[#00ff00] text-neutral-800 dark:text-white"> <span>${faq.question}</span> <span${addAttribute(`icon-${index + 1}`, "id")} class="font-semibold text-neutral-800 dark:text-white transition-transform duration-300"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icons.plus)}` })} </span> </button> <div${addAttribute(`content-${index + 1}`, "id")} class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"> <div class="pb-5 text-sm text-neutral-800 dark:text-gray-300"> ${faq.answer} </div> </div> </div>`)} </div>` })}</section> `;
}, "C:/Users/Ajaym/anmol-jeevan/src/components/section/FAQs.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-100"> <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8"> <div class="flex justify-center"> <div class="mt-2 inline-flex text-3xl font-semibold text-gray-900">
Anmol Jeevan Foundation
</div> </div> <p class="mx-auto mt-1 max-w-md text-center leading-relaxed text-gray-500">
Your Partner In Drug and Alcohol Treatment
</p> <!-- Map section --> <div class="mt-8"> <h2 class="text-2xl font-semibold text-gray-900 mb-4 text-center">
Find Us
</h2> <div class="w-full border-2 border-[#00ff00] h-[300px] rounded-xl overflow-hidden relative group"> <a href="https://maps.google.com/maps?q=28.766459375591865,77.28275997550568" target="_blank" rel="noopener noreferrer" class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center z-10"> <span class="border-2 border-[#00ff00] bg-white text-gray-900 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
Open in Google Maps
</span> </a> <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3497.4290392257667!2d77.28275997550568!3d28.766459375591865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQ1JzU5LjMiTiA3N8KwMTcnMDcuMiJF!5e0!3m2!1sen!2sin!4v1731433505239!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe> </div> </div> <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12"> <li> <a class="text-gray-700 transition hover:text-gray-700/75" href="./About">
Rehabilitation Centre in Delhi</a> </li> <li> <a class="text-gray-700 transition hover:text-gray-700/75" href="#">De Addiction Centre in Delhi
</a> </li> <li> <a class="text-gray-700 transition hover:text-gray-700/75" href="#">
Nasha Mukti Kendra in Delhi</a> </li> <li> <a class="text-gray-700 transition hover:text-gray-700/75" href="#">
Drug & Alcohol Rehab Centre</a> </li> <li> <a class="text-gray-700 transition hover:text-gray-700/75" href="/Brands.astro">
De Addiction Treatment Centre
</a> </li> </ul> <ul class="mt-12 flex justify-center gap-6 md:gap-8"> <li> <a href="#" rel="noreferrer" target="_blank" class="text-[#00ff00] transition hover:text-[#00ff00]/75"> <span class="sr-only">Facebook</span> <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path> </svg> </a> </li> <li> <a href="#" rel="noreferrer" target="_blank" class="text-[#00ff00] transition hover:text-[#00ff00]/75"> <span class="sr-only">Instagram</span> <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path> </svg> </a> </li> <li> <a href="#" rel="noreferrer" target="_blank" class="text-[#00ff00] transition hover:text-[#00ff00]/75"> <span class="sr-only">X (Twitter)</span> <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path> </svg> </a> </li> <li> <a href="#" rel="noreferrer" target="_blank" class="text-[#00ff00] transition hover:text-[#00ff00]/75"> <span class="sr-only">YouTube</span> <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd"></path> </svg> </a> </li> </ul> <div class="mt-12 text-center text-gray-700">
&copy; <span id="year"></span> Anmol Jeevan Foundation 2024. All rights reserved
</div> </div> </footer>`;
}, "C:/Users/Ajaym/anmol-jeevan/src/components/section/Footer.astro", void 0);

const $$WhyAnmol = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col justify-center items-center px-16 py-16 w-full bg-white dark:bg-gray-900 max-md:px-5 max-md:max-w-full"> <div class="w-full max-w-[1124px] max-md:max-w-full"> <div class="flex gap-5 max-md:flex-col"> <div class="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full"> <div class="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full"> <h2 class="font-bold text-[#00ff00]">Why Choose Us</h2> <h2 class="text-4xl font-bold sm:text-5xl text-gray-800 dark:text-white">
Anmol Jeevan Foundation?
</h2> <p class="self-stretch mt-4 text-lg text-gray-800 dark:text-gray-300">
We believe that a positive and supportive environment can guide
            individuals toward the right path. At Anmol Jeevan Foundation, our
            drug rehab center provides the care and guidance needed to overcome
            addiction and build a better future.
</p> <div class="mt-8 w-full"> <div class="grid grid-cols-4 gap-5 max-md:grid-cols-1"> <div class="rounded-lg border-2 border-[#00ff00] p-6 hover:bg-lime-500 hover:bg-opacity-10 transition-all text-center"> <p class="text-4xl font-bold text-gray-800 dark:text-white">
Pickup
</p> <p class="mt-2 text-lg text-gray-800 dark:text-gray-300">
From Anywhere <br> In Delhi NCR
</p> </div> <div class="rounded-lg border-2 border-[#00ff00] p-6 hover:bg-lime-500 hover:bg-opacity-10 transition-all text-center"> <p class="text-4xl font-bold text-gray-800 dark:text-white">
24/7
</p> <p class="mt-2 text-lg text-gray-800 dark:text-gray-300">
Support <br> Available
</p> </div> <div class="rounded-lg border-2 border-[#00ff00] p-6 hover:bg-lime-500 hover:bg-opacity-10 transition-all text-center"> <p id="speed-counter" class="text-4xl font-bold text-gray-800 dark:text-white">
0%
</p> <p class="mt-2 text-lg text-gray-800 dark:text-gray-300">
Recovery <br> Rate
</p> </div> <div class="rounded-lg border-2 border-[#00ff00] p-6 hover:bg-lime-500 hover:bg-opacity-10 transition-all text-center"> <p id="time-counter" class="text-4xl font-bold text-gray-800 dark:text-white">
0
</p> <p class="mt-2 text-lg text-gray-800 dark:text-gray-300">
Years <br> Experience
</p> </div> </div> </div> </div> </div> </div> </div> </section>    `;
}, "C:/Users/Ajaym/anmol-jeevan/src/components/section/WhyAnmol.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="flex flex-col justify-center items-center px-16 py-16 w-full bg-white dark:bg-gray-900 max-md:px-5 max-md:max-w-full"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="max-w-screen-xl px-4 sm:px-6 lg:px-8"> <!-- Header Section --> <div class="max-w-xl mb-12"> <h2 class="font-bold text-[#00ff00]">About Us</h2> <h2 class="text-4xl font-bold sm:text-5xl text-neutral-800 dark:text-white">
Anmol Jeevan Foundation
</h2> <p class="mt-4 text-lg text-neutral-800 dark:text-gray-300">
Leading the way in rehabilitation and recovery since 2018, providing hope and healing to those struggling with addiction.
</p> </div> <!-- Main Content Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- Left Column - Mission --> <div class="flex flex-col space-y-6"> <div class="rounded-lg border-2 border-[#00ff00] p-6 hover:bg-lime-500 hover:bg-opacity-10 transition-all"> <h3 class="text-2xl font-bold text-neutral-800 dark:text-white mb-4">Our Mission</h3> <p class="text-neutral-800 dark:text-gray-300">
At Anmol Jeevan Foundation, we are committed to providing comprehensive rehabilitation services 
              with a focus on holistic healing and sustainable recovery. Our dedicated team works tirelessly 
              to transform lives and rebuild families affected by addiction.
</p> </div> <div class="rounded-lg border-2 border-[#00ff00] p-6 hover:bg-lime-500 hover:bg-opacity-10 transition-all"> <h3 class="text-2xl font-bold text-neutral-800 dark:text-white mb-4">Our Approach</h3> <p class="text-neutral-800 dark:text-gray-300">
We believe in treating the whole person, not just the addiction. Our program combines medical expertise, 
              psychological support, and spiritual guidance to ensure lasting recovery and personal growth.
</p> </div> </div> <!-- Right Column - Features --> <div class="bg-gray-900 rounded-lg p-8"> <h3 class="text-2xl font-bold text-white mb-6">What Sets Us Apart</h3> <div class="space-y-4"> <div class="flex items-center gap-4"> <div class="bg-[#00ff00] rounded-full p-2"> <img src="./icons/diagnosis.svg" alt="Expert Care" class="w-8 h-8"> </div> <div> <h4 class="text-[#00ff00] font-bold">Expert Care Team</h4> <p class="text-gray-300">Certified professionals with years of experience</p> </div> </div> <div class="flex items-center gap-4"> <div class="bg-[#00ff00] rounded-full p-2"> <img src="./icons/detox.svg" alt="Treatment" class="w-8 h-8"> </div> <div> <h4 class="text-[#00ff00] font-bold">Personalized Treatment</h4> <p class="text-gray-300">Customized recovery plans for each patient</p> </div> </div> <div class="flex items-center gap-4"> <div class="bg-[#00ff00] rounded-full p-2"> <img src="./icons/no-drink.svg" alt="Support" class="w-8 h-8"> </div> <div> <h4 class="text-[#00ff00] font-bold">24/7 Support</h4> <p class="text-gray-300">Round-the-clock care and assistance</p> </div> </div> </div> </div> </div> </div> ` })} </section>`;
}, "C:/Users/Ajaym/anmol-jeevan/src/components/section/About.astro", void 0);

const $$RehabShowcase = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="max-w-7xl mx-auto p-8"> <div class="text-center py-16 bg-gradient-to-r from-[#00ff00] to-gray-900 rounded-lg mb-12"> <div class="text-center"> <h1 class="text-4xl font-bold text-white mb-6 leading-tight"> <span class="block">मेरा ठीक होना सबसे पहले होना चाहिए</span> <span class="block text-3xl mt-4 text-gray-200">
ताकि जीवन में जो कुछ भी मुझे पसंद है
</span> <span class="block text-3xl text-gray-200">
वह आखिरी में न आए
</span> </h1> <p class="text-xl text-gray-300 italic">- गुमनाम</p> </div> </div> <div class="mb-16"> <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
See Our Rehab Center View
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> <div class="relative overflow-hidden rounded-lg"> <img src="/Rehab/Rehab1.jpeg" alt="RehabShocase" class="w-full h-64 object-cover transition-transform transform hover:scale-105"> <h2 class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center">
सब कुछ उत्तम है और सुधार की गुंजाइश हमेशा बनी रहती है।
</h2> </div> <div class="relative overflow-hidden rounded-lg"> <img src="/Rehab/Rehab2.jpeg" alt="RehabShocase" class="w-full h-64 object-cover transition-transform transform hover:scale-105"> <h2 class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center">
पूर्णता के बजाय निरंतर सुधार का प्रयास करें।
</h2> </div> <div class="relative overflow-hidden rounded-lg"> <img src="/Rehab/Rehab3.jpeg" alt="RehabShocase" class="w-full h-64 object-cover transition-transform transform hover:scale-105"> <h2 class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center">
सुधार के बिना अभ्यास निरर्थक है।
</h2> </div> </div> </div> </section>`;
}, "C:/Users/Ajaym/anmol-jeevan/src/components/section/RehabShowcase.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...props,
      className: cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical
        },
        className
      ),
      children: Array(repeat).fill(0).map((_, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("flex shrink-0 justify-around [gap:var(--gap)]", {
            "animate-marquee flex-row": !vertical,
            "animate-marquee-vertical flex-col": vertical,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse
          }),
          children
        },
        i
      ))
    }
  );
}

const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      name: "Aman Yadav",
      username: "@Aman Yadav",
      body: "\u092E\u0948\u0902\u0928\u0947 \u092A\u0939\u0932\u0947 \u0915\u092D\u0940 \u0910\u0938\u093E \u0915\u0941\u091B \u0928\u0939\u0940\u0902 \u0926\u0947\u0916\u093E\u0964 \u092F\u0939 \u0905\u0926\u094D\u092D\u0941\u0924 \u0939\u0948\u0964 \u092E\u0941\u091D\u0947 \u092F\u0939 \u092A\u0938\u0902\u0926 \u0939\u0948\u0964",
      img: "https://avatar.vercel.sh/jack"
    },
    {
      name: "Raju",
      username: "@Raju",
      body: "\u092E\u0941\u091D\u0947 \u0928\u0939\u0940\u0902 \u092A\u0924\u093E \u0915\u094D\u092F\u093E \u0915\u0939\u0942\u0902\u0964 \u092E\u0948\u0902 \u0905\u0935\u093E\u0915 \u0939\u0942\u0901\u0964 \u092F\u0939 \u0905\u0926\u094D\u092D\u0941\u0924 \u0939\u0948\u0964",
      img: "https://avatar.vercel.sh/jill"
    },
    {
      name: "Ram",
      username: "@Ram",
      body: "\u092E\u0948\u0902 \u0936\u092C\u094D\u0926\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0916\u094B \u0917\u092F\u093E \u0939\u0942\u0901\u0964 \u092F\u0939 \u0905\u0926\u094D\u092D\u0941\u0924 \u0939\u0948\u0964 \u092E\u0941\u091D\u0947 \u092F\u0939 \u092A\u0938\u0902\u0926 \u0939\u0948\u0964",
      img: "https://avatar.vercel.sh/john"
    },
    {
      name: "Saleem Khan",
      username: "@Saleem Khan",
      body: "\u092E\u0948\u0902 \u0936\u092C\u094D\u0926\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0916\u094B \u0917\u092F\u093E \u0939\u0942\u0901\u0964 \u092F\u0939 \u0905\u0926\u094D\u092D\u0941\u0924 \u0939\u0948\u0964 \u092E\u0941\u091D\u0947 \u092F\u0939 \u092A\u0938\u0902\u0926 \u0939\u0948\u0964",
      img: "https://avatar.vercel.sh/jane"
    },
    {
      name: "Sohan",
      username: "@Sohan",
      body: "\u092E\u0948\u0902 \u0936\u092C\u094D\u0926\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0916\u094B \u0917\u092F\u093E \u0939\u0942\u0901\u0964 \u092F\u0939 \u0905\u0926\u094D\u092D\u0941\u0924 \u0939\u0948\u0964 \u092E\u0941\u091D\u0947 \u092F\u0939 \u092A\u0938\u0902\u0926 \u0939\u0948\u0964",
      img: "https://avatar.vercel.sh/jenny"
    },
    {
      name: "Raj",
      username: "@Raj",
      body: "\u092E\u0948\u0902 \u0936\u092C\u094D\u0926\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0916\u094B \u0917\u092F\u093E \u0939\u0942\u0901\u0964 \u092F\u0939 \u0905\u0926\u094D\u092D\u0941\u0924 \u0939\u0948\u0964 \u092E\u0941\u091D\u0947 \u092F\u0939 \u092A\u0938\u0902\u0926 \u0939\u0948\u0964",
      img: "https://avatar.vercel.sh/james"
    },
    {
      name: "Shubhas Kumar",
      username: "@Shubhas Kumar",
      body: "Rehab center \u0928\u0947 \u092E\u0947\u0930\u0940 \u091C\u093F\u0902\u0926\u0917\u0940 \u092C\u0926\u0932 \u0926\u0940\u0964 \u0905\u092C \u092E\u0948\u0902 \u090F\u0915 \u0928\u0908 \u0936\u0941\u0930\u0941\u0906\u0924 \u0915\u0930 \u0930\u0939\u0940 \u0939\u0942\u0901\u0964",
      img: "https://avatar.vercel.sh/neha"
    },
    {
      name: "Vikram",
      username: "@Vikram",
      body: "Alcohol addiction \u0938\u0947 \u091B\u0941\u091F\u0915\u093E\u0930\u093E \u092A\u093E\u0928\u0947 \u092E\u0947\u0902 \u092E\u0941\u091D\u0947 \u092F\u0939\u093E\u0901 \u092C\u0939\u0941\u0924 \u092E\u0926\u0926 \u092E\u093F\u0932\u0940\u0964",
      img: "https://avatar.vercel.sh/vikram"
    },
    {
      name: "Rahul",
      username: "@Rahul",
      body: "Drug addiction \u0938\u0947 \u0909\u092C\u0930\u0928\u0947 \u092E\u0947\u0902 \u092E\u0941\u091D\u0947 \u092F\u0939\u093E\u0901 \u092C\u0939\u0941\u0924 \u0938\u0939\u093E\u092F\u0924\u093E \u092E\u093F\u0932\u0940\u0964",
      img: "https://avatar.vercel.sh/priya"
    },
    {
      name: "Anil",
      username: "@Anil",
      body: "\u092F\u0939\u093E\u0901 \u0915\u0940 \u091F\u0940\u092E \u0928\u0947 \u092E\u0941\u091D\u0947 substance abuse \u0938\u0947 \u092C\u093E\u0939\u0930 \u0928\u093F\u0915\u0932\u0928\u0947 \u092E\u0947\u0902 \u092C\u0939\u0941\u0924 \u092E\u0926\u0926 \u0915\u0940\u0964",
      img: "https://avatar.vercel.sh/anil"
    },
    {
      name: "Karim Khan",
      username: "@Karim Khan",
      body: "Rehab center \u0915\u0940 \u0938\u0947\u0935\u093E\u090F\u0901 \u092C\u0939\u0941\u0924 \u0939\u0940 \u0909\u0924\u094D\u0915\u0943\u0937\u094D\u091F \u0939\u0948\u0902\u0964",
      img: "https://avatar.vercel.sh/kavita"
    },
    {
      name: "Rohit",
      username: "@Rohit",
      body: "\u092F\u0939\u093E\u0901 \u0915\u0940 \u0926\u0947\u0916\u092D\u093E\u0932 \u0914\u0930 \u0938\u092E\u0930\u094D\u0925\u0928 \u0928\u0947 \u092E\u0947\u0930\u0940 \u091C\u093F\u0902\u0926\u0917\u0940 \u092C\u0926\u0932 \u0926\u0940\u0964",
      img: "https://avatar.vercel.sh/rohit"
    }
  ];
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);
  return renderTemplate`${maybeRenderHead()}<section class="relative py-2"> <div class="container mx-auto px-4 mb-2"> <!-- First Marquee --> ${renderComponent($$result, "Marquee", Marquee, { "className": "[--duration:24s]", "pauseOnHover": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/marquee", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${firstRow.map((testimonial) => renderTemplate`<div class="relative w-80 mx-2 overflow-hidden rounded-xl border-lime-500 p-6 cursor-pointer
                      border bg-gray-950/[.01] hover:bg-gray-950/[.05]
                      dark:border-lime-500 dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"> <div class="flex flex-col gap-3"> <div class="flex items-center gap-2"> <img class="rounded-full" width="32" height="32" alt=""${addAttribute(testimonial.img, "src")}> <h3 class="text-xl font-semibold text-gray-900 dark:text-white"> ${testimonial.username} </h3> </div> <p class="font-bold text-gray-600 dark:text-gray-300"> ${testimonial.body} </p> </div> </div>`)}` })} <!-- Second Marquee (Reverse Direction) --> ${renderComponent($$result, "Marquee", Marquee, { "className": "[--duration:24s]", "pauseOnHover": true, "reverse": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/marquee", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${secondRow.map((testimonial) => renderTemplate`<div class="relative w-80 mx-2 overflow-hidden rounded-xl border-lime-500 p-6 cursor-pointer
                      border bg-gray-950/[.01] hover:bg-gray-950/[.05]
                      dark:border-lime-500 dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"> <div class="flex flex-col gap-3"> <div class="flex items-center gap-2"> <img class="rounded-full" width="32" height="32" alt=""${addAttribute(testimonial.img, "src")}> <h3 class="text-xl font-semibold text-gray-900 dark:text-white"> ${testimonial.username} </h3> </div> <p class="text-gray-600 dark:text-gray-300"> ${testimonial.body} </p> </div> </div>`)}` })} <!-- Gradient Overlays --> <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div> <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> </div> </section>`;
}, "C:/Users/Ajaym/anmol-jeevan/src/components/section/Testimonial.astro", void 0);

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 }
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 }
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 }
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 }
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 }
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 }
  }
};
const HeroVideoDialog = ({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];
  return /* @__PURE__ */ jsxs("div", { className: cn("relative", className), children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative cursor-pointer group",
        onClick: () => setIsVideoOpen(true),
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: thumbnailSrc,
              alt: thumbnailAlt,
              width: 1920,
              height: 1080,
              className: "w-full transition-all duration-200 group-hover:brightness-[0.8] ease-out rounded-md shadow-lg border"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-2xl", children: /* @__PURE__ */ jsx("div", { className: "bg-primary/10 flex items-center justify-center rounded-full backdrop-blur-md size-28", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: `flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 shadow-md rounded-full size-20 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100`,
              children: /* @__PURE__ */ jsx(
                Play,
                {
                  className: "size-8 text-white fill-white group-hover:scale-105 scale-100 transition-transform duration-200 ease-out",
                  style: {
                    filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"
                  }
                }
              )
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isVideoOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        onClick: () => setIsVideoOpen(false),
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md",
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            ...selectedAnimation,
            transition: { type: "spring", damping: 30, stiffness: 300 },
            className: "relative w-full max-w-4xl aspect-video mx-4 md:mx-0",
            children: [
              /* @__PURE__ */ jsx(motion.button, { className: "absolute -top-16 right-0 text-white text-xl bg-neutral-900/50 ring-1 backdrop-blur-md rounded-full p-2 dark:bg-neutral-100/50 dark:text-black", children: /* @__PURE__ */ jsx(XIcon, { className: "size-5" }) }),
              /* @__PURE__ */ jsx("div", { className: "size-full border-2 border-white rounded-2xl overflow-hidden isolate z-[1] relative", children: /* @__PURE__ */ jsx(
                "iframe",
                {
                  src: videoSrc,
                  title: "Video player",
                  className: "size-full rounded-2xl",
                  allowFullScreen: true,
                  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                }
              ) })
            ]
          }
        )
      }
    ) })
  ] });
};

const $$VideoShowcase = createComponent(($$result, $$props, $$slots) => {
  const videos = [
    {
      videoSrc: "https://www.youtube.com/embed/PY9DcIMGxMs?si=Z-3xqeQO5eMiUvp0",
      thumbnailSrc: "public/thumbnail/thumbnail.jpg",
      thumbnailAlt: "Hero Video Light"
    },
    {
      videoSrc: "https://www.youtube.com/embed/if03XinoA-8?si=7SVQu_Lm3hUgWj66",
      thumbnailSrc: "public/thumbnail/thumbnail-1.jpg",
      thumbnailAlt: "Hero Video Dark"
    },
    {
      videoSrc: "https://www.youtube.com/embed/a6eCdJR9law?si=B8te8x3Gw3xkt2oM",
      thumbnailSrc: "public/thumbnail/thumbnail-2.jpg",
      thumbnailAlt: "Hero Video Light"
    },
    {
      videoSrc: "https://www.youtube.com/embed/hBC7i-vHWsU?si=bqbwl76UvFkIffZF",
      thumbnailSrc: "public/thumbnail/thumbnail-3.jpg",
      thumbnailAlt: "Hero Video Dark"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative py-8"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> ${videos.map((video, _index) => renderTemplate`<div class="relative"> ${renderComponent($$result, "HeroVideoDialog", HeroVideoDialog, { "client:load": true, "className": "dark:hidden block", "animationStyle": "top-in-bottom-out", "videoSrc": video.videoSrc, "thumbnailSrc": video.thumbnailSrc, "thumbnailAlt": video.thumbnailAlt, "client:component-hydration": "load", "client:component-path": "@/components/ui/hero-video-dialog", "client:component-export": "default" })} ${renderComponent($$result, "HeroVideoDialog", HeroVideoDialog, { "client:load": true, "className": "hidden dark:block", "animationStyle": "top-in-bottom-out", "videoSrc": video.videoSrc, "thumbnailSrc": video.thumbnailSrc, "thumbnailAlt": video.thumbnailAlt, "client:component-hydration": "load", "client:component-path": "@/components/ui/hero-video-dialog", "client:component-export": "default" })} </div>`)} </div> </div> </section>`;
}, "C:/Users/Ajaym/anmol-jeevan/src/components/section/VideoShowcase.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Anmol Jeevan Foundation" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col gap-y-4 md:gap-y-8 overflow-hidden"> ${renderComponent($$result2, "Hero", $$Hero, {})} <!-- <Feature /> --> ${renderComponent($$result2, "Treatment", $$Treatment, {})} ${renderComponent($$result2, "WhyAnmol", $$WhyAnmol, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "RehabShowacase", $$RehabShowcase, {})} ${renderComponent($$result2, "FAQs", $$FAQs, {})} ${renderComponent($$result2, "VideoShowcase", $$VideoShowcase, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "C:/Users/Ajaym/anmol-jeevan/src/pages/index.astro", void 0);

const $$file = "C:/Users/Ajaym/anmol-jeevan/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
