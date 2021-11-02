<template>
  <div class="col-12">
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="4">
          <b-card-img
            :src="require(`@/assets/${json.img}`)"
            alt="Image"
            class="rounded-0 my-auto"
          ></b-card-img>
        </b-col>
        <b-col md="4">
          <b-card-body :title="json.name">
            <b-card-text>
              {{ json.name }}
              {{ json.description }}
            </b-card-text>
            <b-row>
              <b-col md="6">
                <b-form-rating
                  v-model="json.rating"
                  disabled
                  class="star"
                ></b-form-rating>
              </b-col>
              <b-col md="6 text-end">
                <button
                  @click="toDetail(json.id)"
                  class="btnRouter"
                  variant="success"
                >
                  Seç
                </button>
              </b-col>
            </b-row>
          </b-card-body>
        </b-col>
        <b-col md="4" class="my-auto">
          <iframe
            :src="json.location"
            width="400"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
// :to="`/details/${json.id}`"
export default {
  name:"Hotel",
  props: {
    json: Object,
  },
  methods: {
    toDetail(id) {
      console.log(this.json);
      this.$router.push({
        path: `details/${id}`,
        query: { data: this.json},
      });
    },
  },
};
</script>

<style>
.card {
  margin: 1rem;
}
.star {
  border: none;
  background-color: white !important;
  color: #ffc107 !important;
}
.btnRouter {
  color: white;
  text-decoration: none;
  background-color: #31d2f2;
  padding: 10px;
  border-radius: 10px;
}
</style>