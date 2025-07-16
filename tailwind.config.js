module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/preline/preline.js',
  ],
  theme: {
    fontFamily: {
      cairo: ["Cairo", "sans-serif"],
    },
      
    colors: {
      primary: '#4CAF50',
      primary_hover: '#418944',
      Second: '#f6fcf9',
    },
    extend: {
      animation: {
        'slow-bounce': 'slow-bounce 2s infinite',
      },
      keyframes: {
        'slow-bounce': {
          '0%, 100%': {
            transform: 'translateY(-15%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      backgroundImage: {
       

      }}
  },
  plugins: [ require('flowbite/plugin'),  require('preline/plugin') ],

};
