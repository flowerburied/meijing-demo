<template>
  <div class="home">
    <div class="home-box">
      <div class="home-box-bg"></div>
      <div class="home-box-con">
        <img class="home-box-con-img" src="../assets/weel.png" />

        <div class="home-box-con-box">
          <div
            class="con-box"
            v-for="(it, index) in boxlist"
            :style="{ background: it.color }"
            :key="index"
          >
            <div class="con-box-text">{{ it.name }}</div>
            <img class="con-box-img" :src="it.url" />
          </div>
        </div>
      </div>

      <div>
        <!-- 内容部分 -->
        <video id="qr-vedio" class="v" autoplay=""></video>
        <canvas
          id="qr-canvas"
          width="800"
          height="600"
          style="width: 800px; height: 600px; display: none"
        ></canvas>
        <p v-show="result != ''">{{ result }}</p>
        <p v-show="errorMes != ''">{{ errorMes }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// nextTick
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
// import { qrcanvas } from "qrcanvas";
export default {
  name: "Home",
  mounted() {},

  setup() {
    let store = useStore();
    onMounted(() => {
      // console.log("fromConfig", store.state.test);
      store.dispatch("testFun", "payload");
      // nextTick(() => {
      //   var canvas = qrcanvas({
      //     data: "6666",
      //     size: 66,
      //   });
      //   document.getElementById("qrcode").innerHTML = "";
      //   document.getElementById("qrcode").appendChild(canvas);
      // });
    });

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
    const toabout = () => {
      router.push("/about");
    };

    return { ...from, toabout };
  },
};
</script>

<style lang="scss">
.v {
  width: 320px;
  height: 240px;
}

#qr-canvas {
  width: 800px;
  height: 800px;
}
.home {
  width: 100%;
  // height: 100vh;
  .home-box {
    position: relative;
  }
  .home-box-bg {
    position: fixed;
    width: 100%;
    height: 100vh;
    // background: #f6e58d;
  }
  .home-box-con::-webkit-scrollbar {
    display: none; //隐藏滚动条
  }
  .home-box-con {
    position: absolute;
    width: 100%;
    height: 100vh;
    // background: #badc58;
    overflow: hidden;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .home-box-con-img {
      width: 100%;
      height: 190px;
    }
    .home-box-con-box {
      // width: 100%;
      // height: 206px;
      // background: #dff9fb;
      display: flex;
      flex-wrap: wrap;
      margin: 0 0 0 4px;
      .con-box {
        margin: 15px 0 0 11px;
        width: 107px;
        height: 135px;
        // background: #f9c26f;
        display: flex;
        align-items: center;
        flex-direction: column;
        .con-box-text {
          margin-top: 16px;
          font-size: 18px;
          line-height: 18px;
          color: #ffffff;
        }
        .con-box-img {
          margin-top: 24px;
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
</style>
