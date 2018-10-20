(function() {
  const buttonElement = document.getElementById('signin-button');

  buttonElement.addEventListener('click', openGithubSigninPage, false);

  function openGithubSigninPage() {
    // @TODO Changed window open url to production url
    // window.open("http://localhost:3030/api/auth/github");
  }
})();
