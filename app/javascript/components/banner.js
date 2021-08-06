import Typed from 'typed.js';



const loadDynamicBannerText = () => {

  new Typed('#banner-typed-text', {
    strings: [
    "[Reddit] GME to the moon ",
    "[Reddit] GME to the moon 🟢",
    "[Reddit] GME to the moon 🟢", 
    "[Twitter] PFE vacines 🟢", 
    "[Twitter] PFE vacines 🔴",
    "[Reddit] GME to the moon 🟢", 
    "[Twitter] PFE vacines 🟢", 
    "[Twitter] PFE vacines 🟡",
    "[WSJ] GME to the moon 🟢", 
    "[Twitter] PFE vacines 🟢", 
    "[FT] PFE vacines 🔴",
    ],
    typeSpeed: 120,
    loop: true
  });
}

export { loadDynamicBannerText };