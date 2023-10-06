<template>
  <div>
    <MyBorder style="height: 20px">
      <div class="main space">
        <div class="budiling">
          <span class="tag">标签:</span>
          <el-tag class="ml-2" type="success">1号楼</el-tag>
          <el-tag class="ml-2" type="success">2号楼</el-tag>
          <el-tag class="ml-2" type="success">3号楼</el-tag>
          <el-tag class="ml-2" type="success">4号楼</el-tag>
          <el-tag class="ml-2" type="success">5号楼</el-tag>
        </div>
        <div class="status">
          <div class="colorBlock">
            <span class="color1 block"></span>
            正常
          </div>
          <div class="colorBlock">
            <span class="color2 block"></span>
            异常
          </div>
          <div class="colorBlock">
            <span class="color3 block"></span>
            告警
          </div>
          <div class="colorBlock">
            <span class="color4 block"></span>
            故障
          </div>
        </div>
      </div>
    </MyBorder>

    <div class="SupervisoryList" v-for="(item, index) in imgList" :key="index">
      <MyBorder
        v-for="(ele, idx) in item"
        :key="idx"
        style="width: 16vw; height: 12.3vw; margin: 0 1.3vw; position: relative"
      >
        <img :src="ele.url" style="width: 100%; height: 100%" alt="" />
        <div class="popup">
          <div>
            <el-icon><VideoCamera /></el-icon>
            <p>监控点{{ ele.Supervisory }}</p>
          </div>
          <span
            class="flag"
            :class="{
              color1: ele.status === '正常',
              color2: ele.status === '异常',
              color3: ele.status === '告警',
              color4: ele.status === '故障'
            }"
            >{{ ele.status }}</span
          >
        </div>
      </MyBorder>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MyBorder from '@/components/MyBorder.vue'
import { ref } from 'vue'
const imgList = ref([
  [
    {
      url: '/src/assets/images/jiank1.png',
      status: '正常',
      Supervisory: '001'
    },
    {
      url: '/src/assets/images/jiank2.jpeg',
      status: '异常',
      Supervisory: '001'
    },
    {
      url: '/src/assets/images/jiank1.png',
      status: '告警',
      Supervisory: '001'
    },
    {
      url: '/src/assets/images/jiank2.jpeg',
      status: '故障',
      Supervisory: '001'
    },
    {
      url: '/src/assets/images/jiank1.png',
      status: '异常',
      Supervisory: '001'
    }
  ],
  [
    {
      url: '/src/assets/images/jiank1.png',
      status: '正常',
      Supervisory: '001'
    },
    {
      url: '/src/assets/images/jiank2.jpeg',
      status: '异常',
      Supervisory: '001'
    },
    {
      url: '/src/assets/images/jiank1.png',
      status: '告警',
      Supervisory: '001'
    },
    {
      url: '/src/assets/images/jiank2.jpeg',
      status: '故障',
      Supervisory: '001'
    },
    {
      url: '/src/assets/images/jiank1.png',
      status: '异常',
      Supervisory: '001'
    }
  ],
  [
    {
      url: '/src/assets/images/jiank1.png',
      status: '正常',
      Supervisory: '001'
    },
    {
      url: '/src/assets/images/jiank2.jpeg',
      status: '异常',
      Supervisory: '001'
    },
    {
      url: '/src/assets/images/jiank1.png',
      status: '告警',
      Supervisory: '001'
    },
    {
      url: '/src/assets/images/jiank2.jpeg',
      status: '故障',
      Supervisory: '001'
    },
    {
      url: '/src/assets/images/jiank1.png',
      status: '异常',
      Supervisory: '001'
    }
  ]
])
</script>

<style lang="scss" scoped>
.main {
  color: #ccc;
  span {
    margin: 0 0.3vw;
  }
  .tag {
    font-size: 0.3vw;
  }
  .status {
    width: 15vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.2vw;

    .colorBlock {
      display: flex;
      align-items: center;
      .block {
        display: inline-block;
        width: 0.8vw;
        height: 1.6vh;
        margin-right: 0.2vw;
      }
      .color1 {
        background-color: #67c23a;
      }
      .color2 {
        background-color: #f76565;
      }
      .color3 {
        background-color: #e6a23c;
      }
      .color4 {
        background-color: #409eff;
      }
    }
  }
}
.SupervisoryList {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.popup {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #cbfa55, $alpha: 0.3);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1vw;
  .el-icon {
    font-size: 3vw;
  }
}
.flag {
  position: absolute;
  right: 0;
  top: 0;
  width: 2.5vw;
  height: 2vh;
  font-size: 0.2vw;
  text-align: center;
  line-height: 2vh;
}
.flag.color1 {
  background-color: #67c23a;
}
.flag.color2 {
  background-color: #f76565;
}
.flag.color3 {
  background-color: #e6a23c;
}
.flag.color4 {
  background-color: #409eff;
}
</style>
