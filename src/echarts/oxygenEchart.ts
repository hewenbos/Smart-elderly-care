import * as echarts from 'echarts'

export const oxygenEcharts = (ele: HTMLElement, xData: string[], valueData: number[]) => {
  const echart = echarts.init(ele)
  const option = {
    tooltip: {
      textStyle: {
        color: '#000'
      },
      padding: [10, 10],
      trigger: 'axis',
      backgroundColor: '#fff',
      borderColor: 'rgba(112, 119, 242, 0.8)',
      borderWidth: 1
    },
    grid: {
      left: '6%',
      right: '1%',
      top: '5%',
      bottom: '10%'
    },
    toolbox: {
      show: false
    },

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
        data: xData
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
    series: [
      {
        name: '近7日新登记数量',
        type: 'line',
        data: valueData,
        symbolSize: 10,
        symbol: 'circle',
        smooth: false,
        yAxisIndex: 0,
        label: {
          show: true,
          textStyle: {
            color: '#f00',
            fontSize: 10,
            fontFamily: 'DIN',
            fontWeight: 'bold'
          },
          position: 'top',
          formatter: function (p: any) {
            return p.value > 0 ? p.value : ''
          }
        },
        lineStyle: {
          width: 2,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(107, 49, 164, 0.5)'
            },
            {
              offset: 1,
              color: 'rgba(107, 49, 164, 0.6)'
            }
          ]),
          shadowColor: 'rgba(107, 49, 164, 0.4)',
          shadowBlur: 10,
          shadowOffsetY: 10
        },
        itemStyle: {
          normal: {
            color: '#f00',
            borderColor: '#fff',
            borderWidth: 1,
            shadowColor: 'rgba(107, 49, 164, 0.7)',
            shadowBlur: 5
          }
        },
        areaStyle: {
          //区域填充样式
          normal: {
            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgb(235 ,124 ,134)'
                },
                {
                  offset: 0.5,
                  color: 'rgb(144, 33, 43)'
                },
                {
                  offset: 1,
                  color: 'rgb(83, 0 ,8)'
                }
              ],
              false
            ),
            shadowBlur: 0 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          }
        }
      }
    ]
  }
  echart && echart.setOption(option)
}
