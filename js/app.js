const mainEl = document.querySelector(".main");
const passwordEl = document.createElement("input");

passwordEl.classList.add("password");
passwordEl.setAttribute("placeholder", 'Create password');
passwordEl.addEventListener('keypress', (e) => {
    e.preventDefault();
})

passwordEl.addEventListener('focus', () => {
    navigator.clipboard.writeText(passwordEl.value);
})

const copyButton = document.createElement('button');
copyButton.classList.add('password__button');
copyButton.innerText = 'Copy';
copyButton.addEventListener('click', (e) => {
    passwordEl.select();
    passwordEl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordEl.value);
})

const generateEl = document.createElement('button')
generateEl.classList.add('password__button');
generateEl.innerText = 'Generate';
generateEl.addEventListener('click', (e) => {
    let password = generatePassword(12);
    passwordEl.value = password;
})

// function for generation
function generatePassword (passwordLength){
    const numberChars = "0123456789";
    const upperChars = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdfghigklmnopqrstuvwxyz";
    const symbolChars = "!@#$%^&*()_-+=?";
    const chars = numberChars + upperChars + lowerChars + symbolChars;
    
    let randomStr = '';

    for(let i = 0; i < passwordLength; i++){
        let randomNum = Math.floor(Math.random() * chars.length);
        randomStr += chars[randomNum];
    }

    return randomStr;
}


mainEl.appendChild(passwordEl);
mainEl.appendChild(copyButton);
mainEl.appendChild(generateEl);