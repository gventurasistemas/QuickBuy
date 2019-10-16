using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Repositorio.Config
{
    public class ItemPedidoConfiguration : IEntityTypeConfiguration<ItemPedido>
    {
        public void Configure(EntityTypeBuilder<ItemPedido> builder)
        {
            //Definindo chave primária
            builder.HasKey(i => i.Id);

            //Builder padrão Fluent
            builder
              .Property(i => i.ProdutoId)
              .IsRequired();
            builder
               .Property(i => i.Quantidade)
               .IsRequired();
        }
    }
}
