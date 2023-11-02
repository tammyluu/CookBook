import { v4 as uuidv4 } from "uuid";
import { DataStore } from "../utils.js";

export default class UserDao {
  constructor() {}

  getAll() {
    return DataStore.data.users;
  }

  getOneById(id) {
    return DataStore.data.users.find((c) => (c.id == id));
  }

  save(user) {
    user.id = uuidv4();
    DataStore.data.users.push(user);
    DataStore.write();
    return user;
  }
}