class authController {
  async login(req, res) {
    try {
      res.send({message: 'login'})
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async registration(req, res) {
    try {
      res.send({message: 'registration'})
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new authController();