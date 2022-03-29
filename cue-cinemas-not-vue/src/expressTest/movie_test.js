/* eslint-disable no-unused-expressions */
const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const { it, describe, beforeEach } = require("mocha");

const server = require("../index");

const Movie = require("../db");

describe("Test Movie", () => {
  let testMovie;

  beforeEach((done) => {
    Movie.deleteMany((err) => {
      if (!err) {
        Movie.create(
          {
            title: "The Batman",
            release_date: new Date(2022, 3, 3, 0, 0, 0, 0),
            actors: [
              "Robert Pattison",
              "Zoe Kravitz",
              "Paulo Dano",
              "Jeffrey Wright",
              "John Turturro",
              "Peter Sarsgaard",
              "Andy Serkis",
              "Colin Farrell",
            ],
            director: "Matt Reeves",
            description: "A movie based on Batman's second year of fighting crime and follows him as he explores Gotham City's corruption and faces the Riddler, a riddle-obsessed serial killer.",
            rating: 8.5,
            images: [
                'https://i.imgur.com/HqPtjae.jpg',
                'https://i.imgur.com/DxlKIo3.jpg',
            ]
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

  describe("Test Movie", () => {
    
  it("Should find a Movie", (done) => {
    chai
      .request(server)
      .get(`/movie/get/${testMovie.id}`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty("title", "The Batman");
        expect(res.body).to.haveOwnProperty("date", new Date(2022, 3, 3, 0, 0, 0, 0));
        expect(res.body).to.haveOwnProperty("actors", ["Robert Pattison", "Zoe Kravitz", "Paulo Dano", "Jeffrey Wright", "John Turturro", "Peter Sarsgaard", "Andy Serkis", "Colin Farrell"]);
        expect(res.body).to.haveOwnProperty("director", "Matt Reeves");
        expect(res.body).to.haveOwnProperty("description", "A movie based on Batman's second year of fighting crime and follows him as he explores Gotham City's corruption and faces the Riddler, a riddle-obsessed serial killer.");
        expect(res.body).to.haveOwnProperty("rating", 8.7);
        expect(res.body).to.haveOwnProperty("images", ["https://i.imgur.com/HqPtjae.jpg", "https://i.imgur.com/DxlKIo3.jpg"]);
        return done();
      });
  });

  it("Should find all Movies", (done) => {
    chai
      .request(server)
      .get("/dog/getAll")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty("title", "The Batman");
        expect(res.body).to.haveOwnProperty("date", new Date(2022, 3, 3, 0, 0, 0, 0));
        expect(res.body).to.haveOwnProperty("actors", ["Robert Pattison", "Zoe Kravitz", "Paulo Dano", "Jeffrey Wright", "John Turturro", "Peter Sarsgaard", "Andy Serkis", "Colin Farrell"]);
        expect(res.body).to.haveOwnProperty("director", "Matt Reeves");
        expect(res.body).to.haveOwnProperty("description", "A movie based on Batman's second year of fighting crime and follows him as he explores Gotham City's corruption and faces the Riddler, a riddle-obsessed serial killer.");
        expect(res.body).to.haveOwnProperty("rating", 8.7);
        expect(res.body).to.haveOwnProperty("images", ["https://i.imgur.com/HqPtjae.jpg", "https://i.imgur.com/DxlKIo3.jpg"]);
        return done();
      });
  });
 
});
})
