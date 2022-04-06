const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const { it, describe, beforeEach } = require("mocha");

const server = require("../index");
const Screen = require("../models/screen")

describe("Test Screens", () => {
    let testScreens;
  
    beforeEach((done) => {
      screen.deleteMany((err) => {
        if(!err) {
          screen.create(
            {
              "screen_type": "Standard",
              "date_time": "2022-03-30T18:00:00.000Z",
              "movie_id": "6241c7c37c1cfc0bddbe0d8a",
              "total_seats": 300,
              "available_seats": 300,
            },
            (error, created) => {
              if(!error){
                testScreens = created;
              }
              return done();
            }
          )
        }
      })
    })
  
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
  
    it("Should find screens by id", (done) => {
      chai
      .request(server)
      .get("/screen/get/" + testScreens.id)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty("screen_type", "Standard");
        expect(res.body).to.haveOwnProperty("date_time", "2022-03-30T18:00:00.000Z");
        expect(res.body).to.haveOwnProperty("movie_id", "6241c7c37c1cfc0bddbe0d8a");
        expect(res.body).to.haveOwnProperty("total_seats", 300);
        expect(res.body).to.haveOwnProperty("available_seat", 300);
        return done();
      });
    });
  });