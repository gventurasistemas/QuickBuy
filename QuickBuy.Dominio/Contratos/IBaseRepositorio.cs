using System;
using System.Collections.Generic;

namespace QuickBuy.Dominio.Contratos
{
    //Interface IBaseRepositorio que herda de outra interface( classe IDisposable), onde TEntity é uma classe
    public interface IBaseRepositorio<TEntity> : IDisposable where TEntity : class
    {
        void Adicionar(TEntity entity);
        TEntity ObterPorId(int id);
        IEnumerable<TEntity> ObterTodos();
        void Atualizar(TEntity entity);
        void Remover(TEntity entity);

    }
}
