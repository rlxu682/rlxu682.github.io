<template>
  <div class="encrypt-container">
    <div>
      <Card>
        <p slot="title">加密/解密</p>
        <div style="text-align:center">
          <Row type="flex" justify="center" class="code-row-bg">
            <Col span="11">
            <div style="width: 100%;">
              <i-input v-model="value1" type="textarea" :rows="4" placeholder="请输入需要加密/解密的字符串" />
            </div>
            </Col>
            <Col span="2">
            <div class="right-icon">
              <i-button type="primary" shape="circle" @click="toCode">
                加密
                <Icon type="ios-arrow-forward"></Icon>
              </i-button>
              <i-button type="primary" shape="circle" @click="getCode">
                解密
                <Icon type="ios-arrow-forward"></Icon>
              </i-button>
            </div>
            </Col>
            <Col span="11">
            <div style="width: 100%;">
              <i-input v-model="value2" disabled type="textarea" :rows="4" placeholder="结果" />
            </div>
            </Col>
          </Row>
        </div>
        <Divider orientation="left">处理 funtion</Divider>
        <v-md-preview :text="text"></v-md-preview>
      </Card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      split1: 0.5,
      split2: 0.5,
      buttonSize: 'large',
      text: ''
    }
  },
  components: {

  },
  created() {
    this.text = `\`\`\` bash
//定义密钥，36个字母和数字
let key = "ABCDEFGHIJKLM0123456789NOPQRSTUVWXYZ";
let l = key.length;
let toCode = function (str) {  //加密字符串
  let a = key.split("");  //把密钥字符串转换为字符数组
  let s = "", b, b1, b2, b3;  //定义临时变量
  for (let i = 0; i <str.length; i ++) {  //遍历字符串
    b = str.charCodeAt(i);  //逐个提取每个字符，并获取Unicode编码值
    b1 = b % l;  //求Unicode编码值得余数
    b = (b - b1) / l;  //求最大倍数
    b2 = b % l;  //求最大倍数的于是
    b = (b - b2) / l;  //求最大倍数
    b3 = b % l;  //求最大倍数的余数
    s += a[b3] + a[b2] + a[b1];  //根据余数值映射到密钥中对应下标位置的字符
  }
  return s;  //返回这些映射的字符
}

let getCode = function (str) {  //加密字符串
  let b, b1, b2, b3, d = 0, s; //定义临时变量
  s = new Array(Math.floor(str.length / 3)); //计算加密字符串包含的字符数，并定义数组
  b = s.length; //获取数组的长度
  for (let i = 0; i < b; i++) { //以数组的长度循环次数，遍历加密字符串
    b1 = key.indexOf(str.charAt(d)); //截取周期内第一个字符串，计算在密钥中的下标值
    d++;
    b2 = key.indexOf(str.charAt(d)); //截取周期内第二个字符串，计算在密钥中的下标值
    d++;
    b3 = key.indexOf(str.charAt(d)); //截取周期内第三个字符串，计算在密钥中的下标值
    d++;
    s[i] = b1 * l * l + b2 * l + b3 //利用下标值，反推被加密字符的Unicode编码值
  }
  b = eval("String.fromCharCode(" + s.join(',') + ")"); // 用fromCharCode()算出字符串
  return b; //返回被解密的字符串
}
\`\`\`
`
  },
  mounted() {

  },
  methods: {
    toCode() {
      let str = this.value1;
      //定义密钥，36个字母和数字
      let key = "ABCDEFGHIJKLM0123456789NOPQRSTUVWXYZ";
      let l = key.length;
      let a = key.split("");
      let s = "", b, b1, b2, b3;
      for (let i = 0; i < str.length; i++) { 
        b = str.charCodeAt(i); //逐个提取每个字符，并获取Unicode编码值
        b1 = b % l; //求Unicode编码值得余数
        b = (b - b1) / l; //求最大倍数
        b2 = b % l; //求最大倍数的余数
        b = (b - b2) / l; //求最大倍数
        b3 = b % l; //求最大倍数的余数
        s += a[b3] + a[b2] + a[b1]; //根据余数值映射到密钥中对应下标位置的字符
      }
      this.value2 = s;
      return s;
    },
    getCode() {
      let str = this.value1;
      let key = "ABCDEFGHIJKLM0123456789NOPQRSTUVWXYZ";
      let l = key.length; //获取密钥的长度
      let b, b1, b2, b3, d = 0, s; //定义临时变量
      s = new Array(Math.floor(str.length / 3)); //计算加密字符串包含的字符数，并定义数组
      b = s.length; //获取数组的长度
      for (let i = 0; i < b; i++) { //以数组的长度循环次数，遍历加密字符串
        b1 = key.indexOf(str.charAt(d)); //截取周期内第一个字符串，计算在密钥中的下标值
        d++;
        b2 = key.indexOf(str.charAt(d)); //截取周期内第二个字符串，计算在密钥中的下标值
        d++;
        b3 = key.indexOf(str.charAt(d)); //截取周期内第三个字符串，计算在密钥中的下标值
        d++;
        s[i] = b1 * l * l + b2 * l + b3 //利用下标值，反推被加密字符的Unicode编码值
      }
      b = eval("String.fromCharCode(" + s.join(',') + ")"); // 用fromCharCode()算出字符串
      this.value2 = b;
      return b;
    }
  },
}
</script>
<style lang="scss" scoped>
.encrypt-container {
  .right-icon {
    font-size: 36px;
    color: #515a6e;

    & .ivu-icon-ios-arrow-dropright:hover {
      color: #2d8cf0;
      cursor: pointer;
    }
  }

  .ivu-row-flex {
    align-items: center;
  }
}
</style>