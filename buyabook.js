function sendBooks(){
    let cs = 'https://drive.google.com/drive/folders/1hqE4krvFdEYLp_vTpvvjNNbbvM3Z6IEc?usp=sharing'
    let chemical = 'https://drive.google.com/drive/folders/1b1X27Gt80_rb4ZXq3ooFLJUcf5XQa-Jt?usp=sharing'
    let petroleum = 'https://drive.google.com/drive/folders/12hBKJVhn2B3R8XZ1Ot0L6ssqTgJW2Sc0?usp=sharing'
    let ece = 'https://drive.google.com/drive/folders/1GoYltNOO46cmaOY6PA2G6cW8svkVuOaI?usp=sharing'
    let mechanical = 'https://drive.google.com/drive/folders/1r5Yw6OvO9HpmvvQt1Sc1zRYKMxEwZ0F2?usp=sharing'
    let civil = 'https://drive.google.com/drive/folders/13BhOnk1-W9oI_dPq4PFgdX6twGwyFq16?usp=sharing'
    let class11 = 'https://drive.google.com/drive/folders/1o_UgsvxlemhiO7mbgK_zORn5dk2wlW2O?usp=sharing'
    let class12 = 'https://drive.google.com/drive/folders/11hc5UWsPAYw3N0kmeuo3TMm0PivUxXAb?usp=sharing'
    let k;
    console.log(document.getElementById("branch").value)
    let a=document.getElementById("branch").value;
    if(a=="cs")
        k=cs;
    else
    if(a=="chemical")
        k=chemical
        else if(a=="petroleum")
        k=petroleum
        else if(a=="ece")
        k=ece
        else if(a=="mechanical")
        k=mechanical
        else if(a=="civil")
        k=civil
        else if(a=="class11")
        k=class11
        else if(a=="class12")
        k=class12
    var node = document.createElement("LI");                 // Create a <li> node
    var node1 = document.createElement("a"); 
    node1.setAttribute('href',k);
    node1.innerText = k;
    node.appendChild(node1);                              // Append the text to <li>
    document.getElementById("bookList").appendChild(node); 
    
}