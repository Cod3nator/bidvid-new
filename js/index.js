const gradients = document.querySelectorAll('.gradient')
const visibleGradients = new Set()

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      visibleGradients.add(entry.target)
    } else {
      visibleGradients.delete(entry.target)
    }
  })
})

const throttle = fn => {
  let scheduled = null
  let context = null

  return function () {
    context = [this, arguments]

    if (scheduled !== null) {
      return
    }

    scheduled = window.requestAnimationFrame(() => {
      fn.apply(...context)
      scheduled = context = null
    })
  }
}

const updateGradient = gradient => {
  const { top, height } = gradient.getBoundingClientRect()

  gradient.style.setProperty(
    '--scroll-percentage',
    `${(top + height) / window.innerHeight * 100}%`
  )
}

gradients.forEach(gradient => {
  updateGradient(gradient)
  observer.observe(gradient)
})

window.addEventListener('scroll', throttle(() => {
  visibleGradients.forEach(updateGradient)
}))
