import { Component } from "@angular/core"

//usando o decorator component
@Component({
    selector: "app-produto",
    template:"<html><body>{{ obterNome() }}</body></html>"

})
export class ProdutoComponent {

    public nome: string;
    public liberadoParaVenda: boolean;

    public obterNome() {
        return "Samsung Teste";
    }

}
