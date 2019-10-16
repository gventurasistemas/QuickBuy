using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Repositorio.Config
{
    public class UsuarioConfiguration : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            //Definindo chave primária
            builder.HasKey(u => u.Id);

            //Builder padrão Fluent
            builder
                .Property(u => u.Email)
                .IsRequired() //campo obrigatório
                .HasMaxLength(50); //Máximo de 50 caracteres

            builder
                .Property(u => u.Senha)
                .IsRequired() //campo obrigatório
                .HasMaxLength(400); //Máximo de 50 caracteres

            builder
               .Property(u => u.Nome)
               .IsRequired() //campo obrigatório
               .HasMaxLength(50); //Máximo de 50 caracteres

            builder
               .Property(u => u.SobreNome)
               .IsRequired() //campo obrigatório
               .HasMaxLength(50); //Máximo de 50 caracteres

            builder
               .HasMany(u => u.Pedidos)//um para muitos
               .WithOne(p => p.Usuario); //O pedido só pode ter um único usuário

        }
    }
}
