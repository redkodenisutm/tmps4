interface PaymentProvider {
  getPaymentCommission: () => number;
  processPayment: () => string;
}

interface PaymentValidator {
  validate: () => boolean;
}

interface PaymentVerifier {
  verifyPayment: () => boolean;
}

class CreditCardPaymentProvider implements PaymentProvider, PaymentValidator {
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
}

class WalletPaymentProvider implements PaymentProvider, PaymentVerifier {
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

export default () => {};
