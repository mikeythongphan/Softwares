using OneWitsCore.UnitOfWork;
using VisaInstantCore.Abstract.Repositories;
using VisaInstantCore.DataObjects;

namespace VisaInstantCore.Repositories
{
    public class FormEmploymentRepository : RepositoryBase<FormEmployment, long>, IFormEmploymentRepository
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public FormEmploymentRepository(IUnitOfWork context) : base(context)
        {
        }
    }
}
