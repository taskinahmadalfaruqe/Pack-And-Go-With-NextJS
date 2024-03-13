/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        sm: "10px",
        lg: "30px",
        xl: "50px",
        "2xl": "80px",
      },
    },

    extend: {

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'PrimaryColor': '#007F5F',
        'ParagraphColor': '#616161',
        'HeadingColor': '#1E1E1E',
        'WhiteColor': '#FFF',
      },
      
    },
  },
  plugins: [],
}
