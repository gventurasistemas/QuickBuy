using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Repositorio.Config
{
    public class ProdutoConfiguration : IEntityTypeConfiguration<Produto>
    {
        public void Configure(EntityTypeBuilder<Produto> builder)
        {
            //Definindo chave primária
            builder.HasKey(p => p.Id);

            //Builder padrão Fluent
            builder
              .Property(p => p.Nome)
              .IsRequired()
              .HasMaxLength(50);
            builder
               .Property(p => p.Descricao)
               .IsRequired()
               .HasMaxLength(400);
            builder
                .Property(p => p.Preco)
                .IsRequired();
        }
    }
}
