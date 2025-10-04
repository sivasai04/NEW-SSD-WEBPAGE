document.addEventListener('DOMContentLoaded', function() {
    
    // --- DATA ---
    const scheduleData = [
        { date: "01-Aug-25", topic: "Course Intro - Software Systems", materials: [{ text: "Slides", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/SSD_Monsoon2025.pdf" }, { text: "Notes", url: "https://tinted-rumba-8c6.notion.site/Software-System-2456a6248bf68034bc14cfc44dc93062" }] },
        { date: "05-Aug-25", topic: "Relational Data", materials: [{ text: "Slides", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/data.pdf" }, { text: "Notes", url: "https://tinted-rumba-8c6.notion.site/Structured-Databases-2456a6248bf6805f83e1cbf0a58761ec" }] },
        { date: "08-Aug-25", topic: "Unstructured Data - Session 1", materials: [{ text: "Slides", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/NoSQLClass.pdf" }, { text: "Notes", url: "https://tinted-rumba-8c6.notion.site/Unstructured-Databases-24b6a6248bf680679b36e76c33d301c4" }] },
        { date: "12-Aug-25", topic: "Unstructured Data - Session 2", materials: [{ text: "Notes", url: "https://tinted-rumba-8c6.notion.site/Unstructured-Databases-24b6a6248bf680679b36e76c33d301c4" }, { text: "Scripts", url: "https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/ISS_Spring_2025/mongo.txt" }], cancelled: true, reason: "Rain ⛈️" },
        { date: "19-Aug-25", topic: "Unstructured Data - Session 2", materials: [{ text: "Practice", url: "https://tinted-rumba-8c6.notion.site/Worked-out-Examples-2546a6248bf68073a460cbfc52825dfd" }, { text: "Notes", url: "https://tinted-rumba-8c6.notion.site/Some-Concepts-2546a6248bf6806fafd0d8260507fc03?pvs=73" }] },
        { date: "22-Aug-25", topic: "Web - HTML", materials: [{ text: "Web-Slides", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/Web.pdf" }, { text: "HTML-Slides", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/HTML.pdf" }, { text: "Notes", url: "https://tinted-rumba-8c6.notion.site/Web-Technology-2566a6248bf6800488d0c13a992502e4?pvs=143" }, {text: "Scripts", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/html_super_demo_single_file_html.html"}] },
        { date: "26-Aug-25", topic: "Web - CSS", materials: [{ text: "Notes", url: "https://tinted-rumba-8c6.notion.site/CSS-2566a6248bf680dc8299c320f04a5141?pvs=74" }, { text: "Scripts", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/css_super_demo_single_file_html.html" }] },
        { date: "29-Aug-25", topic: "JavaScript - Session 1", materials: [{ text: "Scripts", url: "https://github.com/sai11101989/sai11101989.github.io/tree/main/Course/SSD_Monsoon2025/JS1" }, { text: "Slides", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/ISS_Spring_2025/6_Class6_JavaScript.pdf" }] },
        { date: "02-Sep-25", topic: "JavaScript Session 2", materials: [{ text: "Scripts", url: "https://github.com/sai11101989/sai11101989.github.io/tree/main/Course/SSD_Monsoon2025/JS2" }, { text: "Notes", url: "https://tinted-rumba-8c6.notion.site/JavaScript-2606a6248bf680138283f6419bd87777" }] },
        { date: "04-Sep-25", topic: "JavaScript Session 3", materials: [], cancelled: true, reason: "Instructor Sick 🤒" },
        { date: "09-Sep-25", topic: "JavaScript Session 3", materials: [{ text: "Notes", url: "https://tinted-rumba-8c6.notion.site/Data-Structures-2686a6248bf680098b38d12626ad1012?pvs=74" }, { text: "Scripts", url: "https://github.com/sai11101989/sai11101989.github.io/tree/main/Course/SSD_Monsoon2025/JS3" }] },
        { date: "12-Sep-25", topic: "React JS", materials: [{ text: "Slide", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/ReactJS_2025.pdf" },{ text: "Notes", url: "https://www.notion.so/Asynchronous-JavaScript-26b6a6248bf68016971dd3bde3b89015" }, { text: "Scripts", url: "https://github.com/sai11101989/sai11101989.github.io/tree/main/Course/SSD_Monsoon2025/JS4" }] },
        { date: "26-Sep-25", topic: "SE Practices", materials: [{ text: "Slides", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/SEPractices.pdf" }] },
        { date: "26-Sep-25", topic: "System Design", materials: [{ text: "Slides", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/SystemDesign.pdf" }] },
        { date: "30-Sep-25", topic: "Python Session 1", materials: [{ text: "Slides", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/Python_Session1.pdf" }] },
        { date: "03-Oct-25", topic: "Python Session 2", materials: [{ text: "Slides", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/Python_Session2.pdf" }, { text: "Scripts", url: "https://github.com/sai11101989/sai11101989.github.io/blob/main/Course/SSD_Monsoon2025/Lec%202.ipynb" }] },
        { date: "07-Oct-25", topic: "Python - Session 3", materials: [] }, { date: "10-Oct-25", topic: "Python - Session 4", materials: [] }, { date: "14-Oct-25", topic: "Python - Session 5", materials: [] }, { date: "17-Oct-25", topic: "Python - Session 6", materials: [] }, { date: "24-Oct-25", topic: "Python - Session 7", materials: [] }, { date: "28-Oct-25", topic: "Python - Session 8", materials: [] }, { date: "31-Oct-25", topic: "Python - Session 9", materials: [] }, { date: "07-Nov-25", topic: "Python - Session 10", materials: [] }, { date: "11-Nov-25", topic: "SHELL Session 1", materials: [] }, { date: "14-Nov-25", topic: "SHELL Session 2", materials: [] }, { date: "18-Nov-25", topic: "Retrospection", materials: [] },
    ];

    const labData = [
        { date: "07-Aug-25", topic: "Git Session", notes: [{ text: "Slides", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/Labs/Lab01/SSD%20Tutorial%20%20-%20GIT.pdf" }, { text: "Activity", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/Labs/Lab01/SSD_GIT_LAB.pdf" }] },
        { date: "14-Aug-25", topic: "SQL Session", notes: [{ text: "Slides", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/Labs/Lab01/Lab-2.pdf" }, { text: "Activity", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/Labs/Lab01/Activity%20-%20Lab%202.pdf" }] },
        { date: "21-Aug-25", topic: "NoSQL Session", notes: [{ text: "Slides", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/Labs/Lab01/NoSQL%20Lab3.pdf" }, { text: "Activity", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/Labs/Lab01/Activity_lab3.pdf" }, { text: "Example", url:"https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/Labs/Lab01/NoSQL_Illustration.pdf"}] },
        { date: "28-Aug-25", topic: "DOM", notes: [{ text: "Slides & Activity", url: "https://github.com/sai11101989/sai11101989.github.io/tree/main/Course/SSD_Monsoon2025/DOM" }] },
        { date: "04-Sep-25", topic: "JS Session", notes: [{ text: "Slides & Activity", url: "https://github.com/sai11101989/sai11101989.github.io/tree/main/Course/SSD_Monsoon2025/JSLab" }] },
        { date: "18-Sep-25", topic: "Browser Events", notes: [{ text: "Slides", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/Browser%20DOM%20Events.pdf" }, { text: "Activity", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/SSD%20-%20Events%20Activity.pdf" }] },
        { date: "16-Sep-25", topic: "MERN Session - NodeJS", notes: [{ text: "Slides", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/MERN.pdf" }, { text: "Boiler Code", url: "https://github.com/AadityaNarain2003/Mern_Lab_1_" }] },
        { date: "19-Sep-25", topic: "MERN App - Session 2", notes: [{ text: "Boiler Code", url: "https://github.com/AadityaNarain2003/Mern_Lab_2_" }] },
        { date: "20-Sep-25", topic: "MERN App - Session 3", notes: [{ text: "Slides", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/MERN%20LAB%203%20-%20SLIDES.pdf" }, { text: "Activity", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/SSD_LAB___MERN.pdf" }] },
        { date: "03-Oct-25", topic: "MID and Project Phase 1 Evaluation", notes: [] }, { date: "09-Oct-25", topic: "Python Session 1", notes: [] }, { date: "10-Oct-25", topic: "Python Session 2", notes: [] }, { date: "17-Oct-25", topic: "Python Session 3", notes: [] }, { date: "23-Oct-25", topic: "Python Session 4", notes: [] }, { date: "24-Oct-25", topic: "Python Session 5", notes: [] }, { date: "07-Nov-25", topic: "FASTAPI-Session", notes: [] }, { date: "14-Nov-25", topic: "SHELL Session", notes: [] },
    ];
    
    const examData = [
        { type: "Assignment - SQL, NoSQL", announced: "15-Aug-25", due: "05-Sep-25", materials: [{ text: "Paper", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/Assignment_1.pdf" }] },
        { type: "Assignment - Web", announced: "06-Sep-25", due: "05-Oct-25", materials: [{ text: "Paper", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/Assignment_2.pdf" }] },
        { type: "Assignment - Python - Part 1", announced: "09-Oct-25", due: "20-Oct-25", materials: [] },
        { type: "Assignment - Python - Part 2", announced: "21-Oct-25", due: "10-Nov-25", materials: [] },
        { type: "SQL Practice", announced: "05-Aug-25", due: "10-Aug-25", materials: [{ text: "Paper", url: "https://tinted-rumba-8c6.notion.site/Worked-out-Examples-2456a6248bf6800fa6cfc3e688a58ddd" }] },
        { type: "QUIZ 1", announced: "29-Aug-25", due: "29-Aug-25", materials: [{ text: "Paper & Key", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/sai11101989/sai11101989.github.io/main/Course/SSD_Monsoon2025/SSD_Quiz1_Key.pdf" }] },
        { type: "QUIZ 2", announced: "31-Oct-25", due: "31-Oct-25", materials: [] },
        { type: "MID Exam", announced: "26-Sep-25", due: "28-Sep-25", materials: [{ text: "Paper", url: "https://sai11101989.github.io/Course/SSD_Monsoon2025/MID.html" }] },
        { type: "Final Project", announced: "01-Sep-25", due: "02-Dec-25", materials: [] },
        { type: "Class Activity - Profile Page", announced: "26-Aug-25", due: "26-Aug-25", materials: [{ text: "Submission", url: "https://forms.office.com/r/6kpKVY0eqP" }] },
        { type: "Class Activity - JavaScript", announced: "10-Oct-25", due: "10-Oct-25", materials: [] },
        { type: "Class Activity - Python", announced: "14-Nov-25", due: "14-Nov-25", materials: [] },
    ];

    // --- FUNCTIONS ---
    function populateTable(tableId, data, fields) {
        const tableBody = document.getElementById(tableId);
        if (!tableBody) return;

        const today = new Date();
        const todayString = `${String(today.getDate()).padStart(2, '0')}-${today.toLocaleString('en-US', { month: 'short' })}-${String(today.getFullYear()).slice(-2)}`;

        data.forEach(item => {
            const row = document.createElement('tr');
            
            // Highlight today's date
            if (item.date === todayString) {
                row.classList.add('today');
            }

            fields.forEach(field => {
                const cell = document.createElement('td');
                if (field === 'materials' || field === 'notes') {
                    if (item[field].length === 0) {
                        cell.textContent = '---';
                    } else {
                        item[field].forEach(link => {
                            const a = document.createElement('a');
                            a.href = link.url;
                            a.textContent = link.text;
                            a.target = "_blank";
                            cell.appendChild(a);
                        });
                    }
                } else if (item.cancelled && field === 'topic') {
                    cell.innerHTML = `<span class="cancelled">${item.topic}</span><br><small>${item.reason || ''}</small>`;
                } else {
                    cell.textContent = item[field];
                }
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    }

    function updateClock() {
        const clockDiv = document.getElementById('live-clock');
        if (clockDiv) {
            const now = new Date();
            clockDiv.textContent = now.toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }
    }
    
    // --- INITIALIZATION ---
    populateTable('schedule-body', scheduleData, ['date', 'topic', 'materials']);
    populateTable('lab-body', labData, ['date', 'topic', 'notes']);
    populateTable('exams-body', examData, ['type', 'announced', 'due', 'materials']);
    
    updateClock();
    setInterval(updateClock, 60000); // Update clock every minute
});