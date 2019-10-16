using QuickBuy.Dominio.Contratos;
using QuickBuy.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Repositorio.Repositorios
{
    public class BaseRepositorio<TEntity> : IBaseRepositorio<TEntity> where TEntity : class
    {
        //protected, POR CONVENÇÃO USAMOS PRIMEIRA LETRA MAÍÚSCULA
        protected readonly QuickBuyContexto QuickBuyContexto;
        public BaseRepositorio(QuickBuyContexto quickBuyContexto)
        {
            //Passando para uma variável interna
            QuickBuyContexto = quickBuyContexto;
        }
        public void Adicionar(TEntity entity)
        {
            QuickBuyContexto.Set<TEntity>().Add(entity);
            QuickBuyContexto.SaveChanges();
        }

        public void Atualizar(TEntity entity)
        {
            QuickBuyContexto.Set<TEntity>().Update(entity);
            QuickBuyContexto.SaveChanges();
        }

        public TEntity ObterPorId(int id)
        {
            return QuickBuyContexto.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> ObterTodos()
        {
            return QuickBuyContexto.Set<TEntity>().ToList();
        }

        public void Remover(TEntity entity)
        {
            QuickBuyContexto.Set<TEntity>().Remove(entity);
            QuickBuyContexto.SaveChanges();
        }
        public void Dispose()
        {
            //Server para descartar o objeto da memória
            QuickBuyContexto.Dispose();
        }
    }
}
