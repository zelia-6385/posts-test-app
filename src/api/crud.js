import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

/**
 * Завершить класс
 */

// CRUD (Create, Record, Update, Delete)
class CRUD {
  // POST
  create(url, data = {}, config) {
    return axios.post(url, data, config);
  }

  // GET
  record(url, params = {}, config) {
    return axios.get(url, { params }, config);
  }

  // PUT
  update(url, data = {}, config) {
    return axios.put(url, data, config);
  }

  // DELETE
  delete(url, data = {}, config) {
    return axios.delete(url, { data }, config);
  }
}

export default CRUD;
