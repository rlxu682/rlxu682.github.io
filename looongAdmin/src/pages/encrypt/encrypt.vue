<template>
  <div class="encrypt-container">
    <div>
      <Card>
        <p slot="title">加密/解密</p>
        <div style="text-align:center">
          <Row type="flex" justify="center" class="code-row-bg">
            <Col span="10" style="minWidth: 280px;">
            <div style="width: 100%;">
              <i-input v-model="value1" type="textarea" :rows="4" placeholder="请输入需要加密/解密的字符串" />
            </div>
            </Col>
            <Col span="4">
            <div class="right-icon">
              <i-button type="primary" shape="circle" @click="toCode">
                加密
                <Icon type="ios-arrow-forward"></Icon>
              </i-button>
              <br>
              <i-button type="primary" shape="circle" @click="getCode">
                解密
                <Icon type="ios-arrow-forward"></Icon>
              </i-button>
            </div>
            </Col>
            <Col span="10" style="minWidth: 280px;">
            <div style="width: 100%;">
              <i-input v-model="value2" readonly type="textarea" :rows="4" placeholder="结果" />
            </div>
            </Col>
          </Row>
        </div>
        <Divider orientation="left">详情</Divider>
        <v-md-preview :text="text"></v-md-preview>
      </Card>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import {encrypt, decrypt} from '../../assets/utils/encrypt.js';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
VMdPreview.use(createLineNumbertPlugin());
VMdPreview.use(githubTheme);
Vue.use(VMdPreview);
const mdText = `\`\`\` bash
采用 crypto-js 进行加密/解密

const secretKey = 自定义;
/**
 * 加密
 */
export const encrypt = (str) => {
  let key = CryptoJS.enc.Utf8.parse(secretKey);
  let srcs = CryptoJS.enc.Utf8.parse(str);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

/**
 * 解密
 */
export const decrypt = (str) => {
  let key = CryptoJS.enc.Utf8.parse(secretKey);
  let decrypt = CryptoJS.AES.decrypt(str, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}
\`\`\`
` 
export default {
  data() {
    return {
      value1: '',
      value2: '',
      split1: 0.5,
      split2: 0.5,
      buttonSize: 'large',
      text: mdText
    }
  },
  components: {
    
  },
  created() {

  },
  mounted() {

  },
  methods: {
    toCode() {
      this.value2 = encrypt(this.value1);  
    },
    getCode() {
      this.value2 = decrypt(this.value1);     
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