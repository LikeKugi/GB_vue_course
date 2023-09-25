<script>
import MortgageForm from "./MortgageForm.vue";

export default {
  name: "MortgageCalc",
  components: {MortgageForm},
  data() {
    return {
      interestRate: 0, // % rate
      loanTerm: 0, // Mortgage
      loanAmount: 0, // Total Sum
    };
  },
  computed: {
    monthlyPayment: function () {
      const rate = this.interestRate / 100 / 12;
      const term = this.loanTerm;
      const principal = this.loanAmount;
      const numerator = rate * Math.pow(1 + rate, term);
      const denominator = Math.pow(1 + rate, term) - 1;
      const payment = principal * (numerator / denominator);
      return payment.toFixed(2);
    },
    totalPayment: function () {
      const term = this.loanTerm;
      const payment = parseFloat(this.monthlyPayment);
      return (term * payment).toFixed(2);
    }
  },
  methods: {
    setData(total, percent, term) {
      this.loanAmount = total;
      this.loanTerm = term;
      this.interestRate = percent;
    }
  }
};
</script>

<template>
  <div>
    <p>В шаблоне компонента разместите поля ввода для суммы кредита, процентной ставки и срока кредита, а также элементы
      для отображения ежемесячного платежа и общей суммы выплаты</p>
    <MortgageForm :action="setData" />
    <div class="result">
      <p>Monthly: {{monthlyPayment}}</p>
      <p>Total: {{totalPayment}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
