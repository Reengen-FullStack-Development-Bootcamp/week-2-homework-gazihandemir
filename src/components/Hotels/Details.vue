<template>
  <div>
    <b-card
      :img-src="require(`@/assets/${json.img}`)"
      img-alt="Card image"
      img-right
      img-width="300px"
    >
      <b-row>
        <b-col cols="6">
          {{ json.description }}
        </b-col>
        <b-col cols="6">
          <h4>{{ json.name }}</h4>
          <b-row>
            <b-col cols="6">
              <b>{{ json.price }} $ </b></b-col
            >
            <b-col cols="6">
              <b-form-rating
                v-model="json.rating"
                disabled
                class="star"
              ></b-form-rating
            ></b-col>
          </b-row>
          <b-row>
            <b-col cols="12" class="mt-5">
              <input
                type="number"
                min="1"
                @change="changeNumberOfPeople(numberOfPeople)"
                v-model="numberOfPeople"
                class="form-control"
              />
            </b-col>
            <b-col cols="12" class="mt-3 text-center">
              <b-button
                variant="info"
                @click="toReservation(numberOfPeople)"
                class="btnRouter mt-1"
              >
                Rezervasyon Yap
              </b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-card-text> </b-card-text>
    </b-card>
   
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      json: [],
      numberOfPeople: 1,
      totalPrice: 0,
    };
  },
  methods: {
    toReservation(numberOfPeople) {
      this.$router.push({
        path: `/details/${this.json.id}/reservation`,
        query: { data: numberOfPeople },
      });
    },
    changeNumberOfPeople(numberOfPeople) {
      this.totalPrice = this.json.price * numberOfPeople;
    },
  },
  created() {
    this.json = this.$route.query.data;
  },
};
</script>

<style>
</style>