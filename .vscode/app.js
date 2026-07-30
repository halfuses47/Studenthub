// Student Hub SPA Application Logic

// Initial Data & State
const DEFAULT_STUDENT = {
  fullName: "Jihan Patel",
  studentId: "2026-CS-042",
  department: "Computer Engineering",
  division: "Division-1",
  semester: "Semester 3",
  academicYear: "2026-2027",
  email: "jihan.patel@student.edu",
  phone: "+1 (555) 389-2041",
  cgpa: 3.84,
  creditsEarned: 52,
  attendance: "94.5%",
  bio: "Passionate Computer Engineering student interested in Full Stack Web Development, Cloud Systems, and AI.",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=JihanPatel"
};

const TIMETABLE_DATA = {
  Monday: [
    { time: "09:10 AM - 10:00 AM", code: "ITUE203", name: "Web Development Frameworks (T)", room: "Room 621", faculty: "MKP", type: "code" },
    { time: "10:10 AM - 11:00 AM", code: "ITUE203", name: "Web Development Frameworks (T)", room: "Room 621", faculty: "MKP", type: "code" },
    { time: "11:10 AM - 12:10 PM", code: "BREAK", name: "Morning Refreshment Break", room: "Cafeteria", faculty: "-", type: "break" },
    { time: "12:10 PM - 01:10 PM", code: "ITUC201", name: "Fundamentals of Computer Networks", room: "Room 621", faculty: "UMC", type: "code" },
    { time: "01:10 PM - 02:10 PM", code: "CSUC201", name: "Data Structures & Algorithms", room: "Room 621", faculty: "NMB", type: "code" },
    { time: "02:10 PM - 02:20 PM", code: "BREAK", name: "Short Recess", room: "Campus Lawn", faculty: "-", type: "break" },
    { time: "02:20 PM - 04:20 PM", code: "LAB-CS01", name: "Computer Networks & Web Dev Lab", room: "Lab 304", faculty: "MKP / UMC", type: "lab" }
  ],
  Tuesday: [
    { time: "09:10 AM - 11:00 AM", code: "LAB-OOP", name: "Object Oriented Programming Lab", room: "Lab 201", faculty: "MKP", type: "lab" },
    { time: "11:10 AM - 12:10 PM", code: "BREAK", name: "Morning Break", room: "Cafeteria", faculty: "-", type: "break" },
    { time: "12:10 PM - 01:10 PM", code: "ITUE203", name: "Web Development Frameworks", room: "Room 621", faculty: "MKP", type: "code" },
    { time: "01:10 PM - 02:10 PM", code: "CEUE203", name: "Object Oriented Programming (T)", room: "Room 621", faculty: "UMC", type: "code" },
    { time: "02:10 PM - 02:20 PM", code: "BREAK", name: "Short Recess", room: "Campus Lawn", faculty: "-", type: "break" },
    { time: "02:20 PM - 03:20 PM", code: "HSUV201", name: "Human Values & Ethics", room: "Seminar Hall", faculty: "HS", type: "code" },
    { time: "03:20 PM - 04:20 PM", code: "HSUV201", name: "Human Values & Ethics", room: "Seminar Hall", faculty: "HS", type: "code" }
  ],
  Wednesday: [
    { time: "09:10 AM - 10:00 AM", code: "CSUC201", name: "Data Structures & Algorithms", room: "Room 621", faculty: "NMB", type: "code" },
    { time: "10:10 AM - 11:00 AM", code: "ITUC201", name: "Fundamentals of Computer Networks", room: "Room 621", faculty: "UMC", type: "code" },
    { time: "11:10 AM - 12:10 PM", code: "BREAK", name: "Morning Refreshment Break", room: "Cafeteria", faculty: "-", type: "break" },
    { time: "12:10 PM - 02:10 PM", code: "LAB-DS", name: "Data Structures Practical Lab", room: "Lab 102", faculty: "NMB", type: "lab" },
    { time: "02:10 PM - 02:20 PM", code: "BREAK", name: "Short Recess", room: "Campus Lawn", faculty: "-", type: "break" },
    { time: "02:20 PM - 04:20 PM", code: "MINI-PROJ", name: "Guided Mini Project Work", room: "Lab 305", faculty: "MKP", type: "lab" }
  ],
  Thursday: [
    { time: "09:10 AM - 11:00 AM", code: "LAB-FCN", name: "Computer Networks Practical Lab", room: "Lab 304", faculty: "UMC", type: "lab" },
    { time: "11:10 AM - 12:10 PM", code: "BREAK", name: "Lunch Break", room: "Canteen", faculty: "-", type: "break" },
    { time: "12:10 PM - 01:10 PM", code: "CEUE203", name: "Object Oriented Programming", room: "Room 621", faculty: "UMC", type: "code" },
    { time: "01:10 PM - 02:10 PM", code: "ITUE203", name: "Web Development Frameworks", room: "Room 621", faculty: "MKP", type: "code" },
    { time: "02:10 PM - 02:20 PM", code: "BREAK", name: "Short Recess", room: "Campus Lawn", faculty: "-", type: "break" },
    { time: "02:20 PM - 04:20 PM", code: "TUTORIAL", name: "Problem Solving Session", room: "Room 621", faculty: "NMB", type: "code" }
  ],
  Friday: [
    { time: "09:10 AM - 10:00 AM", code: "ITUC201", name: "Fundamentals of Computer Networks", room: "Room 621", faculty: "UMC", type: "code" },
    { time: "10:10 AM - 11:00 AM", code: "CSUC201", name: "Data Structures & Algorithms", room: "Room 621", faculty: "NMB", type: "code" },
    { time: "11:10 AM - 12:10 PM", code: "BREAK", name: "Friday Prayer / Lunch Break", room: "Cafeteria", faculty: "-", type: "break" },
    { time: "12:10 PM - 02:10 PM", code: "LAB-AI", name: "AI & Data Analytics Workshop", room: "Auditorium", faculty: "Guest", type: "lab" },
    { time: "02:10 PM - 02:20 PM", code: "BREAK", name: "Recess", room: "Lawn", faculty: "-", type: "break" },
    { time: "02:20 PM - 04:20 PM", code: "CLUB-ACT", name: "Coding Club & Hackathon Practice", room: "Lab 304", faculty: "Student Leads", type: "code" }
  ],
  Saturday: [
    { time: "09:10 AM - 11:00 AM", code: "SEMINAR", name: "Industry Expert Guest Lecture Series", room: "Main Auditorium", faculty: "Guest Speakers", type: "code" },
    { time: "11:10 AM - 12:10 PM", code: "BREAK", name: "Break", room: "Cafeteria", faculty: "-", type: "break" },
    { time: "12:10 PM - 02:10 PM", code: "PROJECT", name: "Capstone & Open Source Mentorship", room: "Innovation Lab", faculty: "All Mentors", type: "lab" }
  ]
};

const RESULTS_DATA = [
  { semester: "Semester 3 (Current)", code: "ITUE203", name: "Web Development Frameworks", credits: 4, grade: "A+", gradePoint: 10.0, status: "Ongoing" },
  { semester: "Semester 3 (Current)", code: "ITUC201", name: "Fundamentals of Computer Networks", credits: 4, grade: "A", gradePoint: 9.0, status: "Ongoing" },
  { semester: "Semester 3 (Current)", code: "CSUC201", name: "Data Structures & Algorithms", credits: 4, grade: "A+", gradePoint: 10.0, status: "Ongoing" },
  { semester: "Semester 3 (Current)", code: "CEUE203", name: "Object Oriented Programming", credits: 3, grade: "A", gradePoint: 9.0, status: "Ongoing" },
  { semester: "Semester 3 (Current)", code: "HSUV201", name: "Human Values & Ethics", credits: 2, grade: "A+", gradePoint: 10.0, status: "Ongoing" },
  
  { semester: "Semester 2", code: "MATH201", name: "Linear Algebra & Calculus", credits: 4, grade: "A+", gradePoint: 10.0, status: "Passed" },
  { semester: "Semester 2", code: "CS102", name: "Digital Logic & Design", credits: 4, grade: "A", gradePoint: 9.0, status: "Passed" },
  { semester: "Semester 2", code: "CS103", name: "Python Programming & Applications", credits: 3, grade: "A+", gradePoint: 10.0, status: "Passed" },
  { semester: "Semester 2", code: "PHY101", name: "Engineering Physics & Lab", credits: 4, grade: "B+", gradePoint: 8.0, status: "Passed" },

  { semester: "Semester 1", code: "CS101", name: "Introduction to Computer Science", credits: 4, grade: "A+", gradePoint: 10.0, status: "Passed" },
  { semester: "Semester 1", code: "EE101", name: "Basic Electrical Engineering", credits: 4, grade: "A", gradePoint: 9.0, status: "Passed" },
  { semester: "Semester 1", code: "ENG101", name: "Technical Communication & Skills", credits: 3, grade: "A+", gradePoint: 10.0, status: "Passed" }
];

const EVENTS_DATA = [
  {
    id: 1,
    title: "Global AI & FullStack Hackathon 2026",
    category: "Hackathon",
    date: "August 12-14, 2026",
    time: "09:00 AM - 06:00 PM",
    venue: "Main Auditorium & Innovation Lab",
    description: "48-hour intense coding challenge. Build cutting-edge AI web apps with cash prizes up to $5,000!",
    seats: 45,
    banner: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Web Development Frameworks Workshop",
    category: "Workshop",
    date: "July 28, 2026",
    time: "02:00 PM - 05:00 PM",
    venue: "Computer Lab 304",
    description: "Master modern UI architecture, state management, and real-time APIs with hands-on live code.",
    seats: 20,
    banner: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Annual Tech Fest - InnoVison 2026",
    category: "Cultural & Tech",
    date: "September 05-07, 2026",
    time: "10:00 AM - 09:00 PM",
    venue: "Campus Ground & Amphitheater",
    description: "Robotics arena, esports tournament, keynote speeches, cultural music night, and tech expos.",
    seats: 300,
    banner: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Cloud Native & DevOps Bootcamp",
    category: "Seminar",
    date: "August 02, 2026",
    time: "10:30 AM - 01:30 PM",
    venue: "Seminar Hall 2",
    description: "Learn Docker, Kubernetes, CI/CD pipelines, and cloud server deployment from Senior DevOps Engineers.",
    seats: 80,
    banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  }
];

class StudentHubApp {
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem("student_hub_user")) || DEFAULT_STUDENT;
    this.registeredEvents = JSON.parse(localStorage.getItem("student_hub_events")) || [1];
    this.feedbackHistory = JSON.parse(localStorage.getItem("student_hub_feedback")) || [
      { date: "2026-07-15", category: "Faculty Teaching", rating: 5, comment: "Prof. MKP explains Web Development Frameworks exceptionally well!", status: "Reviewed" }
    ];
    this.selectedDay = "Monday";
    this.selectedStar = 5;

    this.init();
  }

  init() {
    this.updateUserUI();
    this.bindNavigation();
    this.bindAuthEvents();
    this.bindProfileEvents();
    this.bindTimetableEvents();
    this.bindResultsEvents();
    this.bindFeedbackEvents();
    this.bindEventsEvents();

    this.renderTimetable();
    this.renderResults();
    this.renderFeedbackHistory();
    this.renderEvents();
    
    // Start Live Clock
    this.startLiveClock();
  }

  updateUserUI() {
    document.querySelectorAll(".user-name-display").forEach(el => el.textContent = this.currentUser.fullName);
    document.querySelectorAll(".user-id-display").forEach(el => el.textContent = this.currentUser.studentId);
    document.querySelectorAll(".user-dept-display").forEach(el => el.textContent = this.currentUser.department);
    document.querySelectorAll(".user-cgpa-display").forEach(el => el.textContent = this.currentUser.cgpa.toFixed(2));
    
    const avatars = document.querySelectorAll(".user-avatar-display");
    avatars.forEach(img => {
      img.src = this.currentUser.avatar;
      img.alt = this.currentUser.fullName;
    });

    // Populate profile form values
    const profName = document.getElementById("profName");
    const profEmail = document.getElementById("profEmail");
    const profPhone = document.getElementById("profPhone");
    const profBio = document.getElementById("profBio");

    if (profName) profName.value = this.currentUser.fullName;
    if (profEmail) profEmail.value = this.currentUser.email;
    if (profPhone) profPhone.value = this.currentUser.phone;
    if (profBio) profBio.value = this.currentUser.bio;
  }

  bindNavigation() {
    const navItems = document.querySelectorAll(".nav-item[data-view]");
    navItems.forEach(item => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const viewId = item.getAttribute("data-view");
        this.navigateTo(viewId);
      });
    });
  }

  navigateTo(viewId) {
    // Hide all views
    document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));
    
    // Deactivate nav links
    document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));

    // Activate target view & link
    const targetView = document.getElementById(`view-${viewId}`);
    const targetNav = document.querySelector(`.nav-item[data-view="${viewId}"]`);

    if (targetView) targetView.classList.add("active");
    if (targetNav) targetNav.classList.add("active");

    // Update Header Title
    const titleElem = document.getElementById("pageTitle");
    const descElem = document.getElementById("pageDesc");

    const titles = {
      dashboard: { title: "Student Overview", desc: "Welcome back to your academic portal!" },
      profile: { title: "Student Profile", desc: "View and edit your personal & academic details" },
      timetable: { title: "Weekly Class Timetable", desc: "Interactive schedule matrix & lab sessions" },
      results: { title: "Academic Results & Transcript", desc: "Semester performance, GPA breakdown & credits" },
      feedback: { title: "Course & Campus Feedback", desc: "Share your experience and rate campus facilities" },
      events: { title: "Campus Events & Registration", desc: "Upcoming workshops, tech fests, and hackathons" },
      login: { title: "Student Login", desc: "Sign in to access your student hub account" },
      register: { title: "Student Registration", desc: "Create your official student account" }
    };

    if (titles[viewId]) {
      if (titleElem) titleElem.textContent = titles[viewId].title;
      if (descElem) descElem.textContent = titles[viewId].desc;
    }
  }

  bindAuthEvents() {
    // Demo login button action
    const btnDemoLogin = document.getElementById("btnDemoLogin");
    if (btnDemoLogin) {
      btnDemoLogin.addEventListener("click", () => {
        document.getElementById("loginEmail").value = DEFAULT_STUDENT.email;
        document.getElementById("loginPassword").value = "password123";
        this.showToast("Demo credentials auto-filled!");
      });
    }

    // Login Form
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.showToast(`Welcome back, ${this.currentUser.fullName}!`);
        this.navigateTo("dashboard");
      });
    }

    // Register Form
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const fullName = document.getElementById("regFullName").value;
        const studentId = document.getElementById("regStudentId").value;
        const email = document.getElementById("regEmail").value;
        const dept = document.getElementById("regDept").value;

        this.currentUser.fullName = fullName;
        this.currentUser.studentId = studentId;
        this.currentUser.email = email;
        this.currentUser.department = dept;

        localStorage.setItem("student_hub_user", JSON.stringify(this.currentUser));
        this.updateUserUI();
        this.showToast("Account created successfully!");
        this.navigateTo("dashboard");
      });
    }

    // Avatar Selection in Register Form
    document.querySelectorAll("#avatarGrid .avatar-option").forEach(img => {
      img.addEventListener("click", () => {
        document.querySelectorAll("#avatarGrid .avatar-option").forEach(i => i.classList.remove("selected"));
        img.classList.add("selected");
        this.currentUser.avatar = img.src;
      });
    });
  }

  bindProfileEvents() {
    const profileForm = document.getElementById("profileForm");
    if (profileForm) {
      profileForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.currentUser.fullName = document.getElementById("profName").value;
        this.currentUser.email = document.getElementById("profEmail").value;
        this.currentUser.phone = document.getElementById("profPhone").value;
        this.currentUser.bio = document.getElementById("profBio").value;

        localStorage.setItem("student_hub_user", JSON.stringify(this.currentUser));
        this.updateUserUI();
        this.showToast("Profile details updated successfully!");
      });
    }
  }

  bindTimetableEvents() {
    // Day Pills
    const dayPills = document.querySelectorAll(".day-pill");
    dayPills.forEach(pill => {
      pill.addEventListener("click", () => {
        dayPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.selectedDay = pill.getAttribute("data-day");
        this.renderTimetable();
      });
    });

    // Timetable Search Filter
    const searchInput = document.getElementById("timetableSearch");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.renderTimetable(e.target.value.toLowerCase());
      });
    }

    // Add Class Modal
    const btnAddClass = document.getElementById("btnAddClass");
    const modalAddClass = document.getElementById("modalAddClass");
    const btnCloseModal = document.getElementById("btnCloseModal");

    if (btnAddClass && modalAddClass) {
      btnAddClass.addEventListener("click", () => modalAddClass.classList.add("active"));
    }
    if (btnCloseModal && modalAddClass) {
      btnCloseModal.addEventListener("click", () => modalAddClass.classList.remove("active"));
    }

    const formAddClass = document.getElementById("formAddClass");
    if (formAddClass) {
      formAddClass.addEventListener("submit", (e) => {
        e.preventDefault();
        const day = document.getElementById("newClassDay").value;
        const time = document.getElementById("newClassTime").value;
        const code = document.getElementById("newClassCode").value;
        const name = document.getElementById("newClassName").value;
        const room = document.getElementById("newClassRoom").value;
        const faculty = document.getElementById("newClassFaculty").value;

        if (!TIMETABLE_DATA[day]) TIMETABLE_DATA[day] = [];
        TIMETABLE_DATA[day].push({ time, code, name, room, faculty, type: "code" });

        modalAddClass.classList.remove("active");
        this.showToast(`Class added to ${day}!`);
        if (this.selectedDay === day) this.renderTimetable();
        formAddClass.reset();
      });
    }
  }

  renderTimetable(filter = "") {
    const container = document.getElementById("timetableContainer");
    if (!container) return;

    const list = TIMETABLE_DATA[this.selectedDay] || [];
    const filtered = list.filter(item => 
      item.code.toLowerCase().includes(filter) ||
      item.name.toLowerCase().includes(filter) ||
      item.faculty.toLowerCase().includes(filter) ||
      item.room.toLowerCase().includes(filter)
    );

    if (filtered.length === 0) {
      container.innerHTML = `
        <tr>
          <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 40px;">
            No classes scheduled matching "${filter}" on ${this.selectedDay}.
          </td>
        </tr>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => `
      <tr>
        <td style="font-weight: 600; color: var(--accent-blue); width: 180px;">${item.time}</td>
        <td>
          <span class="subject-tag tag-${item.type}">${item.code}</span>
          <div style="font-weight: 700; color: var(--text-main); font-size: 15px;">${item.name}</div>
        </td>
        <td style="color: var(--text-muted); font-weight: 500;">${item.room}</td>
        <td style="color: #a78bfa; font-weight: 600;">${item.faculty}</td>
        <td>
          <span style="font-size: 12px; padding: 4px 10px; border-radius: 20px; background: rgba(255,255,255,0.06); color: var(--text-muted);">
            ${item.type.toUpperCase()}
          </span>
        </td>
      </tr>
    `).join("");
  }

  bindResultsEvents() {
    const filterSem = document.getElementById("resultSemFilter");
    if (filterSem) {
      filterSem.addEventListener("change", (e) => {
        this.renderResults(e.target.value);
      });
    }
  }

  renderResults(semFilter = "All") {
    const container = document.getElementById("resultsContainer");
    if (!container) return;

    let list = RESULTS_DATA;
    if (semFilter !== "All") {
      list = list.filter(item => item.semester.startsWith(semFilter));
    }

    container.innerHTML = list.map(item => {
      let badgeClass = "grade-a";
      if (item.grade.startsWith("B")) badgeClass = "grade-b";
      if (item.grade.startsWith("C")) badgeClass = "grade-c";

      return `
        <tr>
          <td style="font-weight: 600; color: var(--accent-blue);">${item.code}</td>
          <td style="font-weight: 600; color: var(--text-main);">${item.name}</td>
          <td style="color: var(--text-muted);">${item.semester}</td>
          <td style="color: var(--text-muted); text-align: center;">${item.credits}</td>
          <td style="text-align: center;">
            <span class="grade-badge ${badgeClass}">${item.grade}</span>
          </td>
          <td style="font-weight: 700; color: var(--text-main); text-align: center;">${item.gradePoint.toFixed(1)}</td>
        </tr>
      `;
    }).join("");
  }

  bindFeedbackEvents() {
    // Star Rating click listener
    const starContainer = document.getElementById("starRating");
    if (starContainer) {
      const stars = starContainer.querySelectorAll("span");
      stars.forEach(star => {
        star.addEventListener("click", () => {
          this.selectedStar = parseInt(star.getAttribute("data-value"));
          stars.forEach(s => {
            if (parseInt(s.getAttribute("data-value")) <= this.selectedStar) {
              s.classList.add("active");
            } else {
              s.classList.remove("active");
            }
          });
        });
      });
    }

    // Submit Feedback Form
    const feedbackForm = document.getElementById("feedbackForm");
    if (feedbackForm) {
      feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const category = document.getElementById("feedbackCategory").value;
        const comment = document.getElementById("feedbackComment").value;
        const today = new Date().toISOString().split("T")[0];

        const newEntry = {
          date: today,
          category: category,
          rating: this.selectedStar,
          comment: comment,
          status: "Submitted"
        };

        this.feedbackHistory.unshift(newEntry);
        localStorage.setItem("student_hub_feedback", JSON.stringify(this.feedbackHistory));
        this.renderFeedbackHistory();
        this.showToast("Feedback submitted successfully! Thank you.");
        feedbackForm.reset();
      });
    }
  }

  renderFeedbackHistory() {
    const container = document.getElementById("feedbackHistoryContainer");
    if (!container) return;

    if (this.feedbackHistory.length === 0) {
      container.innerHTML = `<p style="color: var(--text-muted);">No feedback submitted yet.</p>`;
      return;
    }

    container.innerHTML = this.feedbackHistory.map(item => `
      <div style="padding: 16px; background: rgba(15,23,42,0.6); border: 1px solid var(--border-color); border-radius: var(--radius-md); margin-bottom: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="font-weight: 700; color: var(--accent-blue); font-size: 14px;">${item.category}</span>
          <span style="font-size: 12px; color: var(--text-dim);">${item.date}</span>
        </div>
        <div style="color: var(--accent-amber); font-size: 16px; margin-bottom: 6px;">
          ${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}
        </div>
        <p style="font-size: 13px; color: var(--text-muted); leading: 1.4;">${item.comment}</p>
        <div style="margin-top: 8px; text-align: right;">
          <span style="font-size: 11px; padding: 2px 8px; border-radius: 10px; background: rgba(16,185,129,0.15); color: var(--accent-green); font-weight: 600;">
            ${item.status}
          </span>
        </div>
      </div>
    `).join("");
  }

  bindEventsEvents() {
    // Delegate Event Registration
    const eventsContainer = document.getElementById("eventsContainer");
    if (eventsContainer) {
      eventsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-register-event")) {
          const eventId = parseInt(e.target.getAttribute("data-id"));
          if (!this.registeredEvents.includes(eventId)) {
            this.registeredEvents.push(eventId);
            localStorage.setItem("student_hub_events", JSON.stringify(this.registeredEvents));
            this.renderEvents();
            this.showToast("Event registration confirmed! Ticket generated.");
          }
        }
      });
    }
  }

  renderEvents() {
    const container = document.getElementById("eventsContainer");
    if (!container) return;

    container.innerHTML = EVENTS_DATA.map(event => {
      const isRegistered = this.registeredEvents.includes(event.id);
      return `
        <div class="glass-card event-card">
          <div class="event-banner" style="background-image: url('${event.banner}');">
            <span class="event-category-badge">${event.category}</span>
          </div>
          <h3 class="event-title">${event.title}</h3>
          <div class="event-meta">
            <div class="event-meta-item">📅 ${event.date} (${event.time})</div>
            <div class="event-meta-item">📍 ${event.venue}</div>
            <div class="event-meta-item">🎟️ ${event.seats} seats left</div>
          </div>
          <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 20px; flex: 1;">
            ${event.description}
          </p>
          <button class="btn-primary btn-register-event" data-id="${event.id}" ${isRegistered ? "disabled style='opacity:0.6; cursor:default; background:var(--accent-green);'" : ""}>
            ${isRegistered ? "✓ Registered" : "Register Now"}
          </button>
        </div>
      `;
    }).join("");
  }

  startLiveClock() {
    const clockElem = document.getElementById("liveClock");
    if (clockElem) {
      const update = () => {
        const now = new Date();
        clockElem.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      };
      update();
      setInterval(update, 1000);
    }
  }

  showToast(message) {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}

// Global App Initialization
document.addEventListener("DOMContentLoaded", () => {
  window.app = new StudentHubApp();
});
