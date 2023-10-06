import * as echarts from 'echarts'
import type { App } from 'vue'
export default function (app: App) {
  app.config.globalProperties.$echarts = echarts
}
