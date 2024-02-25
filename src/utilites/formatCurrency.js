const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "BAM",
});

function formatCurrency(number) {
  return CURRENCY_FORMATER.format(number);
}

export default formatCurrency;
