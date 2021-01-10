const inputs = document.querySelectorAll('.container input');

function handleUpdate(){
    
    const suff = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}` , this.value + suff);
    console.log(this.name);
}
inputs.forEach(input =>input.addEventListener('change',handleUpdate));
inputs.forEach(input =>input.addEventListener('mousemove',handleUpdate));

