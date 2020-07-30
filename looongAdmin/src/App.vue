<template>
  <div class="layout layout-contanier">
    <Layout>
      <Header>
        <div class="layout-logo">looongAdmin</div>
        <div class="layout-nav">
          <div>
            <Input class="searchInput" v-model="searchValue" placeholder="search something..." clearable style="width: 200px" />
          </div>
          <div class="expand">
            <Icon type="md-expand" />
          </div>
          <Dropdown>
            <div class="avatar">
              <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
              <span>rlxu682</span>
            </div>
            <DropdownMenu slot="list">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem disabled>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem divided>北京烤鸭</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu :active-name="$route.name" theme="dark" width="auto" :open-names="['1']">
            <MenuItem name="home" to="/home">
            <Icon type="md-home"></Icon>
            <span>首页</span>
            </MenuItem>
            <MenuItem name="encrypt" to="/encrypt">
            <Icon type="ios-settings"></Icon>
            <span>加密</span>
            </MenuItem>
            <!-- <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Item 1
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu> -->
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{minHeight: '280px', background: '#fff', boxSizing: 'border-box', height: 'calc(100vh - 132px)'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: ''
    }
  },
  components: {

  },
  computed: {
    // activeMenu: function() {
    //   console.log(this.$route.name)
    //   return this.$route.name;
    // }
  },
  filters: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  },
  watch: {

  }
}
</script>
<style lang="scss">
.layout-contanier {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  height: 100vh;

  .ivu-layout-header {
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 0;
    width: 100%;
    border: 1px solid #eeeeee;

    .layout-nav {
      display: flex;
      float: right;
      margin-right: 40px;

      .ivu-input-wrapper {
        .ivu-input {
          border: none;

          &:focus {
            border: none;
            box-shadow: none;
          }
        }
      }

      .expand {
        font-size: 24px;
      }

      .ivu-dropdown {
        margin-left: 20px;
        .ivu-avatar {
          margin-right: 10px;
        }
      }
    }
  }

  .ivu-layout {
    height: 100%;

    .ivu-menu {
      height: 100%;
    }
  }

  .layout-logo {
    width: 150px;
    height: 50px;
    // background: url(./assets/logo.png) no-repeat center center;
    // background-size: contain;
    border-radius: 3px;
    float: left;
    position: relative;
    font-size: 36px;
    // top: 15px;
    left: 20px;
    text-shadow: 3px 5px 5px #656B79;
  }
}
</style>