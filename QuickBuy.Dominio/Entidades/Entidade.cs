using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {
        private List<string> _mensagensValidacao { get; set; }
        private List<string> mensagemValidacao
        {
            //?? -> verifica se _mensagensValidacao esta vazio
            //Se estiver vazio, antes de retornar , devolve uma instância de _mensagensValidacao, mesmo sendo vazia (_mensagensValidacao = new List<string>());
            get { return _mensagensValidacao ?? (_mensagensValidacao = new List<string>()); }
        }
        public abstract void Validate();
        public bool EhValido
        {
            get { return !mensagemValidacao.Any(); }
        }
        protected void LimparMensagensValidacao()
        {
            mensagemValidacao.Clear();
        }
        protected void AdicionarCritica(string mensagem)
        {
            mensagemValidacao.Add(mensagem);
        }
        public string ObterMensagensValidacao()
        {
            return string.Join(". ", mensagemValidacao);
        }
    }
}
