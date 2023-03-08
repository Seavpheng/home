 
import {tran} from './bankaccount';
(function() { 
     
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
        btn.onclick = tran.addNewAccount; 

        const btndebit = document.getElementById("btnDebit");
        btndebit.onclick = tran.debitTransaction;

        const btndepo = document.getElementById("btnDepo");
        btndepo.onclick = tran.depositTransaction;

        const btnSaveDebit = document.getElementById("btnSaveDebit");
        btnSaveDebit.onclick = tran.saveDebit;

        const btnSaveDeposit= document.getElementById("btnSaveDeposit");
        btnSaveDeposit.onclick = tran.saveDeposit;
    };
})();
