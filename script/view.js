const students = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "marks": 85,
        "status": "Passed"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "marks": 72,
        "status": "Passed"
    },
    {
        "id": 3,
        "name": "Mark Taylor",
        "email": "mark.taylor@example.com",
        "marks": 48,
        "status": "Failed"
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "email": "emily.davis@example.com",
        "marks": 91,
        "status": "Passed"
    },
    {
        "id": 5,
        "name": "Michael Brown",
        "email": "michael.brown@example.com",
        "marks": 65,
        "status": "Passed"
    },
    {
        "id": 6,
        "name": "Sophia Wilson",
        "email": "sophia.wilson@example.com",
        "marks": 78,
        "status": "Passed"
    },
    {
        "id": 7,
        "name": "James Anderson",
        "email": "james.anderson@example.com",
        "marks": 42,
        "status": "Failed"
    },
    {
        "id": 8,
        "name": "Isabella Martinez",
        "email": "isabella.martinez@example.com",
        "marks": 88,
        "status": "Passed"
    },
    {
        "id": 9,
        "name": "William Garcia",
        "email": "william.garcia@example.com",
        "marks": 53,
        "status": "Passed"
    },
    {
        "id": 10,
        "name": "Olivia Lee",
        "email": "olivia.lee@example.com",
        "marks": 34,
        "status": "Failed"
    }
]
const tableBody = document.getElementById("student-table-body");
const searchInput = document.getElementById("search");

class View {
    constructor() {
        
    }
    row(d) {
        return `
            <tr>
                <td>${d.id}</td>
                <td>${d.name}</td>
                <td>${d.email}</td>
                <td>${d.marks}</td>
                <td>${d.status}</td>
            </tr>
        `
    }
    renderTable(data) {
        console.log("rendering table");
        tableBody.innerHTML = ""; // Clear previous data
        data.forEach(d => {
            tableBody.innerHTML += this.row(d);
        });
    }
    search(data) {
        searchInput.addEventListener("input", (event) => {
            const searchValue = data.filter(d => 
                d.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
                d.email.toLowerCase().includes(event.target.value.toLowerCase()) ||
                d.id.toString().includes(event.target.value.toLowerCase())
            )
            if (searchValue.length > 0) {
                this.renderTable(searchValue);
            }else {
                tableBody.innerHTML = `
                    <tr>
                        <td colspan="5" class="text-center">
                            <span class="h1 text-danger">No data found</span>
                        </td>
                    </tr>
                `
            }
            
            
        });
    }
}

const view = new View();
view.renderTable(students);
view.search(students);
