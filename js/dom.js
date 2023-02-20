// 
document.getElementById('btn-background').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friends');
    for (const friend of friends) {
        friend.style.backgroundColor = 'yellow';
    }
});

document.getElementById('btn-3').addEventListener('click',function(){
    const friend=document.getElementById('Third');
    friend.style.backgroundColor='aqua';
})


document.getElementById('add-new').addEventListener('click',function(){
    const friendsContainer=document.getElementById('friends');
    const friend =document.createElement('div');
    friend.innerHTML=`
    <h2 class="friend">Friend-7</h2>
    <p>something new<p/>`
    friendsContainer.appendChild(friend);
})
// document.getElementById('add-new').addEventListener('click', function() {
//     const friendsContainer = document.querySelector('.friends');
//     const friend = document.createElement('div');
//     friend.innerHTML = `
//         <h2 class="friend">Friend-7</h2>
//         <p>something new</p>
//     `;
//     friendsContainer.appendChild(friend);
// });
