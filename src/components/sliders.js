function slider() {
  const images = [
    "https://media.istockphoto.com/id/517188688/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D1%96%D1%80%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6.jpg?s=612x612&w=0&k=20&c=aYXSnpX9gjqdRBW0vgw-4QIM-YNvdpvofUWE4c2dVGA=",
    "https://media.istockphoto.com/id/471926619/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D0%B7%D0%B5%D1%80%D0%BE-%D0%BC%D0%BE%D1%80%D0%B0%D0%B9%D0%BD-%D0%BD%D0%B0-%D1%81%D1%85%D0%BE%D0%B4%D1%96-%D1%81%D0%BE%D0%BD%D1%86%D1%8F-%D0%BD%D0%B0%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9-%D0%BF%D0%B0%D1%80%D0%BA-%D0%B1%D0%B0%D0%BD%D1%84-%D0%BA%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0.jpg?s=612x612&w=0&k=20&c=eH8HxVHvmyw10sOmOTeMMrZQMoMi23CktV744cQbmrU=",
    "https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2015/09/12/150912103819_wikipedia_images_976x549_roxanabashyrova.jpg.webp",
    "https://st2.depositphotos.com/1002200/6221/i/450/depositphotos_62212817-stock-photo-autumn-landscape-in-a-mountain.jpg",
    "https://media.istockphoto.com/id/509636590/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D1%83%D0%BC%D0%B0%D0%BD%D0%BD%D0%B8%D0%B9-%D0%BB%D1%96%D1%82%D0%BD%D1%96%D0%B9-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6-%D0%B3%D1%96%D1%80%D1%81%D1%8C%D0%BA%D0%B8%D1%85-%D0%BF%D0%B0%D0%B3%D0%BE%D1%80%D0%B1%D1%96%D0%B2.jpg?s=612x612&w=0&k=20&c=JYvJC-6hNDe6cjLSmAA3E6tIoDv3IjKIH28wl5gNbJM=",
  ];

  const img = document.querySelector(".imageSliders");
  const btnNext = document.querySelector(".btnNext");
  const btnBack = document.querySelector(".btnBack");

  let index = 0;

  img.src = images[index];

  btnNext.addEventListener("click", () => {
    index = (index + 1) % images.length;

    img.src = images[index];
  });

  btnBack.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;

    img.src = images[index];
  });
}

slider();
