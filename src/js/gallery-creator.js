import cocktailCard from '../template/cocktail-card.hbs';
import notFoundCoctail from '../template/not-found-cocktails.hbs';
import { getApiData } from './rendering-catalogue';
import { checkingScreenWidth } from './checking-screen-width';

refsGallery = {
  formHeader: document.querySelector('.header__search-form'),
  cataloguePattern: document.querySelector('.catalogue__list'),
};

const getClassApiData = new getApiData();

refsGallery.formHeader.addEventListener('submit', getSearchCocktailByName);

function getSearchCocktailByName(e) {
  e.preventDefault();
  getClassApiData.value = e.currentTarget.elements.headerInput.value.trim();
  refsGallery.formHeader.reset();
  if (getClassApiData.value) {
    getClassApiData.key = 's';
    getRenderingCocktailByName();
    refsGallery.cataloguePattern.innerHTML = '';
  }
}

async function getRenderingCocktailByName() {
  const r = await getClassApiData.getParsedApiData();

  if (r !== null) {
    getRenderingApi(r);
  } else {
    refsGallery.cataloguePattern.innerHTML = '';
    refsGallery.cataloguePattern.insertAdjacentHTML(
      'beforeend',
      notFoundCoctail()
    );
  }
}

async function getRenderingRandomCoctail() {
  for (let i = 0; i < checkingScreenWidth; i += 1) {
    const r = await getClassApiData.getParsedApiDataRandom();
    getRenderingApi(r);
  }
}

getRenderingRandomCoctail();

function getRenderingApi(r) {
  const data = r
    .map(result => {
      return cocktailCard(result);
    })
    .join('');

  refsGallery.cataloguePattern.insertAdjacentHTML('beforeend', data);
}
