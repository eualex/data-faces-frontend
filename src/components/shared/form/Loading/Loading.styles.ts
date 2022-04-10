import { styled, keyframes } from '@/styles/config'

const logoAnimation = keyframes({
  '0%': {
    transform: 'translateY(20%)'
  },
  '100%': {
    transform: 'translateY(0)'
  }
})

export const Container = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom : 0,

  width: '100vw',
  height: '100vh',

  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  backdropFilter: 'blur(10px)',

  zIndex: '$8',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
})

export const ImageContainer = styled('div', {
  animation: `${logoAnimation} 1s ease alternate infinite`
})

export const Description = styled('p', {
  mt: '20px',
  color: '$white',
  fontSize: '2.5rem'
})
