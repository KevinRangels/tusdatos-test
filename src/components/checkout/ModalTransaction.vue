<template>
  <b-modal v-model="modalStatusPay" size="md" centered hide-footer hide-header no-close-on-esc no-close-on-backdrop content-class="modalContent" body-class="modalBody">
    <div>
      <div class="d-flex justify-content-center">
        <img v-if="!payStatus" src="assets/img/alerts/declined.svg" width="100" alt="" class="img-fluid" />
      </div>
      <h6 v-if="!payStatus" class="text-center">Ha ocurrido un error al procesar tu pago</h6>

      <div class="d-flex justify-content-center">
        <img v-if="payStatus" src="assets/img/alerts/approved.svg" width="250" alt="" class="img-fluid" />
      </div>
      <h6 v-if="payStatus" class="text-center">Pago aprobado</h6>

      <div class="d-flex justify-content-center mt-3">
        <button class="btn btn-primary btn-sm" @click="closeModal()">Aceptar</button>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalTransaction',
  data() {
    return {};
  },
  computed: {
    modalStatusPay() {
      return this.$store.getters.modalStatusPay;
    },
    payStatus() {
      return this.$store.getters.payStatus;
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch('showModalStatusPay', false);
    },
  },
};
</script>

<style >
.modal-backdrop {
  background: rgba(0, 0, 0, 0.541) !important;
}
.modalContent {
  background: none;
  width: 100%;
  align-items: center;
  border: none;
}
.modalBody {
  background: #fafafa !important;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 8px;
  width: 366px;
}
</style>