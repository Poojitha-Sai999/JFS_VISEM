// Auto-calculate total fee
let subjects = document.querySelectorAll(".subject");
let totalBox = document.getElementById("total");

subjects.forEach(item => {
    item.addEventListener("change", () => {
        let total = 0;

        subjects.forEach(sub => {
            if (sub.checked) {
                total += parseInt(sub.value);
            }
        });

        totalBox.innerText = "₹" + total;
    });
});

// Form submit
document.getElementById("regForm").addEventListener("submit", function(e){
    e.preventDefault();   // stop page reload

    let selectedSubjects = [];
    let totalFee = 0;
    let cnt = 0;

    subjects.forEach(sub => {
        if (sub.checked) {
            cnt++;
            // Get subject name from the label text
            let subjectName = sub.parentElement.innerText.trim();
            selectedSubjects.push(cnt + ". " + subjectName);
            totalFee += parseInt(sub.value);
        }
    });

    if (selectedSubjects.length === 0) {
        alert("Please select at least one subject.");
        return;
    }

    let studentName = document.getElementById("name").value;

    let message =
        "Student Name: " + studentName + "\n" +
        "Selected Subjects:\n " + selectedSubjects.join("\n") + "\n\n" +
        "Total Fee: ₹" + totalFee;


    // 🔹 Show details inside the pink #result box
    let resultBox = document.getElementById("result");
    resultBox.style.display = "block";
    resultBox.innerHTML =
        "<strong>Student Name:</strong> " + studentName + "<br><br>" +
        "<strong>Selected Subjects:</strong><br>" +
        selectedSubjects.join("<br>") + "<br><br>" +
        "<strong>Total Fee:</strong> ₹" + totalFee;
});
