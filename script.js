const url = "https://deliveryproducts-9391.restdb.io/rest/delivery-products";

const options = {
  headers: {
    "x-apikey": "637d3121c890f30a8fd1f507",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => handlePics(data));

function handlePics(data) {
  console.log(data);
  let info = data.filter((prod) => prod.productType == 1);
  console.log(info);
}
