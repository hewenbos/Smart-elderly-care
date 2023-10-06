import * as echarts from 'echarts'

export const BarEcharts = (ele: HTMLElement, xData: string[], color: string, tipData: number[]) => {
  const echart = echarts.init(ele)
  const option = {
    title: [
      {
        textStyle: {
          //支持rich需要更多效果自定义
          color: '#fff',
          fontSize: 18
        },

        subtextStyle: {
          color: 'yellow',
          fontSize: 28
        },
        left: '20%',
        top: '5%'
      },
      {
        textStyle: {
          color: '#fff',
          fontSize: 18
        },

        subtextStyle: {
          color: 'yellow',
          fontSize: 28
        },
        left: 'center',
        top: '5%'
      },
      {
        textStyle: {
          color: '#fff',
          fontSize: 18
        },

        subtextStyle: {
          color: 'yellow',
          fontSize: 28
        },
        right: '20%',
        top: '5%'
      }
    ],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,0,0,.6)',
      borderColor: 'rgba(147, 235, 248, 0)',
      textStyle: {
        color: '#FFF'
      }
    },
    grid: {
      left: '10%',
      top: '20%',
      right: '5%',
      bottom: '15%'
    },
    xAxis: {
      data: xData,
      axisLine: {
        show: true, //隐藏X轴轴线
        lineStyle: {
          color: '#163a5f',
          width: 2
        }
      },
      axisTick: {
        show: false, //隐藏X轴刻度
        alignWithLabel: true
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#BDD8FB', //X轴文字颜色
          fontSize: 12
        },
        interval: 0,
        formatter: function (value: any) {
          let ret = '' //拼接加\n返回的类目项
          const maxLength = 4 //每项显示文字个数
          const valLength = value.length //X轴类目项的文字个数
          const rowN = Math.ceil(valLength / maxLength) //类目项需要换行的行数
          if (rowN > 1) {
            //如果类目项的文字大于5,
            for (let i = 0; i < rowN; i++) {
              let temp = '' //每次截取的字符串
              const start = i * maxLength //开始截取的位置
              const end = start + maxLength //结束截取的位置
              //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
              temp = value.substring(start, end) + '\n'
              ret += temp //凭借最终的字符串
            }
            return ret
          } else {
            return value
          }
        }
      }
    },
    yAxis: [
      {
        type: 'value',
        nameTextStyle: {
          color: '#fff',
          fontSize: 16
        },
        nameGap: 30, // 将标题和轴线之间的距离设置为 30 像素
        // nameLocation: 'middle', // 将标题位置设置为中间
        // 其他配置选项...

        splitLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.15)'
            // type: 'dashed', // dotted 虚线
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: true, //隐藏X轴轴线
          lineStyle: {
            color: '#163a5f',
            width: 1
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#BDD8FB',
            fontSize: 12
          }
        }
      },
      {
        type: 'value',
        name: '',
        nameTextStyle: {
          color: '#BDD8FB',
          fontSize: 12
        },
        splitLine: {
          show: false,
          lineStyle: {
            width: 1,
            color: '#CED2DB'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false, //隐藏X轴轴线
          lineStyle: {
            color: '#163a5f',
            width: 2
          }
        },
        axisLabel: {
          show: false,
          textStyle: {
            color: '#797A7F',
            fontSize: 12
          }
        }
      }
    ],
    series: [
      {
        // name: "权重",
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, //右
            y: 0, //下
            x2: 0, //左
            y2: 1, //上
            colorStops: [
              {
                offset: 0.1,
                color: color // 0% 处的颜色
              },
              {
                offset: 1,
                color: color // 100% 处的颜色
              }
            ]
          },
          barBorderRadius: [20, 20, 20, 20]
        },
        label: {
          show: false,
          position: 'top',
          distance: 0,
          color: '#1ACDDC',
          formatter: '{c}' + '次'
        },
        data: tipData
      }
    ]
  }

  echart && echart.setOption(option)
}
