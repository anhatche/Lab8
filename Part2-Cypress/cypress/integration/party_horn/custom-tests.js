describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Lab8/Part2-Cypress');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get("#volume-number").clear().type("75");
    cy.get("#volume-slider").then(
      function ($el) {
        expect($el).to.have.value(75);
      }
    );
  });

  it('Volume input changes when slider changes', () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#volume-number").then(
      function ($el) {
        expect($el).to.have.value(33);
      }
    );
  });

  it('Audio volume changes when slider changes', () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#horn-sound").then(
      function ($el) {
        expect($el).to.have.prop("volume", 0.33);
      }
    );
  });

  it('Image source changes when you select the party horn radio button', () => {
    cy.get("#radio-party-horn").check();
    cy.get("#sound-image").then(
      function ($el) {
        expect($el).to.have.prop("src", "http://127.0.0.1:5500/Lab8/Part2-Cypress/assets/media/images/party-horn.svg");
      }
    );
  });

  it('Sound source changes when you select the party horn radio button', () => {
    cy.get("#radio-party-horn").check();
    cy.get("#horn-sound").then(
      function ($el) {
        expect($el).to.have.prop("src", "http://127.0.0.1:5500/Lab8/Part2-Cypress/assets/media/audio/party-horn.mp3");
      }
    );
  });

  it('Volume image changes when increasing volumes', () => {
    cy.get("#volume-slider").invoke("val", 0).trigger("input");
    cy.get("#volume-image").then(
      function ($el) {
        expect($el).to.have.prop("src", "http://127.0.0.1:5500/Lab8/Part2-Cypress/assets/media/icons/volume-level-0.svg");
      }
    );
    cy.get("#volume-slider").invoke("val", 20).trigger("input");
    cy.get("#volume-image").then(
      function ($el) {
        expect($el).to.have.prop("src", "http://127.0.0.1:5500/Lab8/Part2-Cypress/assets/media/icons/volume-level-1.svg");
      }
    );
    cy.get("#volume-slider").invoke("val", 40).trigger("input");
    cy.get("#volume-image").then(
      function ($el) {
        expect($el).to.have.prop("src", "http://127.0.0.1:5500/Lab8/Part2-Cypress/assets/media/icons/volume-level-2.svg");
      }
    );
    cy.get("#volume-slider").invoke("val", 80).trigger("input");
    cy.get("#volume-image").then(
      function ($el) {
        expect($el).to.have.prop("src", "http://127.0.0.1:5500/Lab8/Part2-Cypress/assets/media/icons/volume-level-3.svg");
      }
    );
  });

  it('Honk button is disabled when the textbox input is a empty or a non-number', () => {
    cy.get("#volume-number").clear().type("a");
    cy.get("#honk-btn").then(
      function ($el) {
        expect($el).to.have.prop("disabled", true);
      }
    );
    cy.get("#volume-number").clear();
    cy.get("#honk-btn").then(
      function ($el) {
        expect($el).to.have.prop("disabled", true);
      }
    );
  });

  it('Error is shown when you type a number outside of the given range for the volume textbox input', () => {
    cy.get("#volume-number").clear().type("175");
    cy.get("#volume-number").then(
      function ($el) {
        cy.get('#volume-number:invalid').should('have.length', 1);
      }
    );
  });

});
