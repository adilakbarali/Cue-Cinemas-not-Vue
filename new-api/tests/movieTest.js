const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const { it, describe, beforeEach } = require("mocha");

const server = require("../index");
const discussion = require("../models/discussion");
const Movie = require("../models/movie")

describe("Test Movie", () => {
  let testMovie;

  beforeEach((done) => {
    Movie.deleteMany((err) => {
      if(!err){
        Movie.create(
          {
            title: "The Batman",
            release_date: "2022-03-04T23:00:00.000Z",
            actors: [ 'Robert Pattison', 'Zoe Kravitz' ],
            director: "Matt Reeves",
            description: "A movie based on Batman's second year of fighting crime and follows him as he explores Gotham City's corruption and faces the Riddler, a riddle-obsessed serial killer.",
            rating: 8.5,
            images: ["https://i.imgur.com/DxlKIo3.jpg","https://i.imgur.com/HqPtjae.jpg"],
          },
          (error, created) => {
            if(!error){
              testMovie = created;
            }
            return done();
          },
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

  it.skip("Should find movie by id", (done) => {
    chai
    .request(server)
    .get("/movie/get/" + testMovie._id)
    .end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res.body).to.haveOwnProperty("title", "The Batman")
      expect(res.body).to.haveOwnProperty("release_date", "2022-03-04T23:00:00.000Z")
      expect(res.body).to.haveOwnProperty("actors", [ 'Robert Pattison', 'Zoe Kravitz' ])
      expect(res.body).to.haveOwnProperty("director", "Matt Reeves")
      expect(res.body).to.haveOwnProperty("description", "A movie based on Batman's second year of fighting crime and follows him as he explores Gotham City's corruption and faces the Riddler, a riddle-obsessed serial killer.")
      expect(res.body).to.haveOwnProperty("rating", 8.5)
      expect(res.body).to.haveOwnProperty("images", ["https://i.imgur.com/DxlKIo3.jpg","https://i.imgur.com/HqPtjae.jpg"])
      return done();
    })
  })
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

  it.skip("Should find ALL screens", (done) => {
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



describe("Test Discussion", () => {
  let testDiscussion;

  beforeEach((done) => {
    discussion.deleteMany((err) => {
      if(!err) {
        discussion.create(
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
  it("Should update discussion information", (done) => {
    chai
    .request(server)
    .put("/discussion/replace/" + testDiscussion.id)
    .end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(202);
      expect(res.body).to.haveOwnProperty("full_name", "Sing 2");
      expect(res.body).to.haveOwnProperty("email", "person@gmail.com");
      expect(res.body).to.haveOwnProperty("movie_id", "6241c7c37c1cfc0bddbe0d8a");
      expect(res.body).to.haveOwnProperty("rating", 4);
      expect(res.body).to.haveOwnProperty("message", "boring");
      return done();
    })
  })
  it("Should delete discussion information", (done) => {
    chai
      .request(server)
      .delete("/discussion/remove/" + testDiscussion.id)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(204);
        return done();
      });
  });
});
