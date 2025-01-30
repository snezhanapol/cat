window.onload = () => {
    const link = document.querySelector("#image-link")
    const audio = document.querySelector("#cat-audio")

    link.addEventListener("click", (e) => {
        e.preventDefault();

        audio?.play();

        window.open("test.html")
    })
}