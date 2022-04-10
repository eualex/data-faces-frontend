import { styled } from '@/styles/config'

export const Container = styled('div', {
  width: '100vw',
  height: '100vh'
})

export const Header = styled('header', {
  width: '100%',
  height: '25vh',
  display: 'flex',
  justifyContent: 'center'
})

export const WebcamContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '60px'
})

export const Button = styled('button', {
  backgroundColor: '$blue300',
  border: 'none',
  color: '$white',
  padding: '15px 25px',
  borderRadius: '10px',

  transition: 'filter 0.4s ease',
  cursor: 'pointer',
  fontSize: '2rem',
  fontWeight: 'bold',

  display: 'flex',
  alignItems: 'center',
  
  '& svg': {
    ml: '8px'
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export const Description = styled('div', {
  fontSize: '2.5rem',
  color: '$white',
  width: '490px',
  textAlign: 'center'
})
