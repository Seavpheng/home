class Account{
    static accountInfoList =[];
    #account;
    #deposit;
    constructor(account, deposit){
        this.#account = account;
        this.#deposit = parseFloat( deposit);
    } 
    getAccount(){
        return this.#account;
    } 

    getDeposit(){
        return this.#deposit;
    }

    saveDebit(amount){
        this.#deposit -= parseFloat(amount);
    }

    saveDeposit(amount){
        this.#deposit += parseFloat(amount);
    }
} 

const addNewAccount = function(){ 
    var accountname = document.getElementById("txtAccountName");
    var acc = accountname.value;

    var deposit = document.getElementById("txtDeposit");
    var dep = parseFloat( deposit.value);

    if(!isNaN(dep)){
        var account = new Account(acc, dep); 
        Account.accountInfoList.push(account);

        acc.value ="";
        deposit.value ="";
        reload();
    }
}

function reload(){
    var result = document.getElementById("txtResult");
    result.value = "";
    Account.accountInfoList.forEach(x=>{
        result.value += "Account Name: "+ x.getAccount() +"\t" + "Deposit: "+ x.getDeposit() + "\r\n";
    });
}

const debitTransaction = function(){ 
    if( Account.accountInfoList.length === 0 || Account.accountInfoList.length === null){
        return;
    }
    debitTran.hidden=false; 
    createAcc.hidden = true; 

    const select = document.getElementById("debitAccount");
    select.innerHTML ="";
    Account.accountInfoList.forEach(x=>{ 
        var opt = document.createElement('option');
            opt.value = x.getAccount();
            opt.innerHTML = x.getAccount();
            select.appendChild(opt); 
    });  
}

const depositTransaction = function(){ 

    if( Account.accountInfoList.length === 0 || Account.accountInfoList.length === null){
        return;
    }

    depoTran.hidden=false; 
    createAcc.hidden = true; 

    const select = document.getElementById("depoAccount"); 
    select.innerHTML ="";
    Account.accountInfoList.forEach(x=>{  
        var opt = document.createElement('option');
            opt.value = x.getAccount();
            opt.innerHTML = x.getAccount();
            select.appendChild(opt); 
    });  
}
  
const saveDebit =function(){
    let debit_amount = document.getElementById('debit_amount'); 
    const select = document.getElementById("debitAccount");  
    let account = Account.accountInfoList.find(x=>x.getAccount() == select.value);
    account.saveDebit(debit_amount.value);  

    debit_amount.value="";


    reload();

    debitTran.hidden= true;
    createAcc.hidden = false;  
}

const saveDeposit =function(){
    let depo_amount = document.getElementById('depo_amount'); 
    const select = document.getElementById("depoAccount");  
    let account = Account.accountInfoList.find(x=>x.getAccount() == select.value);
    account.saveDeposit(depo_amount.value);  

    depo_amount.value =""; 
    reload();

    depoTran.hidden= true;
    createAcc.hidden = false; 
}

let debitTran = null;
let depoTran = null;
let createAcc =null;
window.onload = function()
{
    createAcc= document.getElementById("createAcc");
    createAcc.hidden=false;

    debitTran = document.getElementById("debitTran"); 
    debitTran.hidden=true; 

    depoTran = document.getElementById("depoTran"); 
    depoTran.hidden=true; 

    const btn = document.getElementById("btnCreate");
    btn.onclick = addNewAccount; 

    const btndebit = document.getElementById("btnDebit");
    btndebit.onclick = debitTransaction;

    const btndepo = document.getElementById("btnDepo");
    btndepo.onclick = depositTransaction;

    const btnSaveDebit = document.getElementById("btnSaveDebit");
    btnSaveDebit.onclick = saveDebit;

    const btnSaveDeposit= document.getElementById("btnSaveDeposit");
    btnSaveDeposit.onclick = saveDeposit;
}