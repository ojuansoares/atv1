export default class Historico {
    private comprador: string;
    private compra: string;
    private pet: string;
    private valor: string;
    private id: number;

    constructor(id: number, comprador: string, compra: string, pet: string, valor: string) {
        this.comprador = comprador;
        this.id = id;
        this.compra = compra;
        this.pet = pet;
        this.valor = valor;
    }

    public get getId() {
        return this.id
    }
    public get getComprador() {
        return this.comprador
    }
    public get getCompra() {
        return this.compra
    }
    public get getPet() {
        return this.pet
    }
    public get getValor() {
        return this.valor
    }

    setComprador(novoComprador: string) {
        this.comprador = novoComprador;
    }
    setCompra(novaCompra: string) {
        this.compra = novaCompra;
    }
    setPet(novoPet: string) {
        this.pet = novoPet;
    }
    setValor(novoValor: string) {
        this.valor = novoValor;
    }
}