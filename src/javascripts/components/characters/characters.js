import characterData from '../../helpers/data/characterData';
import util from '../../helpers/util';
import './characters.scss';

let characters = [];

const domStringBuilder = () => {
  let domString = '';
  characters.forEach((char) => {
    domString += `<div class = "house-${char.house.toLowerCase()}">`;
    domString += '<div class="img-holder">';
    domString += `<img src=${char.imageUrl} />`;
    domString += '</div>';
    domString += `<h2 class="char-name">${char.name}</h2>`;
    domString += '</div>';
  });
  util.printToDom('characters', domString);
};

const getData = () => {
  characterData.getCharacterData()
    .then((response) => {
      const charactersArray = response.data.characters;
      characters = charactersArray;
      domStringBuilder();
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { getData };
