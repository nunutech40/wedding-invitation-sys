const UserService = require('../service/UserService');

const UserController = {

  async getUsersAll(request, h) {
    try {
      const allusers = await UserService.getAllUsers();

      return {
        code: 200,
        status: 'success',
        data: {
          users: allusers
        }
      };

    } catch (error) {

      return h.response({
        status: 'fail',
        message: `error: ${error.message}`,
      }).code(200);
    }
  },
  
  async getUserById(request, h) {
    try {
      const userId = request.params.id;
      const user = await UserService.getUserById(userId);

      console.log(`cek user: ${user}`)

      if (user) {
        return {
          code: 200,
          status: 'success',
          data: {
            users: user
          }
        };
      }

      const response = h.response({
        status: 'fail',
        message: 'something wrong when gell user'
      });
      
    } catch (error) {
      return h.response({
        status: 'fail',
        message: `error: ${error.message}`,
      }).code(200);
    }
    
  },

  async createUser(request, h) {
    const { name, email, password, role } = request.payload;
    var user = {name, email, password, role}

    try {
      const result = await UserService.createUser(user);

      var response;

      if (result) {
        response = result
      } else {
        console.log(result)
        response = {
          message: "duplicate data"
        } 
      }
      return {
        code: 200,
        status: 'success',
        data: response
      };


    } catch (error) {
      console.log(`cek error: ${error}`);

      return h.response({
        status: 'fail',
        message: `error: ${error.message}`,
      }).code(500);
    }

  },

  async updateUser(request, h) {
    const userId = request.params.id;
    const { name, email, role } = request.payload;

    var user = {name, email, role}

    try {
      const result = await UserService.updateUser(userId, user);
      return {
        code: 200,
        status: 'success',
        data: result
      };

    } catch(error) {
      return h.response({
        status: 'fail',
        message: `error: ${error.message}`,
      }).code(500);
    }

  },

  async deleteUser(request, h) {
    const userId = request.params.id;
    
    try {
      const result = await UserService.deleteUser(userId);

      return {
        code: 200,
        status: 'success',
        data: result
      };

    } catch {
      return h.response({
        status: 'fail',
        message: `error: ${error.message}`,
      }).code(200);
    }

  }
};

module.exports = UserController;