
const projects = [
    {
        name: "Working as banckend developer intern at PT Admin Pintar Kita",
        desc: "Using Nodejs framework to maintaining and develop CRUD operation and using MongoDB as database.",
        img: "img/goat.jpeg" 
    },
    {
        name: "Working as backend developer intern at PT Goshen Technology Indonesia (child of PT Rajawali Sinergi Group)",
        desc: "Working for 3 months as software developer using Golang, ReactJS and PostgreSQl ",
        img: "img/logo.png" 
    },
    {
        name: "Freelance/Side hustle",
        desc: "Making small amount of money on tiktok through streaming",
        img: "img/tiktok.png" 
    }
];


const container = document.getElementById('project-container');

projects.forEach(proj => {
    const cardHTML = `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow">
                <img src="${proj.img}" class="card-img-top" alt="${proj.name}" style="height:220px; object-fit:cover;">
                <div class="card-body">
                    <h5 class="card-title fw-bold text-dark">${proj.name}</h5>
                    <p class="card-text text-secondary">${proj.desc}</p>
                </div>
            </div>
        </div>
    `;
    container.innerHTML += cardHTML;
});


function showGreetings() {
    const hours = new Date().getHours();
    let greeting;
    
    if (hours < 12) greeting = "Good Morning!";
    else if (hours < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";
    
    alert(greeting + "\n\nThank you for visiting my portfolio. Have a great day!");
}