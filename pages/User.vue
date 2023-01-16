<template>
    <div>
        This is user
        <AddUser />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AddUser from '~/components/Users/AddUser.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { AddUser }
})
</script>
  