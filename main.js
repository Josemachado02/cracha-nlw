const linksSocialMedia = {
  github: 'Josemachado02',

  facebook: 'jose.walter.02',

  instagram: 'josee_walter'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}



function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`//templattes string

  fetch(url)
  .then(response => response.json())
  .then(data => {
     userName.textContent = data.name
     userBio.textContent = data.bio
     userLink.href = data.html_url
     userImage.src = data.avatar_url
     userLogin.textContent = data.login
  }
  )

}
changeSocialMediaLinks()
getGitHubProfileInfos()


//ARROW FUNCTIONS
//argumentos=> {}