process.env.NODE_ENV = 'test'
const { expect } = require('chai')
const chai = require('chai')
const chaiHttp = require('chai-http')
const { describe, beforeEach, it } = require('mocha')

chai.use(chaiHttp)

const server = require("../index")
const Movie = require("../models/movie")
const Screen = require("../models/screen")
const Booking = require("../models/booking")
const Discussion = require("../models/discussion")

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
        .get("/booking/getAll/")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          return done();
        });
    });
  
  
    it("Should get latest bookings", (done) => {
      chai
      .request(server)
      .get("/booking/getLatest")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        return done();
      });
    });
  
  
    it("Should find booking by id", (done) => {
      chai
        .request(server)
        .get("/booking/get/" + testBooking.id)
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
        .post("/booking/create")
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
    });
  });


  describe("Test Discussion", () => {
    let testDiscussion;
  
    beforeEach((done) => {
      Discussion.deleteMany((err) => {
        if(!err) {
          Discussion.create(
            {
              full_name: "Sing 2",
              email: "person@gmail.com",
              movie_id: "6241c7c37c1cfc0bddbe0d8a",
              rating: 4,
              message: "boring",
            },
            (error, created) => {
              if(!error){
                testDiscussion = created;
              }
              return done();
            }
          )
        }
      })
    })
  
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
    it("Should find information by id", (done) =>{
      chai
      .request(server)
      .get("/discussion/get/" + testDiscussion.id)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty("full_name", "Sing 2");
        expect(res.body).to.haveOwnProperty("email", "person@gmail.com");
        expect(res.body).to.haveOwnProperty("movie_id", "6241c7c37c1cfc0bddbe0d8a");
        expect(res.body).to.haveOwnProperty("rating", 4);
        expect(res.body).to.haveOwnProperty("message", "boring");
        return done();
      });
    });
  
    it("Should create discussion info", (done) =>{
      chai
      .request(server)
      .post("/discussion/create")
      .send({
        full_name: "The Batman",
        email: "kiera-hegarty@hotmail.com",
        movie_id: "6241c7c37c1cfc0bddbe0d8a",
        rating: "8",
        message: "Not dark enough",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res).to.haveOwnProperty("text", "Successfully created");
        return done();
      });
    });
  });

  describe("Test Movie", () => {
    let testMovie;
  
    beforeEach((done) => {
      Movie.deleteMany((err) => {
        if (!err) {
          Movie.create(
            {
              title: "The Batman",
              release_date: "2022-03-04T23:00:00.000Z",
              actors: ([
                "Robert Pattison"
              ]),
              director: "Matt Reeves",
              description:
                "A movie based on Batman's second year of fighting crime and follows him as he explores Gotham City's corruption and faces the Riddler, a riddle-obsessed serial killer.",
              rating: 8.5,
              images: [
                "https://i.imgur.com/DxlKIo3.jpg",
                "https://i.imgur.com/HqPtjae.jpg",
              ],
            },
            (error, created) => {
              if (!error) {
                testMovie = created;
              }
              return done();
            }
          );
        }
      });
    });
  
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
  
    it("Should find movie by id", (done) => {
      chai
        .request(server)
        .get("/movie/get/" + testMovie._id)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.haveOwnProperty("title", "The Batman");
          expect(res.body).to.haveOwnProperty(
            "release_date",
            "2022-03-04T23:00:00.000Z"
          );
          expect(res.body.actors).to.eql( [
            "Robert Pattison"
          ]);
          expect(res.body).to.haveOwnProperty("director", "Matt Reeves");
          expect(res.body).to.haveOwnProperty(
            "description",
            "A movie based on Batman's second year of fighting crime and follows him as he explores Gotham City's corruption and faces the Riddler, a riddle-obsessed serial killer."
          );
          expect(res.body).to.haveOwnProperty("rating", 8.5);
          expect(res.body.images).to.eql( [
            "https://i.imgur.com/DxlKIo3.jpg",
            "https://i.imgur.com/HqPtjae.jpg",
          ]);
          return done();
        });
    });
  });

  describe("Test Screens", () => {
    let testScreens;
  
    beforeEach((done) => {
      Screen.deleteMany((err) => {
        if (!err) {
          Screen.create(
            {
            screen_type: "Standard",
            date_time:"2022-03-30T17:00:00.000Z",
            movie_id: "6241c7c37c1cfc0bddbe0d8a",
            total_seats: 300,
            available_seats: 300,
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
  
   it("Should find information by id", (done) => {
     chai
     .request(server)
     .get("/screen/get/" + testScreens.id)
     .end((err, res) => {
       expect(err).to.be.null;
       expect(res).to.have.status(200);
       expect(res.body).to.haveOwnProperty("screen_type", "Standard");
       expect(res.body).to.haveOwnProperty("date_time", "2022-03-30T17:00:00.000Z");
       expect(res.body).to.haveOwnProperty("movie_id", "6241c7c37c1cfc0bddbe0d8a");
       expect(res.body).to.haveOwnProperty("total_seats", 300);
       expect(res.body).to.haveOwnProperty("available_seats", 300);
       return done();
     })
   })
   it("should find screen information by query", (done) => {
     chai
     .request(server)
     .get("/screen/find?movie_id=6241c7c37c1cfc0bddbe0d8a") 
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        return done();
      })
   })
    });