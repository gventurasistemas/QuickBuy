import { Component } from '@angular/core';
import { Usuario } from '../../model/usuario';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    //Sintaxe de Bind

    public usuario;
    public usuarioAutenticado: boolean;

    constructor() {
        this.usuario = new Usuario();
    }
        
    entrar() {
        if (this.usuario.email == "teste@gmail.com.br" && this.usuario.senha == "abc123") {
            this.usuarioAutenticado = true;
            alert("Email: " + this.usuario.email + " Senha: " + this.usuario.senha);
        }
       
    }

    public emailTeste = "leo@teste.com";
    public senha = "abc123";
    public titulo = "Título adicionado";

    entrarButton(): void {
        alert("Entrar no sitema");
    }
}
