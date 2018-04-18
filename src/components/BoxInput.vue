<template>
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <input class="form-control" type="text" placeholder='请输入搜索的内容' v-model='textInput' @keyup='search($event)'
             @keydown.down='change()' @keydown.up.provent='up()'>
      <ul class="list-group">
        <li class="list-group-item" v-for='(v, k) in redHtml' :class='{bg: k == index}' v-html="v" @click='enter(k)' @mouseenter='mouseEnter(k)' @mouseleave='mouseLeave(k)'>{{v}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BoxInput',
    data() {
      return {
        textInput: '',
        textOutput: [],
        index: -1,     //索引 实现上下选择
        showRed: false
      }

    },
    computed: {
      // 计算属性的 getter
      redHtml: function () {
        // `this` 指向 vm 实例
        let this_ = this
        return this.textOutput.map(function (str) {
          let reger = new RegExp("(" + this_.textInput + ")", "gi")
          return str.replace(reger, "<span style=\"color: red\">" + this_.textInput + "</span>")
        })
      }
    },
    watch: {
      textInput: function () {
        //跨域调用百度搜索接口
        this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', {
          params: {wd: this.textInput},
          jsonp: 'cb'
        })
          .then(function (res) {
            this.textOutput = res.data.s
          }, function (res) {
            alert('failed');
          });
      }
    },
    methods: {
      search: function (e) {

        // 当按上下键时返回
        if (e.keyCode == 38 || e.keyCode == 40) return

        // 按回车时搜索
        if (e.keyCode == 13) {
          // 新的页面打开
          this.info = this.textInput
          window.open('https://www.baidu.com/s?wd=' + this.info)
          this.info = ''
        }
      },
      //按下键往下选择
      change: function () {
        this.index++
        this.info = this.textOutput[this.index]  //输入框显示选择的内容
        if (this.index == this.textOutput.length) this.index = 0  //当选到最后一个时索引变为0

      },
      // 按上键往上选择
      up: function () {
        this.index--
        this.info = this.textOutput[this.index]
        if (this.index == -1) this.index = this.textOutput.length - 1
      },
      // 鼠标点击事件
      enter: function (k) {
        this.index = k
        this.info = this.textOutput[k]
        window.open('https://www.baidu.com/s?wd=' + this.info)
        this.info = ''
      },
      // 鼠标进入事件
      mouseEnter: function (k) {
        this.index = k
      },
      // 鼠标离开事件
      mouseLeave: function (k) {
        this.index = k
      }

    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg {
    background-color: rgba(63, 255, 40, 0.5)
  }
  li:hover {
    cursor:pointer;
  }
</style>
