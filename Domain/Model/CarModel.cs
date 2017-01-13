using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Model
{
    public class CarModel
    {
        public int Id { get; set; }
        public int CarBrandId { get; set; }
        public string ModelName { get; set; }
        public int Year { get; set; }
        public bool IsActive { get; set; }
    }
}
