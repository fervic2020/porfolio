//this program use to realize the items efect, locate on block porfolio

const items = document.getElementsByClassName("item");
const parentNodee = document.getElementsByClassName(
  "portfolio__imageWrapper"
)[0];

const tranformHtmlColeccionToArray = () => {
  const elementsArray = [];
  for (const iterator of items) {
    elementsArray.push(iterator);
  }
  return elementsArray;
};

const showItems = (classCss) => {
  const arrayy = tranformHtmlColeccionToArray();
  for (const iterator of arrayy) {
    if (iterator.classList.contains(classCss)) {
      iterator.style.display = "block";
    } else {
      iterator.style.display = "none";
    }
  }

  filterElement(arrayy, classCss);
};

const filterElement = (arrayy, classCss) => {
  const newArray = arrayy.filter((elements) => {
    console.log(arrayy[1].classList);
    if (elements.classList.contains(classCss)) {
      return true;
    } else {
      return false;
    }
  });
  responsive(newArray.length);
};

const responsive = (quantityElements) => {
  switch (quantityElements) {
    case 1:
      parentNodee.style.gridTemplateColumns = "100%";
      break;

    case 2:
      parentNodee.style.gridTemplateColumns = "50% 50%";
      break;

    default:
      parentNodee.style.gridTemplateColumns = "30% 30% 30%";
      break;
  }
};

//const filterClass = (cssClass) => items.filter((item)=> item.classList.contains(cssClass)).map(item => {item.style.display="none"})
