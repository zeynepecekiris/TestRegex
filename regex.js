// const username="canbozsdjfh";

// const pattern=/^[a-z]{6,10}$/;

// // let sonuc =pattern.test(username);
// // console.log(sonuc);


// // if(sonuc)

// //     {
// //         console.log("basarili");
// //     }
// // else
// // {
// //     console.log("basarisiz");
// // }

// let sonuc=username.search(pattern);
// console.log(sonuc);

const form=document.querySelector(".signupForm");
const message=document.querySelector(".message");


form.addEventListener("submit", e=>{
    e.preventDefault();
    const username=form.username.value;
    const usernamepattern=/^[a-z]{6,10}$/;

    if(usernamepattern.test(username))
    {
          Message.textContent="basarili"
    }

    else{
        message.textContent="lutfen bla bla"


    }

})