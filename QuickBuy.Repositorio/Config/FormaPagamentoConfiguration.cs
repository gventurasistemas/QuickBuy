using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.ObjetoDeValor;

namespace QuickBuy.Repositorio.Config
{
    public class FormaPagamentoConfiguration : IEntityTypeConfiguration<FormaPagamento>
    {
        public void Configure(EntityTypeBuilder<FormaPagamento> builder)
        {
            //Definindo chave primária
            builder.HasKey(f => f.Id);

            //Builder padrão Fluent
            builder
              .Property(f => f.Nome)
              .IsRequired()
              .HasMaxLength(50);
            builder
              .Property(f => f.Descricao)
              .IsRequired()
              .HasMaxLength(100);
        }
    }
}
