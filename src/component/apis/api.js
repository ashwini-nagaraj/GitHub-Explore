import axios from "axios";

const BASE_URL_ENDPOINT = "https://api.github.com";

export async function getUserInfo(userName) {
  const response = await axios.get(`${BASE_URL_ENDPOINT}/users/${userName}`);
  return response;
}

export async function getUserRepositoriesInitial(userName) {
  const repositories = await axios.get(
    `${BASE_URL_ENDPOINT}/users/${userName}/repos?page=1&per_page=6`
  );
  return repositories;
}

export async function getUserRepositoriesNextPage(userName, currentPage) {
  const nextPagerepositories = await axios.get(
    `${BASE_URL_ENDPOINT}/users/${userName}/repos?page=${currentPage}&per_page=6`
  );
  return nextPagerepositories;
}

export async function getAllRepositories(userName) {
  const response = await axios.get(
    `${BASE_URL_ENDPOINT}/users/${userName}/repos?&per_page=1000`
  );
  return response;
}

export async function getUserStarredRepos(userName) {
  const response = await axios.get(
    `${BASE_URL_ENDPOINT}/users/${userName}/starred`
  );
  return response;
}
