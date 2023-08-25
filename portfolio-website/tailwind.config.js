/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    colors: {
      footercolor: '#1E1E1E',
      linecolor:'#FFFFFF',
      secondaryText: '#0090A3',
      primaryBackground: '#000000',
      navbarDown: 'rgba(0, 144, 163, 0.5)',
      navbarUp: 'rgba(30, 30, 30, 0)',
      
      
      pageBackground: '#0f172a',
      buttonBackground:'#122c3f',
      skillsColor:'#5EEAD4',
      skillsText:"#7b8ea1",
      skillsSubText:"#98a8b9",
      transparent:"transparent",
      planeBackground:"#F2F6F7"
    }
  },
  plugins: [],
}

