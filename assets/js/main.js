// const loginBtn = document.getElementById("login-btn");
console.log([1,2,8,11,3].sort((a,b)=>a-b));
const logoutBtn = document.getElementById("logout-btn");
const dlMode = document.getElementById("dl-mode");

if (localStorage.getItem("activeMode") == "dark") {
    document.body.classList.add("dark")
}
else{
    document.body.classList.add("light")
}

dlMode.addEventListener("click",()=>{
    if (localStorage.getItem("activeMode") == "dark") {
        localStorage.setItem("activeMode","light")
        document.body.classList.remove("dark")
        document.body.classList.add("light")
    }
    else{
        localStorage.setItem("activeMode","dark")
        document.body.classList.remove("light")
        document.body.classList.add("dark")
    }
})

// window.addEventListener("close",()=>{
// })
// console.log();



logoutBtn.addEventListener("click",()=>{
    let date = new Date('02-05-1990');
    // let expires = date.get
    document.cookie = `email=;expires=${date}`;
})

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}