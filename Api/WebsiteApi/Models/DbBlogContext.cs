using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebsiteApi.Models
{
    public partial class DbBlogContext : DbContext
    {
        public DbBlogContext()
        {
        }

        public DbBlogContext(DbContextOptions<DbBlogContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Blog> Blog { get; set; }

       
    }
}
