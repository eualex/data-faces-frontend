export function capitalize(text: string): string {
  if (typeof text !== 'string') return ''

  const splitedText = text.split(' ')
  const isFullName = splitedText.length > 1

  if (isFullName) {
    const newText = splitedText
      .map(value => {
        const isWord = value.length > 2

        return isWord
          ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
          : value.toLowerCase()
      })
      .join(' ')

    return newText
  }

  return (
    splitedText[0].charAt(0).toUpperCase() +
    splitedText[0].slice(1).toLowerCase()
  )
}
