const ans=document.querySelectorAll(".questons");
ans.forEach((faq)=>{
    faq.addEventListener("click",()=>{
        const answer=faq.nextElementSibling;
        answer.classList.toggle("active");
    })
})