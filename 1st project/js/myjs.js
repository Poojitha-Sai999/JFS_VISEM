function showDetails() {

    let name = document.getElementById("nameSelect").value;

    let photo = document.getElementById("photo");
    let info = document.getElementById("infoText");

    // Clear any special classes first
    photo.classList.remove("photo-james");
    photo.classList.remove("photo-james-blue");

    // Image mapping
    let photos = {
        "guido": "images/guido.jpg",
        "dennis": "images/dennis.jpg",
        "james": "images/james.jpg",
        "stroustrup": "images/stroustrup.jpg",
        "juergen": "images/juergen.jpg",
        "krishna": "images/krishna.jpg",
        "bill_gates": "images/bill_gates.jpg",
        "steve_jobs": "images/steve_jobs.jpg",
        "elon_musk": "images/elon_musk.jpg",
        "zukerberg": "images/zukerberg.jpg",
        "linus_torvalds": "images/linus_torvalds.jpeg",
        "tim_berner": "images/tim_berner.jpg",
        "Sundar_Pichai": "images/Sundar_Pichai.jpg",
        "satyanadella": "images/satyanadella.jpg",
        "AdaLovelace": "images/AdaLovelace.jpg",
        "madhu": "images/madhu.jpg",
        "poojitha": "images/poojitha.jpg"

    };

    // Details mapping
    let details = {
        "guido": "Guido van Rossum created Python in 1991.",
        "dennis": "Dennis Ritchie developed C and co-created UNIX.",
        "james": "James Gosling invented Java in 1995.",
        "stroustrup": "Bjarne Stroustrup created C++.",
        "juergen": "Juergen Hoeller is the co-creator of Spring Framework.",
        "krishna": "E Krishna Rao Patro — JFS Trainer.",
        "madhu": "B. Madhusudhan Rao — JFS Trainer.",
        "bill_gates": "Bill Gates co-founded Microsoft.",
        "steve_jobs": "Steve Jobs co-founded Apple.",
        "elon_musk": "Elon Musk leads Tesla & SpaceX.",
        "zukerberg": "Mark Zuckerberg founded Facebook.",
        "linus_torvalds": "Linus Torvalds created Linux.",
        "tim_berner": "Tim Berners-Lee invented the World Wide Web.",
        "Sundar_Pichai": "Sundar Pichai is the CEO of Google.",
        "satyanadella": "Satya Nadella is the CEO of Microsoft.",
        "AdaLovelace": "Ada Lovelace was the first computer programmer.",
        "poojitha": "Poojitha is a AIML student of iare."

    };

    // If nothing selected
    if (name === "") {
        photo.style.display = "none";
        info.innerHTML = "Please select a person from the dropdown.";
        return;
    }

    // Set photo
    photo.src = photos[name];
    photo.style.display = "block";

    // Set details
    info.innerHTML = details[name];

    // Special frame ONLY for James
    if (name === "james") {
        photo.classList.add("photo-james-blue");
    }
}
// When main OK button is clicked → show popup
document.getElementById("okBtn").onclick = function () {
    document.getElementById("confirmBox").style.display = "block";
};

// When cancel button clicked → close popup
document.getElementById("cancelBtn").onclick = function () {
    document.getElementById("confirmBox").style.display = "none";
};

// When OK inside popup clicked → run showDetails()
document.getElementById("confirmOkBtn").onclick = function () {
    document.getElementById("confirmBox").style.display = "none";
    showDetails();  // now show pic + info
};

