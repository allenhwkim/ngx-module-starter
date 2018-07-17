Feature('My First Test');

Scenario('test something', I => {
  I.amOnPage('/');
  I.see('Welcome');
  I.see('Value: 15 -- Squared: 225');
});
