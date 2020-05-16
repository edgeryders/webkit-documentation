 <template>
    <div class="resizable_container">
        <div class="toggle_viewport" :class="{active: mq == 'desktop'}" @click="toggleViewport()" >
          <div class="toggle"></div>
        </div>
        <div class="component" :class="{mobile: mq == 'mobile'}" ref="container">
          <slot :viewport="mq"></slot>
        </div>
    </div>
</template>

<script>

export default {
  data() {
      return {
        desktop: true,
        mq: 'desktop'
    }
  },
  methods: {
    toggleViewport() {
      if (this.mq == 'desktop') {
        this.mq = 'mobile';
      } else {
         this.mq = 'desktop';
      }
    }
  }
};
</script>
<style lang="scss">
.resizable_container {
  position: relative;
  width: 100%;
  padding-top: 0px;
    .component {
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      transition: width .4s ease;
      margin: 0 auto;
      width: 100%;
      overflow: hidden;
      position: relative;
      &.mobile {
        width: 360px
      }
    }
  }
  .toggle_viewport {
    display: inline-block;
    position: absolute;
    top: -92px;
    right: 10px;
}


.toggle_viewport {
  border: 1px solid #efefef;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  height: 40px;
  width: 70px;
  &:hover {
    cursor: pointer;
    background: #efefef;
    .toggle {
      background-color: rgba(0,0,0,0.9) !important;
    }
  }
  .toggle {
    position: absolute;
    border-radius: 60%;
    height: 30px;
    width: 30px;
    top: 4px;
    left: 5px;
    transition: transform 0.2s linear;
    background-color: #282C34 !important;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cg data-name='Layer 2'%3E%3Cpath fill='white' stroke='white' stroke-width='1' d='M65 15H36a6 6 0 00-6 6v58a6 6 0 005 6h29a6 6 0 006-6V21a6 6 0 00-5-6zm1 64a2 2 0 01-1 2H36a2 2 0 01-2-2V21a2 2 0 011-2h29a2 2 0 012 2z'/%3E%3Cpath stroke='white' fill='white' stroke-width='1' d='M50 74a2 2 0 102 2 2 2 0 00-2-2z'/%3E%3C/g%3E%3C/svg%3E") center 80% no-repeat;
    background-size: 60%;
  }
}



.toggle_viewport.active .toggle {
  transform: translateX(95%);
  background: url("data:image/svg+xml,%3Csvg width='150px' height='130px' viewBox='0 0 150 130' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M150,12.4916412 L150,97.4952755 C150,104.374182 144.368149,110.005815 137.507875,110.005815 L95.0044097,110.005815 C95.0044097,116.639046 99.9937004,122.270679 99.9937004,124.992005 C99.9937004,127.732229 97.725841,130 95.0044097,130 L54.9955903,130 C52.2552602,130 49.9874008,127.732229 49.9874008,124.992005 C49.9874008,122.100596 54.9955903,116.790231 54.9955903,109.986917 L12.4921255,110.005815 C5.612952,110.005815 0,104.374182 0,97.4952755 L0,12.4916412 C0,5.61273441 5.612952,0 12.4921255,0 L137.507875,0 C144.368149,0 150,5.61273441 150,12.4916412 Z M140,96.7843552 L140,13.2156448 C140,11.5031712 138.828318,10 137.505451,10 L12.4945486,10 C11.1716819,10 10,11.5031712 10,13.2156448 L10,96.7843552 C10,98.4968288 11.1716819,100 12.4945486,100 L137.505451,100 C138.828318,100 140,98.4968288 140,96.7843552 Z' id='Shape' fill='%23fff'%3E%3C/path%3E%3C/g%3E%3C/svg%3E") center 52% no-repeat;
  background-size: 45%;
}
</style>