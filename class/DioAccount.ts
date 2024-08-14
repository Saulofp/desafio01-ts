export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = (depositValue: number): void => {
    if (this.validateStatus()) {
      this.balance += depositValue;
      console.log(`Você depositou ${depositValue} seu saldo é: ${this.balance}`);
    }
  };

  withdraw = (withdrawValue: number): void => {
    if (this.validateStatus() && withdrawValue <= this.balance) {
      this.balance -= withdrawValue;
      console.log(`Você sacou ${withdrawValue} seu saldo é: ${this.balance}`);
    } else {
      console.log('Saldo insuficiente ou conta inválida');
    }
  };

  setBalance = (newBalance: number): void => {
    if (this.validateStatus()) {
      this.balance = newBalance;
      console.log('Saldo atualizado com sucesso');
    }
  }; 

  getBalance = (): number => {
    return this.balance;
  };

  getBalanceView = (): void => {
    console.log(`Saldo atual: ${this.balance}`);
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  };
}
