<template>

  <header>
    <div class="menu md:pr-2">
      <span class="logo">
        <svg viewBox='0 0 500 500' version='1' xmlns='http://www.w3.org/2000/svg'><path fill='orangered' d='M0 250a250 250 0 1 1 500 0 250 250 0 0 1-500 0zm250 183V250H67a183 183 0 1 1 183 183z' fill-rule='evenodd'/></svg>
      </span>
      <div
        class="nav"
        v-if="mq == 'desktop'"
      >
        <a
          class="nav-item scrollactive-item"
          :href="'#' + item.id"
          v-for="item in data"
          :key="item.id"
          >{{ item.id }}</a
        >
      </div>
      <div class="hamburger" @click="toggleMenu" :class="{'active': toggle}" v-if="mq == 'mobile'">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="mobile_menu" :class="{'active': toggle}" v-if="mq == 'mobile'">
      <div class="mobile_menu_container">
        <div
        class="mobile_nav"
        active-class="active"
      >
        <a
          class="mobile-nav-item scrollactive-item"
          :href="'#' + item.id"
          @click="toggleMenu()"
          v-for="item in data"
          :key="item.id"
          >{{ item.id }}</a
        >
      </div>
    </div>
  </div>

  </header>
</template>

<script>

/**
 * Used as main page navigation in templates.
 */

export default {
  name: "Menu",
  props: ["data", "globalStyle", "mq"],
  data() {
    return {
      mobileMenu: false,
      toggle: false
    }
  },
  methods: {
    toggleMenu(){
     this.toggle = !this.toggle
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  background-color: #fff;
  display: flex;
  position: relative;
  top: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
  z-index: 11;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.nav {
  @apply font-display flex font-bold;
  height: 50px;
  width: 80%;
  align-items: center;
  justify-content: flex-end !important;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    display: none;
  }
}

.nav-item {
  height: 100%;
  display: inline-flex;
  cursor: pointer;
  padding: 16px 16px 14px;
  text-transform: capitalize;
  align-items: center;
  color: black !important;
  @apply font-bold;
  border-right: 1px solid rgba(0, 0, 0, 0.05) !important;
  &:last-child {
    border-right: none !important;
  }
  &.active {
    color: #fff !important;
    border-radius: 5px;
    background-color: var(--hover-border-color);
  }
  &:not(:last-child) {
    border-right: 0.5px solid rgba(255, 255, 255, 0.2);
  }
}

.logo {
  width: 60px;
  height: 60px;
  @apply border-gray-200 border-r bg-gray-100 flex justify-center items-center;
  transition: none;
  box-shadow: none;
  left: 0;
  z-index: 99;
  img {
    height: 55%;
  }
  svg {
  height: 50%;
  width: 30px;
}
  &.edgeryders {
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' version='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='orangered' d='M0 250a250 250 0 1 1 500 0 250 250 0 0 1-500 0zm250 183V250H67a183 183 0 1 1 183 183z' fill-rule='evenodd'/%3E%3C/svg%3E")
    no-repeat center #fafafa;
    background-size: 45%;
    min-width: 65px;
    padding: 0 50px 0 20px;
    border-right: 1px solid rgba(255, 255, 255, 0.28);
  }
}

.hamburger {
  width: 25px;
  height: 20px;
  position: relative;
  right: 10px;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 4.5px;
    width: 100%;
    background: #000;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    &:nth-child(1) {
      top: 0px;
    }
    &:nth-child(2) {
      top: 9px;
    }
    &:nth-child(3) {
      top: 9px;
    }
    &:nth-child(4) {
      top: 18px;
    }
  }
  &.active {
    span {
      &:nth-child(1) {
        top: 9px;
        width: 0%;
        left: 50%;
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
      &:nth-child(4) {
        top: 9px;
        width: 0%;
        left: 50%;
      }
    }
  }
}

.mobile_menu {
  @apply border-t border-gray-200 absolute;
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  z-index: 9999;
  left: 0;
  top: 60px;
  background: #fafafa;
  transform: scale(0);
  transition: transform .3s ease;
  &.active {
    transform: scale(1);
    transition: transform .45s ease;
  }
  .mobile_nav {
    display: flex;
    width: 100%;
    flex-direction: column;
    .mobile-nav-item {
      @apply p-4 px-6 border-b border-gray-200 font-bold text-lg;
      text-transform: capitalize;
    }
  }
}
</style>
