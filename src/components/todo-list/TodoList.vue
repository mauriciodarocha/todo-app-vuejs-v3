<script lang="ts">
import {useTodoStore} from "../../store/TodoStore"
export default {
  setup(){
    const todoStore = useTodoStore()
    function classes(status:string){
      return `status-${status}`
    }
    function markAsDone(index: number) {
      todoStore.markAsDone(index)
    }
    return {
      todoStore,
      classes,
      markAsDone,
    }
  }
}
</script>

<template>
  <div class="todos-container">
    <div class="title">Todos:</div>
    <ul>
      <li v-for="(item, index) in todoStore.todos" v-bind:key="index" :class="classes(item.status)">
        <a @click="markAsDone(index)">{{ item.description }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todos-container li {
  cursor: pointer;
}
.todos-container .title {
  font-weight: 700;
}
.status-pending {
  color: #333;
}
.status-done {
  color: #999;
  text-decoration: line-through;
}
</style>
