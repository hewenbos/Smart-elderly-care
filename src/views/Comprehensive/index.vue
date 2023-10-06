<template>
  <div>
    <MyBorder style="margin-top: 10px">
      <el-row style="height: 8vh">
        <el-col :span="4" class="flex-center">
          <div class="textcolor1 flex-item content">
            <el-icon><OfficeBuilding /></el-icon>
            <div class="text">
              <p>44</p>
              <div>占地面积</div>
            </div>
          </div>
        </el-col>
        <el-col :span="1"> <div class="boder"></div></el-col>
        <el-col :span="4" class="flex-center">
          <div class="textcolor2 flex-item content">
            <el-icon><FirstAidKit /></el-icon>
            <div class="text">
              <p>44</p>
              <div>总床位数</div>
            </div>
          </div>
        </el-col>
        <el-col :span="1"> <div class="boder"></div></el-col>
        <el-col :span="4" class="flex-center">
          <div class="textcolor3 flex-item content">
            <el-icon><User /></el-icon>
            <div class="text">
              <p>44</p>
              <div>入驻人数</div>
            </div>
          </div>
        </el-col>
        <el-col :span="1"> <div class="boder"></div></el-col>
        <el-col :span="4" class="flex-center">
          <div class="textcolor4 flex-item content">
            <el-icon><Failed /></el-icon>
            <div class="text">
              <p>44</p>
              <div>去世人数</div>
            </div>
          </div>
        </el-col>
        <el-col :span="1"> <div class="boder"></div></el-col>
        <el-col :span="4" class="flex-center">
          <div class="textcolor5 flex-item content">
            <el-icon><Guide /></el-icon>
            <div class="text">
              <p>44</p>
              <div>转院人数</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </MyBorder>
    <el-row>
      <el-col :span="6">
        <!-- 入驻率 -->
        <MyBorder style="height: 23vh; margin: 10px 0" title="入驻率">
          <div class="chart" style="width: 100%; height: 100%" ref="mypoint"></div>
        </MyBorder>
        <!-- 安防监控 -->
        <MyBorder style="height: 23vh; margin: 10px 0" title="安防监控">
          <div class="list">
            <div class="item">
              <img src="@/assets/images/jiank1.png" alt="" />
              <div>
                <el-icon><VideoCamera /></el-icon>
                <p>入口监控</p>
              </div>
            </div>
            <div class="item">
              <img src="@/assets/images/jiank2.jpeg" alt="" />
              <div>
                <el-icon><VideoCamera /></el-icon>
                <p>入口监控</p>
              </div>
            </div>
          </div>
          <div class="list">
            <div class="item">
              <img src="@/assets/images/jiank2.jpeg" alt="" />
              <div>
                <el-icon><VideoCamera /></el-icon>
                <p>入口监控</p>
              </div>
            </div>
            <div class="item">
              <img src="@/assets/images/jiank1.png" alt="" />
              <div>
                <el-icon><VideoCamera /></el-icon>
                <p>入口监控</p>
              </div>
            </div>
          </div>
        </MyBorder>
      </el-col>
      <el-col :span="12">
        <!-- 园区概览 -->
        <MyBorder style="margin: 10px 5px; height: 90%; position: relative">
          <img
            src="@/assets/images/bg1.png"
            alt=""
            style="width: 97%; height: 95%; position: absolute"
          />
          <div class="textContetnt">
            <div class="text1">智 慧 养 老 院</div>
            <div class="text2">百 善 孝 为 先</div>
          </div>
        </MyBorder>
      </el-col>
      <el-col :span="6">
        <!-- 最新新闻 -->
        <MyBorder style="height: 23vh; margin: 10px 0" title="最新新闻">
          <div style="overflow: hidden; width: 100%; height: 90%; margin-top: 5px">
            <Vue3SeamlessScroll :list="list">
              <div v-for="(item, index) in list" :key="index" class="scroll">
                <span>{{ item.title }}</span>
                <span>{{ item.date }}</span>
              </div>
            </Vue3SeamlessScroll>
          </div>
        </MyBorder>
        <!-- 环境状况 -->
        <MyBorder style="height: 23vh; margin: 10px 0" title="环境状况">
          <div class="condition">
            <div class="header flex">
              <el-icon><Drizzling /></el-icon>
              <div>
                <p class="title1">小雨 23-28℃</p>
                <p class="title2">天气</p>
              </div>
              <div>
                <p class="title1">东南风</p>
                <p class="title2">风向</p>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <td>检测点</td>
                  <td>温度</td>
                  <td>湿度</td>
                  <td>PM2.5</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                  <td>{{ item.date }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.address }}</td>
                  <td>{{ item.pm }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </MyBorder>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" style="">
        <!-- 等级统计 -->
        <MyBorder style="height: 20vh" title="等级统计">
          <div ref="barchart" style="width: 100%; height: 90%"></div>
        </MyBorder>
      </el-col>
      <el-col :span="6">
        <!-- 疾病统计 -->
        <MyBorder style="height: 20vh; margin: 0 5px" title="疾病统计">
          <div ref="word" style="width: 100%; height: 90%"></div>
        </MyBorder>
      </el-col>
      <el-col :span="6">
        <!-- 告警事件 -->
        <MyBorder style="height: 20vh; margin: 0 5px" title="告警事件">
          <div style="overflow: hidden; width: 100%; height: 90%; margin-top: 5px">
            <Vue3SeamlessScroll :list="list">
              <div v-for="(item, index) in listEvent" :key="index" class="scroll">
                <span>{{ item.title }}</span>
                <p>
                  <span style="margin-right: 5px">{{ item.date }}</span>
                  <span :style="{ color: item.name === '已处理' ? 'red' : 'green' }">{{
                    item.name
                  }}</span>
                </p>
              </div>
            </Vue3SeamlessScroll>
          </div>
        </MyBorder>
      </el-col>
      <el-col :span="6">
        <!-- 值班人员 -->
        <MyBorder style="height: 20vh" title="值班人员">
          <div class="listUser">
            <div class="itemUser">
              <img src="@/assets/images/yihu.jpeg" alt="" />
              <div class="name textcolor1">
                <p><span>张三01</span> <span>保安</span></p>
                <p>2023-10-05</p>
              </div>
            </div>
            <div class="itemUser">
              <img src="@/assets/images/yihu.jpeg" alt="" />
              <div class="name textcolor2">
                <p><span>张三01</span> <span>护士</span></p>
                <p>2023-10-05</p>
              </div>
            </div>
            <div class="itemUser">
              <img src="@/assets/images/yihu.jpeg" alt="" />
              <div class="name textcolor3">
                <p><span>张三01</span> <span>医生</span></p>
                <p>2023-10-05</p>
              </div>
            </div>
            <div class="itemUser textcolor1">
              <img src="@/assets/images/yihu.jpeg" alt="" />
              <div class="name textcolor4">
                <p><span>张三01</span> <span>经理</span></p>
                <p>2023-10-05</p>
              </div>
            </div>
          </div>
        </MyBorder>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import MyBorder from '@/components/MyBorder.vue'
import { ref, onMounted, reactive } from 'vue'
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll'
import { BarEcharts } from '@/echarts/barEcharts'
//入驻率

import * as echarts from 'echarts'
import 'echarts-wordcloud'
onMounted(() => {
  pineCharts()
  wordCloud()
  BarEcharts(barchart.value, xData, 'yellow', tipData)
})

setInterval(() => {
  pineCharts()
  wordCloud()
}, 5000)
const list = ref([
  { title: '新冠疫情', date: '2023-5-10 18:09:22' },
  { title: '俄乌战况', date: '2023-5-10 18:09:22' },
  { title: '世界人口', date: '2023-5-10 18:09:22' },
  { title: '总经济', date: '2023-5-10 18:09:22' },
  { title: '新冠疫情', date: '2023-5-10 18:09:22' },
  { title: '俄乌战况', date: '2023-5-10 18:09:22' },
  { title: '世界人口', date: '2023-5-10 18:09:22' },
  { title: '总经济', date: '2023-5-10 18:09:22' }
])
const mypoint = ref()
const pineCharts = () => {
  let icon =
    'path://M512.584639,219.893708c40.41173,0.258019,73.19961-32.274913,73.199609-72.557634,0-40.025725-32.78788-72.559681-73.199609-72.559681-40.473163,0-73.196538,32.533956-73.196538,72.559681,0,40.089206,32.723375,72.557634,73.196538,72.557634z,m73.330666,16.396499H439.129058c-55.266258,0-91.39098,48.28336-91.390981,94.203594v220.945238c0,42.847553,60.780905,42.847553,60.780905,0V347.144224h11.782872v555.564273c0,59.179548,82.417649,57.316077,84.337434,0V582.569248h15.696162V902.96754c3.391108,60.650871,84.340506,54.817796,84.340506-0.258019V347.144224h9.800631v204.234406c0,42.837314,62.696594,42.837314,62.696594,0V330.433391c0.126962-45.72979-36.116531-94.143184-91.257876-94.143184z'
  const myCharts = echarts.init(mypoint.value)
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: '{b0}: {c0}%'
    },
    grid: {
      containLabel: true,
      height: '200px',
      width: '35px',
      left: '2%',
      top: 'center',
      right: '9%'
    },
    xAxis: {
      max: 5,
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'category',
      data: ['男', '女'],
      inverse: true,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: 14,
        color: 'white'
      },
      axisPointer: {
        label: {
          show: true,
          margin: 100
        }
      }
    },
    series: [
      {
        type: 'pictorialBar',
        symbolRepeat: 'fixed',
        symbolMargin: '6!',
        label: {
          normal: {
            show: true,
            position: 'right',
            offset: [3, 0],
            formatter: (param: any) => {
              return param.value.toFixed(0) + '%'
            },
            textStyle: {
              fontSize: 14,
              color: 'white'
            }
          }
        },
        symbolClip: true,
        symbolSize: [14, 30],
        symbolPosition: 'start',
        symbolBoundingData: 100,
        data: [
          {
            value: Math.floor(Math.random() * 100),
            symbol: icon,
            itemStyle: {
              color: '#1DDBF9'
            }
          },
          {
            value: Math.floor(Math.random() * 100),
            symbol: icon,
            itemStyle: {
              color: '#ff5983'
            }
          }
        ],
        z: 10
      },
      {
        type: 'pictorialBar',
        itemStyle: {
          normal: {
            opacity: 0.2
          }
        },
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '6!',
        symbolSize: [14, 30],
        symbolBoundingData: 100,
        symbolPosition: 'start',
        data: [
          {
            value: 100,
            symbol: icon,
            itemStyle: {
              color: '#1DDBF9'
            }
          },
          {
            value: 100,
            symbol: icon,
            itemStyle: {
              color: '#ff5983'
            }
          }
        ],
        z: 5
      }
    ]
  }
  myCharts && myCharts.setOption(option)
}

//环境状况
const tableData = ref([
  {
    date: '5号楼',
    name: '22.5℃',
    address: '10%',
    pm: '10'
  },
  {
    date: '4号楼',
    name: '22.5℃',
    address: '10%',
    pm: '10'
  },
  {
    date: '3号楼',
    name: '22.5℃',
    address: '10%',
    pm: '10'
  },
  {
    date: '2号楼',
    name: '22.5℃',
    address: '10%',
    pm: '10'
  }
])

//告警事件

const listEvent = [
  { title: '5号楼', date: '2023-5-10 18:09:22', name: '已处理' },
  { title: '4号楼', date: '2023-5-10 18:09:22', name: '未处理' },
  { title: '3号楼', date: '2023-5-10 18:09:22', name: '未处理' },
  { title: '2号楼', date: '2023-5-10 18:09:22', name: '未处理' },
  { title: '5号楼', date: '2023-5-10 18:09:22', name: '已处理' },
  { title: '4号楼', date: '2023-5-10 18:09:22', name: '未处理' },
  { title: '2号楼', date: '2023-5-10 18:09:22', name: '未处理' },
  { title: '3号楼', date: '2023-5-10 18:09:22', name: '未处理' },
  { title: '5号楼', date: '2023-5-10 18:09:22', name: '未处理' }
]

//字符云
let data = [
  {
    name: '高血压',
    value: 20
  },
  {
    name: '高脂血症',
    value: 20
  },
  {
    name: '糖尿病',
    value: 20
  },
  {
    name: '病毒性肝炎',
    value: 19
  },
  {
    name: '消化性溃疡',
    value: 18
  },
  {
    name: '冠心病',
    value: 18
  },
  {
    name: '慢性胃炎',
    value: 17
  },
  {
    name: '红斑狼疮',
    value: 17
  },
  {
    name: '骨关节炎',
    value: 17
  },
  {
    name: '干燥综合征',
    value: 17
  },
  {
    name: '痛风',
    value: 17
  },
  {
    name: '慢性阻塞性肺疾病',
    value: 17
  },
  {
    name: '甲亢',
    value: 16
  },
  {
    name: '甲减',
    value: 15
  },
  {
    name: '慢性支气管炎',
    value: 15
  },
  {
    name: '支气管哮喘',
    value: 15
  }
]
const word = ref()

const wordCloud = () => {
  const myCharts = echarts.init(word.value)
  const option = {
    series: [
      {
        type: 'wordCloud',
        gridSize: 7,
        sizeRange: [15, 40],
        rotationRange: [-90, 90],
        // rotationStep: 45,
        shape: 'circle',
        width: '100%',
        height: '100%',
        drawOutOfBound: false,
        textStyle: {
          color: function () {
            return (
              'rgb(' +
              [
                Math.round(Math.random() * 255),
                Math.round(Math.random() * 255),
                Math.round(Math.random() * 255)
              ].join(',') +
              ')'
            )
          },

          emphasis: {
            shadowBlur: 10,
            shadowColor: '#ffffff'
          }
        },
        data: data
      }
    ]
  }
  myCharts && myCharts.setOption(option)
}

//等级统计
const barchart = ref()
const xData = reactive(['自理级别', '介助级别', '介护级别', '智能失智'])
const tipData = reactive([63, 70, 65, 45])
</script>

<style lang="scss" scoped>
.content {
  margin: 0 auto;
  .el-icon {
    font-size: 3.33333333vw;
    margin: 0 10px;
  }
  .text {
    font-size: 14px;
    p {
      margin-bottom: 2vh;
    }
  }
}
.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  .item {
    flex: 1;
    position: relative;
    margin: 0 5px;
    img {
      width: 100%;
      height: 70px;
    }
    div {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #f38e8e, $alpha: 0.3);
      color: #fff;
      text-align: center;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-icon {
        font-size: 28px;
      }
    }
  }
}

.scroll {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  margin: 10px 0;
}
.scroll:hover {
  color: #f38e8e;
}

.textContetnt {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  color: #fff;
  background: linear-gradient(-45deg, rgba(159, 133, 133, 0.2), rgba(148, 67, 67, 0.6));
  writing-mode: tb-rl;
  writing-mode: vertical-lr;
  .text1 {
    font-size: 18px;
    color: #73c0a4;
  }
  .text2 {
    font-size: 14px;
    color: #244265a6;
  }
}

.condition {
  .header {
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: #03a9f3;
    // padding: 0 10px;
    .el-icon {
      font-size: 16px;
    }
    .title1 {
      font-size: 14px;
    }
    .title2 {
      font-size: 12px;
    }
  }
}
table {
  color: #ccc;
  width: 100%;
  margin-top: 10px;
  border: 1px solid #696868;
  tr {
    border: 1px solid #696868;
  }

  td {
    font-size: 12px;
    border: 1px solid #696868;
    text-align: center;
  }
}

.listUser {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  .itemUser {
    color: #ccc;
    display: flex;
    align-items: center;
    margin: 1vh 0;
    img {
      width: 3vw;
      height: 6vh;
      border-radius: 50%;
      margin-right: 1vw;
    }
    .name {
      font-size: 0.2vw;
    }
  }
}
</style>
