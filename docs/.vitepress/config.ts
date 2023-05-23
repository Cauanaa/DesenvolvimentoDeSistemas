import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'pt-BR',
  title: 'Documentação de Software',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },

      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },
      //...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          { text: 'Visão Geral', link: '/visao_geral' },
          { text: 'Instalação', link: '/guia_instalacao' },
          {
            text: 'Usuário',
            collapsed: true,
            items: [
              { text: 'Item A', link: '/item-1' },
              { text: 'Item B', link: '/item-2' },
              { text: 'Item C', link: '/item-3' },
            ],
          },
          // ...
        ],
      },
    ],
    footer: {
      message: 'Documentação de Exemplo Aula de Desenvolvimento de Software 1 - MIT License.',
      copyright: 'Copyright © 2023 - Cauana'
    }
    search: {
      provider: 'local',
    },
  },
  markdown: {
    lineNumbers: true,
  },
});
