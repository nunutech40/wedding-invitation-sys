const db = require('../config/database');

class User {
  static async findAll() {
    try {
      const connection = await db.pool.getConnection();
      const [rows] = await connection.execute('SELECT * FROM users');
      connection.release();
      return rows;
    } catch (error) {
      console.error(error);
    }
  }

  static async findById(id) {
    const connection = await db.pool.getConnection();
    const [rows] = await connection.execute('SELECT * FROM users WHERE id = ?', [id]);
    connection.release();
    return rows;
  }

  static async create(user) {
    const { name, email, password, role } = user;
    const connection = await db.pool.getConnection();
    const [result] = await connection.execute('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)', [name, email, password, role]);
    connection.release();
    return { id, name, email, password, role };
  }

  static async update(id, user) {
    const { name, email, role } = user;
    const connection = await db.pool.getConnection();
    await connection.execute('UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?', [name, email, role, id]);
    connection.release();
    return { id, name, email, role };
  }

  static async delete(id) {
    const connection = await db.pool.getConnection();
    await connection.execute('DELETE FROM users WHERE id = ?', [id]);
    connection.release();
  }
}

module.exports = User;