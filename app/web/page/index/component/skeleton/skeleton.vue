<template>
  <div class="skeleton-loading-layer" :class="{'skeleton-hide': skeletonHide }">
    <div class="navbar"></div>
    <div class="intro-header">
      <div class="contanier">
        <div class="row">
          <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
            <div class="site-heading">
              <div height="80px" width="100%"></div>
              <h1>博客</h1>
              <hr class="large">
              <span class="subheading">IBlog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block block--loading" v-for="item in lists" :key="item.id"></div>
  </div>
</template>

<style>
:root {
  --gray-light: #ececed;
  --gray-accent: #e9e9ea;
}

.block {
  display: block;
  margin: 1rem;
}

.block--loading::before,
.block--loading::after {
  content: "";
  display: block;
  background-image: linear-gradient(
    110deg,
    var(--gray-light) 73%,
    var(--gray-accent) 75%,
    var(--gray-light) 77%,
    var(--gray-light) 78%,
    var(--gray-accent) 84%,
    var(--gray-accent) 88%,
    var(--gray-light) 94%,
    var(--gray-light) 100%
  );
  background-size: 200% 100%;
  background-position: 0 center;
  border-radius: inherit;
  animation: 2s ease-in-out loading infinite;
}

/* Image placeholder. */
.block--loading::before {
  width: 100%;
  height: 200px;
}

/* Text placeholder. */
.block--loading::after {
  animation-delay: 50ms;
  width: 92%;
  height: 1rem;
  margin-top: 0.75rem;
}

.block__image {
  border-radius: inherit;
  max-width: 100%;
}

.block__content {
  margin: 0.5rem 0 0;
  line-height: 1;
}

@keyframes loading {
  0% {
    background-position-x: 0;
  }
  40%,
  100% {
    background-position-x: -200%;
  }
}
.skeleton-loading-layer {
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
}

.skeleton-loading-layer .navbar {
  background: #fff;
}

.skeleton-loading-layer .intro-header {
  background: transparent;
  background-image: linear-gradient(
    110deg,
    var(--gray-light) 73%,
    var(--gray-accent) 75%,
    var(--gray-light) 77%,
    var(--gray-light) 78%,
    var(--gray-accent) 84%,
    var(--gray-accent) 88%,
    var(--gray-light) 94%,
    var(--gray-light) 100%
  );
  background-size: 200% 100%;
  background-position: 0 center;
  border-radius: inherit;
  animation: 2s ease-in-out loading infinite;
}
.skeleton-hide {
  display: none;
}
</style>
<script type="babel">
export default {
  props: ["lists"],
  data() {
    return {
      skeletonHide: false
    };
  },
  mounted() {
    this.skeletonHide = true;
  }
};
</script>