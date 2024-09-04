/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage : {
        "story1" : "url('images/story-1.jpg')",
        "story2" : "url('images/story-2.jpg')",
        "story3" : "url('images/story-3.jpg')",
        "story4" : "url('images/story-4.jpg')",
        "story5" : "url('images/story-5.jpg')",
        "story6" : "url('images/story-6.jpg')"

      }
    },
    fontFamily : {
      "poppins" : ["Poppins","sans-serif"],
    },
   screens : {
    mobile : "320px",
    tablet : "768px",
    laptop : "1024px",
    desktop : "1440px"
   },
  },
  plugins: [],
}

