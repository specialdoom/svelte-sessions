class Database {
  private config: { database: string; store: string; version: number };

  constructor(database = "dailyhunt", store = "dailyhuntStore", version = 1) {
    this.config = {
      database,
      store,
      version,
    };
  }

  read(key) {
    return new Promise((resolve, reject) => {
      let dbRequest = window.indexedDB.open(this.config.database);

      dbRequest.onerror = (e) => {
        reject(Error("Couldn't open database."));
      };

      dbRequest.onupgradeneeded = (e: any) => {
        e.target.transaction.abort();
        reject(Error("Database version not found."));
      };

      dbRequest.onsuccess = (e: any) => {
        let database = e.target.result;
        let transaction = database.transaction(
          [this.config.store],
          "readwrite"
        );
        let objectStore = transaction.objectStore(this.config.store);
        let objectRequest = objectStore.get(key);

        objectRequest.onerror = (e: any) => {
          reject(Error("Error while getting."));
        };

        objectRequest.onsuccess = (e: any) => {
          if (objectRequest.result) {
            resolve(objectRequest.result);
          } else reject(Error("Key not found."));
        };
      };
    });
  }

  delete(key) {
    return new Promise((resolve, reject) => {
      let dbRequest = indexedDB.open(this.config.database);

      dbRequest.onerror = (e: any) => {
        reject(Error("Couldn't open database."));
      };

      dbRequest.onupgradeneeded = (e: any) => {
        e.target.transaction.abort();
        reject(Error("Database version not found."));
      };

      dbRequest.onsuccess = (e: any) => {
        let database = e.target.result;
        let transaction = database.transaction(
          [this.config.store],
          "readwrite"
        );
        let objectStore = transaction.objectStore(this.config.store);
        let objectRequest = objectStore.delete(key);

        objectRequest.onerror = (e: any) => {
          reject(Error("Couldn't delete key."));
        };

        objectRequest.onsuccess = (e: any) => {
          resolve("Deleted key successfully.");
        };
      };
    });
  }

  save(key, value) {
    return new Promise((resolve, reject) => {
      let dbRequest = indexedDB.open(this.config.database);

      dbRequest.onerror = (e: any) => {
        reject(Error("Couldn't open database."));
      };

      dbRequest.onupgradeneeded = (e: any) => {
        let database = e.target.result;
        database.createObjectStore(this.config.store);
      };

      dbRequest.onsuccess = (e: any) => {
        let database = e.target.result;
        let transaction = database.transaction(
          [this.config.store],
          "readwrite"
        );
        let objectStore = transaction.objectStore(this.config.store);
        let objectRequest = objectStore.put(value, key);

        objectRequest.onerror = (e: any) => {
          reject(Error("Error while saving."));
        };

        objectRequest.onsuccess = (e: any) => {
          resolve("Saved data successfully.");
        };
      };
    });
  }
}

export default new Database();
