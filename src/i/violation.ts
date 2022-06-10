interface IVPaymentProvider {
  validate: () => boolean;
  getPaymentCommission: () => number;
  processPayment: () => string;
  verifyPayment: () => boolean;
}

class IVCreditCardPaymentProvider implements IVPaymentProvider {
  validate() {
    console.log("Payment Card Validated");
    return true;
  }
  getPaymentCommission() {
    return 10;
  }
  processPayment() {
    console.log("Payment Processed");
    return "Payment Fingerprint";
  }
  verifyPayment() {
    return false;
  }
}

class IVWalletPaymentProvider implements IVPaymentProvider {
  validate() {
    return false;
  }
  getPaymentCommission() {
    return 5;
  }
  processPayment() {
    console.log("Payment Processed");
    return "Payment Fingerprint";
  }
  verifyPayment() {
    console.log("Payment Verified");
    return false;
  }
}
