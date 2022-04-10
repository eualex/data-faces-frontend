import { ComponentProps, ReactNode } from 'react'

import * as S from './Box.styles'

type Props = {
  children: ReactNode
} & ComponentProps<typeof S.Container>

export function Title(props: Props) {
  return <S.Title {...props} />
}

export function Content(props: Props) {
  return <S.Content {...props} />
}

export function Box(props: Props) {
  return (
    <S.Container {...props} />
  )
}

Box.Title = Title
Box.Content = Content
