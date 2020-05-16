<template>
  <div class="view_form md:flex flex-col mx-auto items-start" :class="{'view_form-md': mq == 'desktop'}">
      <h3 class="form_title" v-if="data.title">{{ data.title }}</h3>
      <div class="form" v-if="!submitted">
        <div class="field" v-for="(field, index) in data.fields" :key="index">
          <p :class="{title_underline: field.type == 'create_account'}">{{field.title}} <span v-if="field.required && field.id !== 'create_account'" class="required">*</span></p>
          <p class="small" v-if="field.subtitle">{{field.subtitle}}</p>
          <input v-if="field.type == 'text'" type="text" v-model="form[field.id]" :placeholder="field.placeholder"/>
          <textarea v-if="field.type == 'textarea'" v-model="form[field.id]" :placeholder="field.placeholder"/>
          <div class="account_terms" v-if="field.type == 'create_account'">
            <label class="checkbox bounce">
              <input type="checkbox" v-model="form[field.id]">
              <svg viewBox="0 0 21 21">
                <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
              </svg>
            </label>
            <span class="terms pl-1">Yes, and I accept the <a href='https://communities.edgeryders.eu/tos' targer='_blank'>terms of service</a> and <a href='https://communities.edgeryders.eu/tos' targer='_blank'>privacy policy</a> <span class="required">*</span></span>
          </div>
        </div>
        <div class="border p-3 bg-gray-100 rounded-lg" v-if="errors.length > 0">
          Please <span v-if="errors[0] !== 'create_account'">enter a valid</span> <span v-for="(error, index) in errors" :key="error"><span v-if="index !== errors.length-1 && index !== 0">, </span><span v-if="index == errors.length-1 && errors.length-1 !== 0"> &amp; </span><span class="font-bold" v-if="error !== 'create_account'">{{error}}</span><span class="font-bold" v-if="error == 'create_account'">accept the terms</span></span>
        </div>
        <input class="submit" :class="{'active': !validateForm().length}" @click="sendForm()" type="submit" placeholder='send'>
      </div>
      <div v-else class="form_confirmation md:form_confirmation-md">
      
         <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>

        <div class="confirmation_message md:confirmation_message-md">
          <h3 class="text-xl font-bold border-b pb-2 mb-2">{{data.success.title}}</h3>
          <p class="text-lg">{{data.success.text}}</p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["data", "mq"],
  data() {
    return { form: {}, submitted: false, errors: [] };
  },
  created() {
 
  },
  computed: {
    
  },
  methods: {
    submitForm(){
       submit(this.transformForSubmit(this.form).then(() => window.alert('success')))
     },
     transformForSubmit(obj) {
       return Object.entries(JSON.parse(JSON.stringify(obj)))
         .reduce((result, [key, value]) => {
           result[key] = { value: (value && value.text) || value };
           return result;
         }, {});
     },
    validateForm() {
      var array = [];
      this.data.fields.forEach((field) => {
        if (field.required && this.form[field.id] == '') {
          array.push(field.id)
        }
      })
      return array;
     },
     sendForm() {
        this.errors = this.validateForm();
        if (!this.errors.length) {
          this.sendAirtable()
        }
     },
     sendAirtable() {
        var self = this;
        const data = {
          "records": [
            {
              "fields": ''
            }
          ]
        };

        data['records'][0]['fields'] = this.form;

        let axiosConfig = {
          headers: {
          'Authorization': 'Bearer keyocggSHfh6E9gSg',
          'Content-Type': 'application/json'
          }
        };

        axios.post('https://api.airtable.com/v0/' + this.data.settings.airtable.base + '/' + this.data.settings.airtable.table, data, axiosConfig)
        .then(function (response) {
          window.console.log(response);
          self.submitted = true;
        })
        .catch(function (error) {
          window.console.log(error);
        })

     }
  }
};
</script>
<style lang="scss">

$green: #00C388;
$white: #fff;

$curve: cubic-bezier(0.650, 0.000, 0.450, 1.000);

@keyframes bounce {
    50% {
        transform: scale(1.2);
    }
    75% {
        transform: scale(.9);
    }
    100% {
        transform: scale(1);
    }
}

.view_form {
  flex-basis: 100%;
  @apply pt-3;
}
.view_form p {
  margin-block-start: 0 !important;
  margin-block-end: 0 !important;
}
.view_form /deep/ h3 {
  margin-block-start: 0;
  margin-block-end: 0;
  @apply inline-block mb-4;
}
.field {
  @apply mb-1;
  input, textarea {
    @apply mt-3 mb-0 border border-gray-300;
    font-size: 14px;
    width: 100%;
  }
}


.form_title {
  @apply w-full inline-block border-b border-gray-300 pb-2;
  margin-bottom: 1rem !important;
}

.form {
  flex-grow: 0;
  max-width: 550px;
  .field {
    @apply mb-4;
  }
  span.required {
    color: red;
  }
  h4 {
    @apply font-light text-lg mb-3;
    &.title_underline {
      @apply pb-3 border-b;
    }
  }
  input, textarea {
    @apply border p-3 w-full;
    border-radius: 5px;
  }
  span.terms {
    @apply ml-2 ;
    a {
     @apply underline font-bold;
    }
  }
  .submit {
    @apply mt-4 bg-gray-100 border border-gray-300 text-sm;
    &.active {
      background: black;
      color: white;
      &:hover {
        cursor: pointer
      }
    }
  }
}

.checkbox {
    --background: #fff;
    --border: #D1D6EE;
    --border-hover: #BBC1E1;
    --border-active: #1E2235;
    --tick: #fff;
    position: relative;
    input,
    svg {
        width: 21px;
        height: 21px;
        display: block;
    }
    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        position: relative;
        outline: none;
        background: var(--background);
        border: none;
        margin: 0;
        padding: 0;
        cursor: pointer;
        border-radius: 4px;
        transition: box-shadow .3s;
        box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));
        &:hover {
            --s: 2px;
            --b: var(--border-hover);
        }
        &:checked {
            --b: var(--border-active);
        }
    }
    svg {
        pointer-events: none;
        fill: none;
        stroke-width: 2px;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: var(--stroke, var(--border-active));
        position: absolute;
        top: 0;
        left: 0;
        width: 21px;
        height: 21px;
        transform: scale(var(--scale, 1)) translateZ(0);
    }
    &.path {
        input {
            &:checked {
                --s: 2px;
                transition-delay: .4s;
                & + svg {
                    --a: 16.1 86.12;
                    --o: 102.22;
                }
            }
        }
        svg {
            stroke-dasharray: var(--a, 86.12);
            stroke-dashoffset: var(--o, 86.12);
            transition: stroke-dasharray .6s, stroke-dashoffset .6s;
        }
    }
    &.bounce {
        --stroke: var(--tick);
        input {
            &:checked {
                --s: 11px;
                & + svg {
                    animation: bounce .4s linear forwards .2s;
                }
            }
        }
        svg {
            --scale: 0;
        }
    }
}

.form_confirmation {
  @apply inline-flex w-auto inline-flex flex-col my-6 pt-4 px-4 items-start border rounded-lg w-auto bg-gray-100;
  animation: fadeUp 1s ease forwards;
  .confirmation_message {
    @apply mt-3;
    h3 {
      @apply leading-tight text-xl;
    }
    p {
      @apply leading-normal;
    }
  }
}

.form_confirmation-md {
  @apply flex-row px-6 py-2 pt-3 items-center;
}
.confirmation_message-md {
  @apply ml-4;
}

.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 5;
  stroke: $white;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px $green;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: $green;
  fill: none;
  animation: stroke .6s $curve forwards;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke .3s $curve .8s forwards;
}

.account_terms {
  @apply flex items-center mt-4 p-4 text-sm bg-gray-200 rounded-lg;
}

.view_form-md {
  @apply pt-0;
}
</style>
