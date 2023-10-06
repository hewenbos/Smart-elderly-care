<template>
  <div class="header">
    <div class="leftText">智 慧 养 老 院 监 控 平 台</div>
    <div class="centerContiner">
      <div
        class="item"
        :class="{ active: active == index }"
        @click="goRouter(item.path, index)"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="RightContiner">
      <div class="time">
        <div class="keepTime">{{ time }}</div>
        <div class="date">{{ new Date().toDateString() }}</div>
      </div>
      <div class="weather">
        <el-icon class="icon-Lightning"><Lightning /></el-icon>
        <div class="Airtemperature">
          <p>25 - 30℃</p>
          <p>多云</p>
        </div>
      </div>
      <div class="Fullscreen text">
        <el-icon><FullScreen /></el-icon>
        <p>全屏</p>
      </div>
      <div class="disposition text">
        <el-icon><Tools /></el-icon>
        <p>配置</p>
      </div>
      <div class="out text">
        <el-icon><SwitchButton /></el-icon>
        <p>退出</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { FilterTime } from '@/utils/filterTime'
import { useRouter } from 'vue-router'
const router = useRouter()
const time = ref<string>('')
setInterval(() => {
  time.value = FilterTime(new Date().getTime())
}, 1000)
//页面列表
const active = ref(0)
const list = reactive([
  {
    name: '综合监控',
    path: '/Comprehensive'
  },
  {
    name: '床位监控',
    path: '/Bed'
  },
  {
    name: '环境监控',
    path: '/Environment'
  },
  {
    name: '健康监控',
    path: '/Health'
  }
])

const goRouter = (path: string, index: number) => {
  active.value = index
  router.push(path)
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 4vw;
  padding: 0 2vh;
  border-bottom: 0.1vw solid #ccc;
  .leftText {
    color: #fff;
    width: 18vw;
    font-size: 1.5vw;
  }
  .centerContiner {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
    .item {
      width: 7vw;
      height: 2vw;
      background-color: #8c8989;
      text-align: center;
      line-height: 2vw;
      border-radius: 0.3vw;
      color: #ccc;
      cursor: pointer;
      margin: 0 0.8vw;
      font-size: 1vw;
    }
    .item.active {
      background-color: rgb(220, 220, 36);
      color: #fff;
    }
  }
  .RightContiner {
    width: 25vw;
    display: flex;
    align-items: center;

    .time {
      border-right: 0.1vw solid #ccc;
      padding: 0 2vh;
      text-align: center;
      width: 10vw;
      .keepTime {
        color: yellow;
        font-size: 1.3vw;
      }
      .date {
        color: #fff;
        font-size: 0.2vw;
      }
    }
    .weather {
      height: 5.5vh;
      color: #fff;
      display: flex;
      align-items: center;
      border-right: 0.1vw solid #ccc;
      padding: 0 2vh;
      .icon-Lightning {
        font-size: 1vw;
        margin: 0 2vh;
      }
      .Airtemperature {
        font-size: 0.4vw;
        text-align: center;
        p {
          margin: 0;
          padding: 0;
        }
      }
    }
    .Fullscreen {
      padding: 0 0.2vw;
      width: 3vw;
    }
    .disposition {
      padding: 0 0.2vw;
      width: 3vw;
    }
    .out {
      padding-left: 0.2vw;
      width: 3vw;
    }
    .text {
      text-align: center;
      cursor: pointer;
      color: #fff;
      p {
        margin: 0;
        padding: 0;
        font-size: 0.4vw;
      }
    }
  }
}
</style>
