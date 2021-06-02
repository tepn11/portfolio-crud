process.env.NODE_ENV = "test";

let mongoose = require("mongoose");

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../src/server");
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe("API", () => {
  // beforeEach((done) => { //Before each test we empty the database
  // Coin.remove...
  // });
  /*
   * Test the /GET route
   */
  describe("/GET All coins", () => {
    it("it should GET all the coins", (done) => {
      chai
        .request(server)
        .get("/coins")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });
  describe("/GET one coin", () => {
    it("it should GET one coin by Id", (done) => {
      chai
        .request(server)
        .get("/coin/60b7883cdc8a8c8007ee2c47")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.name.should.be.eql("Bitcoin");
          done();
        });
    });
  });
});
