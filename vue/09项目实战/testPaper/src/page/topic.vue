<template>
  <div class="topic">
      <p>{{topicList.topic_name}}</p>
      <ul class="topic_list">
           <li v-for="(item,index) in topicList" :key="index">
               <div>{{item.option}}</div>
               <span>{{item.answer_name}}</span>
           </li>
       </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props:['topicList'],
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>

</style>
