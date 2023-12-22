const home = document.getElementById("home");
const about = document.getElementById("about");
const background = document.getElementById("background");
const objective = document.getElementById("objective");
const experience = document.getElementById("experience");
const contacts = document.getElementById("contacts");

const buttons = [home, about, background, objective, experience, contacts];

function selectbuttons(clickedIndex) {
    for (let i = 0; i < buttons.length; i++) {
        if (i === clickedIndex) {
            buttons[i].style.fontWeight = "bold";
        } else {
            buttons[i].style.fontWeight = "normal";
        }
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        selectbuttons(i);
    });
}

const content = document.querySelector('.main-content');
const group_scroll = [0, 500, 1000, 1500, 2000, 2250, 3000];

content.addEventListener('scroll', () => {
    const num_scroll = content.scrollTop;
    //console.log(num_scroll);

    for (let i = 0; i < group_scroll.length - 1; i++) {
        if (num_scroll >= group_scroll[i] && num_scroll < group_scroll[i + 1]) {
            selectbuttons(i);
        }
    }
});