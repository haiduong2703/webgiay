const list = document.querySelector(".listproduct");
const newfeed = document.querySelector(".newfeed");
const productmens = document.querySelector(".productsmen");
const $ = document.querySelector.bind(document);
var slideIndex = 1;
var app = {
  products: [
    {
      image: "./image/product1.jpg",
      coinsale: "1.000.000đ",
      coin: "2.000.000đ",
    },
    {
      image: "./image/product2.jpg",
      coinsale: "1.500.000đ",
      coin: "3.000.000đ",
    },
    {
      image: "./image/product3.png",
      coinsale: "1.200.000đ",
      coin: "2.000.000đ",
    },
    {
      image: "./image/product5.png",
      coinsale: "2.500.000đ",
      coin: "4.000.000đ",
    },
  ],
  newfeeds: [
    {
      image: "./image/imgnf.png",
      title: "GIÀY NAM NĂNG ĐỘNG",
      content:
        "Sneaker đã trở thành một biểu tượng của xã hội, là một sản phẩm của thời đại với những thiết kế cổ điển và những điều đó đều nằm trong những đôi giày Sneaker Japan Shoes. Không lỗi thời với thời gian, mang dấu ấn cá tính khác biệt và tạo mọi sự lôi cuốn từ chính đôi giày Sneaker. Tự tạo cuộc chơi, tự tạo phong cách, đó là Japan Shoes",
    },
  ],
  productsmen: [
    {
      image: "./image/product1.jpg",
      coinsale: "2.500.000đ",
      coin: "4.000.000đ",
    },
    {
      image: "./image/product2.jpg",
      coinsale: "1.500.000đ",
      coin: "3.000.000đ",
    },
    {
      image: "./image/product3.png",
      coinsale: "1.200.000đ",
      coin: "2.000.000đ",
    },
    {
      image: "./image/product5.png",
      coinsale: "2.500.000đ",
      coin: "4.000.000đ",
    },
  ],
  productsgirl: [
    {
      image: "./image/product1.jpg",
      coinsale: "2.500.000đ",
      coin: "4.000.000đ",
    },
    {
      image: "./image/product2.jpg",
      coinsale: "1.500.000đ",
      coin: "3.000.000đ",
    },
    {
      image: "./image/product3.png",
      coinsale: "1.200.000đ",
      coin: "2.000.000đ",
    },
    {
      image: "./image/product5.png",
      coinsale: "2.500.000đ",
      coin: "4.000.000đ",
    },
  ],
  newfeedgirl: [
    {
      image: "./image/giaynu1.png",
      title: "GIÀY NỮ THANH LỊCH",
      content:
        "Ra đời từ thế kỉ XX, từ sự tiện dụng cho đến biểu tượng của phong cách casual. Giày lười Japan Shoes là một trong những đại diện của sự chững chạc trong thời trang, là xu hướng của thế giới thời trang tối giản. Đồng hành cùng Japan Shoes là đồng hành với chuẩn mực của chính bạn.",
    },
  ],
  render: function () {
    const htmls = this.products.map((product, index) => {
      return `
                <div class="one_product">
                    <div class="img"> <img src="${product.image}"></div>
                    <div class="coins">
                        <div class="coin">
                        <p style="color:red;font-weight:bold">Giá sale:${product.coinsale}</p>
                        <p style="font-weight:bold">Giá cũ: ${product.coin}</p>
                        </div>
                        <div class="chitiet"><p style="color:red">Chi Tiết</p></div>
                    </div>
                </div>
            `;
    });

    list.innerHTML = htmls.join("");
  },
  rendernew: function () {
    const htmls = this.newfeeds.map((newfeed) => {
      return `
        <div class="image">
          <img src="${newfeed.image}">
        </div>
        <div class="content">
        <h2>${newfeed.title}</h2>
          <p>${newfeed.content}</p>
          <a href="#">XEM TẤT CẢ</a>
        </div>
      `;
    });
    newfeed.innerHTML = htmls.join("");
  },
  rendernewgirl: function () {
    const htmls = this.newfeedgirl.map((newfeed) => {
      return `
        <div class="image">
          <img src="${newfeed.image}">
        </div>
        <div class="content">
        <h2>${newfeed.title}</h2>
          <p>${newfeed.content}</p>
          <a href="#">XEM TẤT CẢ</a>
        </div>
      `;
    });
    $(".newfeedgirl").innerHTML = htmls.join("");
  },
  rendermen: function () {
    const htmls = this.productsmen.map((men, index) => {
      return `
                <div class="one_productmen">
                    <div class="imgmen"> <img src="${men.image}"></div>
                    <div class="coinsmen">
                        <div class="coinmen">
                        <p style="color:red;font-weight:bold">Giá sale:${men.coinsale}</p>
                        <p style="font-weight:bold">Giá cũ: ${men.coin}</p>
                        </div>
                        <div class="chitietmen"><p style="color:red">Chi Tiết</p></div>
                    </div>
                </div>
            `;
    });
    productmens.innerHTML = htmls.join("");
  },
  rendergirl: function () {
    const htmls = this.productsgirl.map((men, index) => {
      return `
                <div class="one_productgirl">
                    <div class="imggirl"> <img src="${men.image}"></div>
                    <div class="coinsgirl">
                        <div class="coingirl">
                        <p style="color:red;font-weight:bold">Giá sale:${men.coinsale}</p>
                        <p style="font-weight:bold">Giá cũ: ${men.coin}</p>
                        </div>
                        <div class="chitietgirl"><p style="color:red">Chi Tiết</p></div>
                    </div>
                </div>
            `;
    });
    $(".productsgirl").innerHTML = htmls.join("");
  },
  // Show slide
  showSlides: function (slideIndex) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots.className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
  },
  plusSlide: function (n) {
    showSlides((slideIndex += n));
  },
  currentSlide: function (n) {
    showSlides((slideIndex += n));
  },

  start: function () {
    this.render();
    this.rendernew();
    this.rendermen();
    this.rendernewgirl();
    this.rendergirl();
  },
};
app.start();
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 6000); // Change image every 2 seconds
// }
// var slidesIndex = [1, 1];
// /* Class the members of each slideshow group with different CSS classes */
// var slideId = ["mySlides1", "mySlides2"];
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   showSlides((slidesIndex[no] += n), no);
// }

// function showSlides(n, no) {
//   var i;
//   var x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {
//     slidesIndex[no] = 1;
//   }
//   if (n < 1) {
//     slidesIndex[no] = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slidesIndex[no] - 1].style.display = "block";
// }
