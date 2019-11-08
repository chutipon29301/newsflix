module.exports = {
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        input: "#333333",
        btnred: "#D32F27",
        inputblack: "#8C8C8C",
        error: "#EB5757",
        inputhover: "#E0E0E0",
        searchoption: "#DEDEDE"
      }
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: [require("@tailwindcss/custom-forms")]
};
