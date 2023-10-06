import * as echarts from 'echarts'

export const lineEcharts = (ele: HTMLElement, xLabel: string[], valueData: number[]) => {
  // const xLabel = ['10/23', '10/24', '10/25', '10/26', '10/27', '10/28', '10/29']
  // const valueData = ['12', '59', '32', '36', '51', '18', '18']
  const echart = echarts.init(ele)

  const option = {
    backgroundColor: '#000000',
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: true
        },
        splitArea: {
          color: '#f00',
          lineStyle: {
            color: '#f00'
          }
        },
        axisLabel: {
          color: 'rgba(80,227,194,0.6)',
          interval: 0 // 强制显示所有标签
        },
        splitLine: {
          show: false
        },
        boundaryGap: false,
        data: xLabel
      }
    ],
    yAxis: [
      {
        type: 'value',

        nameTextStyle: {
          color: 'rgba(80,227,194,0.6)'
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.3)',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: 'rgba(80,227,194,0.6)'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    legend: {
      show: false
    },
    grid: {
      left: '5%',
      right: '3%',
      top: '5%',
      bottom: '10%'
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    series: [
      {
        name: '心跳率',
        type: 'line',
        lineStyle: {
          normal: {
            color: 'rgba(80,227,194,0.8)'
          }
        },
        label: {
          show: false
        },
        itemStyle: {
          color: '#50E3C2'
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(80,227,194,0.5)'
                },
                {
                  offset: 1,
                  color: 'rgba(80,227,194,0.2)'
                }
              ],
              false
            ),
            shadowColor: 'rgba(108,80,243, 0.9)',
            shadowBlur: 20
          }
        },
        data: valueData
      }
    ]
  }
  echart && echart.setOption(option)
}
