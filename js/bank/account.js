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

 