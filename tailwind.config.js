export default {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
      },
      colors: {
        'primary': '#EE7507',
        'secondary': '#FCD29C',
        'background': '#050D23',
        'accent': '#233266',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
