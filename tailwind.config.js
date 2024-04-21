/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {    
      colors: {
        // 'purple-1': '#7646FD',
        // 'purple-2': '#CB81FF',
        // 'silver-1': '#BCBBFF',
        // 'silver-2': '#B7D6FF',
        // 'blue-1': '#4663fD',
        // 'blue-2': '#8B72FF',
        // 'pink-1': '#BAB9FF',
        // 'pink-2': '#E9C8FD',
        // 'violet-1': '#946EFF',
        // 'green-1': '#009421',
        // 'yellow-1': '#ECB017',
        // 'red-1': '#D82323',
        // 'grey-bg' : '#F8F9FA',
      },
      fontFamily: {
        'nato-sans': ['Nato Sans', 'sans-serif'],
        'product-sans': ['Product Sans', 'sans-serif'],
        'nato-sans-jp' : ['Nato Sans JP']
      },  
    },
  },
  plugins: [],
}

