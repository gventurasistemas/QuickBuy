using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Contexto;

namespace QuickBuy.Repositorio.Repositorios
{
    //Herda de BaseRepositorio e de IPedidoRepositorio
    public class PedidoRepositorio : BaseRepositorio<Pedido>, IPedidoRepositorio
    {
        //base(quickBuyContexto) = Banco de dados que passa para o do  QuickBuyContexto quickBuyContexto (esta no lado esquerdo)
        public PedidoRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {
        }
    }
}
