const config = {
  colleges: [
    {
      name: '', // Name of college/university
      credentials: {
        username: '', // Username for the portal
        password: '' // Password for the portal
      },
      pages: {
        login: '', // URL of the login page
        info: '', // URL of the page where the application status will be found
      },
      selectors: {
        login: {
          username: '', // CSS selector for username input field
          password: '', // CSS selector for password input field
          submit: '' // CSS selector for submit button for login form.
        },
        info: {
          status: '' // CSS selector of the element where the application status is found.
        }
      }
    }
  ]
};

module.exports = config;