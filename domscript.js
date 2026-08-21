function addParagraph() {
    let para = document.createElement("p");

    para.innerText = "This is a new paragraph";
    para.style.color = "blue";

    document.getElementById("root").appendChild(para);
}


function removeParagraph() {
    let root = document.getElementById("root");

    let paragraphs = root.getElementsByTagName("p");

    if (paragraphs.length > 0) {
        paragraphs[paragraphs.length - 1].remove();
    }
}


function removeAllParagraphs() {
    let root = document.getElementById("root");

    let paragraphs = root.getElementsByTagName("p");

    while (paragraphs.length > 0) {
        paragraphs[0].remove();
    }
}