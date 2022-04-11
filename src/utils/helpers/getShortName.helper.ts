import { capitalize } from './capitalize.helper'

export function getShortName(name: string) {
  const splitedName = name.split(' ')
  const onlyNames = splitedName.filter(n => n.length > 3)

  if (onlyNames.length > 2) {
    onlyNames.pop()
  }

  const shortName = capitalize(onlyNames.join(' '))

  return shortName
}
