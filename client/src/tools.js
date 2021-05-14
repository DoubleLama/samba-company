export const financial = (x) => {
  return Number.parseFloat(x).toFixed(2)
}

export const toggleActive = (element) => {
  // console.log(element)
  let el = element
  if (el.classList.contains('active')) {
    return
  }
  if (el.classList.contains('navbar__logo')) {
    el = el.parentNode
  }

  const siblings = [...el.parentNode.children]
  siblings.filter((sibling) => sibling !== el)

  siblings.forEach((sibling) => {
    sibling.classList.remove('active')
  })

  if (el.classList.contains('noactive')) {
    return
  }

  el.classList.add('active')
}
