import less from 'less/dist/less'

const lessRE = /<style([^>]* lang="less")?[^>]*>([\s\S]*?)<\/style>/gi

export function transformLessCode (sfcCode) {
  return sfcCode.replace(lessRE, (_, p1, p2) => {
    const lessCode = p2.trim()
    const cssCode = render(lessCode)
    return `<style${p1 || ''}>${cssCode}</style>`
  })
}

function render (code) {
  let css = null

  less.render(code, {
    syncImport: true
  }, (err, output) => {
    if (err) {
      throw err
    }
    css = output.css
  })

  return css
}
