//your code here
cy.get('ol li:last audio')
  .should('have.attr', 'src', 'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg')
  .and('have.attr', 'controls');  // Ensure the audio element has controls
