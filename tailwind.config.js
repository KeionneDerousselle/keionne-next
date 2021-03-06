module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },

    screens: {
      xxs: '320px',
      xs: '475px',
      sm: '640px',
      md: '768px',
      'md-992': '992px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      'white-f': {
        1: '#f1f1f1',
        2: '#f2f2f2',
        3: '#f3f3f3',
        4: '#f4f4f4',
        5: '#f5f5f5',
        6: '#f6f6f6',
        7: '#f7f7f7',
        8: '#f8f8f8',
        9: '#f9f9f9',
        c: '#fcfcfc',
        a: '#fafafa',
      },
      purple: {
        50: '#f0f0f5',
        100: '#d3d2e0',
        200: '#b5b4cb',
        300: '#9896b6',
        400: '#7b78a1',
        500: '#615e87',
        600: '#4c4969',
        700: '#3b3750',
        800: '#2b2639',
        900: '#1b141a',
      },
      blue: {
        50: '#e9e9fb',
        100: '#bebef4',
        200: '#9393ec',
        300: '#6767e4',
        400: '#3c3cdd',
        500: '#2222c3',
        600: '#1b1b98',
        700: '#121175',
        800: '#0d0d51',
        900: '#0a0a2e',
      },
      pink: {
        50: '#ffe5e8',
        100: '#ffb3bb',
        200: '#ff808e',
        300: '#ff4d60',
        400: '#ff1a33',
        500: '#e6001a',
        600: '#b30014',
        700: '#7a000f',
        800: '#4a000a',
        900: '#1a0006',
      },
      yellow: {
        50: '#fff8e5',
        100: '#ffe9b3',
        200: '#ffdb80',
        300: '#ffcd4d',
        400: '#ffbe1a',
        500: '#ffa900',
        600: '#e6a500',
        700: '#b38000',
        800: '#805c00',
        900: '#4d3700',
      },
      slate: {
        100: '#f9f9f9',
        200: '#E1E7EB',
        300: '#D5DDE5',
        400: '#CBD4DB',
        500: '#AEBECC',
        600: '#919FB0',
        700: '#6D7A89',
        800: '#404B5A',
        900: '#202833',
      },
      grey: {
        50: '#f2f2f2',
        100: '#d9d9d9',
        200: '#bfbfbf',
        300: '#a6a6a6',
        400: '#8c8c8c',
        500: '#717171',
        600: '#5c5c5c',
        700: '#474747',
        800: '#323232',
        900: '#1a1a1a',
        3: '#333',
        5: '#555',
        c: '#ccc',
      },
    },

    extend: {
      spacing: {
        3.5: '0.875rem',
      },

      boxShadow: {
        custom: '0px 5px 20px 0px rgb(69 67 96 / 10%)',
      },

      keyframes: {
        'mouse-wheel': {
          '0%': {
            top: '29%',
          },
          '15%': {
            top: '50%',
          },
          '50%': {
            top: '50%',
          },
          '100%': {
            top: '29%',
          },
        },
      },

      animation: {
        'mouse-wheel': 'mouse-wheel 2s linear infinite',
      },
    },
  },
  plugins: [],
};
