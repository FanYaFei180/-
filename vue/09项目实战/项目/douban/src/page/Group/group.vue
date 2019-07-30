<template>
  <div class="group">
    <Myhead :txt="txt">
      <img src="./img/ic_actionbar_search_icon.png" slot="leftImg" class="leftImg" />
      <img src="./img/ic_chat_green.png" slot="rightImg" class="rightImg" />
    </Myhead>
    <div class="group_" v-for="(item,index) in groupList" :key='index'>
      <h2 class="tit">{{item.title}}</h2>
      <GroupIte :item_list="item.group_list"></GroupIte>
      <p class="more">更多相关小组</p>
    </div>
  </div>
</template>

<script>
import Myhead from "./../../components/head/head";
import GroupIte from "./../../components/group_ite/group_ite";
import Axios from "axios";
export default {
  data() {
    return {
      txt: "小组",
      groupList: [],
      
    };
  },
  mounted() {
    Axios.get("./../../../static/js/groupData.json")
      .then(response => {
        console.log(response);
        this.groupList = response.data.group;
        console.log(this.groupList);
        // this.item_list=this.groupList[0].group_list
        // console.log(this.groupList[0].group_list);
        console.log(this.item_list);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {},
  components: {
    Myhead,
    GroupIte
  }
};
</script>

<style scoped lang='less'>
.group_ {
  .tit {
    font-size: 0.2rem;
    padding: 0.18rem;
    padding-bottom: 0;
  }
  .more {
    text-align: center;
    font-size: 0.16rem;
    color: #42bd56;
    margin: 0.1rem 0;
  }
}
</style>
