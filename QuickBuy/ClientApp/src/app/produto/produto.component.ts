import { Component, OnInit } from "@angular/core";
import { Produto } from "../model/produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";

//usando o decorator component
@Component({
    selector: "app-produto",
    templateUrl: "./produto.component.html",
    styleUrls: ["./produto.component.css"]
})
export class ProdutoComponent implements OnInit {
    public produto: Produto
    public arquivoSelecionado: File;
    public ativar_spinner: boolean;
    public mensagem: string;
    constructor(private produtoServico: ProdutoServico) {

    }
    public inputChange(files: FileList) {
        this.arquivoSelecionado = files.item(0);
        //alert(this.arquivoSelecionado.name);
        this.ativar_spinner = true;
        this.produtoServico.enviarArquivo(this.arquivoSelecionado)
            .subscribe(
                nomeArquivo => {
                    this.produto.nomeArquivo = nomeArquivo;
                    alert("nome da imagem: " + this.produto.nomeArquivo);
                    console.log(nomeArquivo);
                    this.ativar_spinner = false;
                },
                e => {
                    console.log(e.error);
                    this.ativar_spinner = false;
                });
    }
    ngOnInit(): void {
        this.produto = new Produto();
    }
    public cadastrar() {
        this.produtoServico.cadastrar(this.produto)
            .subscribe(
                produtoJson => {
                    console.log(produtoJson);
                },
                e => {
                    console.log(e.error);
                }
        );
    }

}
