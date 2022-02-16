<template>
  <div class="accordion-item bg-white shadow">
    <h2 class="accordion-header p-4" id="heading-1">
      <label class="form-check-label d-flex align-items-center fs-base text-heading mb-0 mt-1"
        ><span>Tarjeta de crédito</span><img class="ms-3" src="assets/img/cards.png" alt="Accepted cards" width="130"
      /></label>
    </h2>
    <div class="" id="credit-card" aria-labelledby="heading-1" data-bs-parent="#payment-methods" style="">
      <div class="accordion-body">
        <div class="row g-0">
          <div class="col-6 px-2 formTDC__inputTDC">
            <label class="form-label d-flex align-items-center" for="cc-number"
              >Número de tarjeta <small class="mx-3">(<a href="https://herramientas-online.com/generador-tarjeta-credito-cvv.php" target="_blank">Generar</a>)</small></label
            >
            <the-mask :mask="['#### #### #### ####']" v-model="tdcNumber" class="form-control bg-none" type="text" placeholder="0000 0000 0000 0000" id="tdcNumber" />
            <div class="formTDC__cardSelect">
              <img class="img-fluid" src="assets/img/icon_tdc/visa.svg" alt="" v-if="cardSelect === 'VISA'" style="height: 27px" />
              <img class="img-fluid" src="assets/img/icon_tdc/mastercard.svg" alt="" v-if="cardSelect === 'MASTERCARD'" style="height: 27px" />
              <img class="img-fluid" src="assetsimg/icon_tdc/american-express.svg" alt="" v-if="cardSelect === 'AMEX'" style="height: 27px" />
            </div>
          </div>
          <div class="col-6 px-2 mb-3">
            <label class="form-label d-flex" for="cc-number">Nombre titular</label>
            <input class="form-control bg-none" type="text" id="tdcName" v-model="tdcName" />
          </div>
          <div class="col-3 px-2">
            <label class="form-label d-flex" for="cc-expiry">Mes</label>
            <the-mask :mask="['##']" v-model="tdcMonth" class="form-control bg-none" type="text" id="tdcMonth" data-format="date" placeholder="01" />
          </div>
          <div class="col-3 px-2">
            <label class="form-label d-flex" for="cc-expiry">Año</label>
            <the-mask :mask="['##']" class="form-control bg-none" type="text" id="tdcYear" placeholder="22" v-model="tdcYear" />
          </div>
          <div class="col-3 px-2">
            <label class="form-label d-flex" for="cc-cvc">CVC</label>
            <the-mask :mask="['###']" v-model="tdcCVV" class="form-control bg-none" type="text" id="tdcCVC" placeholder="000" />
          </div>
        </div>
        <div class="row g-0">
          <div class="col-3 px-2 mt-3">
            <button class="btn btn-primary d-block w-100" @click="pay">Pagar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isValid } from 'cc-validate';

export default {
  name: 'FormTDC',
  data() {
    return {
      tdcNumber: '',
      tdcMonth: null,
      tdcYear: null,
      tdcCVV: null,
      tdcName: '',
      cardSelect: null,
      validationTDC: {
        number: false,
        name: false,
        cvv: false,
        month: false,
        year: false,
      },
    };
  },
  methods: {
    pay() {
      //   if (!this.validations()) {
      //     return;
      //   }
      this.$store.dispatch('payCart');
    },
    validations() {
      if (this.validationTDC.number === false) {
        this.handleValidationError('Número de tarjeta inválido', 'tdcNumber');
        return false;
      }
      if (this.validationTDC.name === false) {
        this.handleValidationError('Nombre inválido', 'tdcName');
        return false;
      }
      if (this.validationTDC.month === false) {
        this.handleValidationError('Mes inválido', 'tdcMonth');
        return false;
      }
      if (this.validationTDC.year === false) {
        this.handleValidationError('Año inválido', 'tdcYear');
        return false;
      }
      if (this.validationTDC.cvv === false) {
        this.handleValidationError('CVC inválido', 'tdcCVC');
        return false;
      }
      return true;
    },
    handleValidationError(msg, id) {
      this.$notify({
        group: 'app',
        type: 'error',
        title: 'Error',
        text: msg,
      });
      const element = document.getElementById(id);
      element.classList.add('input__invalid');
      element.focus();
    },
    handleClearError(id) {
      const element = document.getElementById(id);
      element.classList.remove('input__invalid');
    },
    validateTDCNumber(number) {
      const result = isValid(number);

      if (result.isValid) {
        this.validationTDC.number = true;
        if (result.cardType === 'Visa') {
          this.cardSelect = 'VISA';
        }
        if (result.cardType === 'MasterCard') {
          this.cardSelect = 'MASTERCARD';
        }
        if (result.cardType === 'American Express') {
          this.cardSelect = 'AMEX';
        }
      } else {
        this.validationTDC.number = false;
        this.cardSelect = '';
      }
    },
    validateTDCYear(number) {
      const re = /^22|23|24|25$/;
      const validation = re.test(number);
      if (validation) {
        this.validationTDC.year = true;
      } else {
        this.validationTDC.year = false;
      }
    },
    validateTDCMonth(number) {
      const re = /^01|02|03|04|05|06|07|08|09|10|11|12$/;
      const validation = re.test(number);
      if (validation) {
        this.validationTDC.month = true;
      } else {
        this.validationTDC.month = false;
      }
    },
    validateTDCCVV(number) {
      var re = /^\d{3}$/;
      const validation = re.test(number);
      if (validation) {
        this.validationTDC.cvv = true;
      } else {
        this.validationTDC.cvv = false;
      }
    },
    validateTDCName(name) {
      var re = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
      const validation = re.test(name);
      if (validation) {
        this.validationTDC.name = true;
      } else {
        this.validationTDC.name = false;
      }
    },
  },
  watch: {
    tdcNumber(newValue) {
      this.validateTDCNumber(newValue);
      this.handleClearError('tdcNumber');
    },
    tdcMonth(newValue) {
      this.validateTDCMonth(newValue);
      this.handleClearError('tdcMonth');
    },
    tdcYear(newValue) {
      this.validateTDCYear(newValue);
      this.handleClearError('tdcYear');
    },
    tdcCVV(newValue) {
      this.validateTDCCVV(newValue);
      this.handleClearError('tdcCVC');
    },
    tdcName(newValue) {
      this.validateTDCName(newValue);
      this.handleClearError('tdcName');
    },
  },
};
</script>

<style lang="sass" scoped>
.formTDC__inputTDC
    position: relative
.formTDC__cardSelect
    position: absolute
    right: 20px
    top: 38px
.input__invalid
    border: 1px solid rgb(182, 29, 29)
</style>