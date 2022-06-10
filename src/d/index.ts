export interface ILogger {
  log(message: string): void;
  error(message: string): void;
}

class Logger implements ILogger {
  log(message: string) {
    console.log(message);
  }
  error(message: string) {
    console.error(message);
  }
}

class UserService {
  private logger: ILogger;
  constructor(logger: ILogger) {
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

export default () => {
  const userService = new UserService(new Logger());
  userService.getAll();
};
