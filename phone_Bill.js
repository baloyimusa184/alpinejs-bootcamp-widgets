function calculateTotalCost() {
    const smsCost = 0.65;
    const callCost = 2.75;
    const smsCount = this.smsCount;
    const callCount = this.callCount;

    const totalCost = (smsCost * smsCount) + (callCost * callCount);
    this.totalCost = totalCost;
  }

  document.addEventListener('alpine:init', () => {
    Alpine.data('smsCount', 3);
    Alpine.data('callCount', 2);
    Alpine.data('calculateTotalCost', calculateTotalCost);
  });