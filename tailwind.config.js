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
        searchoption: "#DEDEDE",
        searchoptionbutton: "#4E4E4E",
        searchoptionbuttonhover: "#3E3E3E",
        searchoptionbuttonactive: "#2E2E2E",
        home: "#A01E18",
        trendchip: "#B81F1F"
      }
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    textColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: [require("@tailwindcss/custom-forms")]
};
