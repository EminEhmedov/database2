// // let promise= new Promise((resolve,reject)=>{
// // // resolve('data')
// // reject()
// // })


// // // console.log(promise);


// // promise.then((value)=>{
// // console.log(value);
// // }).catch(()=>{
// // console.log('xeta bas verib');
// // }).finally(()=>{
// //     console.log('salam');
// // })




// // try{

// //     const x=8
// //     x=9
// //     console.log(x);
// // }
// // catch(err){
// // alert(err)
// // }







// function GetUser(id){
//     console.log(`${id} li useri al`);


//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
// resolve({name:'Arif'})
//         },2000)
//     });



// }

// function GetKurs(username){
//     console.log(`${username} adli istifadecinin kurslarini getir`);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
// resolve(['JS','PHP','GO'])
//         },2000)
//     });
// }

// function GetComment(kurs){
//     console.log(`${kurs} adli kursa gelen yorumu getir`);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
// resolve('kurs bomba idi')
//         },2000)
//     });
// }

// // GetUser(1).then((user)=>{
// // // console.log(user);
// // GetKurs(user.name).then((kurs)=>{
// // GetComment(kurs[2]).then((yorum)=>{
// // console.log(yorum);
// // })
// // })
// // })



// async function YorumuGoster(){

//     let user=await GetUser(1)
//     let kurs= await GetKurs(user.name)
//     let yorum= await GetComment(kurs[2])
//     console.log(yorum);
// }


// YorumuGoster()






let btn =document.querySelector('button')
let ul1 =document.querySelector('#ul1');
let ul2 =document.querySelector('#ul2');
let ul3 =document.querySelector('#ul3');
let ul4 =document.querySelector('#ul4');
let table=document.querySelector('table')
// btn.addEventListener('click',(e)=>{
// let f=fetch('test.txt').then((response)=>{
// response.text().then((value)=>{
// h1.innerHTML=value
// })
// })

// let f=fetch('test.txt').then((response)=>{console.log(response.text().then((value)=>{
// h1.innerHTML=value
// }));})
// console.log(f);
// })


btn.addEventListener('click',()=>{
    
// let f=fetch('test.json').then((Response)=>{
//    Response.json().then((Array)=>{
// Array.forEach(element => {
//    ul.innerHTML+=`<li>${element.name}  ${element.ID} </li>`
// });
//    })
// })
// console.log(f);



let f=fetch('https://jsonplaceholder.typicode.com/posts').then((Response)=>{
Response.json().then((data)=>{
data.forEach(element => {
ul1.innerHTML+=`<li>${element.userId}</li>`
ul2.innerHTML+=`<li>${element.id}</li>`
ul3.innerHTML+=`<li>${element.title}</li>`
ul4.innerHTML+=`<li>${element.body}</li>`

});
})
})

tbl=''
for(let i=0 ;i<100 ;i++){
tbl+=`<tr>`
for(let i=0 ;i<4 ;i++){
tbl+=`<td value="${i}"> </td>`

}
tbl+=`</tr>`
}
let td=document.querySelector('table tr td')
table.innerHTML=tbl
let k=fetch('https://jsonplaceholder.typicode.com/photos').then((Response)=>{
Response.json().then((sekil)=>{
sekil.forEach(element => {
console.log(element.url);
if(td.value==0){
    td.innerHTML+=`<img src="${element.url}" alt="${element.title}">`
}
});
})
})
})



