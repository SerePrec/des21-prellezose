import TestsService from "../services/testsService.js";

class ApiTestsController {
  constructor() {
    this.testsService = new TestsService();
  }

  getProductosTest = (req, res) => {
    res.json(this.testsService.generateNMockProduct(5));
  };
}

export default ApiTestsController;
