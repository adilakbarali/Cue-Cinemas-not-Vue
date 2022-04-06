const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const { it, describe, beforeEach } = require("mocha");

const server = require("../index");
const Booking = require("../models/booking")

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
    it("Should create new booking", (done) => {
        chai
        .request(server)
        .post("/booking/create")
        .send({
            screen_id: "62430f13e60e734b2865c365",
            full_name: "Kiera Hegarty",
            number_of_seats: 8,
            number_of_adults: 4,
            number_of_children: 4,
            concessions: [
                "Salted Popcorn (Small)",
                "Nachos",
                "Soft Drink (Large)"
            ],
            "__v": 0,
        })
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            expect(res).to.haveOwnProperty("text", "Successfully created");
            return done();
        });
    });
  });
  