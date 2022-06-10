abstract class CustomError {
  error: Error;
  errorMessage: string;
  constructor(error: Error) {
    this.error = error;
  }
  abstract createErrorMessage(): void;
  abstract logError(): void;
}

class ConnectionError extends CustomError {
  constructor(error: Error) {
    super(error);
  }
  createErrorMessage(): void {
    this.errorMessage = `Connection error: ${this.error.message}`;
  }
  logError(): void {
    console.log(this.errorMessage);
  }
}

class AlertSystem {
  public sendAlert(message: string) {
    console.log("Alert sent");
  }
}

class DBError extends CustomError {
  constructor(error: Error) {
    super(error);
  }

  createErrorMessage(): void {
    this.errorMessage = `DB error: ${this.error.message}`;
  }

  logError(): void {
    console.log(this.errorMessage);
    const alert = new AlertSystem();
    alert.sendAlert(this.errorMessage);
  }
}

const errorDecorator = (customError: CustomError) => {
  customError.createErrorMessage();
  customError.logError();
};

export default () => {
  const dbError = new DBError(new Error("DB err1"));
  errorDecorator(dbError);
};
