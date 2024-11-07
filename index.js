document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.querySelector('.name');
    const fullText = "John Lester Castillo";
    let typingIndex = 0;

    const typeText = () => {
        nameElement.style.width = 'auto';
        nameElement.textContent = fullText.substring(0, typingIndex);
        typingIndex++;
        if (typingIndex <= fullText.length) {
            setTimeout(() => {
                requestAnimationFrame(typeText);
            }, 100);
        } else {
            setTimeout(deleteText, 3000);
        }
    };

    const deleteText = () => {
        typingIndex = fullText.length;
        const deleteInterval = setInterval(() => {
            nameElement.textContent = fullText.substring(0, typingIndex);
            typingIndex--;
            if (typingIndex < 0) {
                clearInterval(deleteInterval);
               
                setTimeout(() => {
                    typingIndex = 0; 
                    requestAnimationFrame(typeText);
                }, 1000);
            }
        }, 100);
    };

    requestAnimationFrame(typeText);
});



// ===============================================================
// SWITCH NAVIGATION PAGE

function nav(target) {
    
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const targetPage = document.getElementById(target);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// ===============================================================
// CONTACT FORM SUBMISSION

document.getElementById('form').addEventListener('submit', function(event) {
    let val = document.getElementById('email');
    let form = this;
    let email = val.value.trim(); 
    var gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; 

    if (email === '') {
        val.style.borderColor = 'red';
        event.preventDefault();
        form.action = 'index.html';
    } 

    else if (!gmailRegex.test(email)) {
      alert("Enter a valid gmail");
        val.style.borderColor = '#ffa500';
        event.preventDefault(); 
        form.action = 'index.html';
    }

    else {
        form.action = 'https://api.web3forms.com/submit';
        
        setTimeout(function() {
            val.value = '';
        }, 100);  
    }
});

function close() {
    let x = document.getElementById('contact-form');
    let val = document.getElementById('email');
    if (x) {
        x.style.display = 'none';
        val.value = '';
    }
}

document.getElementById('close').addEventListener('click', close);

function opencontact() {
    let x = document.getElementById('contact-form');
    x.style.display = 'block';
}