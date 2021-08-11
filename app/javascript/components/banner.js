import Typed from 'typed.js';



const loadDynamicBannerText = () => {

  new Typed('#banner-typed-text', {
    strings: [
    "[Reddit] GME to the moon ...",
    "[Reddit] GME to the moon .",
    "[Reddit] GME to the moon ...",
    "[Reddit] GME to the moon ...",
    "[Reddit] GME to the moon ",

    ],
    typeSpeed: 120,
    loop: true
  });
}

export { loadDynamicBannerText };

// 🔴🟡🟢