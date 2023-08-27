<template>
  <div class="login-box">
    <div class="login-logo">
      <router-link :to="{}"><b>Admin</b>LTE</router-link>
    </div>
    <div class="card">
      <div class="card-body login-card-body p-1">
        <p class="login-box-msg">Sign in to start your session</p>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label>Email</label>
            <input v-model="form.email" type="email" class="form-control" name="email" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input v-model="form.password" type="password" class="form-control" name="password" />
          </div>
          <div class="row mt-3">
            <div class="col text-center">
              <button type="submit" class="btn-block btn-primary btn-roundex">Sign In</button>
            </div>
          </div>
        </form>
        <p class="mt-2 mb-0">
          <router-link :to="{ name: 'sign-up' }" class="text-center">Register a new membership</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  components: {},

  setup() {
    const store = useStore()
    const router = useRouter()
    const form = reactive({
      email: null,
      password: null,
    })
    const onSubmit = async () => {
      await store.dispatch('auth/signIn', form)
      router.push({
        name: 'home',
      })
    }
    return {
      form,
      onSubmit,
    }
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