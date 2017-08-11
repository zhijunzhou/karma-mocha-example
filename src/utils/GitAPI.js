// import axios from 'axios'
const axios = require('axios')

const instance = axios.create({
	baseURL: 'https://api.github.com',
	headers: {
		'Accept': 'application/vnd.github.mercy-preview+json'
	}
});

function getRepos(user, params) {
	return instance.get(`/users/${user}/repos?type=${params.type}&sort=${params.sort}&direction=${params.direction}`);
}

const GitAPI = {
	getRepos: getRepos
}

module.exports = GitAPI

// export default GitAPI