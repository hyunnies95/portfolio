<template>
  <div class="container">
    <h1>Frontend Mentor Challenges Solutions</h1>
    <h4>by <a href="https://github.com/hyunnies95" target="_blank" rel="noopener noreferrer">hyunnies</a></h4>
    <section class="grid">
      <Card />
    </section>
    <button class="btn">Load More</button>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  components: {
    Card
  }
}
</script>

<style lang="sass" scoped>

.container
  margin: 0 auto
  padding: 7rem 2.4rem 10rem
  max-width: 50rem
  @include media('medium')
    padding: 7rem 3.2rem 10rem
    max-width: 117.4rem
    
.grid
  display: grid
  gap: 5rem 3rem
  @include media('medium')
    grid-template-columns: repeat(2, 1fr)
  @include media('large')
    grid-template-columns: repeat(3, 1fr)

.btn
  border-radius: 0.8rem
  border: 2px solid #e56d6f
  color: #e56d6f
  display: flex
  align-items: center
  justify-content: center
  font-size: 1.5rem
  font-weight: 600
  transition: $transition
  margin: 6rem auto 0
  height: 5rem
  width: 15rem
  &:hover
    color: $col-white
    background-color: #e56d6f

a
  text-decoration: underline
  transition: $transition
  &:hover
    color: #e56d6f
</style>