<template>
  <div class="col-md-6">
    <div class="card">
      <h3 class="card-header text-center">Rezarvasyon</h3>
      <div class="card-body">
        <form>
          <div class="form-row">
            <!-- Email -->
            <div class="form-group">
              <label>E-posta</label>
              <input
                type="email"
                class="form-control"
                v-model.trim="$v.email.$model"
                :class="{
                  'is-invalid': $v.email.$error,
                  'is-valid': !$v.email.$invalid,
                }"
              />
              <div class="valid-feedback">Your Name is valid!</div>
              <div class="invalid-feedback">
                <span v-if="!$v.email.required">Email is required.</span>
              </div>
            </div>

            <!-- Name -->
            <div class="form-group">
              <label>Ad Soyad</label>
              <input
                type="text"
                class="form-control"
                v-model.trim="$v.name.$model"
                :class="{
                  'is-invalid': $v.name.$error,
                  'is-valid': !$v.name.$invalid,
                }"
              />
              <div class="valid-feedback">Your Name is valid!</div>
              <div class="invalid-feedback">
                <span v-if="!$v.name.required">Name is required.</span>
                <span v-if="!$v.name.minLength"
                  >First name must have at least
                  {{ $v.name.$params.minLength.min }} letters.</span
                >
                <span v-if="!$v.name.maxLength"
                  >First name must have at most
                  {{ $v.name.$params.maxLength.max }} letters.</span
                >
              </div>
            </div>

            <!-- Yaş -->
            <div class="form-group">
              <label>Yaş</label>
              <input
                type="number"
                class="form-control"
                v-model.number.lazy="$v.age.$model"
                :class="{
                  'is-invalid': $v.age.$error,
                  'is-valid': !$v.age.$invalid,
                }"
              />
              <div class="valid-feedback">Your age is valid!</div>
              <div class="invalid-feedback">
                <span v-if="!$v.age.between">
                  Must be between {{ $v.age.$params.between.min }} and
                  {{ $v.age.$params.between.max }}
                </span>
              </div>
            </div>

            <!-- Telefon -->
            <div class="form-group">
              <label>Telefon</label>
              <input
                type="number"
                class="form-control"
                v-model.number.lazy="$v.number.$model"
                :class="{
                  'is-invalid': $v.number.$error,
                  'is-valid': !$v.number.$invalid,
                }"
              />
              <div class="valid-feedback">Your number is valid!</div>
              <div class="invalid-feedback">
                <span v-if="!$v.number.required">number is required.</span>
                <span v-if="!$v.number.minLength"
                  >First number must have at least
                  {{ $v.number.$params.minLength.min }} letters.</span
                >
              </div>
            </div>

            <!-- Tc  -->
            <div class="form-group">
              <label>T.C. Kimlik No</label>
              <input
                type="number"
                class="form-control"
                v-model.number.lazy="$v.tc.$model"
                :class="{
                  'is-invalid': $v.tc.$error,
                  'is-valid': !$v.tc.$invalid,
                }"
              />
              <div class="valid-feedback">Your tc is valid!</div>
              <div class="invalid-feedback">
                <span v-if="!$v.tc.required">tc is required.</span>
                <span v-if="!$v.tc.minLength"
                  >First tc must have at least
                  {{ $v.tc.$params.minLength.min }} letters.</span
                >
              </div>
            </div>

            <!-- Hes kodu  -->
            <div class="form-group">
              <label>Hes Kodu</label>
              <input
                type="number"
                class="form-control"
                v-model.number.lazy="$v.hes.$model"
                :class="{
                  'is-invalid': $v.hes.$error,
                  'is-valid': !$v.hes.$invalid,
                }"
              />
              <div class="valid-feedback">Your hes is valid!</div>
              <div class="invalid-feedback">
                <span v-if="!$v.hes.required">hes is required.</span>
                <span v-if="!$v.hes.minLength"
                  >First hes must have at least
                  {{ $v.hes.$params.minLength.min }} letters.</span
                >
              </div>
            </div>

            <!-- Cinsiyet  -->
            <div class="form-group">
              <label>Cinsiyet</label>
              <input
                type="text"
                class="form-control"
                v-model.trim="$v.sex.$model"
                :class="{
                  'is-invalid': $v.sex.$error,
                  'is-valid': !$v.sex.$invalid,
                }"
              />
              <div class="valid-feedback">Your sex is valid!</div>
              <div class="invalid-feedback">
                <span v-if="!$v.sex.minLength"
                  >First sex must have at least
                  {{ $v.sex.$params.minLength.min }} letters.</span
                >
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  between,
  email,
  numeric,
} from "vuelidate/lib/validators";

export default {
  name: "Form",
  data() {
    return {
      name: "",
      age: 0,
      email: "",
      number: 0,
      tc: 0,
      hes: 0,
      sex: "",
    };
  },

  validations: {
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10),
    },
    age: {
      minLength: minLength(1),
      between: between(6, 255),
    },
    email: {
      required,
      email,
    },
    number: {
      required,
      numeric,
      minLength: minLength(11),
    },
    hes: {
      required,
      minLength: minLength(10),
    },
    tc: {
      required,
      minLength: minLength(11),
      numeric,
    },
    sex: {
      required,
      minLength: minLength(3),
    },
  },
};
</script>

<style scoped>
.form {
  padding: 1rem;
  margin-top: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
}
</style>