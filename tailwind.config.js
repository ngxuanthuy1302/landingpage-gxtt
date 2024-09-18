/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'yellow',
        primaryTo: 'red',
        textColor: 'white'
      },
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      },
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        rukkit: ['Rokkitt', 'serif']
      },
      backgroundImage: {
        'custom-pattern': "url('https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/458724548_896140762562558_8772826068921100115_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE5yABzfpA0JW68agEPcSQ3p700pTFcK5unvTSlMVwrm5r-wW3hX8X0qSexVkUPT4Ic4L2s4yqKIGz1WbFoxvWx&_nc_ohc=nm5Z9tqsPnQQ7kNvgGZjMmQ&_nc_ht=scontent.fhan2-3.fna&_nc_gid=Ap6NgmaH52vvL4wRqjzt_HT&oh=00_AYBVvmOS2QstZmwO2OexqB9GorHZ8AlpL6p9yLe5OoaU8w&oe=66EF5F55')",
      }
    },
  },
  plugins: [],
}
