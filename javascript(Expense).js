//selectors
const input = document.querySelector("#name");
const cal = document.querySelector("#cal");
const amount = document.querySelector("#amount");
const addbtn = document.querySelector("#add");
const table =  document.querySelector(".tableExp");


//Event-listners
addbtn.addEventListener("click",addexpense);
table.addEventListener("click",trdelete);


//functions
if(input.value==null || cal.value==null || amount.value==null)
{
    alert("pls enter expense detaisl first");
}
function addexpense(event){
    //tr-list -> row of tr
    const trlist = document.createElement("tr");
    trlist.classList.add("tr-list");

    //td-list-1 - name of expense
    const tdlist1 = document.createElement("td");
    tdlist1.innerText=input.value;
    tdlist1.classList.add("td-list-1");
    trlist.appendChild(tdlist1);

    //td-list-2 - cal
    const tdlist2 = document.createElement("td");
    tdlist2.innerText=cal.value;
    tdlist2.classList.add("td-list-2");
    trlist.appendChild(tdlist2);

    //td-list-3 - amount
    const tdlist3 = document.createElement("td");
    tdlist3.innerText=amount.value;
    tdlist3.classList.add("td-list-3");
    trlist.appendChild(tdlist3);

    //td-list-4 - button
    const tdlist4 = document.createElement("button");
    tdlist4.innerHTML='<i class="fas fa-times"></i>';
    tdlist4.classList.add("td-list-4");
    trlist.appendChild(tdlist4);

    table.appendChild(trlist);

    input.value="";
    cal.value="";
    amount.value="";
}
function trdelete(e)
{
    const trname = e.target;
    if(trname.classList[0] === "td-list-4")
    {
        const item = trname.parentElement;

        item.remove();
    }
}