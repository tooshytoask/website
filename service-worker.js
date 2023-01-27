/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/blog.css",
    "revision": "ee7c1673f5dce3c32e8da8729faed551"
  },
  {
    "url": "assets/css/help.css",
    "revision": "7805374dcd7d9c77ff7c2793409ec61f"
  },
  {
    "url": "assets/css/styles.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/images/6f5aa576-de33-4790-890e-363b90aeea9e-AAEAAQAAAAAAAAiZAAAAJDQyMTczMjBhLWNhYWQtNDY2Mi05ZDczLWJjMzVlNjM4MDI0ZA.jpg",
    "revision": "85951ccbca30a2b02fb8284ef091f8d4"
  },
  {
    "url": "assets/images/cover.png",
    "revision": "d41019932f4813630746dd9446f59405"
  },
  {
    "url": "assets/images/customers/female.jpg",
    "revision": "138e776d0743c846dfff76498a611a5d"
  },
  {
    "url": "assets/images/customers/female1.jpg",
    "revision": "baa3d862fc436293eefc673dbb8196e6"
  },
  {
    "url": "assets/images/customers/male1.jpg",
    "revision": "74bfa77ef5c468610924c54209b5d805"
  },
  {
    "url": "assets/images/customers/male2.jpg",
    "revision": "7a5a074ec5fc49788ba6c0105bb3d4b4"
  },
  {
    "url": "assets/images/favicon.ico",
    "revision": "2687b16e25888b7e30ccb1cfacbbb3b5"
  },
  {
    "url": "assets/images/style_one/sex-idea1.webp",
    "revision": "88c66f18536003bb9280ba9761e13e85"
  },
  {
    "url": "assets/images/style_one/sex-idea10.webp",
    "revision": "e313712595974276491206aec7deae30"
  },
  {
    "url": "assets/images/style_one/sex-idea11.webp",
    "revision": "a6d711e67f28cb4e9445698e14762e92"
  },
  {
    "url": "assets/images/style_one/sex-idea12.webp",
    "revision": "86e93c98abd26942f421fdab4cfb30c0"
  },
  {
    "url": "assets/images/style_one/sex-idea13.webp",
    "revision": "1895dafa8b50fb389e606f0d42520310"
  },
  {
    "url": "assets/images/style_one/sex-idea14.webp",
    "revision": "e2ec945e7a7be5f220ffa2e0c8cbdb34"
  },
  {
    "url": "assets/images/style_one/sex-idea15.webp",
    "revision": "27915c60fb2f611af06a5a6e827af700"
  },
  {
    "url": "assets/images/style_one/sex-idea16.webp",
    "revision": "c46b1bff2a7ead340e9a3e005a953a5a"
  },
  {
    "url": "assets/images/style_one/sex-idea17.webp",
    "revision": "3610f0c7afe4463a009ca7491c1c907d"
  },
  {
    "url": "assets/images/style_one/sex-idea18.webp",
    "revision": "1b07fcfe43a8fb2dcb76a14f4f6eb019"
  },
  {
    "url": "assets/images/style_one/sex-idea19.webp",
    "revision": "ef0927b75260ab052ef0d45f8d853cca"
  },
  {
    "url": "assets/images/style_one/sex-idea2.webp",
    "revision": "ec5718d726cb08705ff28a27bd5d432c"
  },
  {
    "url": "assets/images/style_one/sex-idea20.webp",
    "revision": "5b32aa88e4c0b346d9c85429597d33ca"
  },
  {
    "url": "assets/images/style_one/sex-idea21.webp",
    "revision": "9f470c8ec10d2f9e0099eea3e71517bf"
  },
  {
    "url": "assets/images/style_one/sex-idea22.webp",
    "revision": "bd3dc8ac5b7b9bd0414a0675479236d5"
  },
  {
    "url": "assets/images/style_one/sex-idea23.webp",
    "revision": "dd80d35ef9bc90ef1b08d453e2da8d84"
  },
  {
    "url": "assets/images/style_one/sex-idea24.webp",
    "revision": "b00232e6792edd9e39426e3c8a60f3d1"
  },
  {
    "url": "assets/images/style_one/sex-idea25.webp",
    "revision": "6be8f72681b69667bcf0b7503bc7a84f"
  },
  {
    "url": "assets/images/style_one/sex-idea3.webp",
    "revision": "24cb044a39c8ab330d999363a064e170"
  },
  {
    "url": "assets/images/style_one/sex-idea4.webp",
    "revision": "fc3eaa9c480af89d2e1981db8566c008"
  },
  {
    "url": "assets/images/style_one/sex-idea5.webp",
    "revision": "4efddfeb9fa98e8dff6073cbb7fd955e"
  },
  {
    "url": "assets/images/style_one/sex-idea6.webp",
    "revision": "3e0e05c5c52c6c281f6fa8f218e77436"
  },
  {
    "url": "assets/images/style_one/sex-idea7.webp",
    "revision": "b9179e857ed7ad69acb279e01f094508"
  },
  {
    "url": "assets/images/style_one/sex-idea8.webp",
    "revision": "6dd20c2c8d928575089fa5d669a032ed"
  },
  {
    "url": "assets/images/style_one/sex-idea9.webp",
    "revision": "a656769587358ecf42383221469fed72"
  },
  {
    "url": "assets/images/style_two/sex-idea10.svg",
    "revision": "ecd82e653b515bfa854cb454cbb40654"
  },
  {
    "url": "assets/images/style_two/sex-idea11.svg",
    "revision": "9b1cba39aee775fbb476976a4852fddb"
  },
  {
    "url": "assets/images/style_two/sex-idea12.svg",
    "revision": "688d5b1ab6245763099c7ee780060418"
  },
  {
    "url": "assets/images/style_two/sex-idea13.svg",
    "revision": "2d876b499a06df41f759320ab35bb8c8"
  },
  {
    "url": "assets/images/style_two/sex-idea14.svg",
    "revision": "bfa64a2408d9373b50a39c22ccbd0653"
  },
  {
    "url": "assets/images/style_two/sex-idea15.svg",
    "revision": "bd5e308b3e64064f73eae79322a6f92f"
  },
  {
    "url": "assets/images/style_two/sex-idea16.svg",
    "revision": "24316cc93592bfbd003bddbd192053b8"
  },
  {
    "url": "assets/images/style_two/sex-idea17.svg",
    "revision": "af0dd3a58652fd916c4e13bbc846f2fa"
  },
  {
    "url": "assets/images/style_two/sex-idea18.svg",
    "revision": "a618f6c69f2c04dc1ec9dd24f96dfc8b"
  },
  {
    "url": "assets/images/style_two/sex-idea19.svg",
    "revision": "f2fb59ce38ed3608155043d6d2abacbf"
  },
  {
    "url": "assets/images/style_two/sex-idea20.svg",
    "revision": "bb8d2f08b3586ca7a42c475b9571cdee"
  },
  {
    "url": "assets/images/style_two/sex-idea21.svg",
    "revision": "f183d2e29093895efc8e76355d57caa4"
  },
  {
    "url": "assets/images/style_two/sex-idea22.svg",
    "revision": "70499c7e9b666c458472b0110d237997"
  },
  {
    "url": "assets/images/style_two/sex-idea23.svg",
    "revision": "f3feab889e6b0e10a37abd91ec0cc44f"
  },
  {
    "url": "assets/images/style_two/sex-idea24.svg",
    "revision": "ca02a93c0e002de87f188482de221e22"
  },
  {
    "url": "assets/images/style_two/sex-idea25.svg",
    "revision": "7306a448b2977640d57b5234390de44a"
  },
  {
    "url": "assets/images/style_two/sex-idea26.svg",
    "revision": "31c00f8b18baca77024d2f10211063e3"
  },
  {
    "url": "assets/images/style_two/sex-idea27.svg",
    "revision": "220eba0ef7408ec9f9b4250a68faac6b"
  },
  {
    "url": "assets/images/style_two/sex-idea28.svg",
    "revision": "691d252cc1149e72c3f369df778b6702"
  },
  {
    "url": "assets/images/style_two/sex-idea29.svg",
    "revision": "0075009f4c1e11eb097db7fee9989e4c"
  },
  {
    "url": "assets/images/style_two/sex-idea30.svg",
    "revision": "6103fb7412805adcf8f80cb0ed0cc9a8"
  },
  {
    "url": "assets/images/style_two/sex-idea31.svg",
    "revision": "6103fb7412805adcf8f80cb0ed0cc9a8"
  },
  {
    "url": "assets/images/style_two/sex-idea32.svg",
    "revision": "abea40e0782c31034d453803d19e1c26"
  },
  {
    "url": "assets/images/style_two/sex-idea33.svg",
    "revision": "c892190e8c63590ffa2b855bbb28b927"
  },
  {
    "url": "assets/images/style_two/sex-idea34.svg",
    "revision": "36f5fe8b7660bf077cd14efa20fca4fd"
  },
  {
    "url": "assets/images/style_two/sex-idea35.svg",
    "revision": "bb8d2f08b3586ca7a42c475b9571cdee"
  },
  {
    "url": "assets/images/style_two/sex-idea8.svg",
    "revision": "854bd9373085dfa65a5c4086c8007214"
  },
  {
    "url": "assets/images/style_two/sex-idea9.svg",
    "revision": "644b51827ead73e009812abe1b03d63d"
  },
  {
    "url": "assets/images/too-shy-to-ask.png",
    "revision": "e899dbf74ea46d447b8dabe135212b9d"
  },
  {
    "url": "assets/js/core/app.js",
    "revision": "cd2389b4d55756792a625731341e1104"
  },
  {
    "url": "assets/js/core/third-party.js",
    "revision": "c3f7d311f51d06ef8418f383066fcb42"
  },
  {
    "url": "assets/js/index.js",
    "revision": "9c4909346822294493f76ae9436e2847"
  },
  {
    "url": "assets/js/main.bundle.js",
    "revision": "fed66bb623f5ce5f4e7c5a3fc7d4abdd"
  },
  {
    "url": "assets/js/main.css",
    "revision": "8314efa22221f24860a06ed3b74d2097"
  },
  {
    "url": "index.html",
    "revision": "68f002eebdbbeaeee95d50c7b9d2b7d3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
