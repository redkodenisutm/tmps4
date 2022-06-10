class Logger {
  log(message: string) {
    console.log(message);
  }
  error(message: string) {
    console.error(message);
  }
}

class UserService {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }
  async getAll() {
    try {
      this.logger.log("Retrieving all users...");
      return [];
    } catch (error: any) {
      this.logger.log(`An error occurred: ${error?.message}`);
      throw new Error("Something went wrong");
    }
  }
}
