const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const { it, describe, beforeEach } = require("mocha");

const server = require("../testIndex");
const Booking = require("../testModels/testBookingModel");

describe("Test Booking", () => {
  let testBooking;

  beforeEach((done) => {
    Booking.deleteMany((err) => {
      if (!err) {
        Booking.create(
          {
            screen_id: "624acbd862c7e16484efda0f",
            full_name: "Adil Akbarali",
            number_of_seats: 1,
            number_of_adults: 1,
            number_of_children: 0,
            concessions:        [
              "Salted Popcorn (Large)", "Soft Drink (Large)"
            ]
          },
          (error, created) => {
            if (!error) {
              testBooking = created;
            }
            return done();
          }
        )
      }
    })
  })

  it("Should find ALL bookings", (done) => {
    chai
      .request(server)
      .get("/testBooking/getAll/")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        return done();
      });
  });


  it("Should get latest bookings", (done) => {
    chai
    .request(server)
    .get("/testBooking/getLatest")
    .end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      return done();
    });
  });


  it("Should find booking by id", (done) => {
    chai
      .request(server)
      .get("/testBooking/get/" + testBooking.id)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty(
          "screen_id",
          "624acbd862c7e16484efda0f"
        );
        expect(res.body).to.haveOwnProperty("full_name", "Adil Akbarali");
        expect(res.body).to.haveOwnProperty("number_of_seats", 1);
        expect(res.body).to.haveOwnProperty("number_of_adults", 1);
        expect(res.body).to.haveOwnProperty("number_of_children", 0);
        expect(res.body.concessions).to.eql([
          "Salted Popcorn (Large)", "Soft Drink (Large)"
        ],);
        return done();
      });
  });
  it("Should create new booking", (done) => {
    chai
      .request(server)
      .post("/testBooking/create")
      .send({
        screen_id: "62430f13e60e734b2865c365",
        full_name: "Kiera Hegarty",
        number_of_seats: 8,
        number_of_adults: 4,
        number_of_children: 4,
        concessions:        [
          "Salted Popcorn (Large)","Soft Drink (Large)"
        ]
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res).to.haveOwnProperty("text", "Successfully created");
        return done();
      });
    // });
    // it("Should delete discussion information", (done) => {
    //     chai
    //     .request(server)
    //     .delete("/booking/remove/" + testBooking.id)
    //     .end((err, res) => {
    //         expect(err).to.be.null;
    //         expect(res).to.have.status(204);
    //         return done();
    //     })
  });
});
