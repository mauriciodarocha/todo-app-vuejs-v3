<script lang="ts">
import { ref } from 'vue'
import {useTodoStore} from "../../store/TodoStore"
export default {
  setup() {
    const todoStore = useTodoStore()
    const newTodo = ref("")
    function addTodo () {
      todoStore.addTodos({status: "pending", description: newTodo.value})
      newTodo.value = ""
    }

    return {
      newTodo,
      addTodo
    }
  }
}
</script>

<template>
    <form @submit.prevent="addTodo">
        <label class="lbl-add-new">
          <span class="lbl-title">Add new:</span>
          <input v-model="newTodo" type="text" name="new" class="input-medium" />
          <div class="btn-group">
            <button>Add new</button>
          </div>
        </label>
    </form>
</template>

<style scoped>
.lbl-add-new > * {
  display: block;
  text-align: left;
}
.btn-group {
  text-align: right;
}
</style>
