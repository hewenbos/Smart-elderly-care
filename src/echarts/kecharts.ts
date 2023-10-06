import * as echarts from 'echarts'

export const kEcharts = (
  ele: HTMLElement,
  xData: string[],
  valueData: number[],
  valueData1: number[]
) => {
  const echart = echarts.init(ele)
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 255, 233,0)'
              },
              {
                offset: 0.5,
                color: 'rgba(255, 255, 255,1)'
              },
              {
                offset: 1,
                color: 'rgba(0, 255, 233,0)'
              }
            ],
            global: false
          }
        }
      }
    },
    legend: {
      data: ['高压', '低压'],
      textStyle: {
        fontSize: 16,
        color: '#fff'
      },
      itemStyle: {
        borderWidth: 2
      },
      right: 'center',
      top: '0%'
    },
    grid: {
      top: '11%',
      left: '8%',
      right: '0%',
      bottom: '12%'
      // containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#009dff'
          }
        },

        axisLabel: {
          color: '#fff',
          width: 100,
          interval: 0
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#00BFF3',
            opacity: 0.23
          }
        },
        axisTick: {
          show: false
        },
        boundaryGap: false,
        data: xData
      }
    ],

    yAxis: [
      {
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
          show: true,
          lineStyle: {
            color: '#f00',
            opacity: 0.23
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#009dff'
          }
        },
        axisLabel: {
          show: true,
          margin: 20,
          textStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '高压',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 5,
        lineStyle: {
          normal: {
            color: '#f00'
          }
        },
        itemStyle: {
          color: '#ccc',
          borderColor: '#fff',
          borderWidth: 2
        },
        data: valueData
      },
      {
        name: '低压',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 5,
        lineStyle: {
          normal: {
            color: '#ccc'
          }
        },
        itemStyle: {
          normal: {
            color: '#7def86',
            borderColor: 'rgba(0, 255, 240, 1)',
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        data: valueData1
      }
    ]
  }
  echart && echart.setOption(option)
}
