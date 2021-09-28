export function TraslateCompass(vento) {
  switch (vento) {
    case 'S':
      return 'Sul'
    case 'E':
      return 'Leste'
    case 'W':
      return 'Oeste'
    case 'N':
      return 'Norte'
    case 'NW':
      return 'Noroeste'
    case 'NE':
      return 'Nordeste'
    case 'SE':
      return 'Suldeste'
    case 'SW':
      return 'Sudoeste'
    case 'NNW':
      return 'Nor-noroeste'
    case 'NNE':
      return 'Nor-nordeste'
    case 'WNW':
      return 'Oés-noroeste'
    case 'WSW':
      return 'Oés-sudoeste'
    case 'ENE':
      return 'Lés-nordeste'
    case 'ESE':
      return 'Lés-sudeste'
    case 'SSW':
      return 'Sul-suldoeste'
    case 'SSE':
      return 'Sul-suldeste'
    default:
      return vento
  }
}
