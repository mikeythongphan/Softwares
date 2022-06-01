using OneWitsCore.UnitOfWork;
using VisaInstantCore.Abstract.Repositories;
using VisaInstantCore.DataObjects;

namespace VisaInstantCore.Repositories
{
    public class FormVisaFianceRepository : RepositoryBase<FormVisaFiance, long>, IFormVisaFianceRepository
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public FormVisaFianceRepository(IUnitOfWork context) : base(context)
        {
        }
    }
}
