<template>
  <div class="mainHeader">
    <div class="left">
      <div class="date">
        <span>{{ headerday }}</span><span>{{ headertime }}</span><br/><span>{{ headerdate }}</span>  
      </div>
      <div class="left-menu">
        <el-menu 
          :default-active="activePath" 
          :ellipsis="false"
          :router="true"
          class="el-menu-demo" 
          mode="horizontal" 
          @select="handleSelect"
          background-color="transparent"
          text-color="#30FCFE"
          active-text-color="#30FCFE"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-sub-menu index="2" popper-class="custom-menu-style">
            <template #title>标题2</template>
            <el-menu-item index="/data">标题2-1</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3" popper-class="custom-menu-style">
            <template #title>标题3</template>
            <el-menu-item index="3-1">标题3-1</el-menu-item>
            <el-menu-item index="3-2">标题3-2</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </div>
    <div class="center">Title</div>
    <div class="right">
      <div class="right-menu">
        <el-menu 
          :default-active="activePath" 
          :ellipsis="false"
          :router="true"
          class="el-menu-demo" 
          mode="horizontal" 
          @select="handleSelect"
          background-color="transparent"
          text-color="#30FCFE"
          active-text-color="#30FCFE"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-sub-menu index="2" popper-class="custom-menu-style">
            <template #title>标题2</template>
            <el-menu-item index="/data">标题2-1</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3" popper-class="custom-menu-style">
            <template #title>标题3</template>
            <el-menu-item index="3-1">标题3-1</el-menu-item>
            <el-menu-item index="3-2">标题3-2</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {ref,onMounted,getCurrentInstance} from 'vue';

  const {proxy} = getCurrentInstance();

  const headertime = proxy.$utils.dateFormat('HH:mm:ss',new Date())
  const headerday = proxy.$utils.dateFormat('w',new Date())
  const headerdate = proxy.$utils.dateFormat('yyyy年MM月dd日',new Date())

  const handleSelect = ()=>{

  }

  const activePath = ref('/');

  onMounted(()=>{
    console.log(proxy)
  })
</script>

<style lang="scss" scoped>
.mainHeader{
  width: 100%;
  height: 86px;
  padding: 0 20px;
  box-sizing: border-box;
  background: url('/assets/images/header_bg2.png') no-repeat center center;
  background-size: 100% 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
  .el-menu-demo{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    position: relative;
  }
  .left{
    display: flex;
    flex:1;
    align-items: center;
    justify-content: space-between;
    margin-top: -20px;
    .date{
      font-size: 14px;
      font-family: Alibaba PuHuiTi;
      font-weight: 400;
      color: #CBF5F0;
      span{
        margin-right: 10px;
      }
    }
    .left-menu{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: calc(100% - 130px);
      >li{
        margin-right: -5px;
      }
    }
  }
  .center{
    width: 800px;
    text-align: center;
    font-size: 38px;
    font-family: DFPLiJinHeiW8-GB;
    font-weight: 400;
    color: #FFFFFF;
    background: linear-gradient(0deg, rgba(38,160,121,0.83) 0.5126953125%, rgba(232,254,255,0.83) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .right{
    display: flex;
    flex:1;
    align-items: center;
    justify-content: space-between;
    margin-top: -20px;
    .right-menu{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 5px;
      >li{
        margin-right: -5px;
      }
    }
    .menu{
      display: flex;
      align-items: center;
      font-family: Adobe Heiti Std;
      margin-left: 10px;
      margin-top: -3px;
      .menu-item{
        width: 120px;
        text-align: center;
        padding: 10px;
        font-size: 16px;
        color: #30FCFE;
        font-family: Adobe Heiti Std;
        cursor: pointer;
        background: url('/assets/images/top_menu_right_default_bg.png') no-repeat center center;
        background-size: 180px 44px;
        &:not(:first-child){
          margin-left: -15px;
        }
        &.active{
          background: url('/assets/images/top_menu_right_active_bg.png') no-repeat center center;
          background-size: 180px 44px;
        }
      }
    }
    .theme{
      width: 100%;
      text-align: right;
    }

  }
}
.el-dropdown-link {
  cursor: pointer;
  font-family: Alibaba PuHuiTi;
  color: #2CB0AC;
  font-size: 14px;
}
.el-icon-arrow-down {
  font-size: 12px;
}

::v-deep .el-menu.el-menu--horizontal{
  border-bottom: none;
  background: transparent;
  font-family: Adobe Heiti Std;
  font-size: 16px;
}
::v-deep .el-menu--horizontal .el-menu-item{
  min-width: 140px;
  text-align: center;
}
::v-deep .el-menu--horizontal .el-menu-item:hover{
  background-color: transparent!important;
}
::v-deep .el-menu--horizontal .el-menu-item.is-active{
  border-bottom: none;
}
::v-deep .el-menu--horizontal .el-submenu{
  min-width: 140px;
  text-align: center;
}
::v-deep .el-menu--horizontal .el-submenu.is-active .el-submenu__title{
  border-bottom: none;
  &:hover{
    background-color: transparent!important;
  }
}
::v-deep .el-menu--horizontal .el-submenu .el-submenu__title{
  &:hover{
    background-color: transparent!important;
  }
  i.el-submenu__icon-arrow{
    color: #30FCFE;
    display: none;
  }
}
::v-deep .left1 .el-menu-demo .el-menu-item{
  background: url('/assets/images/top_menu_left_default_bg.png') no-repeat center center;
  background-size: 180px 44px;
  border-bottom: none;
}
::v-deep .left1 .el-menu-demo .el-menu-item.is-active{
  background: url('/assets/images/top_menu_left_active_bg.png') no-repeat center center;
  background-size: 180px 44px;
}

::v-deep .left1 .el-menu-demo .el-submenu .el-submenu__title{
  background: url('/assets/images/top_menu_left_default_bg.png') no-repeat center center;
  background-size: 180px 44px;
  border-bottom: none;
}
::v-deep .left1 .el-menu-demo .el-submenu.is-active .el-submenu__title{
  background: url('/assets/images/top_menu_left_active_bg.png') no-repeat center center;
  background-size: 180px 44px;
}
::v-deep .right1 .el-menu-demo .el-submenu .el-submenu__title{
  background: url('/assets/images/top_menu_right_default_bg.png') no-repeat center center;
  background-size: 180px 44px;
  border-bottom: none;
}
::v-deep .right1 .el-menu-demo .el-submenu.is-active .el-submenu__title{
  background: url('/assets/images/top_menu_right_active_bg.png') no-repeat center center;
  background-size: 180px 44px;
}
</style>
<style lang="scss">
.custom-menu-style{
  background: rgba(8, 59, 61, 1);
  .el-submenu .el-menu{
    background: rgba(8, 59, 61, 1)!important;
    // 设置三级菜单的最小宽度
    min-width: 120px;
    .el-menu-item{
      min-width: 120px;
    }
  }
  .el-menu--popup{
    min-width: 140px;
    border: 1px solid #455e5f;
  }
  .el-submenu .el-menu-item{ 
    min-width: 140px;
    white-space: break-spaces;
    height: auto!important;
  }
  .el-menu .el-menu-item.is-active{
    color: aquamarine!important;
    background: rgb(31, 104, 97)!important;
  }
  .el-menu .el-menu-item:hover{
    background: rgb(36, 77, 72)!important;
  }
  .el-menu .el-menu-item.is-active:hover{
    background: rgb(31, 104, 97)!important;
  }
  .el-submenu .el-submenu__title{
    &:hover{
      background-color: transparent!important;
    }
    i.el-submenu__icon-arrow{
      color: #30FCFE;
    }
  }
  .el-menu .el-submenu.is-active .el-submenu__title{
    color: aquamarine!important;
  }
}
</style>

