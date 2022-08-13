var cartData = JSON.parse(localStorage.getItem("addToCart")) || [];

displayData(cartData);
function displayData(cartData) {
  cartData.map(function (elm) {
    var input2 = `<img
          src="${elm.image_url}"
          alt=""
        />
        <div id="itemsData">
          <h2>${elm.name}</h2>

          <div id="addandminus">
            <h1> ${elm.price}</h1>
            <div>
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
            <button>
              <i
                class="fa-solid fa-trash-can"
                style="color: red; cursor: pointer"
              ></i>
            </button>
          </div>
        </div>`;
    var div = document.createElement("div");
    div.innerHTML = input2;
    document.querySelector("#cartDatamain").append(div);
  });
}
