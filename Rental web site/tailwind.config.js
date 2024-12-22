/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        'primary': "#000000"
      },
      fontFamily: {
        'plus' : ['Plus Jakarta Sans','sans-serif']
      },
      backgroundImage: {
        'mark-group' : "url('assets/Mask group.png')",
        'mark-family': "url('assets/young-family-with-kids-travelling-by-car-stopped-field 1.png')"
      }
    },
  },
  plugins: [],
}

