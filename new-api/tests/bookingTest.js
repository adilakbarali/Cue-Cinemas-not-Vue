const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const { it, describe, beforeEach } = require("mocha");

const server = require("../index");

describe("Test Booking", () => {
    let testBooking;
  
    it("Should find ALL bookings", (done) => {
      chai
      .request(server)
      .get("/booking/getAll/")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        return done();
      });
    });
  });
  