/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily:{
        'apercupro': ['Apercu pro', 'sans-serif']
      },
      fontFace: {
        'apercupro': {
          fontFamily: 'Apercu pro',
          fontStyle: 'normal',
          fontWeight: '400',
          src: `url('src/fonts/apercu-pro-cufonfonts/apercu_regular_pro.otf')`
        },
        'apercupro-italic': {
          fontFamily: 'Apercu pro',
          fontStyle: 'italic',
          fontWeight: '400',
          src: `url('src/fonts/apercu-pro-cufonfonts/apercu_regular_italic_pro.otf')`
        },
        'apercupro-bold': {
          fontFamily: 'Apercu pro',
          fontStyle: 'italic',
          fontWeight: '700',
          src: `url('src/fonts/apercu-pro-cufonfonts/apercu_bold_pro.otf')`
        },
        'apercupro-bold-italic': {
          fontFamily: 'Apercu pro',
          fontStyle: 'italic',
          fontWeight: '700',
          src: `url('src/fonts/apercu-pro-cufonfonts/apercu_bold_italic_pro.otf')`
        }       
      },
      backgroundColor: {
        'facebook': '#1778f2',
        'twitter':'#1da1f2',
        'instagram': '#f00075',
      },
      screens: {
        'xs': '450px',
        'mobile': '300px',
      }
    },
  },
  plugins: [],
}
