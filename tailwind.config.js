module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    mode: 'jit',
    theme: {
      extend: {
          backgroundImage: {
            'halogo': "url(/img/halogo.png)",
            'halogosm': "url(/img/halogo-small.png)",
            'header-hero': "url('/img/header.jpg')",
            'ha-hero': "url('/img/hahero.jpg')",
            'ha-better-sg': "url('/img/betterwordlogo.png')"


          },
          colors: {
            'oranged': '#F8B18E',
            'darken': '#25353D',
            'yellowed': '#FDF9EE',
            'browned': '#C99175',
          }
      },
    },
    plugins: [],
  }