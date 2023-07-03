function calculateProjectedCost() {
    const usageString = this.usageString;
    const amount = this.amount;

    const usageArray = usageString.split(",");
    let totalCost = 0;

    const costPerCall = 1.88;
    const costPerDataBundle = 12;
    const costPerSMS = 0.75;

    usageArray.forEach(item => {
      switch (item) {
        case "call":
          totalCost += costPerCall;
          break;
        case "data":
          totalCost += costPerDataBundle;
          break;
        case "sms":
          totalCost += costPerSMS;
          break;
        default:
          break;
      }
    });

    return (totalCost * amount).toFixed(2);
  }

  document.addEventListener('alpine:init', () => {
    Alpine.data('usageString', '');
    Alpine.data('amount', 0);
    Alpine.data('calculateProjectedCost', calculateProjectedCost);
  });