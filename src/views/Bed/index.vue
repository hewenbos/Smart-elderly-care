<template>
  <div>
    <div class="top">
      <div class="search">
        <span class="searchText">筛选:</span>
        <span class="searchBlock" :class="{ active: active === 0 }" @click="search('', 0)"
          >全部</span
        >
        <span class="searchBlock" :class="{ active: active === 1 }" @click="search('101', 1)"
          >01栋01层</span
        >
        <span class="searchBlock" :class="{ active: active === 2 }" @click="search('102', 2)"
          >01栋02层</span
        >
        <span class="searchBlock" :class="{ active: active === 3 }" @click="search('201', 3)"
          >02栋01层</span
        >
        <span class="searchBlock" :class="{ active: active === 4 }" @click="search('202', 4)"
          >02栋02层</span
        >
        <span class="searchBlock" :class="{ active: active === 5 }" @click="search('301', 5)"
          >03栋01层</span
        >
        <span class="searchBlock" :class="{ active: active === 6 }" @click="search('302', 6)"
          >03栋02层</span
        >
        <span class="searchBlock" :class="{ active: active === 7 }" @click="search('401', 7)"
          >04栋01层</span
        >
        <span class="searchBlock" :class="{ active: active === 8 }" @click="search('402', 8)"
          >04栋02层</span
        >
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
          空床
        </div>
      </div>
    </div>
    <div class="bunk">
      <div class="bunklist" v-for="(item, index) in list" :key="index">
        <div class="bunkItem" v-for="(ele, idx) in item" :key="idx">
          <template v-if="ele.name">
            <div
              class="name space"
              :class="{
                back1: ele.rank === '自理级别' || '介护级别',
                back2: ele.rank === '失能失智',
                back3: ele.rank === '介助级别',
                back4: ele.rank === ''
              }"
            >
              <span>{{ ele.name }}</span>
              <span class="Bednumber">{{ ele.Bednumber }}床</span>
            </div>
            <div
              class="info"
              :class="{
                border1: ele.rank === '自理级别' || '介护级别',
                border2: ele.rank === '失能失智',
                border3: ele.rank === '介助级别',
                border4: ele.rank === ''
              }"
            >
              <p class="userInfo space">
                <span class="age model"
                  >年龄: <span>{{ ele.age }}岁</span></span
                >
                <span class="sex model"
                  >性别: <span>{{ ele.sex }}</span></span
                >
              </p>
              <p class="Nursingworker space">
                <span class="rank model"
                  >级别: <span>{{ ele.rank }}</span>
                </span>
                <span class="Medicalcare model"
                  >护工: <span>{{ ele.Medicalcare }}</span></span
                >
              </p>
            </div>
          </template>

          <template v-else>
            <div>
              <div class="name back4" style="text-align: center">暂无人员</div>
              <div class="info border4" style="height: 3.93333333vw"></div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const list = ref([
  [
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '失能失智',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '102'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '介助级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '102'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '介助级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '102'
    }
  ],
  [
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },

    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '介助级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '102'
    },
    {
      name: '',
      age: '',
      sex: '',
      rank: '',
      Medicalcare: '',
      Bednumber: '',
      Building: ''
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '103',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '介助级别',
      Medicalcare: '王亚丽',
      Bednumber: '104',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '105',
      Building: '102'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '介助级别',
      Medicalcare: '王亚丽',
      Bednumber: '106',
      Building: '102'
    }
  ],
  [
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '失能失智',
      Medicalcare: '王亚丽',
      Bednumber: '107',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '108',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '失能失智',
      Medicalcare: '王亚丽',
      Bednumber: '109',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '失能失智',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '102'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '介助级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '102'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '介助级别',
      Medicalcare: '王亚丽',
      Bednumber: '106',
      Building: '102'
    }
  ],
  [
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '介助级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '介助级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '介助级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '失能失智',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '102'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '介助级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '102'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '失能失智',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '102'
    }
  ],
  [
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '失能失智',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '失能失智',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '102'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '介助级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '102'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '失能失智',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    }
  ],
  [
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '介助级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '102'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '介助级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '102'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    }
  ],
  [
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '失能失智',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '102'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '介助级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '102'
    },
    {
      name: '王乐乐',
      age: '63',
      sex: '男',
      rank: '自理级别',
      Medicalcare: '王亚丽',
      Bednumber: '101',
      Building: '101'
    }
  ]
])
const data = list.value
const active = ref(0)
const search = (bed: string, idx: number) => {
  active.value = idx
  list.value = data.map((item) => item.filter((ele) => ele.Building.includes(bed)))
  console.log(list.value)
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ccc;
  margin-top: 1vh;
  cursor: pointer;
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
  .search {
    flex: 1;
    font-size: 0.2vw;
    .searchBlock {
      display: inline-block;
      margin: 0 0.2vw;
      padding: 0.3vw 0.5vw;
      background-color: #706d6d;
      border-radius: 0.1vw;
    }
    .searchBlock.active {
      background-color: #e6a23c;
      color: #fff;
    }
  }
}
.bunk {
  margin-top: 1vh;
  cursor: pointer;
  .bunklist {
    margin-top: 1vh;
    color: #ccc;
    display: flex;
    align-items: center;
    .bunkItem {
      width: 13.8vw;
      height: 10.8vh;
      display: inline-block;
      padding: 0.3vw;
      border-radius: 0.2vw;
      box-sizing: border-box;
      margin: 0.3vh;
      .name {
        font-size: 1vw;
        border-bottom: 0.1vw solid #dedddd;
        padding-bottom: 1vh;
        padding: 0.3vw;
        box-sizing: border-box;
        color: #fff;
        .Bednumber {
          font-size: 0.3vw;
        }
      }
      .name.back1 {
        background-color: #67c23a;
      }
      .name.back2 {
        background-color: #f76565;
      }
      .name.back3 {
        background-color: #e6a23c;
      }
      .name.back4 {
        background-color: #409eff;
      }
      .info {
        font-size: 0.3vw;
        height: 3.53333333vw;
        padding: 0.3vw;
        box-sizing: border-box;
        p {
          margin: 0.5vh 0;
          .model {
            width: 7vw;
            text-align: left;
            span {
              color: #fff;
            }
          }
        }
      }
      .info.border1 {
        border: 0.1vw solid #67c23a;
      }
      .info.border2 {
        border: 0.1vw solid #f76565;
      }
      .info.border3 {
        border: 0.1vw solid #e6a23c;
      }
      .info.border4 {
        border: 0.1vw solid #409eff;
      }
    }
  }
}
</style>
