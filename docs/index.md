---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Nice"
  text: "A VitePress Site"
  tagline: My great project tagline
  image:
    src: https://cn.vitejs.dev/logo-with-shadow.png
    alt: VitePress
  actions:
    - theme: brand
      text: Markdown Examples
      link: /guide/markdown-examples
    - theme: alt
      text: API Examples
      link: /guide/api-examples

features:
  - icon: 😎
    title: 方便
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 😁
    title: 快速
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: ✌️
    title: 易用
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---


<style>
:root {
  --vp-home-hero-name-color: transparent;

  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);

  --vp-home-hero-image-filter: blur(14px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>