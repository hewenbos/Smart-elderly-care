import Element from './Element/index'
import ElementIcon from './Element/ElIcon'
import Echarts from './Echarts'
import type { App } from 'vue'

export default {
  install(app: App) {
    app.use(Element)
    app.use(ElementIcon)
    app.use(Echarts)
  }
}
