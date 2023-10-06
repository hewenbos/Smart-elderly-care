import * as echarts from 'echarts'
export const pieEcharts = (ele: HTMLElement, data: number[][]) => {
  const echart = echarts.init(ele)
  //
  // 总数
  const option = {
    title: [
      {
        top: '38%',
        left: '12%',
        text: data[0][0] + '%',
        textAlign: 'center',
        subtext: '身体健康评估',
        textStyle: {
          fontSize: 16
        },
        subtextStyle: {
          fontWeight: 'normal',
          fontSize: 14
        }
      },
      {
        top: '38%',
        left: '37%',
        text: data[1][0] + '%',
        subtext: '精神健康评估',
        textStyle: {
          fontSize: 16
        },
        textAlign: 'center',
        subtextStyle: {
          fontWeight: 'normal',
          fontSize: 14
        }
      },
      {
        top: '38%',
        left: '62%',
        text: data[2][0] + '%',
        subtext: '社交能力评估',
        textStyle: {
          fontSize: 16
        },
        textAlign: 'center',
        subtextStyle: {
          fontWeight: 'normal',
          fontSize: 14
        }
      },
      {
        top: '38%',
        left: '87%',
        text: data[3][0] + '%',
        subtext: '日常生活评估',
        textStyle: {
          fontSize: 16
        },
        textAlign: 'center',
        subtextStyle: {
          fontWeight: 'normal',
          fontSize: 14
        }
      }
    ],
    series: [
      {
        name: '身体健康评估',
        type: 'pie',
        radius: ['60%', '70%'],
        center: ['13%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },

        data: [
          {
            value: data[0][0],
            itemStyle: {
              normal: {
                color: '#03a9f3'
              }
            }
          },
          {
            value: data[0][1],
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,0.5)'
              }
            }
          }
        ]
      },
      {
        name: '精神健康评估',
        type: 'pie',
        radius: ['60%', '70%'],
        center: ['38%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: data[1][0],
            itemStyle: {
              normal: {
                color: 'rgba(21,190,79,0.85)'
              }
            }
          },
          {
            value: data[1][1],
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,0.5)'
              }
            }
          }
        ]
      },
      {
        name: '社交能力评估',
        type: 'pie',
        radius: ['60%', '70%'],
        center: ['63%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: data[2][0],
            itemStyle: {
              normal: {
                color: 'rgba(252,92,92,0.85)'
              }
            }
          },
          {
            value: data[2][1],
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,0.5)'
              }
            }
          }
        ]
      },
      {
        name: '日常生活评估',
        type: 'pie',
        radius: ['60%', '70%'],
        center: ['88%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: data[3][0],
            itemStyle: {
              normal: {
                color: 'yellow'
              }
            }
          },
          {
            value: data[3][1],
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,0.5)'
              }
            }
          }
        ]
      }
    ]
  }

  option && echart.setOption(option)
}
