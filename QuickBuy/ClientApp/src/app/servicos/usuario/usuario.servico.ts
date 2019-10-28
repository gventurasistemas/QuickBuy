import { Injectable, Inject } from "@angular/core";//Usar o angular
import { HttpClient, HttpHeaders } from "@angular/common/http";//HttpClient = fazer requisições Web, HttpHeaders = Configurar o cabeçalho da requisição
import { Observable } from "rxjs";//padrão Observable
import { Usuario } from "../../model/usuario";//Onde fica a classe usuario

//Configurar a classe como algo que pode ser injetavel em outras classes
@Injectable({
    providedIn:"root" //root = raiz = Todas as classes do projeto Angular pode injetar
})
export class UsuarioServico {
    private _baseURL: string;
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

    // @Inject('BASE_URL') baseURL = Consigo pegar o endereço raiz do site
    constructor(private http: HttpClient, @Inject('BASE_URL') baseURL: string) {
        this._baseURL = baseURL;
    }
    public limparSessao() {
        sessionStorage.setItem("usuario-autenticado", "");
        this._usuario = null;
    }
    //cabeçalho json
    get headers(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application/json');
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
        return this.http.post<Usuario>(this._baseURL + "api/usuario/VerificarUsuario", body, { headers });
       // return this.http.post < Usuario>("http://localhost:8080/api/usuario", body, { headers });
    }


    public cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
        //cabeçalho json
        //const headers = new HttpHeaders().set('content-type', 'application/json');

        //json
        //var body = {
        //    email: usuario.email,
        //    senha: usuario.senha,
        //    nome: usuario.nome,
        //    sobreNome: usuario.sobreNome
        //}        
        return this.http.post<Usuario>(this._baseURL + "api/usuario", JSON.stringify(usuario), { headers: this.headers });
        
    }



}
