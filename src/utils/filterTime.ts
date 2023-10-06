export const FilterTime = (time: number) => {
  const date = new Date(time)

  const h = date.getHours()

  const m = date.getMinutes()

  const s = date.getSeconds()

  return `${h >= 10 ? h : '0' + h} : ${m >= 10 ? m : '0' + m} :${s >= 10 ? s : '0' + s}`
}
