// @flow Mixed any

function passMixed(value: mixed) {
  // mixed类型为强类型
  value.substr(1)
  value = value * 10
  if (typeof value === 'string') {
    value.substr(1)
  }
  if (typeof value === 'number') {
    value = value * 10
  }
}

passMixed('string')
passMixed(123)

function passAny(value: any) {
  // any类型为弱类型
  value.substr(1)
  value = value * 10
}

passAny('string')
passAny(123)
