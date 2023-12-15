const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'purple-1': '#9D06FF',
      },
      backgroundImage: {
        'background-header1': "url('/banner.png')",
        'background-header2': "url('/banner2.avif')",
      },
      screens: {
        'xl': '1675px'
      }
    },
  },
  plugins: [],
});

