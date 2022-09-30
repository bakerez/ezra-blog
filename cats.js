cats = document.getElementsByClassName("image")
console.log(cats)

var link = document.getElementsByTagName("a")
console.log(link)

first_cat = cats[0]
console.log(first_cat.innerHTML)
console.log(first_cat.textContent)

/*
<div class="image">
    <img alt={caption} src={catphotoURL} class="cat-photo" />
    <p>{caption}</p>
</div>
*/
function create_cat(catphotoURL, caption, identifier){ 
    var new_cat = document.createElement('div')
    new_cat.classList.add("image")
    new_cat.id = identifier

    var pic = document.createElement('img')
    pic.classList.add("cat-photo")
    pic.src = catphotoURL
    pic.alt = caption
    new_cat.appendChild(pic)

    var cap = document.createElement('p')
    cap.classList.add("cat-caption")
    cap.textContent += caption
    new_cat.appendChild(cap)

    var cat_container = document.getElementById("cat-container")
    cat_container.appendChild(new_cat)
}

var togg = 0
button = document.getElementById('cat-toggle')
button.addEventListener('click', function () {
    // var my-cat = document.getElementById("button-cat")
    if (togg === 0) {
        create_cat("cats/sadie.jpg", "A cute cat that does not belong to me :)", "button-cat")
        togg = 1
    } else {
        var destroy = document.getElementById("button-cat")
        destroy.remove()
        togg = 0
    }
})

/*
link = document.getElementsByClassName('navlink')[0]
link.addEventListener('click', function (event) {
    event.preventDefault()
}
)
*/
