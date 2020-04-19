describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.wait(1000);
	});


	it('has the correct <h1> Dashboard ', () => {
		cy.contains('h1', 'Dashboard')
	});

	it('navigates to /logout', () => {
		cy.get('nav a.dropdown-toggle').click();
		cy.get('nav a.dropdown-item').contains('Logout').click();
		cy.url().should('include', 'pages/authentication/login');
		cy.get('h3');
		cy.contains('h3', 'Login')
	});

	it('navigates to /settings', () => {
		cy.get('nav a.dropdown-toggle').click();
		cy.get('nav a.dropdown-item').contains('Settings').click();
		cy.url().should('include', '/settings');
		cy.contains('h3', 'Settings')
	});

});
