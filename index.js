function toggleSideBar() {
    const menuBar = document.querySelector(".menu-bar-display");
    if (menuBar.classList.contains("close")) {
        menuBar.classList.remove("close");
    } else {
        menuBar.classList.add("close");
    }
    document.getElementById("dropdown-content").classList.add("hide");
    document.getElementById("filter-dropdown-content").classList.add("hide");[]
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
    document.getElementById("header-display").style.width = "99%";
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
    if (document.querySelector("body").classList.contains("dark")){
        document.querySelector("body").classList.remove("dark")
        document.getElementById("theme").innerHTML = 
        `<i class="icofont-sun"></i>`
        document.getElementById("menu-bar-images").innerHTML = 
            `<span><img src="images/logo-sm.png" alt=""></span>
            <img src="/logo-dark.png" alt="">`
    }
    else {
        document.querySelector("body").classList.add("dark")
        document.getElementById("theme").innerHTML = `<i class="ri-moon-fill"></i>`
        document.getElementById("menu-bar-images").innerHTML = 
            `<span><img src="images/logo-sm.png" alt=""></span>
            <img src="images/logo-light.png" alt="">`
    }
}
function checkAll() {
    const checks = document.querySelectorAll("#details-content input[type=checkbox]");
    checks.forEach(item => {
        if (item.getAttribute("checked")) {
            item.removeAttribute("checked");
        } else {
            item.setAttribute("checked", "checked");
        }
    })
}