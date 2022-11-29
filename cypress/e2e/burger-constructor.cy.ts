beforeEach(() => {
  cy.intercept("GET", "api/auth/user", { fixture: "user.json" });
  cy.intercept("POST", "api/orders", { fixture: "order.json" }).as("postOrder");

  // Устанавливаем токены:
  window.localStorage.setItem(
    "refreshToken",
    JSON.stringify("test-refreshToken")
  );
  cy.setCookie('accessToken', 'test-accessToken')
});

afterEach(function () {
  cy.clearLocalStorage();
  cy.clearCookies();
});

describe('react-burger is available', function() {
  it('should be available on localhost:3000', function() {
    cy.visit('http://localhost:3000');

  });

  before(function() {
    cy.visit('http://localhost:3000');
  });

  it('should drag and drop and make order', function() {
    cy.get('[data-test-id="60d3b41abdacab0026a733c6"]').as('BunIngredient')
    cy.get('[data-test-id="60d3b41abdacab0026a733ce"]').as('ingredient1');
    cy.get('[data-test-id="60d3b41abdacab0026a733ca"]').as('ingredient2');
    cy.get('[data-test-id="60d3b41abdacab0026a733d4"]').as('ingredient3');

    cy.get('[data-test="burger-constructor"]').as('BurgerConstructor')

    cy.get('@BunIngredient').trigger("dragstart").trigger("dragleave");
    cy.get('@BurgerConstructor')
     .trigger("dragenter")
     .trigger("dragover")
     .trigger("drop")
     .trigger("dragend");

    cy.get('@ingredient1').trigger("dragstart").trigger("dragleave");
    cy.get('@BurgerConstructor')
     .trigger("dragenter")
     .trigger("dragover")
     .trigger("drop")
     .trigger("dragend");

    cy.get('@ingredient2').trigger("dragstart").trigger("dragleave");
    cy.get('@BurgerConstructor')
     .trigger("dragenter")
     .trigger("dragover")
     .trigger("drop")
     .trigger("dragend");

    cy.get('@ingredient3').trigger("dragstart").trigger("dragleave");
    cy.get('@BurgerConstructor')
     .trigger("dragenter")
     .trigger("dragover")
     .trigger("drop")
     .trigger("dragend");


     cy.get('[data-test="btn_make_order"]').find('button').as('BtnMakeOrder');
     cy.get('@BtnMakeOrder').click();
     cy.get('[data-test="order_number"]', { timeout: 30000 }).contains("123").should("exist");
     cy.get('[data-test="btn_close_modal"]').click();
  });


  it('should show детали ингредиента модальный диалог', function() {
     cy.get('[data-test-id="60d3b41abdacab0026a733c6"]').as('BunIngredient')

     cy.get('@BunIngredient').click();
     cy.get('[data-test="ingredient_details_name"]').should('have.text', 'Краторная булка N-200i');
     cy.get('[data-test="btn_close_modal"]').click();

   });
 

}); 

