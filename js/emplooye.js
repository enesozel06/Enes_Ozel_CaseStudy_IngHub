import { LitElement, html, css } from 'lit';

class EmployeeList extends LitElement {
    firstUpdated() {
        // Başlangıçta çalıştırılacak fonksiyon
        this.displayEmployees();
        this.setupPagination();
        this.loadEmployees();
      }
  static styles = css`
    /* CSS kodlarınız burada */
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    font-weight: 200;
}

body {
    background-color: #f7f7f7;
    color: #333;
    padding: 20px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow-x: auto; /* Enable horizontal scrolling if content overflows */
    transition: all 0.3s ease; /* Smooth resizing */
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.employee-table {
    width: 100%;
    border-collapse: collapse;
}

.employee-table th,
.employee-table td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.employee-table th {
    background-color: #f4f4f4;
    color: #ff5722;
    font-size: 13px !important;
}
.employee-table td {
    font-size: 15px;
}

.employee-table tr:hover {
    background-color: #f1f1f1;
}

.edit-btn,
.delete-btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
}

.edit-btn:hover,
.delete-btn:hover {
    color: #ff5722;
}

.empHeader {
    display: block;
    text-align: left;
    margin-bottom: 20px;
    color: #ff5722;
    font-size: 20px;
    font-weight: bold;
}
.HeaderH1 {
    font-size: 18px;
    display: flex;
    font-weight: bold;
    align-items: left;
    margin-bottom: auto;
    margin-top: auto;
}
.headerIMG {
    display: flex;
    align-items: left;
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
header {
    padding: 0.5em;
    background-color: white;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.boldText{
    font-weight: bold;
}
.headerLeft {
    display: flex;
    align-items: left;
    margin-bottom: auto;
    margin-top: auto;
}
.headerRight {
    display: flex;
    align-items: right;
    margin-bottom: auto;
    margin-top: auto;
}
.addEmployeeButton {
    background-color: #fff;
    color: #ff5722;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: auto;
    margin-top: auto;
}
.employesHeading2 {
    font-size: 16px;
    margin-bottom: auto;
    margin-top: auto;
    color: #ff5722;
    margin-right: 15px;
}
.topToTable {
    max-width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    padding: 15px;
    overflow-x: auto; /* Enable horizontal scrolling if content overflows */
    transition: all 0.3s ease; /* Smooth resizing */
    background-color: #f7f7f7;
    display: flex;
    justify-content:space-between;
}

.topheading {
    display: flex;
    margin-bottom: 2px;
    color: #b1b1b1;
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    position: relative;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
}
.modalHeading {
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
    color: #ff5722;
}
input[type="text"],[type="email"],[type="number"],[type="date"],[type="password"],[type="file"],[type="tel"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
.addBtn{
    background-color: #ff5722;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
}
/* Confirmation Modal Styles */
.confirmation-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.confirmation-modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    text-align: center;
    position: relative;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}


.confirmation-modal-content p {
    margin-bottom: 20px;
    font-size: 14px;
    color: #555;
}

.confirmation-buttons {
    display: block;
}

.confirm-btn {
    background-color: #ff5722;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    display: block;
    width: 100%;
    margin-bottom: 10px;
}
.cancel-btn {
    background-color: #fff;
    color: #6062fd;
    border: 1px solid #6062fd;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    display: block;
    width: 100%;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    cursor: pointer;
    color: #ff5722;
}
.confirmHeading{
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 20px;
    color: #ff5722;
}
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.pagination button {
    background-color: transparent;
    border: none;
    padding: 8px 12px;
    margin: 0 2px;
    cursor: pointer;
    border-radius: 100px;
    font-size: 14px;
    color: #333;
    transition: background-color 0.3s;
}
.pagination button:hover {
    background-color: #f1f1f1;
}

.pagination button.active {
    background-color: #ff5722;
    color: white;
}

.pagination button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
}

.pagination span {
    padding: 8px 12px;
    color: #888;
}
.language-selection {
    display: flex;
    align-items: center;
    margin-left: 20px;
}

.language-flag {
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-left: 10px;
    transition: transform 0.3s;
}

.language-flag:hover {
    transform: scale(1.1);
}
.iconCss {
    width: 30px;
    height: 30px;
    font-size: 20px !important;
    margin-right:auto;
    margin-left: auto;
    color: #ff5722;
}

.icons {
    display: flex;
    justify-content: start;
}
/* Responsive Adjustments */
@media (max-width: 1024px) {
    .container {
        padding: 15px; /* Reduce padding on medium screens */
    }
}
@media (max-width: 768px) {
    .container {
        padding: 10px; /* Further reduce padding on small screens */
    }
    .topToTable {
        padding: 10px; /* Further reduce padding on small screens */
    }
    .empHeader {
        margin-left: auto;
        margin-right: auto;
    }
    .topheading {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .headerLeft {
        display: flex;
        align-items: center;
        margin-right: auto;
        margin-left: auto;
    }
    .headerRight {
        display: flex;
        align-items:center;
        margin-left: auto;
        margin-right: auto;
    }
    header {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    .employee-table th, .employee-table td {
        padding: 10px;
    }

    .modal-content {
        width: 100%;
    }

    .confirmation-modal-content {
        width: 100%;
    }
}

@media (max-width: 480px) {
    .empHeader {
        margin-left: 0;
    }
    .container {
        padding: 5px; /* Minimal padding on very small screens */
    }
    .topToTable {
        padding: 5px; /* Further reduce padding on small screens */
    }
    .topheading {
        display: block;
        text-align: center;
    }
    .headerLeft {
        display: flex;
        align-items: center;
        margin-right: auto;
        margin-left: auto;
    }
    .headerRight {
        display: flex;
        align-items: center;
    }
    .headerIMG {
        width: 25px;
        height: 25px;
    }

    .language-flag {
        width: 20px;
        height: 20px;
    }

    .employee-table th, .employee-table td {
        font-size: 13px;
        padding: 8px;
    }

    .modal-content {
        padding: 15px;
    }

    .addBtn {
        padding: 8px 12px;
        font-size: 14px;
    }

    .confirm-btn, .cancel-btn {
        padding: 8px 15px;
        font-size: 14px;
    }
}
  
  `;

  static properties = {
    employees: { type: Array },
    currentPage: { type: Number },
    currentLanguage: { type: String },
    editEmployeeId: { type: Number },
    confirmationAction: { type: Function },
    rowsPerPage: { type: Number },
  };

  constructor() {
    super();
    this.employees = [];
    this.currentPage = 1;
    this.currentLanguage = 'en';
    this.editEmployeeId = null;
    this.rowsPerPage = 10;
    this.loadEmployees();
  }

  loadEmployees() {
    if (!localStorage.getItem('employees')) {
      const employees = [];
      for (let i = 1; i <= 100; i++) {
        employees.push({
          id: i,
          firstName: 'Ahmet',
          lastName: 'Sourtimes',
          dateOfEmployment: '09/23/2022',
          dateOfBirth: '09/23/2022',
          phone: '+(90) 532 123 45 67',
          email: `ahmet${i}@sourtimes.org`,
          department: 'analytics',
          position: 'junior',
        });
      }
      localStorage.setItem('employees', JSON.stringify(employees));
    }
    this.employees = JSON.parse(localStorage.getItem('employees')) || [];
  }

  render() {
    return html`
      <!-- HTML kodlarınız burada -->
      <h6 class="topheading" data-lang="employeeList">Employee List (Table View)</h6>
      <header>
        <div class="headerLeft">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E0BAQFow-6H6DCFeA/company-logo_100_100/company-logo_100_100/0/1701856035724/ing_hubs_turkiye_logo?e=1738195200&amp;v=beta&amp;t=lNELhXKmYu1diBV79lRz-TeSa2UEmTW7XKWJf7mzBTY"
            class="headerIMG"
            alt="ING Hubs Türkiye logosu"
          />
          <h1 class="HeaderH1" data-lang="header">ING</h1>
        </div>
        <div class="headerRight">
          <h2 class="employesHeading2" data-lang="employees">& Employees</h2>
          <button class="addEmployeeButton" @click="${this.openModal}" data-lang="addNew"> + Add New</button>

          <div class="language-selection">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"
              alt="Turkish Flag"
              class="language-flag"
              title="Türkçe"
              @click="${() => this.changeLanguage('tr')}"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="English Flag"
              class="language-flag"
              title="English"
              @click="${() => this.changeLanguage('en')}"
            />
          </div>
        </div>
      </header>

      <div class="topToTable">
        <h1 class="empHeader" data-lang="employeeListHeader">Employee List</h1>
        <div class="icons">
          <i class="fa fa-bars iconCss"></i>
          <i class="fa fa-table iconCss"></i>
        </div>
      </div>

      <div class="container">
        <table class="employee-table">
          <thead>
            <tr>
              <th><input id="fullSelect" type="checkbox" @click="${this.selectAllCheckboxes}"></th>
              <th data-lang="firstName">First Name</th>
              <th data-lang="lastName">Last Name</th>
              <th data-lang="dateOfEmployment">Date of Employment</th>
              <th data-lang="dateOfBirth">Date of Birth</th>
              <th data-lang="phone">Phone</th>
              <th data-lang="email">Email</th>
              <th data-lang="department">Department</th>
              <th data-lang="position">Position</th>
              <th data-lang="actions">Actions</th>
            </tr>
          </thead>
          <tbody id="employee-table-body"></tbody>
        </table>
        <div id="pagination" class="pagination"></div>

        <!-- Employee Add Modal -->
        <div class="modal" id="employeeModal">
          <div class="modal-content">
            <span class="close" @click="${this.closeModal}">&times;</span>
            <h2 class="modalHeading" data-lang="addEmployee">Add Employee</h2>
            <form id="employeeForm">
              <label for="firstName" data-lang="firstName">First Name:</label>
              <input type="text" id="firstName" required /><br />

              <label for="lastName" data-lang="lastName">Last Name:</label>
              <input type="text" id="lastName" required /><br />

              <label for="dateOfEmployment" data-lang="dateOfEmployment">Date of Employment:</label>
              <input type="date" id="dateOfEmployment" required /><br />

              <label for="dateOfBirth" data-lang="dateOfBirth">Date of Birth:</label>
              <input type="date" id="dateOfBirth" required /><br />

              <label for="phone" data-lang="phone">Phone:</label>
              <input type="text" id="phone" required /><br />

              <label for="email" data-lang="email">Email:</label>
              <input type="email" id="email" required /><br />

              <label for="department" data-lang="department">Department:</label>
              <select id="department" required>
                <option value="Analytics" data-lang="analytics">Analytics</option>
                <option value="Tech" data-lang="tech">Tech</option>
              </select>

              <label for="position" data-lang="position">Position:</label>
              <select id="position" required>
                <option value="Junior" data-lang="junior">Junior</option>
                <option value="Medior" data-lang="medior">Medior</option>
                <option value="Senior" data-lang="senior">Senior</option>
              </select><br />

              <button type="button" class="addBtn" @click="${this.addEmployee}" data-lang="add">Add</button>
            </form>
          </div>
        </div>

        <!-- Edit Employee Modal -->
        <div class="modal" id="editEmployeeModal">
          <div class="modal-content">
            <span class="close" @click="${this.closeEditModal}">&times;</span>
            <h2 class="modalHeading" data-lang="editEmployee">Edit Employee</h2>
            <form id="editEmployeeForm">
              <label for="editFirstName" data-lang="firstName">First Name:</label>
              <input type="text" id="editFirstName" required /><br />

              <label for="editLastName" data-lang="lastName">Last Name:</label>
              <input type="text" id="editLastName" required /><br />

              <label for="editDateOfEmployment" data-lang="dateOfEmployment">Date of Employment:</label>
              <input type="date" id="editDateOfEmployment" required /><br />

              <label for="editDateOfBirth" data-lang="dateOfBirth">Date of Birth:</label>
              <input type="date" id="editDateOfBirth" required /><br />

              <label for="editPhone" data-lang="phone">Phone:</label>
              <input type="text" id="editPhone" required /><br />

              <label for="editEmail" data-lang="email">Email:</label>
              <input type="email" id="editEmail" required /><br />

              <label for="editDepartment" data-lang="department">Department:</label>
              <select id="editDepartment" required>
                <option value="Analytics" data-lang="analytics">Analytics</option>
                <option value="Tech" data-lang="tech">Tech</option>
              </select><br />

              <label for="editPosition" data-lang="position">Position:</label>
              <select id="editPosition" required>
                <option value="Junior" data-lang="junior">Junior</option>
                <option value="Medior" data-lang="medior">Medior</option>
                <option value="Senior" data-lang="senior">Senior</option>
              </select><br />

              <button type="button" class="addBtn" @click="${this.updateEmployee}" data-lang="UpdateBtn">Update</button>
            </form>
          </div>
        </div>

        <!-- Confirmation Modal -->
        <div class="confirmation-modal" id="confirmationModal">
          <div class="confirmation-modal-content">
            <span class="close" @click="${this.closeConfirmationModal}">&times;</span>
            <h2 class="confirmHeading" data-lang="areyousure">Are you sure?</h2>
            <p id="confirmationMessage" data-lang="Selectedemployee" >Selected employee record will be deleted.</p>
            <div class="confirmation-buttons">
              <button class="confirm-btn" data-lang="Proceed"  @click="${this.proceedAction}">Proceed</button>
              <button class="cancel-btn" data-lang="Cancel" @click="${this.closeConfirmationModal}">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    
    `;
  }

  static translations = {
    en: {
      employeeList: "Employee List (Table View)",
      header: "ING",
      employees: "& Employees",
      addNew: "+ Add New",
      employeeListHeader: "Employee List",
      firstName: "First Name",
      lastName: "Last Name",
      dateOfEmployment: "Date of Employment",
      dateOfBirth: "Date of Birth",
      phone: "Phone",
      email: "Email",
      department: "Department",
      position: "Position",
      actions: "Actions",
      analytics: "Analytics",
      tech: "Tech",
      junior: "Junior",
      medior: "Medior",
      senior: "Senior",
      addEmployee: "Add Employee",
      editEmployee: "Edit Employee",
      dateOfEmployment: "Date of Employment",
      dateOfBirth: "Date of Birth",
      phone: "Phone",
      email: "Email",
      UpdateBtn: "Update",
      areyousure: "Are you sure?",
      Selectedemployee: "Selected employee record will be deleted.",
      Proceed: "Proceed",
      Cancel: "Cancel",
    },
    tr: {
      employeeList: "Çalışan Listesi (Tablo Görünümü)",
      header: "İNG",
      employees: "& Çalışanlar",
      addNew: "+ Yeni Ekle",
      employeeListHeader: "Çalışan Listesi",
      firstName: "Ad",
      lastName: "Soyad",
      dateOfEmployment: "İşe Başlama Tarihi",
      dateOfBirth: "Doğum Tarihi",
      phone: "Telefon",
      email: "E-posta",
      department: "Departman",
      position: "Pozisyon",
      actions: "İşlemler",
      analytics: "Analitik",
      tech: "Teknoloji",
      junior: "Çaylak",
      medior: "Orta Düzey",
      senior: "Kıdemli",
      addEmployee: "Çalışan Ekle",
      editEmployee: "Çalışan Düzenle",
      dateOfEmployment: "İşe Başlama Tarihi",
      dateOfBirth: "Doğum Tarihi",
      phone: "Telefon",
      email: "E-posta",
      UpdateBtn: "Güncelle",
      areyousure: "Emin misiniz?",
      Selectedemployee: "Seçilen çalışan kaydı silinecektir.",
      Proceed: "Devam Et",
      Cancel: "İptal",
    }
  };

  formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  displayEmployees() {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const tableBody = this.shadowRoot.getElementById('employee-table-body');
    tableBody.innerHTML = '';

    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    const employeesToDisplay = employees.slice(startIndex, endIndex);

    employeesToDisplay.forEach(employee => {
      const row = document.createElement('tr');
      row.setAttribute('data-id', employee.id);

      const departmentTranslation = EmployeeList.translations[this.currentLanguage][employee.department.toLowerCase()] || employee.department;
      const positionTranslation = EmployeeList.translations[this.currentLanguage][employee.position.toLowerCase()] || employee.position;

      const formattedDateOfEmployment = this.formatDate(employee.dateOfEmployment);
      const formattedDateOfBirth = this.formatDate(employee.dateOfBirth);

      row.innerHTML = `
        <td><input type="checkbox"></td>
        <td class="boldText">${employee.firstName}</td>
        <td class="boldText">${employee.lastName}</td>
        <td>${formattedDateOfEmployment}</td>
        <td>${formattedDateOfBirth}</td>
        <td>${employee.phone}</td>
        <td>${employee.email}</td>
        <td>${departmentTranslation}</td>
        <td>${positionTranslation}</td>
        <td>
          <button class="edit-btn">✏️</button>
          <button class="delete-btn">🗑️</button>
        </td>
      `;
      tableBody.appendChild(row);

      row.querySelector('.edit-btn').addEventListener('click', () => this.openEditModal(employee));
      row.querySelector('.delete-btn').addEventListener('click', () => {
        this.openConfirmationModal(
          `Selected employee record of ${employee.firstName} ${employee.lastName} will be deleted.`,
          () => this.deleteEmployee(employee.id, row)
        );
      });
    });
  }

  setupPagination() {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const totalPages = Math.ceil(employees.length / this.rowsPerPage);

    const paginationContainer = this.shadowRoot.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const prevButton = document.createElement('button');
    prevButton.innerHTML = '&#8249;';
    prevButton.disabled = this.currentPage === 1;
    prevButton.addEventListener('click', () => {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.displayEmployees();
        this.setupPagination();
      }
    });
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= this.currentPage - 2 && i <= this.currentPage + 2)) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = i === this.currentPage ? 'active' : '';
        pageButton.addEventListener('click', () => {
          this.currentPage = i;
          this.displayEmployees();
          this.setupPagination();
        });
        paginationContainer.appendChild(pageButton);
      } else if (i === this.currentPage - 3 || i === this.currentPage + 3) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        paginationContainer.appendChild(ellipsis);
      }
    }

    const nextButton = document.createElement('button');
    nextButton.innerHTML = '&#8250;';
    nextButton.disabled = this.currentPage === totalPages;
    nextButton.addEventListener('click', () => {
      if (this.currentPage < totalPages) {
        this.currentPage++;
        this.displayEmployees();
        this.setupPagination();
      }
    });
    paginationContainer.appendChild(nextButton);
  }

  deleteEmployee(employeeId, row) {
    let employees = JSON.parse(localStorage.getItem('employees'));
    employees = employees.filter(employee => employee.id !== employeeId);
    localStorage.setItem('employees', JSON.stringify(employees));
    row.remove();
    this.displayEmployees();
    this.setupPagination();
  }

  openConfirmationModal(message, action) {
    this.shadowRoot.getElementById('confirmationMessage').textContent = message;
    this.confirmationAction = action;
    this.shadowRoot.getElementById('confirmationModal').style.display = 'flex';
  }

  closeConfirmationModal() {
    this.shadowRoot.getElementById('confirmationModal').style.display = 'none';
    this.confirmationAction = null;
  }

  proceedAction() {
    if (this.confirmationAction) {
      this.confirmationAction();
    }
    this.closeConfirmationModal();
  }

  openModal() {
    this.shadowRoot.getElementById('employeeModal').style.display = 'flex';
  }

  closeModal() {
    this.shadowRoot.getElementById('employeeModal').style.display = 'none';
  }

  addEmployee() {
    const firstName = this.shadowRoot.getElementById('firstName').value;
    const lastName = this.shadowRoot.getElementById('lastName').value;
    const dateOfEmployment = this.shadowRoot.getElementById('dateOfEmployment').value;
    const dateOfBirth = this.shadowRoot.getElementById('dateOfBirth').value;
    const phone = this.shadowRoot.getElementById('phone').value;
    const email = this.shadowRoot.getElementById('email').value;
    const department = this.shadowRoot.getElementById('department').value.toLowerCase();
    const position = this.shadowRoot.getElementById('position').value.toLowerCase();

    const formattedDateOfEmployment = dateOfEmployment;
    const formattedDateOfBirth = dateOfBirth;

    const newEmployee = {
      id: Date.now(),
      firstName,
      lastName,
      dateOfEmployment: formattedDateOfEmployment,
      dateOfBirth: formattedDateOfBirth,
      phone,
      email,
      department,
      position
    };

    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(newEmployee);
    localStorage.setItem('employees', JSON.stringify(employees));

    this.closeModal();
    this.displayEmployees();
    this.setupPagination();
  }

  openEditModal(employee) {
    this.shadowRoot.getElementById('editEmployeeModal').style.display = 'flex';
    this.shadowRoot.getElementById('editFirstName').value = employee.firstName;
    this.shadowRoot.getElementById('editLastName').value = employee.lastName;

    this.shadowRoot.getElementById('editDateOfEmployment').value = this.convertToInputDateFormat(employee.dateOfEmployment);
    this.shadowRoot.getElementById('editDateOfBirth').value = this.convertToInputDateFormat(employee.dateOfBirth);

    this.shadowRoot.getElementById('editPhone').value = employee.phone;
    this.shadowRoot.getElementById('editEmail').value = employee.email;
    this.shadowRoot.getElementById('editDepartment').value = employee.department.charAt(0).toUpperCase() + employee.department.slice(1);
    this.shadowRoot.getElementById('editPosition').value = employee.position.charAt(0).toUpperCase() + employee.position.slice(1);
    this.editEmployeeId = employee.id;
  }

  convertToInputDateFormat(dateString) {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  }

  closeEditModal() {
    this.shadowRoot.getElementById('editEmployeeModal').style.display = 'none';
  }

  updateEmployee() {
    this.openConfirmationModal(
      'Yaptığınız değişiklikleri kaydetmek istediğinizden emin misiniz?',
      () => {
        const firstName = this.shadowRoot.getElementById('editFirstName').value;
        const lastName = this.shadowRoot.getElementById('editLastName').value;
        const dateOfEmployment = this.shadowRoot.getElementById('editDateOfEmployment').value;
        const dateOfBirth = this.shadowRoot.getElementById('editDateOfBirth').value;
        const phone = this.shadowRoot.getElementById('editPhone').value;
        const email = this.shadowRoot.getElementById('editEmail').value;
        const department = this.shadowRoot.getElementById('editDepartment').value.toLowerCase();
        const position = this.shadowRoot.getElementById('editPosition').value.toLowerCase();

        const formattedDateOfEmployment = this.formatDate(dateOfEmployment);
        const formattedDateOfBirth = this.formatDate(dateOfBirth);

        let employees = JSON.parse(localStorage.getItem('employees')) || [];
        employees = employees.map(employee => {
          if (employee.id === this.editEmployeeId) {
            return { ...employee, firstName, lastName, dateOfEmployment: formattedDateOfEmployment, dateOfBirth: formattedDateOfBirth, phone, email, department, position };
          }
          return employee;
        });
        localStorage.setItem('employees', JSON.stringify(employees));

        this.closeEditModal();
        this.displayEmployees();
        this.setupPagination();
      }
    );
  }

  changeLanguage(language) {
    this.currentLanguage = language;

    const elements = this.shadowRoot.querySelectorAll("[data-lang]");
    elements.forEach(element => {
      const key = element.getAttribute("data-lang");
      if (EmployeeList.translations[language][key]) {
        element.textContent = EmployeeList.translations[language][key];
      }
    });

    this.displayEmployees();
  }
}

customElements.define('employee-list', EmployeeList);
