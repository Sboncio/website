
let notInFolder = "pages/"
let inFolder = ""

let skills_scrolling = false;




if (window.location.href.indexOf("index") != -1 || window.location.href.split('/').length == 4) {
    notInFolder = "pages/"
    inFolder = ""
} else {
    notInFolder = ""
    inFolder = "../"
}


document.getElementById("heading").innerHTML = `
<a href="`+ inFolder + `index.html"> 
    <h1 class="Name">Samuel Asquith</h1>
</a>
<nav>
<ul>
    <li>
        <a href="`+ inFolder + `index.html">
            Home
        </a>
    </li>
    <li>
        <a href="`+ notInFolder + `Experience.html">
        Experience
        </a>
    </li>
    <li>
        <a href="`+ notInFolder + `skills.html">
            Skills
        </a>
    </li>
    <li>
        <a href="`+ notInFolder + `projects.html">
            Personal Projects
        </a>
    </li>
    <li>
        <a href="`+ notInFolder + `references.html">
            References
        </a>
    </li>
</ul> 
</nav>`

document.getElementById("footing").innerHTML = `
<p>
    This site is new and is likely to change frequently.
</p>
<a href="https://github.com/Sboncio">
    <i class="fa fa-github" style="font-size:36px; color:white" ></i>
</a>
<a href="https://www.linkedin.com/in/samuel-asquith-857384178/">
    <i class="fa fa-linkedin" style="font-size:36px; color:white"></i>          
</a>`


function skill_scroll() {

    if (skills_scrolling) {
        skills_scrolling = false;
        document.getElementById("skill_content").innerHTML = initial_skills;
        document.getElementById("scroll_button").innerHTML = "Scroll Skills"
    } else {
        skills_scrolling = true;
        document.getElementById("scroll_button").innerHTML = "Stop Scrolling"
        document.getElementById("skill_content").innerHTML = `
    <marquee width=100% height="60%" direction="up" scrollamount="12" behavior="sliding">
    <div class="skill_scroll">
        Programming Languages:<br />
                <br />
                C/C++<br />
                Python<br />
                Java<br />
                Javascript<br />
                MatLab<br />

                <br />
                <br />

                Frameworks:<br />
                <br/>
                Flask<br />
                Vue.js<br />
                React<br />
                TensorFlow<br />

                <br />
                <br />

                Web Technologies: <br />
                <br />
                AWS<br />
                Azure<br />
                GCP<br />

                <br />
                <br />
                  
                Other Skills:<br />
                <br />
                ROS (Robot Operating System)<br />
                SFML<br />
                Docker (Swarm/Compose)<br />
                SQL<br />
                Jenkins<br />
                Kubernetes<br />
                GNU/Linux (Debian,Ubuntu,Mint,Fedora,Arch)<br />
                Bash<br />
                Ansible<br />
                Box2D<br />
                Terraform<br />
                AWS<br />
                
                <br />
                <br />

                
            </div>
            </marquee>
                
    `
    }
}