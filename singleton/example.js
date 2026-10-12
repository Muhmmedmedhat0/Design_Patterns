let instaance;

// using class
class DBConnection {
  constructor(uri) {
    if (instaance) {
      throw new Error(`you can only create one single DB connection!`);
    }
    this.uri = uri;
    instaance = this;
  }

  connect() {
    console.log(`DB ${this.uri} has been connected!`);
  }

  disconnect() {
    console.log("DB disconnected");
  }
}

const connectionClass = Object.freeze(new DBConnection("mongodb://..."));
export { connectionClass };

//  using object
const dbConnection = (uri) =>
  Object.freeze({
    uri,
    connect: () => console.log(`DB ${this.uri} has been connected!`),
    disconnect: () => console.log("DB disconnected"),
  });

const connectionObject = dbConnection("mongodb://...");

export { connectionObject };
