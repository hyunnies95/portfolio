<template>
  <div class="card" v-for="solution in solutions" :key="solution.id">

    <a :href="solution.link" target="_blank" rel="noopener noreferrer">
      <img class="card__img" :src="require('@/' + solution.image)" alt="preview">
      <div class="card__info">
        <div class="card__tags">
          <h3 v-for="tag in solution.tags" :key="tag.id" :class="tag">
            {{ tag }}
          </h3>
        </div>
        <h2>{{ solution.name }}</h2>
      </div>
    </a>
    
  </div>
  <!-- <button class="btn">Load More</button> -->
</template>

<script>
import solutions from '@/data/solutions.json'

export default {
  data() {
    return {
      solutions: solutions.reverse(),
      // solutionsVisible: 3,
      // step: 3
    }
  },
  // computed: {
  //   visibleSolutions() {
  //     return this.solutions.slice(0, this.solutionsVisible)
  //   }
  // }
}
</script>

<style lang="sass" scoped>
.card
  background-color: $col-white
  border-radius: 0.5rem
  transition: $transition
  &:hover
    box-shadow: 0 0.5rem 1.5rem 0 #eee
    transform: translateY(-0.7rem)
  &__img
    border-radius: 0.5rem 0.5rem 0 0
    object-fit: cover
    height: 25rem
    width: 100%
  &__info
    padding: 3.2rem 3rem 3.9rem
  &__tags
    display: flex
    column-gap: 1rem
    margin-bottom: 1.3rem
</style>

