const aCourse = {
  code: 'CSE121b',
  sections: [
    { sectionNum: 1, Course: 'WDD131', roomNum: 'STC 353', enrolled: 26, days: 'Tues/Thurs', time: '9:00 AM - 10:00 AM', instructor: 'Bro T' },
    { sectionNum: 2, Course: 'WDD130', roomNum: 'STC 347', enrolled: 28, days: 'Tues/Thurs', time: '11:00 AM - 12:00 PM', instructor: 'Sis A' }
  ],
  enrollStudent: function (sectionNum) {
    // We use == to allow string comparison from input values
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }
  }
};

function sectionTemplate(section) {
  return `<tr>
      <td>${section.Course}</td>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.time}</td>
      <td>${section.instructor}</td>
      <td>
        <button class="delete-btn" data-id="${section.sectionNum}">Delete</button>
      </td>
      </tr>`;
}

function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join("");
}

// 1. ADD SECTION LOGIC
document.getElementById('addSection').addEventListener('click', () => {
  const sNum = document.getElementById('newSectionNum').value;
  
  if (!sNum) return;

  aCourse.sections.push({
    sectionNum: parseInt(sNum),
    Course: document.getElementById('newCourse').value || "N/A",
    roomNum: document.getElementById('newRoom').value || "N/A",
    enrolled: 0,
    days: document.getElementById('newDays').value || "N/A",
    time: document.getElementById('newTime').value || "N/A",
    instructor: document.getElementById('newInstructor').value || "N/A"
  });

  renderSections(aCourse.sections);

  // Clear inputs inside the specific add area
  document.querySelectorAll('#addSectionArea input').forEach(input => input.value = '');
});

// 2. ENROLL STUDENT LOGIC
document.querySelector("#enrollStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.enrollStudent(sectionNum);
});

// 3. DELETE LOGIC (Event Delegation)
document.querySelector("#sections").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const sectionId = e.target.getAttribute("data-id");
    // Update the array by filtering out the matching sectionNum
    aCourse.sections = aCourse.sections.filter(s => s.sectionNum != sectionId);
    renderSections(aCourse.sections);
  }
});

// INITIAL RENDER
renderSections(aCourse.sections);