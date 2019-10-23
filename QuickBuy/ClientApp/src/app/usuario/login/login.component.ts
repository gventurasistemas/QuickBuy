import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioServico } from '../../servicos/usuario/usuario.servico';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
        
    public usuario;
    public usuarioAutenticado: boolean;
    public returnUrl: string;
    public mensagem: string;
    private ativar_spinner: boolean;

    constructor(private router: Router, private activateRouter: ActivatedRoute, private usuarioServico: UsuarioServico) {
        this.usuario = new Usuario();
        this.returnUrl = this.activateRouter.snapshot.queryParams['returnUrl'];//Pega a Url
    }

    ngOnInit(): void {
        this.returnUrl = this.activateRouter.snapshot.queryParams['returnUrl'];
    }

    entrar() {
        this.ativar_spinner = true;

        //subscribe = inscrição (padrão de projeto Observable)
        this.usuarioServico.verificarUsuario(this.usuario)
            .subscribe(
                usuario_json => {
                    //essa linha será executada no caso de retorno sem erros
                    //var usuarioRetorno: Usuario;
                    //usuarioRetorno = data;
                   
                    //sessionStorage.setItem("email-usuario", usuarioRetorno.email);
                    this.usuarioServico.usuario = usuario_json;
                                       
                    //alert(this.returnUrl);
                    if (this.returnUrl == null) {
                        this.router.navigate(['/']);
                    } else {
                        this.router.navigate([this.returnUrl]);
                    }
                    console.log(usuario_json);
                },
                err => {
                    console.log(err.error);
                    this.mensagem = err.error;
                    this.ativar_spinner = false;
                }
            );

        //if (this.usuario.email == "teste@gmail.com.br" && this.usuario.senha == "abc123") {
        //    sessionStorage.setItem("usuario-autenticado", "1");
        //    this.router.navigate([this.returnUrl]);
        //    this.usuarioAutenticado = true;
        //    alert("Email: " + this.usuario.email + " Senha: " + this.usuario.senha);
        //}
       
    }

    public emailTeste = "leo@teste.com";
    public senha = "abc123";
    public titulo = "Título adicionado";

    entrarButton(): void {
        alert("Entrar no sitema");
    }
}
