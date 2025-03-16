require("./helpers.js");

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("index.html", () => {
  describe("the wrapper section", () => {
    it("has a <h1> element with the correct content", () => {
      const wrapper = document.querySelector(".wrapper");
      const h1 = wrapper.querySelector("h1");

      expect(h1, "No <h1> tag(s) found").to.exist;
      expect(h1, "Your <h1> tag should contain the text 'Welcome to Riyadh'").to.contain.text("Welcome to Riyadh");
    });

    it("has a <h2> element with the correct content", () => {
      const wrapper = document.querySelector(".wrapper");
      const h2 = wrapper.querySelector("h2");

      expect(h2, "No <h2> tag(s) found").to.exist;
      expect(h2, "Your <h2> tag should contain the correct text").to.contain.text("Where A Traditional Past Meets A Modern Future.");
    });
  });

  describe("the content section", () => {
    it("has three <h3> elements with the correct content", () => {
      const wrapper = document.querySelector(".content");
      expect(wrapper, "Wrong number of <h3> tag(s) found").to.have.descendants("h3").and.have.length(3);

      const [firstH3, secondH3, thirdH3] = wrapper.querySelectorAll("h3");
      expect(firstH3).to.contain.text("History");
      expect(secondH3).to.contain.text("Culture");
      expect(thirdH3).to.contain.text("Tourism");
    });

    it("has three <p> elements with the correct content", () => {
      const wrapper = document.querySelector(".content");
      expect(wrapper).to.have.descendants("p");

      const [firstP, secondP, thirdP] = wrapper.querySelectorAll("p");
      expect(firstP).to.contain.text("Riyadh has a rich history");
      expect(secondP).to.contain.text("The city offers a unique blend");
      expect(thirdP).to.contain.text("Explore Riyadh's famous landmarks");
    });

    it("has three <img> elements with the correct attributes", () => {
      const wrapper = document.querySelector(".content");
      expect(wrapper, "Wrong number of <img> tag(s) found").to.have.descendants("img").and.have.length(3);

      const [firstImg, secondImg, thirdImg] = wrapper.querySelectorAll("img");
      expect(firstImg).to.have.attribute("src", "./images/history.jpg");
      expect(firstImg).to.have.attribute("alt", "Historical Riyadh");
      expect(secondImg).to.have.attribute("src", "./images/culture.jpg");
      expect(secondImg).to.have.attribute("alt", "Cultural Riyadh");
      expect(thirdImg).to.have.attribute("src", "./images/tourism.jpg");
      expect(thirdImg).to.have.attribute("alt", "Tourism in Riyadh");
    });

    it("has two <a> elements with the correct attributes", () => {
      const wrapper = document.querySelector(".content .links");
      expect(wrapper, "Wrong number of <a> tag(s) found").to.have.descendants("a").and.have.length(2);

      const [firstA, secondA] = wrapper.querySelectorAll("a");
      expect(firstA).to.have.attribute("href", "http://en.wikipedia.org/wiki/Riyadh");
      expect(secondA).to.have.attribute("href", "https://www.visitsaudi.com/en/see-do/destinations/riyadh");
    });
  });
});
