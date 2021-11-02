<template>
  <b-row>
    <Form
      v-for="(data, i) in numberOfPeople * 1"
      :numberOfPeople="data"
      :key="i"
    />
    <b-col cols="12" class="text-center">
      <b-button variant="info" class="my-3 w-25" v-b-modal="'my-modal'"
        >Ödeme Yap</b-button
      >
    </b-col>
    <b-modal id="my-modal" title="Ödeme Yap :D">
      <b-row>
        <b-col cols="12">
          <!-- isim -->
          <div class="form-group">
            <label>İsim</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="$v.cardName.$model"
              :class="{
                'is-invalid': $v.cardName.$error,
                'is-valid': !$v.cardName.$invalid,
              }"
            />
            <div class="valid-feedback">Your Card Name is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.cardName.required">Card Name is required.</span>
              <span v-if="!$v.cardName.minLength"
                >First Card Name must have at least
                {{ $v.cardName.$params.minLength.min }} letters.</span
              >
              <span v-if="!$v.cardName.maxLength"
                >First Card Name must have at most
                {{ $v.cardName.$params.maxLength.max }} letters.</span
              >
            </div>
          </div>
        </b-col>
        <b-col cols="12">
          <!-- Kart Numarası -->
          <div class="form-group">
            <label>Kart Numarası</label>
            <input
              type="number"
              class="form-control"
              v-model.number.lazy="$v.cardNumber.$model"
              :class="{
                'is-invalid': $v.cardNumber.$error,
                'is-valid': !$v.cardNumber.$invalid,
              }"
            />
            <div class="valid-feedback">Your Card Number is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.cardNumber.required"
                >Card Number is required.</span
              >
              <span v-if="!$v.cardNumber.minLength"
                >First Card Number must have at least
                {{ $v.cardNumber.$params.minLength.min }} letters.</span
              >
            </div>
          </div>
        </b-col>
        <b-col cols="6">
          <!-- Tarih -->
          <div class="form-group">
            <label>Tarih</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="$v.expiryDate.$model"
              :class="{
                'is-invalid': $v.expiryDate.$error,
                'is-valid': !$v.expiryDate.$invalid,
              }"
            />
            <div class="valid-feedback">Your Expiry Date is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.expiryDate.required"
                >Expiry Date is required.</span
              >
              <span v-if="!$v.expiryDate.maxLength"
                >First Expiry Date must have at most
                {{ $v.expiryDate.$params.maxLength.max }} letters.</span
              >
            </div>
          </div>
        </b-col>
        <b-col cols="6">
          <!-- Cvv -->
          <div class="form-group">
            <label>Cvv</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="$v.cvv.$model"
              :class="{
                'is-invalid': $v.cvv.$error,
                'is-valid': !$v.cvv.$invalid,
              }"
            />
            <div class="valid-feedback">Your Cvv is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.cvv.required">Cvv is required.</span>
              <span v-if="!$v.cvv.maxLength"
                >First Cvv must have at most
                {{ $v.cvv.$params.maxLength.max }} letters.</span
              >
            </div>
          </div>
        </b-col>
      </b-row>
    </b-modal>
  </b-row>
</template>

<script>
import Form from "./Form.vue";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  name: "Reservation",
  components: {
    Form,
  },
  data() {
    return {
      numberOfPeople: 0,
      cardName: "",
      cardNumber: 0,
      expiryDate: 0,
      cvv: 0,
    };
  },
  created() {
    this.numberOfPeople = this.$route.query.data;
    console.log(this.numberOfPeople);
  },
  validations: {
    cardName: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(40),
    },
    cardNumber: {
      required,
      minLength: minLength(18),
    },
    expiryDate: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(7),
    },
    cvv: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(3),
    },
  },
};
</script>

<style>
</style>