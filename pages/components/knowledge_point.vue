<template>
    <div>
        <span>弱</span>
        <label for="knowledge_point_1">
            <input type="radio"
                   name="knowledge_point"
                   id="knowledge_point_1"
                   v-model="knowledge_point"
                   value="1">
            1</label>
        <label for="knowledge_point_2">
            <input type="radio"
                   name="knowledge_point"
                   id="knowledge_point_2"
                   v-model="knowledge_point"
                   value="2">
            2</label>
        <label for="knowledge_point_3">
            <input type="radio"
                   name="knowledge_point"
                   id="knowledge_point_3"
                   v-model="knowledge_point"
                   value="3">
            3</label>
        <label for="knowledge_point_4">
            <input type="radio"
                   name="knowledge_point"
                   id="knowledge_point_4"
                   v-model="knowledge_point"
                   value="4">
            4</label>
        <label for="knowledge_point_5">
            <input type="radio"
                   name="knowledge_point"
                   id="knowledge_point_5"
                   v-model="knowledge_point"
                   value="5">
            5</label>
        <span>强</span>
    </div>
</template>

<script>
    export default {
        name: 'knowledge_point',
        knowledge_point: '1'
    }
</script>

<style scoped>

</style>