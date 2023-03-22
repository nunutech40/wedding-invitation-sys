const User = require('../model/User');

class UserService {
  static async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.error(error);
    }
  }

  static async getUserById(id) {
    try {
      const user = await User.findById(id);
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  static async createUser(user) {
    try {
      const result = await User.create(user);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  static async updateUser(id, user) {
    try {
      const result = await User.update(id, user);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  static async deleteUser(id) {
    try {
      const result = await User.delete(id);
      return result
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = UserService;
