export const publishedAt = (published_at) => {
  const dateStr = published_at
    .slice(0, 10)
    .replace('-', ' ')
    .replace('-', ' ')
    .split(' ')

  let [yy, mm, dd] = dateStr

  let parseString = parseInt(mm, 10)

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  let month

  switch (parseString) {
    case 1:
      month = months[parseString - 1]
      break
    case 2:
      month = months[parseString - 1]
      break
    case 3:
      month = months[parseString - 1]
      break
    case 4:
      month = months[parseString - 1]
      break
    case 5:
      month = months[parseString - 1]
      break
    case 6:
      month = months[parseString - 1]
      break
    case 7:
      month = months[parseString - 1]
      break
    case 8:
      month = months[parseString - 1]
      break
    case 9:
      month = months[parseString - 1]
      break
    case 10:
      month = months[parseString - 1]
      break
    case 11:
      month = months[parseString - 1]
      break
    case 12:
      month = months[parseString - 1]
  }

  return `${parseInt(dd, 10)} ${month} ${yy}`
}
