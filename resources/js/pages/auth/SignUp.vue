<template>
  <div class="register-box">
    <div class="register-logo">
      <router-link :to="{}"><b>Admin</b>LTE</router-link>
    </div>
    <div class="card">
      <div class="card-body register-card-body p-1">
        <p class="register-box-msg">Register a new membership</p>
        <form @submit.prevent="onSubmit">
          <!-- <validation-provider rules="required" name="Name" vid="name" v-slot="{ errors }">
            <b-form-group class="mb-3" :state="!errors.length" :invalid-feedback="errors[0]">
              <b-input-group>
                <template #append>
                  <b-input-group-text>
                    <font-awesome-icon icon="user" />
                  </b-input-group-text>
                </template>
                <b-form-input v-model="form.name" placeholder="Name" :class="{ 'is-invalid': errors.length }" />
              </b-input-group>
            </b-form-group>
          </validation-provider> -->
          <div class="form-group">
            <label>Name</label>
            <input v-model="form.name" class="form-control" name="name" />
          </div>
          <!-- <validation-provider rules="required|email" name="Email" vid="email" v-slot="{ errors }">
            <b-form-group class="mb-3" :state="!errors.length" :invalid-feedback="errors[0]">
              <b-input-group>
                <template #append>
                  <b-input-group-text>
                    <font-awesome-icon icon="envelope" />
                  </b-input-group-text>
                </template>
                <b-form-input v-model="form.email" placeholder="Email" :class="{ 'is-invalid': errors.length }" autocomplete="username" />
              </b-input-group>
            </b-form-group>
          </validation-provider> -->
          <div class="form-group">
            <label>Email</label>
            <input v-model="form.email" type="email" class="form-control" name="email" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input v-model="form.password" type="password" class="form-control" name="password" />
          </div>
          <div class="form-group">
            <label>Confirm Password</label>
            <input v-model="form.password_confirmation" type="password" class="form-control" name="password_confirmation" />
          </div>
          <div class="row">
            <div class="col-8"><input v-model="iAgree" type="checkbox" /> I agree to the <router-link :to="{}">terms</router-link></div>
            <div class="col-4">
              <button type="submit" class="btn btn-block btn-primary">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
      iAgree: false,
    }
  },
  methods: {
    ...mapActions('auth', { signUp: 'signUp' }),
    async onSubmit() {
      if (!this.iAgree) {
        alert('Please agree to the Terms & Conditions!.')
        return
      }
      await this.signUp(this.form)
      this.$router.push({
        name: 'home',
      })
    },
  },
}
</script>


<style lang="scss" scoped>
.login-logo,
.register-logo {
  font-size: 2.1rem;
  font-weight: 300;
  margin-bottom: 0.9rem;
  text-align: center;

  a {
    // color: $gray-700;
  }
}

// .login-page,
// .register-page {
//   align-items: center;
//   background-color: $gray-200;
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   justify-content: center;
// }

.login-box,
.register-box {
  width: 360px;

  // @media (max-width: map-get($grid-breakpoints, sm)) {
  //   margin-top: .5rem;
  //   width: 90%;
  // }

  .card {
    margin-bottom: 0;
  }
}

.login-card-body,
.register-card-body {
  // background-color: $white;
  border-top: 0;
  color: #666;
  padding: 20px;

  .input-group {
    .form-control {
      border-right: 0;

      &:focus {
        box-shadow: none;

        ~ .input-group-prepend .input-group-text,
        ~ .input-group-append .input-group-text {
          // border-color: $input-focus-border-color;
        }
      }

      &.is-valid {
        &:focus {
          box-shadow: none;
        }

        ~ .input-group-prepend .input-group-text,
        ~ .input-group-append .input-group-text {
          // border-color: $success;
        }
      }

      &.is-invalid {
        &:focus {
          box-shadow: none;
        }

        ~ .input-group-append .input-group-text {
          // border-color: $danger;
        }
      }
    }

    .input-group-text {
      background-color: transparent;
      // border-bottom-right-radius: $border-radius;
      border-left: 0;
      // border-top-right-radius: $border-radius;
      color: #777;
      // transition: $input-transition;
    }
  }
}

.login-box-msg,
.register-box-msg {
  margin: 0;
  padding: 0 20px 20px;
  text-align: center;
}

.social-auth-links {
  margin: 10px 0;
}

// @include dark-mode() {
//   .login-card-body,
//   .register-card-body {
//     // background-color: $dark;
//     // border-color: $gray-600;
//     // color: $white;
//   }
//   .login-logo,
//   .register-logo {
//     a {
//       // color: $white;
//     }
//   }
// }
</style>