module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    mode: 'jit',
    theme: {
      extend: {        
          backgroundImage: {
            'header-hero': "url('./img/header.jpg')",
            'singapore-hero': "url('./img/singapore.jpg')"
          }
      },
    },
    plugins: [],
  }