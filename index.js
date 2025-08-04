function toggleSideBar() {

    const menuBar = document.querySelector(".menu-bar-display");
    if (menuBar.classList.contains("close")) {
        menuBar.classList.remove("close")
        menuBar.classList.add("toggle-active")
        document.querySelector(".menu-bar-initial-display").classList.add("close");
    } else {
        menuBar.classList.add("close")
        menuBar.classList.remove("toggle-active")
        document.querySelector(".menu-bar-initial-display").classList.remove("close");
    }
    document.getElementById("dropdown-content").classList.add("hide");
    document.getElementById("filter-dropdown-content").classList.add("hide");
}

function showMenuBar() {
    const menuBar = document.querySelector(".menu-bar-display");
        const menu = document.querySelector(".menu-bar-initial-display")
        menuBar.classList.remove("close")
        menu.classList.add("close")
}

function hideMenuBar() {
    const menuBar = document.querySelector(".menu-bar-display");
    if (!menuBar.classList.contains("toggle-active")) {
        const menu = document.querySelector(".menu-bar-initial-display")
        menuBar.classList.add("close")
        menu.classList.remove("close")
    }
}

function showLanguageOptions() {
    const showLangauage = document.getElementById("dropdown-content");
    if (showLangauage.classList.contains("hide")) {
        showLangauage.classList.remove("hide");
    }
    else {
        showLangauage.classList.add("hide");
    }
    document.getElementById("filter-dropdown-content").classList.add("hide");
}

function filterDisplay() {
    const filter = document.getElementById("filter-dropdown-content");
    if (filter.classList.contains("hide"))
        filter.classList.remove("hide");
    else {
        filter.classList.add("hide");
    }
    document.getElementById("dropdown-content").classList.add("hide");
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header-display").style.width = "98%";
    document.getElementById("header-display").style.marginLeft = "1%";
    document.getElementById("header-display").style.marginRight = "1%";
    document.getElementById("header-display").style.paddingTop = "25px";
    document.getElementById("header-display").style.borderBottomLeftRadius = "12px";
    document.getElementById("header-display").style.borderBottomRightRadius = "12px";
    document.getElementById("header-display").classList.add("header-display-s");
  } else {
    document.getElementById("header-display").style.width = "100%";
    document.getElementById("header-display").style.marginLeft = "0";
    document.getElementById("header-display").style.marginRight = "0";
    document.getElementById("header-display").style.paddingTop = "30px";
    document.getElementById("header-display").style.borderBottomLeftRadius = "0";
    document.getElementById("header-display").style.borderBottomRightRadius = "0";
    document.getElementById("header-display").style.marginInline = "auto";
    document.getElementById("header-display").classList.remove("header-display-s");
  }
}

function darkMode() {
    const bodyDark = document.querySelector("body");
    if (bodyDark.classList.contains("dark")) {
        bodyDark.classList.remove("dark");
        document.getElementById("theme").innerHTML = `<i class="icofont-sun"></i>`;
        document.getElementById("menu-bar-images").innerHTML =
            `<span><img src="images/logo-sm.png" alt=""></span>
            <img src="images/logo-dark.png" alt="">`;
        localStorage.setItem("theme", "light"); 
    } else {
        bodyDark.classList.add("dark");
        document.getElementById("theme").innerHTML = `<i class="ri-moon-fill"></i>`;
        document.getElementById("menu-bar-images").innerHTML =
            `<span><img src="images/logo-sm.png" alt=""></span>
            <img src="images/logo-light.png" alt="">`;
        localStorage.setItem("theme", "dark"); 
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        document.getElementById("theme").innerHTML = `<i class="ri-moon-fill"></i>`;
        document.getElementById("menu-bar-images").innerHTML =
            `<span><img src="images/logo-sm.png" alt=""></span>
            <img src="images/logo-light.png" alt="">`;
    } else {
        document.body.classList.remove("dark");
        document.getElementById("theme").innerHTML = `<i class="icofont-sun"></i>`;
        document.getElementById("menu-bar-images").innerHTML =
            `<span><img src="images/logo-sm.png" alt=""></span>
            <img src="images/logo-dark.png" alt="">`;
    }
});
function checkAll() {
    const mainCheckbox = document.getElementById("main-checkbox");
    const checks = document.querySelectorAll("#details-content tbody input[type=checkbox]");

    checks.forEach(cb => {
        cb.checked = mainCheckbox.checked;
    });

    mainCheckbox.indeterminate = false;
}

document.addEventListener("change", function(e) {
    if (e.target.matches("#details-content tbody input[type=checkbox]")) {
        const mainCheckbox = document.getElementById("main-checkbox");
        const checks = document.querySelectorAll("#details-content tbody input[type=checkbox]");
        const checkedCount = Array.from(checks).filter(cb => cb.checked).length;

        if (checkedCount === 0) {
            mainCheckbox.checked = false;
            mainCheckbox.indeterminate = false;
        } else if (checkedCount === checks.length) {
            mainCheckbox.checked = true;
            mainCheckbox.indeterminate = false;
        } else {
            mainCheckbox.checked = false;
            mainCheckbox.indeterminate = true;
        }
    }
});

function addProduct() {
    const modal = document.querySelector(".add-new");
    modal.classList.add("slidein");
    modal.classList.remove("slideout");
    if (modal.classList.contains("slidein")) {
        document.getElementById("main-display").style.filter = "blur(1.5px)";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const cancelBtn = document.getElementById("cancel-add-product");
    if (cancelBtn) {
        cancelBtn.addEventListener("click", function() {
            const newUserForm = document.querySelector(".add-new");
            newUserForm.classList.remove("slidein");
            newUserForm.classList.add("slideout");
            document.getElementById("main-display").style.filter = "blur(0px)";
        });
    }
});

window.addEventListener("load", function(e) {
    const data = [
        {
            product_name: "Sophisticated Swagger Suit",
            product_price: "1200",
            product_quantity: 10,
            product_category: "Hats",
            customer_email: "francis@gmail.com",
            product_image: "images/placeholder.png"
        }
    ]
    let productData = localStorage.getItem("productData");
    if (!productData) {
        localStorage.setItem("productData", JSON.stringify(data));
        productData = localStorage.getItem("productData");
    }
    const productDataParse = JSON.parse(productData);
    const productTable = document.querySelector("#details-content tbody");
    productDataParse.forEach(item => {
        const tr = document.createElement("tr");
        // When creating each row in your table:
        tr.innerHTML = `
            <td>
                <label>
                    <input type="checkbox">
                    <span id="check-mark"></span>
                </label>
            </td>
            <td>
                <img src="${item.product_image || 'images/placeholder.png'}" alt="Product" style="width:40px;height:40px;object-fit:cover;border-radius:6px;margin-right:8px;">
                ${item.product_name}
            </td>
            <td>${item.product_price}</td>
            <td>${item.product_quantity}</td>
            <td>${item.product_category}</td>
            <td>${item.customer_email}</td>
            <td>
                <i class="ri-pencil-line" onclick="editProductDetails('${item.customer_email}')"></i>
                <i class="ri-delete-bin-5-line" onclick="deleteProductEntry('${item.customer_email}')"></i>
            </td>
        `;
        productTable.appendChild(tr);
    })
});

function showSuccessMessage(message) {
    const oldMsg = document.getElementById("success-message");
    if (oldMsg) oldMsg.remove();

    const msg = document.createElement("div");
    msg.id = "success-message";
    msg.textContent = message;
    msg.style.position = "fixed";
    msg.style.top = "30px";
    msg.style.right = "30px";
    msg.style.background = "#22c55e";
    msg.style.color = "#fff";
    msg.style.padding = "16px 28px";
    msg.style.borderRadius = "8px";
    msg.style.fontWeight = "bold";
    msg.style.fontSize = "16px";
    msg.style.zIndex = "2000";
    msg.style.boxShadow = "0 2px 8px rgba(34,197,94,0.15)";
    msg.style.transition = "opacity 0.5s";

    document.body.appendChild(msg);

    setTimeout(() => {
        msg.style.opacity = "0";
        setTimeout(() => msg.remove(), 500);
    }, 2000);
}

let editingProductEmail = null;


async function uploadToCloudinary(file) {
    const url = `https://api.cloudinary.com/v1_1/drpu2ycu6/image/upload`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'myUpload'); // Create this in your Cloudinary dashboard

    const response = await fetch(url, {
        method: 'POST',
        body: formData
    });
    const data = await response.json();
    return data.secure_url; // This is the image URL
}

async function addNewProduct() {
    const productName = document.getElementsByName("product_name")[0].value;
    const productPrice = document.getElementsByName("product_price")[0].value;
    const productQty = document.getElementsByName("product_quantity")[0].value;
    const productCategory = document.getElementsByName("product_category")[0].value;
    const customerEmail = document.getElementsByName("customer_email")[0].value;
    const productImageInput = document.getElementsByName("product_image")[0];
    const productImageFile = productImageInput && productImageInput.files[0];

    if (productName && productPrice && productQty && productCategory && customerEmail && productImageFile) {
        try {
            const imageUrl = await uploadToCloudinary(productImageFile);

            // Now use imageUrl as your product_image
            let productData = localStorage.getItem("productData");
            productData = productData ? JSON.parse(productData) : [];
            const newProduct = {
                product_name: productName,
                product_price: productPrice,
                product_quantity: productQty,
                product_category: productCategory,
                customer_email: customerEmail,
                product_image: imageUrl
            };
            productData.unshift(newProduct);
            localStorage.setItem("productData", JSON.stringify(productData));

            showSuccessMessage("Product added successfully!");
            setTimeout(() => window.location.reload(), 1000);
        } catch (err) {
            showAlertMessage("Image upload failed. Please try again.");
        }
    } else {
        showAlertMessage("Please fill in all fields and select an image.");
    }
}



function showAlertMessage(message) {
    const oldAlert = document.getElementById("alert-message");
    if (oldAlert) oldAlert.remove();

    const alert = document.createElement("div");
    alert.id = "alert-message";
    alert.textContent = message;
    alert.style.position = "fixed";
    alert.style.top = "5px";
    alert.style.right = "30px";
    alert.style.background = "#f87171";
    alert.style.color = "#fff";
    alert.style.padding = "14px 25px";
    alert.style.borderRadius = "8px";
    alert.style.fontWeight = "bold";
    alert.style.fontSize = "16px";
    alert.style.zIndex = "2000";
    alert.style.boxShadow = "0 2px 8px rgba(248,113,113,0.15)";
    alert.style.transition = "opacity 0.5s";

    document.body.appendChild(alert);

    setTimeout(() => {
        alert.style.opacity = "0";
        setTimeout(() => alert.remove(), 500);
    }, 2000);
}

function deleteProductEntry(email) {
    const oldPrompt = document.getElementById("delete-prompt");
    if (oldPrompt) oldPrompt.remove();

    const prompt = document.createElement("div");
    prompt.id = "delete-prompt";
    prompt.style.position = "fixed";
    prompt.style.top = "50%";
    prompt.style.left = "50%";
    prompt.style.transform = "translate(-50%, -50%)";
    prompt.style.background = "#fff";
    prompt.style.color = "#222";
    prompt.style.padding = "32px 36px";
    prompt.style.borderRadius = "12px";
    prompt.style.boxShadow = "0 4px 24px rgba(0,0,0,0.18)";
    prompt.style.zIndex = "3000";
    prompt.style.textAlign = "center";
    prompt.innerHTML = `
        <p style="font-size:16px;font-weight:bold;margin-bottom:18px;">Are you sure you want to delete this product entry?</p>
        <button id="confirm-delete" style="background-color:#f36178;color:#fff;padding:8px 22px;border:none;border-radius:6px;margin-right:12px;cursor:pointer;font-weight:600;">Yes</button>
        <button id="cancel-delete" style="background-color:#22c55e;color:#fff;padding:8px 22px;border:none;border-radius:6px;cursor:pointer;font-weight:600;">No</button>
    `;

    document.body.appendChild(prompt);

    document.getElementById("confirm-delete").onclick = function () {
        let productData = JSON.parse(localStorage.getItem("productData")) || [];
        const idx = productData.findIndex(item => item.customer_email === email);
        if (idx !== -1) {
            productData.splice(idx, 1);
            localStorage.setItem("productData", JSON.stringify(productData));
        }
        prompt.remove();
        showSuccessMessage("Product entry deleted successfully!");
        setTimeout(() => window.location.reload(), 1000);
    };

    document.getElementById("cancel-delete").onclick = function () {
        prompt.remove();
    };
}

document.addEventListener("DOMContentLoaded", function() {

    const greetingH1 = document.querySelector('#header h1');
    if (greetingH1) {
        const now = new Date();
        const hour = now.getHours();
        let greeting = "Good Morning, Francis!";
        if (hour >= 12 && hour < 17) {
            greeting = "Good Afternoon, Francis!";
        } else if (hour >= 17 || hour < 5) {
            greeting = "Goodnight, Francis";
        }
        greetingH1.textContent = greeting;
    }

});

function editProductDetails(email) {
    const productData = JSON.parse(localStorage.getItem("productData")) || [];
    const product = productData.find(item => item.customer_email === email);
    if (!product) return;

    document.getElementsByName("product_name")[0].value = product.product_name;
    document.getElementsByName("product_price")[0].value = product.product_price;
    document.getElementsByName("product_quantity")[0].value = product.product_quantity;
    document.getElementsByName("product_category")[0].value = product.product_category;
    document.getElementsByName("customer_email")[0].value = product.customer_email;

    const modal = document.querySelector(".add-new");
    modal.classList.add("slidein");
    modal.classList.remove("slideout");
    document.getElementById("main-display").style.filter = "blur(1.5px)";
}

// After showSuccessMessage and before reload:
document.querySelector(".add-new form").reset();