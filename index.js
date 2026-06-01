// Web badges rendering component
export function renderDeveloperBadges(achievements) {
  let html = '<div class="badge-container">\n'
  for (let badge of achievements) {
    html += `  <span class="badge badge-unlocked">${badge}</span>\n`
  }
  html += '</div>'
  return html
}
