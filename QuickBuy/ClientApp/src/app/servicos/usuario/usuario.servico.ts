import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../model/usuario";

@Injectable({
    providedIn:"root" //root = raiz = Todas as classes do projeto Angular pode injetar
})
export class UsuarioServico {
    private baseURL: string;
    private _usuario: Usuario;    

    set usuario(usuario: Usuario) {
        sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
        this._usuario = usuario;
    }
    get usuario(): Usuario {
        let usuario_json = sessionStorage.getItem("usuario-autenticado");
        this._usuario = JSON.parse(usuario_json);
        return this._usuario;
    }
    public usuario_autenticado(): boolean {
        return this._usuario != null && this._usuario.email != "" && this._usuario.senha != "";
    }

    constructor(private http: HttpClient, @Inject('BASE_URL') baseURL: string) {
        this.baseURL = baseURL;
    }
    public limparSessao() {
        sessionStorage.setItem("usuario-autenticado", "");
        this._usuario = null;
    }
    

    public verificarUsuario(usuario: Usuario): Observable<Usuario> {
        //cabeçalho json
        const headers = new HttpHeaders().set('content-type', 'application/json');

        //json
        var body = {
            email: usuario.email,
            senha: usuario.senha
        }
        //this.baseURL = raiz do site que pode ser : http://www.quickbuy.com/
        return this.http.post<Usuario>(this.baseURL + "api/usuario/VerificarUsuario", body, { headers });
       // return this.http.post < Usuario>("http://localhost:8080/api/usuario", body, { headers });
    }

}
