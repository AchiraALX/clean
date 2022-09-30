function write() {
    setInterval(() => {
        var countDownDate = new Date("Jan 30, 2023 23:59:00").getTime();
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
        document.getElementById("c_out").innerHTML = 
        '<i class="uil uil-calender-alt"></i>' + days + " D &nbsp;" + hours + " H &nbsp;" + minutes + " M &nbsp;"
            + seconds + " Secs."; 
        
        var calender_icon = document.getElementById("calender_icon");
        calender_icon.style.display = "block";
        
    }, 1000);

    const head_text = "A community is a place where people share thoughts.";
    const head_container = document.getElementById("community_description");

    let counter = 0;
    var display_text = setInterval(() => {
        head_container.innerHTML += head_text[counter];
        counter++;
        if (counter == head_text.length) {
            clearInterval(display_text);
        }
    }, 200);

    const c_out = document.getElementById("c_out");
    c_out.style.background = "aliceblue"
    c_out.style.padding = "15px"
    c_out.style.borderRadius = "5px"

    
    const container = document.querySelector("#slide_container");
    
    container.style.position = "relative"
    
    var btn = document.createElement("button");
    const text = document.createTextNode("\u2B9E");
    var btn2 = document.createElement("button");
    const text2 = document.createTextNode("\u2B9C");

    
    const position = "absolute";
    const padding = "10px 25px";

    btn.style.position = position;
    btn.style.right = "10%";
    btn.style.padding = padding;
    btn2.style.position = position
    btn2.style.left = "10%";
    btn2.style.padding = padding;

    btn.appendChild(text);
    container.appendChild(btn);
    btn2.appendChild(text2);
    container.appendChild(btn2);

    
    const slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
    }

    var slideIndex = 0;
    slides[slideIndex].style.display = "block";
    showSlides();

    
    function showSlides() {
        var i;
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].style.maxwidth = "0%";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].style.maxwidth = "100%";
        setTimeout(showSlides, 20000); // Change image every 2 seconds
    }



    btn2.addEventListener("click", () => {
        if (slideIndex == 1) {
            slideIndex = 1;
        } else {
            slideIndex--;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].style.maxwidth = "0%";
        }
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].style.maxwidth = "100%";
    })

    btn.addEventListener("click", () => {
        if (slideIndex == slides.length) {
            slideIndex = slides.length;
        } else {
            slideIndex++;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].style.maxwidth = "0%";
        }
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].style.maxwidth = "100%";
    });

    const base = document.getElementById("baseline");
    const de_indicator = document.getElementById("de_indicator");

    de_indicator.style.width = "0%"

    function calc(base, offset) {
        return (base / offset) * 100;
    }

    window.onscroll = (() => {
        var scroll = document.documentElement.scrollTop;
        var offset = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var percent = calc(scroll, offset);
        de_indicator.style.width = percent + "%";
    });
}


/*
    i = 0;
    slides[0].style.display = "block"
    btn.addEventListener("click", () => {
        i += 1;
        if (i != 0) {
            slides[i - 1].style.display = 'none'
        }
        if (i == slides.length) {
            i = 0;
        }
        slides[i].style.display = "block"
    })
}
*/
