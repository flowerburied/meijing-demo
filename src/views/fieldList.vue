<template>
  <div class="field">
    <div class="field-box">
      <!-- <img class="field-box-bg" src="../assets/weel.png" /> -->
      <div class="field-box-bg">
        <img class="field-box-img" src="../assets/bg.png" />
      </div>

      <div class="field-box-tab" @click="goback">
        <div class="field-tab-text">场地列表</div>
        <img class="field-tab-img" src="../assets/back.png" />
      </div>

      <div class="home-box-con">
        <div class="fie-list-box">
          <div class="fie-list-box-list" @click="tolist">
            <div class="box-list-title">舞蹈室</div>
            <div class="box-list-time">活动时间：2021年7月16日-9月30日</div>
          </div>
          <img class="fie-list-box-img" src="../assets/to-arrow.png" />
        </div>

        <div class="fie-list-box fiex-top" >
          <div class="fie-list-box-list">
            <div class="box-list-title">书法室</div>
            <div class="box-list-time">活动时间：2021年7月16日-9月30日</div>
          </div>
          <img class="fie-list-box-img" src="../assets/to-arrow.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// nextTick
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
// import { useStore } from "vuex";
// import { qrcanvas } from "qrcanvas";
export default {
  name: "field",
  setup() {
    onMounted(() => {});

    const fromConfig = reactive({
      boxlist: [
        { name: "场地列表", color: "#F9C26F", url: require("@/assets/01.png") },
        { name: "村委动态", color: "#B9D76D", url: require("@/assets/02.png") },
        { name: "村民福利", color: "#6BCAC6", url: require("@/assets/03.png") },
        { name: "志愿活动", color: "#66C5F2", url: require("@/assets/04.png") },
        { name: "文体队伍", color: "#AA89BD", url: require("@/assets/05.png") },
        { name: "社交活动", color: "#EC8989", url: require("@/assets/06.png") },
      ],
      vedio: "",
      canvas: "",
      context: "",
      stopScan: null,
      errorMes: "",
      result: "",
    });

    const from = toRefs(fromConfig);

    const router = useRouter();
    const tolist = () => {

        router.push("/field");
 
    };

    const goback = () => {
      console.log("fabhui");
      router.go(-1);
    };


    return { ...from, tolist, goback };
  },
};
</script>

<style lang="scss">
.field {
  width: 100%;
  // height: 100vh;
  .field-box {
    position: relative;
  }

  .field-box-bg {
    z-index: 1001;
    position: fixed;
    width: 100%;
    height: 100vh;
    .field-box-img {
      width: 100%;
      height: 100vh;
    }
  }

  .field-box-tab {
    z-index: 1004;
    position: fixed;
    width: 100%;
    height: 45px;
    background: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    .field-tab-img {
      position: absolute;
      top: 15px;
      left: 15px;
      width: 15px;
      height: 15px;
    }
    .field-tab-text {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      line-height: 16px;
    }
  }

  .home-box-con::-webkit-scrollbar {
    display: none; //隐藏滚动条
  }
  .home-box-con {
    z-index: 1003;
    position: absolute;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

    .fie-list-box {
      background: #ffffff;
      margin-top: 52px;
      width: 345px;
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .fie-list-box-img {
        margin-right: 13px;
        width: 15px;
        height: 15px;
      }
      .fie-list-box-list {
        margin: 15px 0 15px 15px;
        display: flex;
        flex-direction: column;
        .box-list-title {
          display: flex;
          flex-direction: row;
          font-size: 18px;
          line-height: 18px;
          color: #333333;
        }
        .box-list-time {
          margin-top: 11px;
          display: flex;
          flex-direction: row;
          font-size: 16px;
          line-height: 16px;
          color: #333333;
        }
      }
    }
    .fiex-top{
        margin-top: 15px;
    }
  }
}
</style>
