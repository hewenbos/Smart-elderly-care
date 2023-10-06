<template>
  <el-row :gutter="10" style="margin: 1.5vh 0; padding: 0">
    <el-col style="padding: 0" :span="4">
      <MyBorder>
        <div class="left-box">
          <div class="search"><el-input v-model="keyWord" placeholder="请输入关键字" /></div>
          <el-divider style="margin: 1.5vh 0; border-top: 1px solid #706f6f" />

          <el-scrollbar height="79vh">
            <div v-for="(item, index) in userList" :key="index" class="scrollbar-demo-item">
              <div class="user space" @click="active = index" :class="{ active: active === index }">
                <div class="icon">
                  <el-icon><Avatar /></el-icon>
                </div>
                <div class="info">
                  <div class="name">{{ item.name }}</div>
                  <div class="desc">
                    <p class="space">
                      <span class="age back">年龄 : {{ item.age }}岁</span
                      ><span class="sex back">性别 : {{ item.sex }}</span>
                    </p>
                    <p class="space">
                      <span class="rank back">级别 : {{ item.rank }}</span
                      ><span class="Medicalcare back">护工 : {{ item.Medicalcare }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </el-scrollbar>
        </div>
      </MyBorder>
    </el-col>
    <el-col :span="20">
      <el-row :gutter="10" style="margin: 0; padding: 0">
        <el-col style="padding: 0" :span="12">
          <MyBorder title="老人明细" style="width: 95%; height: 26vh; margin: 0">
            <div class="userInfo space">
              <div class="avater">
                <el-icon><Avatar /></el-icon>
              </div>
              <div class="health">
                <div class="name">张那么</div>
                <p>
                  <span class="sex">性别: 男</span>
                  <span class="age">年龄: 男</span>
                </p>
                <p>
                  <span class="Family">家属: 李四</span>
                  <span class="phone">电话: 男</span>
                </p>
                <p>
                  <span class="bed">床位: 男</span>
                  <span class="status">状态: 男</span>
                </p>
                <p>
                  <span class="rank">护理级别: 男</span>
                  <span class="Medicalcare">责任护工: 男</span>
                </p>
                <div class="condition">
                  <span>健康状况: </span><el-tag class="ml-2" type="info">糖尿病</el-tag>
                  <el-tag class="ml-2" type="warning">高血压</el-tag>
                  <el-tag class="ml-2" type="danger">老年痴呆</el-tag>
                </div>
              </div>
            </div>
          </MyBorder>
        </el-col>
        <el-col style="padding: 0" :span="12">
          <MyBorder title="整体健康评估" style="width: 95%; height: 26vh; margin: 0">
            <div style="width: 100%; height: 90%" ref="pie"></div>
          </MyBorder>
        </el-col>
      </el-row>
      <el-row :gutter="10" style="margin: 0; padding: 0">
        <el-col style="padding: 0" :span="12">
          <MyBorder title="心率统计" style="width: 95%; height: 26vh; margin: 1.3vh 0">
            <div ref="line" style="width: 100%; height: 100%"></div>
          </MyBorder>
        </el-col>
        <el-col style="padding: 0" :span="12">
          <MyBorder title="血压统计" style="width: 95%; height: 26vh; margin: 1.3vh 0">
            <div ref="Blood" style="width: 100%; height: 100%"></div>
          </MyBorder>
        </el-col>
      </el-row>
      <el-row :gutter="10" style="margin: 0; padding: 0">
        <el-col style="padding: 0" :span="12">
          <MyBorder title="血氧统计" style="width: 95%; height: 26vh; margin: 0">
            <div ref="oxygen" style="width: 100%; height: 100%"></div>
          </MyBorder>
        </el-col>
        <el-col style="padding: 0" :span="12">
          <MyBorder title="睡眠统计" style="width: 95%; height: 26vh; margin: 0">
            <div ref="Sleep" style="width: 100%; height: 100%"></div>
          </MyBorder>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import MyBorder from '@/components/MyBorder.vue'
import { ref, onMounted } from 'vue'
import { pieEcharts } from '@/echarts/pieEcharts'
import { lineEcharts } from '@/echarts/lineEcharts'
import { kEcharts } from '@/echarts/kecharts'
import { oxygenEcharts } from '@/echarts/oxygenEchart'
import { sleepEcharts } from '@/echarts/SleepEcharts'
const active = ref<null | number>(null)
const keyWord = ref('')

const userList = ref([
  {
    name: '赵美玲',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '李四',
    age: 68,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '王五',
    age: 69,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '赵四',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '赵美玲',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '赵美玲',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '赵美玲',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '赵美玲',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '赵美玲',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '赵美玲',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '赵美玲',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '赵美玲',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '赵美玲',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '赵美玲',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '赵美玲',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '赵美玲',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '赵美玲',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '赵美玲',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  },
  {
    name: '赵美玲',
    age: 67,
    sex: '男',
    rank: '自理级别',
    Medicalcare: '王玲玲'
  }
])

//饼图
const pieList = ref([
  [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
  [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
  [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
  [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
])
const pie = ref()
onMounted(() => {
  pieEcharts(pie.value, pieList.value)
  lineEcharts(line.value, xData.value, valueData.value)
  kEcharts(Blood.value, xData.value, valueData.value, valueData1.value)
  oxygenEcharts(oxygen.value, xData.value, valueData.value)
  sleepEcharts(Sleep.value, xData.value, valueData.value)
})

setInterval(() => {
  pieList.value = [
    [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
  ]
  pieEcharts(pie.value, pieList.value)

  lineEcharts(line.value, xData.value, valueData.value)
  kEcharts(Blood.value, xData.value, valueData.value, valueData1.value)
  valueData.value = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
  ]
  valueData1.value = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
  ]
}, 5000)

//折现图
const line = ref()
const xData = ref([
  '00:16',
  '01:30',
  '02:45',
  '03:56',
  '04:21',
  '05:33',
  '06:47',
  '07:34',
  '08:23',
  '09:21',
  '10:22',
  '11:23',
  '12:45',
  '13:01'
])
const valueData = ref([
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100)
])
const valueData1 = ref([
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100)
])

//血压统计
const Blood = ref()

//血氧统计
const oxygen = ref()

const Sleep = ref()
</script>

<style lang="scss" scoped>
.left-box {
  width: 100%;
}

::v-deep {
  .el-input__wrapper {
    border-radius: 2.33333333vw;
    background-color: rgba($color: #ffffff, $alpha: 0.3);
    box-shadow: none;
  }
  .el-input__wrapper.is-focus {
    box-shadow: none;
  }
  .el-scrollbar__view {
    height: 100%;
  }
}

.user {
  color: #ccc;
  border-bottom: 1px solid rgba($color: #8e5656, $alpha: 0.3);
  padding: 1vh 0;
  .icon {
    width: 3vw;
    text-align: center;

    font-size: 2vw;
  }
  .info {
    flex: 1;
    font-size: 0.2vw;
    .name {
      font-size: 0.3vw;
      margin-bottom: 1.3vh;
    }
    .desc {
      p {
        padding: 0.5vh 0;
      }
      .back {
        width: 5.9vw;
        text-align: left;
      }
    }
  }
}
.user:hover {
  background-color: rgba($color: #571b1b, $alpha: 0.4);
}
.user.active {
  background-color: rgba($color: #571b1b, $alpha: 0.4);
}

.userInfo {
  color: #ccc;
  padding: 1vw;
  .avater {
    font-size: 4.33333333vw;
    width: 5vw;
    text-align: center;
    margin-right: 1vw;
  }
  .health {
    flex: 1;
    font-size: 0.6vw;
    .name {
      font-size: 1.2vw;
    }
    p {
      margin: 0.5vw 0;
      span {
        display: inline-block;
        width: 12vw;
        text-align: left;
      }
    }
    .condition {
      span {
        margin-right: 0.5vw;
      }
    }
  }
}
</style>
