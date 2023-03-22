const UserController = require('../controllers/UserController');

const routes = [
    {
        method: "GET",
        path: "/",
        handler: () => {
            return "Hello There, This is Home from the server."
        }
    },
    {
        method: 'GET',
        path: '/users',
        handler: UserController.getUsersAll,
    },
    {
        method: 'GET',
        path: '/users/{id}',
        handler: UserController.getUserById,
    },
    {
        method: 'POST',
        path: '/users',
        handler: UserController.createUser,
    },
    {
        method: 'PUT',
        path: '/users/{id}',
        handler: UserController.updateUser,
    },
    {
        method: 'DELETE',
        path: '/users/{id}',
        handler: UserController.deleteUser,
    },

]
module.exports = routes;

