import { Injectable } from "@angular/core";//Classe vai ser injetada
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UsuarioServico } from "../servicos/usuario/usuario.servico";

@Injectable({
    providedIn: 'root'
})
export class GuardaRotas implements CanActivate {
    constructor(private router: Router, private usuarioServico: UsuarioServico) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.usuarioServico.usuario_autenticado()) {
            return true;
        }
        
        var autenticado = sessionStorage.getItem("usuario-autenticado");
        if (autenticado == "1") {
            return true;
        }
        this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });//Volta para a tela entrar (login)
        return false;
    }

}
