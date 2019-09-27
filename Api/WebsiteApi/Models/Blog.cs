using System;
using System.Collections.Generic;

namespace WebsiteApi.Models
{
    public partial class Blog
    {
        public int Id { get; set; }
        public byte[] Images { get; set; }
        public string Name { get; set; }
        public DateTime? Publishdate { get; set; }
        public string Texts { get; set; }
    }
}
