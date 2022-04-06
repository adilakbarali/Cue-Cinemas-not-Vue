const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const { it, describe, beforeEach } = require("mocha");

const server = require("../testIndex");
const Movie = require("../testModels/testMovieModel");

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
      .get("/testmovie/getAll/")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        return done();
      });
  });

  it.skip("Should find movie by id", (done) => {
    chai
      .request(server)
      .get("/testmovie/get/" + testMovie._id)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty("title", "The Batman");
        expect(res.body).to.haveOwnProperty(
          "release_date",
          "2022-03-04T23:00:00.000Z"
        );
        expect(res.body).to.haveOwnProperty("actors", [
          "Robert Pattison"
        ]);
        expect(res.body).to.haveOwnProperty("director", "Matt Reeves");
        expect(res.body).to.haveOwnProperty(
          "description",
          "A movie based on Batman's second year of fighting crime and follows him as he explores Gotham City's corruption and faces the Riddler, a riddle-obsessed serial killer."
        );
        expect(res.body).to.haveOwnProperty("rating", 8.5);
        expect(res.body).to.haveOwnProperty("images", [
          "https://i.imgur.com/DxlKIo3.jpg",
          "https://i.imgur.com/HqPtjae.jpg",
        ]);
        expect(res.body).to.haveOwnProperty("_v", 0);
        return done();
      });
  });
});
