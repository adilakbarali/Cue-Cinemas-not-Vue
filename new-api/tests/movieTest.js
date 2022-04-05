const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const { it, describe, beforeEach } = require("mocha");

const server = require("../index");

const Movie = require("../");

describe("Test Movie", () => {
  let testMovie;

  it("Should find ALL movie information", (done) => {
    chai
      .request(server)
      .get("/movie/getAll/")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        return done();
      });
  });

});

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

describe("Test Screens", () => {
  let testScreens;

  it("Should find ALL screens", (done) => {
    chai
    .request(server)
    .get("/screen/getAll/")
    .end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      return done();
    });
  });
});

describe("Test Discussion", () => {
  let testDiscussion;

  it("Should find ALL discussions", (done) => {
    chai
    .request(server)
    .get("/discussion/getAll/")
    .end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      return done();
    });
  });
});
