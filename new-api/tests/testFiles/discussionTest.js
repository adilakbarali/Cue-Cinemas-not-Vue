const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const { it, describe, beforeEach } = require("mocha");

const server = require("../index");
const discussion = require("../models/discussion");

describe("Test Discussion", () => {
    let testDiscussion;
  
    // beforeEach((done) => {
    //   discussion.deleteMany((err) => {
    //     if(!err) {
    //       discussion.create(
    //         {
    //           full_name: "Sing 2",
    //           email: "person@gmail.com",
    //           movie_id: "6241c7c37c1cfc0bddbe0d8a",
    //           rating: 4,
    //           message: "boring",
    //         },
    //         (error, created) => {
    //           if(!error){
    //             testDiscussion = created;
    //           }
    //           return done();
    //         }
    //       )
    //     }
    //   })
    // })
  
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
    // it("Should update discussion information", (done) => {
    //   chai
    //   .request(server)
    //   .put("/discussion/replace/" + testDiscussion.id)
    //   .end((err, res) => {
    //     expect(err).to.be.null;
    //     expect(res).to.have.status(202);
    //     expect(res.body).to.haveOwnProperty("full_name", "Sing 2");
    //     expect(res.body).to.haveOwnProperty("email", "person@gmail.com");
    //     expect(res.body).to.haveOwnProperty("movie_id", "6241c7c37c1cfc0bddbe0d8a");
    //     expect(res.body).to.haveOwnProperty("rating", 4);
    //     expect(res.body).to.haveOwnProperty("message", "boring");
    //     return done();
    //   })
    // })
    // it("Should delete discussion information", (done) => {
    //   chai
    //     .request(server)
    //     .delete("/discussion/remove/" + testDiscussion.id)
    //     .end((err, res) => {
    //       expect(err).to.be.null;
    //       expect(res).to.have.status(204);
    //       return done();
    //     });
    // });
  });