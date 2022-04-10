import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const { config, css, getCssText, globalCss, styled, keyframes } =
  createStitches({
    media: {
      mobile: '(max-width: 640px)',
      tablet: '(max-width: 768px)',
      laptop: '(max-width: 1024px)',
    },
    theme: {
      colors: {
        gray50: '#FAFAFA',
        gray200: '#D9D9D9',
        gray600: '#424B54',
        gray800: '#182130',
        gray900: '#0A1624',
        blue300: '#2858FF',
        blue700: '#37466B',
        blue900: '#192031',
        white: '#ffffff',
        black: '#000000'
      },
      space: {
        1: '5px',
        2: '10px',
        3: '15px'
      },
      fontSizes: {
        1: '1.2rem',
        2: '1.6rem',
        3: '2rem',
        4: '2.4rem',
        5: '3.2rem',
        6: '4.8rem',
        7: '6.4rem'
      },
      fonts: {
        primary: 'Inter, apple-system, sans-serif',
        secondary: 'Sora, apple-system, sans-serif'
      },
      lineHeights: {
        1: '1.2rem',
        2: '2.4rem',
        3: '3.6rem',
        4: '4.8rem'
      },
      sizes: {
        1: '1215px'
      },
      borderWidths: {
        1: '1px',
        2: '2px'
      },
      radii: {
        1: '5px',
        2: '8px',
        3: '11px',
        4: '15px',
        5: '18px',
        6: '29px',
        7: '45px',
        8: '107px'
      },
      shadows: {
        1: '0px 2px 9px 1px rgba(0, 0, 0, 0.15)',
        2: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      zIndices: {
        0: -1,
        1: 5,
        2: 10,
        3: 20,
        4: 30,
        5: 40,
        6: 50,
        7: 60,
        8: 100
      }
    },
    utils: {
      m: (value: Stitches.ScaleValue<'space'> | string) => ({
        margin: value
      }),
      mt: (value: Stitches.ScaleValue<'space'> | string) => ({
        marginTop: value
      }),
      mr: (value: Stitches.ScaleValue<'space'> | string) => ({
        marginRight: value
      }),
      mb: (value: Stitches.ScaleValue<'space'> | string) => ({
        marginBottom: value
      }),
      ml: (value: Stitches.ScaleValue<'space'> | string) => ({
        marginLeft: value
      }),
      mx: (value: Stitches.ScaleValue<'space'> | string) => ({
        marginLeft: value,
        marginRight: value
      }),
      my: (value: Stitches.ScaleValue<'space'> | string) => ({
        marginTop: value,
        marginBottom: value
      }),
      px: (value: Stitches.ScaleValue<'space'> | string) => ({
        paddingLeft: value,
        paddingRight: value
      }),
      py: (value: Stitches.ScaleValue<'space'> | string) => ({
        paddingTop: value,
        paddingBottom: value
      }),
  
      size: (value: Stitches.ScaleValue<'sizes'> | string) => ({
        width: value,
        height: value
      }),
  
      linearGradient: (value: Stitches.ScaleValue<'colors'> | string) => ({
        background: `linear-gradient(${value})`
      }),
  
      br: (value: Stitches.ScaleValue<'space'>) => ({
        borderRadius: value
      })
    }
  })

export const globalStyles = globalCss({
  '*': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },
  html: {
    fontSize: '62.5%',
    scrollBehavior: 'smooth',

    '@laptop': {
      fontSize: '56.25%'
    },
    '@tablet': {
      fontSize: '50%'
    },
    '@mobile': {
      fontSize: '43,75%'
    }
  },
  body: {
    size: '100%',
    fontFamily: '$primary',
    fontSize: '$2',
    overflowX: 'hidden',
    background: '$gray900'
  }
})
